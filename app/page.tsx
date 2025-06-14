"use client";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link"
import { Github, Linkedin, Mail, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWindow } from "@/components/chat-window";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [chatWindows, setChatWindows] = useState<
    { id: string; initialMessages: { role: "user" | "ai"; content: string }[]; messageCount: number }[]
  >([]);

  const MAX_MESSAGES_PER_WINDOW = 3;

  const handleCloseChat = (id: string) => {
    setChatWindows((prevWindows) => prevWindows.filter(window => window.id !== id));
  };

  const handleMainSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentQuery = searchQuery.trim();
    setSearchQuery(""); // Clear input immediately

    // Always create a new window when the form is submitted
    const newWindowId = uuidv4();
    let initialConversation: { role: "user" | "ai"; content: string }[] = [];
    let currentMessageCount = 0; // This will track user messages for the limit

    const defaultAIMessage = `My name is [Sebastian Salgado](/about), I'm a Software Engineer and this is my AI. Powered by Gemini-2.5-flash. Feel free to ask it anything, just like any other AI\n\nIf you wish to [get in touch](/contact), I'll respond as soon as possible. Enjoy!\n\n**Disclaimer**: You currently have ${MAX_MESSAGES_PER_WINDOW} messages available with the AI. This limit is in place to dont brake my wallet.`;

    // Always add the default AI message as the first message in a new window
    initialConversation.push({ role: "ai", content: defaultAIMessage });

    if (currentQuery) {
      initialConversation.push({ role: "user", content: currentQuery });
      currentMessageCount = 1; // First user message
    }

    setLoading(true);
    setError("");

    if (currentQuery) { // Only call API if there's a user query
      try {
        const res = await fetch("/api/chat/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: currentQuery }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Failed to get response from API.");
        }

        const data = await res.json();
        initialConversation.push({ role: "ai", content: data.text });

      } catch (err: any) {
        console.error("Frontend API call error:", err);
        setError(err.message);
        initialConversation.push({ role: "ai", content: `Error: ${err.message}` });
      } finally {
        setLoading(false);
        // console.log("Initial conversation before setting chat window:", initialConversation);
        setChatWindows((prevWindows) => [
          ...prevWindows,
          { id: newWindowId, initialMessages: initialConversation, messageCount: currentMessageCount },
        ]);
      }
    } else {
      setLoading(false);
      // console.log("Initial conversation before setting chat window (no query):", initialConversation);
      setChatWindows((prevWindows) => [
        ...prevWindows,
        { id: newWindowId, initialMessages: initialConversation, messageCount: currentMessageCount },
      ]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans relative">
      <main className="flex flex-1 flex-col p-4">
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        <div className={`
          absolute left-0 right-0
          transition-all duration-500 ease-in-out
          ${chatWindows.length > 0
            ? 'top-0 flex flex-col items-center justify-start pt-8' // Move to top
            : 'top-1/2 -translate-y-1/2 flex flex-col items-center justify-center' // Center
          }
        `}>
          <h1 className="text-5xl font-light tracking-tight text-foreground mb-8 text-center">
            sebastian.<span className="font-medium text-[var(--green-accent)]">ai</span>
          </h1>

          <div className="w-full max-w-2xl text-center">
            <form onSubmit={handleMainSubmit} className={`relative w-full transition-all duration-500 ${loading ? 'opacity-50 pointer-events-none -translate-y-2' : ''}`}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Ask anything..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={loading}
              />
              <Button type="submit" disabled={loading} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-9 w-9 flex items-center justify-center bg-[var(--green-accent)] text-[var(--green-accent-foreground)] hover:bg-[var(--green-accent)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--green-accent)] focus:ring-offset-2 focus:ring-offset-background">
                {loading ? <span className="animate-spin">🌀</span> : <ArrowRight className="h-5 w-5" />}
              </Button>
            </form>
            {error && <p className="text-red-500 mt-4">Error: {error}</p>}
          </div>
        </div>

        {chatWindows.map(window => (
          <ChatWindow
            key={window.id}
            id={window.id}
            onClose={handleCloseChat}
            initialMessages={window.initialMessages}
            messageCount={window.messageCount}
            maxMessages={MAX_MESSAGES_PER_WINDOW}
          />
        ))}

        <footer className="w-full py-8 mt-auto">
          <div className="container flex flex-col items-center gap-4">
            <div className="flex gap-4 text-muted-foreground/80 text-xs">
              <Link href="https://github.com/labsperceptron" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--green-accent)] transition-colors">
                <Github className="h-4 w-4" />
              </Link>
              <Link href="https://linkedin.com/in/sebastian-salgado" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--green-accent)] transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="mailto:sebsalgado44@gmail.com" className="hover:text-[var(--green-accent)] transition-colors">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-muted-foreground/60 text-xs">&copy; {new Date().getFullYear()} Sebastian Salgado. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
