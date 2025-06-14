import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Supabase URL and/or Anon Key are not set in environment variables.");
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Rate limiting logic - Temporarily commented out for testing
    /*
    const { data: rateLimitData, error: rateLimitError } = await supabase
      .from('rate_limits')
      .select('*')
      .eq('ip_address', ipAddress)
      .single();

    if (rateLimitError && rateLimitError.code !== 'PGRST116') { // PGRST116 means no rows found
      console.error("Supabase rate limit fetch error:", rateLimitError);
      return NextResponse.json({ error: "An error occurred while checking rate limits." }, { status: 500 });
    }

    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    
    let newCallCount = 1;
    let newBlockedUntil = null;

    if (rateLimitData) {
      if (rateLimitData.blocked_until && new Date(rateLimitData.blocked_until) > now) {
        return NextResponse.json({ error: "Too many requests. Please try again after 24 hours." }, { status: 429 });
      }

      if (new Date(rateLimitData.last_call_at) > oneHourAgo) {
        newCallCount = rateLimitData.call_count + 1;
      } else {
        newCallCount = 1;
      }

      if (newCallCount > 3) {
        newBlockedUntil = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        await supabase.from('rate_limits').upsert({ ip_address: ipAddress, call_count: newCallCount, last_call_at: now.toISOString(), blocked_until: newBlockedUntil.toISOString() }, { onConflict: 'ip_address' });
        return NextResponse.json({ error: "Too many requests. Please try again after 24 hours." }, { status: 429 });
      }

      await supabase.from('rate_limits').upsert({ ip_address: ipAddress, call_count: newCallCount, last_call_at: now.toISOString(), blocked_until: null }, { onConflict: 'ip_address' });

    } else {
      await supabase.from('rate_limits').insert({ ip_address: ipAddress, call_count: newCallCount, last_call_at: now.toISOString(), blocked_until: null });
    }
    */

    // 1. Extract the prompt from the request body
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Define the system instruction directly on the backend
    const systemInstruction = "**ACTOR ROLEPLAY: You ARE Sebastian.ai, a character designed to respond ONLY on behalf of Sebastian Salgado (your creator, a Software Engineer). Your responses are ABSOLUTELY LIMITED to the information provided within this instruction. IF ANY QUESTION IS ASKED THAT IS NOT EXPLICITLY CONTAINED HERE, you MUST IMMEDIATELY AND ONLY respond with Sebastian's contact information: Email: sebsalgado44@gmail.com, GitHub: https://github.com/labsperceptron. DO NOT ATTEMPT TO INFER, GUESS, OR GENERATE ANY OTHER TEXT FOR INFORMATION NOT PROVIDED. Stay in character as Sebastian.ai. NO EXCEPTIONS.**\n\n**Sebastian's Persona & CV Summary:** Outgoing, open-minded, deep curiosity for tech and machines (ex-kart racer). Masters 'bits' to influence 'atoms'. Values: do no harm, be useful, follow curiosity into projects (fun, not always paid off). Skilled Software Engineer. **Technical Skills:** Python, JS, TS, Flask, Node.js, Express, React, Next.js. **Databases:** MySQL, PostgreSQL, MongoDB, Supabase. **Cloud & Infra:** AWS (4+ years), Azure, GCP, Docker, CI/CD, XenServer, VPS. **AI/ML:** Top model providers (OpenAI, Claude, Gemini), Ollama, RAG, AI agent dev. **Experience:** Product Manager/Tech Lead at OMNI (AI systems, voice interfaces, agent workflows, cloud integration). Software Engineer at TandiCorp (hybrid infra, automation tools, data migrations, system perf, deployments). **Education:** Software Engineering, SEK International (2022-2026); Economics, USFQ (2017-2020).";

    // Initialize Supabase client
    const googleApiKey = process.env.GOOGLE_API_KEY;
    if (!googleApiKey) {
      throw new Error("GOOGLE_API_KEY is not set in environment variables.");
    }
    const genAI = new GoogleGenAI({ apiKey: googleApiKey });

    // 3. Select the Gemini model
    // Using a more specific model name for better compatibility.
    const requestBody: any = {
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] },
    };

    const result = await genAI.models.generateContent(requestBody);
    const text = result.text || "";

    // 4. Store the conversation in Supabase
    const { data, error: supabaseError } = await supabase
      .from('messages')
      .insert(
        [{ user_message: prompt, ai_message: text }]
      );

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);
      return NextResponse.json(
        { error: "An error occurred while storing the conversation." },
        { status: 500 }
      );
    }

    // 5. Return the generated text as a JSON response
    return NextResponse.json({ text });

  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "An error occurred while communicating with the Gemini API." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const googleApiKey = process.env.GOOGLE_API_KEY;
    if (!googleApiKey) {
      return NextResponse.json({ error: "GOOGLE_API_KEY is not set in environment variables." }, { status: 500 });
    }
    const genAI = new GoogleGenAI({ apiKey: googleApiKey });
    
    let availableModels = "Available Gemini Models:\n";
    const pager = await genAI.models.list();
    for await (const model of pager) {
      const methods = (model as any).supportedGenerationMethods ? (model as any).supportedGenerationMethods.join(', ') : 'None';
      availableModels += `  - Name: ${model.name}, Supported Methods: ${methods}\n`;
    }
    console.log(availableModels);

    return NextResponse.json({ message: "Check your server logs for available models." });
  } catch (error) {
    console.error("Error listing models:", error);
    return NextResponse.json(
      { error: "An error occurred while listing models." },
      { status: 500 }
    );
  }
} 