import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Code, Brain, Cog, Server, ExternalLink, Computer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroParallax } from "@/components/hero-parallax"
import { Navigation } from "@/components/navigation"

export default function Home() {
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
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <HeroParallax />

        <section className="container py-24 scroll-mt-20" id="services">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              What I Offer
            </div>
            <h2 className="font-light text-4xl md:text-5xl mb-6 tracking-tight">
              My <span className="font-medium text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground/80 mb-16 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions across AI systems, web development, and infrastructure automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-medium text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-light">{service.description}</CardDescription>
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

          <div className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/services">
                <span>Explore all services</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-muted/20 scroll-mt-20" id="projects">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
                Open Source
              </div>
              <h2 className="font-light text-4xl md:text-5xl mb-6 tracking-tight">
                <span className="font-medium text-primary">Open-Source</span> Projects
              </h2>
              <p className="text-muted-foreground/80 mb-16 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Explore my contributions to the open-source community and live project demonstrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="group border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-medium text-xl group-hover:text-primary transition-colors">
                    GitHub Repository
                  </CardTitle>
                  <CardDescription className="font-light">
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

              <Card className="group border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-medium text-xl group-hover:text-primary transition-colors">
                    Perceptron Labs
                  </CardTitle>
                  <CardDescription className="font-light">
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
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-muted/20 to-background scroll-mt-20" id="blog">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
                Latest Insights
              </div>
              <h2 className="font-light text-4xl md:text-5xl mb-6 tracking-tight">
                From the <span className="font-medium text-primary">Blog</span>
              </h2>
              <p className="text-muted-foreground/80 mb-16 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Thoughts on AI development, cloud infrastructure, and modern software engineering practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Building AI Agents for Customer Service", category: "AI/ML" },
                { title: "AWS Infrastructure Best Practices", category: "Cloud" },
                { title: "Modern Full-Stack Development", category: "Development" },
              ].map((post, i) => (
                <Link
                  href={`/blog/${i + 1}`}
                  key={i}
                  className="group block overflow-hidden rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=Blog+${i + 1}`}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground font-light">Dec {i + 10}, 2024</span>
                    </div>
                    <h3 className="font-medium text-xl mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground/80 font-light leading-relaxed">
                      Exploring the latest trends and technologies in modern software development.
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild variant="outline" size="lg" className="group border-border/50 hover:border-primary/50">
                <Link href="/blog">
                  <span>Read all articles</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-24 scroll-mt-20" id="contact">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
              Get In Touch
            </div>
            <h2 className="font-light text-4xl md:text-5xl mb-6 tracking-tight">
              Let's <span className="font-medium text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground/80 mb-16 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss AI solutions? Feel free to reach out.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="group border-border/50 hover:border-primary/50" asChild>
                <Link href="/contact">
                  <Mail className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                  <span>Contact Me</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group border-border/50 hover:border-primary/50">
                <a
                  href="https://github.com/labsperceptron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group border-border/50 hover:border-primary/50">
                <a
                  href="https://linkedin.com/in/sebastian-salgado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Linkedin className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group border-border/50 hover:border-primary/50">
                <a
                  href="https://twitter.com/sebsalgado44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Twitter className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                  <span>Twitter</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
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
