"use client";

import { useState } from "react";
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Code, Brain, Cog, Server, ExternalLink, Computer, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [conversationStarted, setConversationStarted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");
    setConversationStarted(true); // Mark conversation as started

    const newUserMessage = { role: "user" as const, content: searchQuery };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setSearchQuery(""); // Clear input after sending

    try {
      const res = await fetch("/api/chat/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: searchQuery }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to get response from API.");
      }

      const data = await res.json();
      const aiResponse = { role: "ai" as const, content: data.text };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (err: any) {
      console.error("Frontend API call error:", err);
      setError(err.message);
      setMessages((prevMessages) => [...prevMessages, { role: "ai" as const, content: `Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      title: "Full Stack Applications",
      description: "End-to-end web applications with modern frameworks and scalable architecture",
      icon: Code,
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "FastAPI"],
    },
    {
      title: "Local and Cloud AI Integration",
      description: "AI-powered solutions with the mayor model providers (OpenAI, Anthropic, Google) as well as local AI integration with Ollama, RAG implementation",
      icon: Brain,
      technologies: ["Ollama", "ChatGPT", "RAG", "LangGraph"],
    },
    {
      title: "Workflow Automations",
      description: "Python-based automation systems for business processes and data management",
      icon: Cog,
      technologies: ["Python", "Process Automation", "Data Migration", "API Integration"],
    },
    {
      title: "IT Infrastructure & CI/CD",
      description: "Cloud infrastructure management, deployment pipelines, and system optimization",
      icon: Server,
      technologies: ["AWS", "Azure", "Docker", "CI/CD"],
    },
    {
      title: "OS Experiece",
      description: "Versed in all 3 of the mayor OS systems",
      icon: Computer,
      technologies: ["Linux", "Windows", "MacOS"]
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navigation conversationStarted={conversationStarted} />

      <main className={`flex flex-1 flex-col items-center p-4 transition-all duration-500 ${conversationStarted ? 'justify-start pt-16' : 'justify-center'}`}>
        <section className={`w-full max-w-2xl text-center transition-all duration-500 ${conversationStarted ? 'mb-4' : 'mb-16'}`}>
          <h1 className="text-5xl font-light tracking-tight text-foreground mb-8">
            Sebastian.ai
          </h1>
          <form onSubmit={handleSubmit} className={`relative w-full transition-all duration-500 ${loading ? 'opacity-50 pointer-events-none -translate-y-2' : ''}`}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Ask anything..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={loading}
            />
            <Button type="submit" disabled={loading} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-9 w-9 flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
              {loading ? <span className="animate-spin">🌀</span> : <ArrowRight className="h-5 w-5" />}
            </Button>
          </form>
          {error && <p className="text-red-500 mt-4">Error: {error}</p>}

          {conversationStarted && messages.length > 0 && (
            <div className="mt-8 w-full max-w-2xl flex flex-col gap-4 text-left overflow-y-auto max-h-[400px] p-4 border border-border rounded-lg shadow-lg bg-card/80 backdrop-blur-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg shadow-sm ${msg.role === "user"
                    ? "bg-primary/10 text-primary self-end rounded-br-none"
                    : "bg-muted/30 text-muted-foreground self-start rounded-tl-none"
                  }`}
                >
                  <p className="font-medium text-sm mb-1">
                    {msg.role === "user" ? "You" : "Sebastian.ai"}
                  </p>
                  <p className="text-base font-light leading-relaxed">{msg.content}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {!conversationStarted && (
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in">
            <Button
              key="services"
              variant="outline"
              className="rounded-full border-border/50 bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors px-4 py-2 text-sm"
              asChild
            >
              <Link href="/services">Services</Link>
            </Button>
            <Button
              key="projects"
              variant="outline"
              className="rounded-full border-border/50 bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors px-4 py-2 text-sm"
              asChild
            >
              <Link href="/projects">Projects</Link>
            </Button>
            <Button
              key="about"
              variant="outline"
              className="rounded-full border-border/50 bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors px-4 py-2 text-sm"
              asChild
            >
              <Link href="/about">About</Link>
            </Button>
            <Button
              key="contact"
              variant="outline"
              className="rounded-full border-border/50 bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors px-4 py-2 text-sm"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        )}

        <div className={`transition-all duration-500 ${conversationStarted ? 'hidden' : 'block'}`}>
          <section className="container py-16 scroll-mt-20 text-center" id="services">
            <h2 className="text-3xl font-light tracking-tight text-foreground mb-12">
              My <span className="font-medium text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={index}
                    className="group border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-medium text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-light">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <Button asChild size="lg" variant="outline" className="group border-border/50 hover:border-primary/50">
              <Link href="/services">
                <span>Explore all services</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </section>

          <section className="py-16 bg-gradient-to-b from-background to-muted/20 scroll-mt-20 text-center" id="projects">
            <h2 className="text-3xl font-light tracking-tight text-foreground mb-12">
              <span className="font-medium text-primary">Open-Source</span> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <Card className="group border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-medium text-lg group-hover:text-primary transition-colors">
                    GitHub Repository
                  </CardTitle>
                  <CardDescription className="text-sm font-light">
                    Browse my open-source projects and code contributions
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild className="w-full group/btn">
                    <a href="https://github.com/labsperceptron" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View GitHub Profile
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-medium text-lg group-hover:text-primary transition-colors">
                    Perceptron Labs
                  </CardTitle>
                  <CardDescription className="text-sm font-light">
                    Live demonstrations and interactive project showcases
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group/btn border-border/50 hover:border-primary/50"
                  >
                    <a href="https://perceptronlabs.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Projects
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <Button asChild size="lg" variant="outline" className="group border-border/50 hover:border-primary/50">
              <Link href="/projects">
                <span>View all projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </section>

          <section className="py-16 bg-gradient-to-b from-muted/20 to-background scroll-mt-20 text-center" id="blog">
            <h2 className="text-3xl font-light tracking-tight text-foreground mb-12">
              From the <span className="font-medium text-primary">Blog</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Building AI Agents for Customer Service", category: "AI/ML", date: "Dec 10, 2024", id: 1 },
                { title: "AWS Infrastructure Best Practices", category: "Cloud", date: "Dec 15, 2024", id: 2 },
                { title: "Modern Full-Stack Development", category: "Development", date: "Dec 20, 2024", id: 3 },
              ].map((post) => (
                <Link
                  href={`/blog/${post.id}`}
                  key={post.id}
                  className="group block overflow-hidden rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=Blog+${post.id}`}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-light">{post.date}</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground/80 text-sm font-light leading-relaxed">
                      Exploring the latest trends and technologies in modern software development.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Button asChild variant="outline" size="lg" className="group border-border/50 hover:border-primary/50">
              <Link href="/blog">
                <span>Read all articles</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </section>

          <section className="container py-16 scroll-mt-20 text-center" id="contact">
            <h2 className="text-3xl font-light tracking-tight text-foreground mb-12">
              Let's <span className="font-medium text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground/80 mb-12 text-base font-light max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss AI solutions? Feel free to reach out.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="https://github.com/labsperceptron" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-7 w-7" />
              </Link>
              <Link href="https://www.linkedin.com/in/sebastian-garcia-0442381b1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-7 w-7" />
              </Link>
              <Link href="mailto:sebastian.garcia.dev@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-7 w-7" />
              </Link>
              <Link href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-7 w-7" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/50 py-8 bg-muted/20">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Sebastian Salgado. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors font-light">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors font-light">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors font-light">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
