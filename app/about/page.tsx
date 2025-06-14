import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-background font-sans">
      <Navigation />
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-md p-8 mt-12 mb-8 border border-border/50">
        <Button variant="outline" size="sm" asChild className="mb-6 group border-border/50 hover:border-[var(--green-accent)]/50">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="w-24 h-24 mx-auto overflow-hidden rounded-full mb-6">
              <img
                src="/profile-image.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-light text-foreground mb-2 text-center">Sebastian Salgado</h1>
            <p className="text-primary text-sm mb-4 text-center">Software Engineer</p>

            <div className="space-y-4 text-muted-foreground/90 text-sm text-center">
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p>sebsalgado44@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Location</h3>
                <p>Online</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Availability</h3>
                <p>I like to work on cool projects.</p>
              </div>
            </div>

          </div>

          <div className="md:col-span-2">
            <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">
              About <span className="font-medium text-[var(--green-accent)]">Me</span>
            </h2>

            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground/90 leading-relaxed mb-12">
              <p>
                I like machines, and how electricity and fuel pass through them.
              </p>
              <p>I seek to understand the world of bits and the world of atoms.</p>
              <p>
                If you have an interesting project, proposal, or questions about my work, don't hesitate to reach me.
              </p>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">
              Technical <span className="font-medium text-[var(--green-accent)]">Summary</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 text-muted-foreground/90 text-sm">
              <div className="flex items-center justify-center p-2 border border-border/50 rounded-md hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20 hover:-translate-y-1">Python</div>
              <div className="flex items-center justify-center p-2 border border-border/50 rounded-md hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20 hover:-translate-y-1">JavaScript / TypeScript</div>
              <div className="flex items-center justify-center p-2 border border-border/50 rounded-md hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20 hover:-translate-y-1">Flask, Node.js, Express</div>
              <div className="flex items-center justify-center p-2 border border-border/50 rounded-md hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20 hover:-translate-y-1">React / Next.js</div>
              <div className="flex items-center justify-center p-2 border border-border/50 rounded-md hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20 hover:-translate-y-1">MySQL, PostgreSQL, MongoDB, Supabase</div>
              <div className="flex items-center justify-center p-2 border border-border/50 rounded-md hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20 hover:-translate-y-1">AWS (4+ years), Azure, GCP</div>
              <div className="flex items-center justify-center p-2 border border-border/50 rounded-md hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20 hover:-translate-y-1">Docker, CI/CD, XenServer, VPS</div>
              <div className="flex items-center justify-center p-2 border border-border/50 rounded-md hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20 hover:-translate-y-1">OpenAI API, RAG, AI Agents</div>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">
              My <span className="font-medium text-[var(--green-accent)]">Carrer</span>
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-[var(--green-accent)] pl-6 relative">
                <div className="absolute w-2.5 h-2.5 bg-[var(--green-accent)] rounded-full -left-[0.3125rem] top-1.5"></div>
                <h3 className="text-xl font-light text-foreground">Product Manager / Tech Lead</h3>
                <p className="text-muted-foreground/80 text-sm mb-2">OMNI – Madrid • Jan 2024 – Present</p>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  Led development of AI-powered systems for customer interaction and automation. Designed and deployed voice interfaces and agent workflows using OpenAI, Google STT, and TTS systems. Managed end-to-end integration of cloud infrastructure and platform services.
                </p>
              </div>

              <div className="border-l-2 border-[var(--green-accent)] pl-6 relative">
                <div className="absolute w-2.5 h-2.5 bg-[var(--green-accent)] rounded-full -left-[0.3125rem] top-1.5"></div>
                <h3 className="text-xl font-light text-foreground">Software Engineer</h3>
                <p className="text-muted-foreground/80 text-sm mb-2">TandiCorp – Quito • Feb 2020 – Dec 2023</p>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  Managed hybrid infrastructure (AWS and on-premise), including networking and security. Developed automation tools and internal agents to streamline business operations. Oversaw data migrations, system performance, and deployment pipelines.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-foreground mt-12 mb-6">
              My <span className="font-medium text-[var(--green-accent)]">Education</span>
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-[var(--green-accent)] pl-6 relative">
                <div className="absolute w-2.5 h-2.5 bg-[var(--green-accent)] rounded-full -left-[0.3125rem] top-1.5"></div>
                <h3 className="text-xl font-light text-foreground">Software Engineering</h3>
                <p className="text-muted-foreground/80 text-sm mb-2">SEK International University • 2022 – 2026</p>
              </div>

              <div className="border-l-2 border-[var(--green-accent)] pl-6 relative">
                <div className="absolute w-2.5 h-2.5 bg-[var(--green-accent)] rounded-full -left-[0.3125rem] top-1.5"></div>
                <h3 className="text-xl font-light text-foreground">Economics</h3>
                <p className="text-muted-foreground/80 text-sm mb-2">Universidad San Francisco de Quito • 2017 – 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
