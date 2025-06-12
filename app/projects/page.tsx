import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function ProjectsPage() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "AI Customer Service Platform",
      description: "Automated customer service system with voice interface and appointment booking integration",
      tags: ["OpenAI API", "Node.js", "React", "Speech Recognition"],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "Cloud Infrastructure Management",
      description: "AWS-based infrastructure with load balancing, VPN configuration, and automated deployments",
      tags: ["AWS", "Docker", "Python", "CI/CD"],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 3,
      title: "Voice Interface System",
      description: "Speech-to-text and text-to-speech integration for seamless voice interactions",
      tags: ["Google Speech API", "ElevenLabs", "TypeScript", "WebRTC"],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 4,
      title: "Process Automation Suite",
      description: "Python-based AI agents for automating business processes and data migrations",
      tags: ["Python", "AI Agents", "PostgreSQL", "Flask"],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 5,
      title: "RAG Implementation System",
      description: "Retrieval-Augmented Generation system for enhanced AI responses with custom knowledge bases",
      tags: ["OpenAI API", "Vector DB", "Python", "FastAPI"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 6,
      title: "Multi-Cloud Deployment Platform",
      description: "Cross-platform deployment system supporting AWS, Azure, and GCP with unified management",
      tags: ["Terraform", "Kubernetes", "Docker", "Python"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 7,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and analytics platform for investment insights",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 8,
      title: "Intelligent Data Migration Tool",
      description: "Automated data migration system with AI-powered schema mapping and validation",
      tags: ["Python", "AI", "MongoDB", "PostgreSQL"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <PageTransition>
        <div className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild className="border-border/50 hover:border-primary/50">
                <a href="https://github.com/labsperceptron" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="border-border/50 hover:border-primary/50">
                <a href="https://perceptronlabs.vercel.app" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Portfolio
                </a>
              </Button>
            </div>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Portfolio Showcase
              </div>
              <h1 className="text-4xl md:text-5xl font-heading mb-6 tracking-tight">
                Featured <span className="font-medium text-primary">Projects</span>
              </h1>
              <p className="text-muted-foreground/80 text-lg font-body max-w-2xl mx-auto leading-relaxed">
                A collection of my work across AI systems, cloud infrastructure, automation, and full-stack development.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-muted-foreground/80 font-body max-w-3xl mx-auto text-center">
                Explore my open source contributions and live projects at{" "}
                <a
                  href="https://perceptronlabs.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  Perceptron Labs
                </a>{" "}
                or check out my code repositories on{" "}
                <a
                  href="https://github.com/labsperceptron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  GitHub
                </a>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  href={`/projects/${project.id}`}
                />
              ))}
            </div>

            {/* GitHub Integration Section */}
            <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-heading mb-4 tracking-tight">
                Explore More on <span className="font-medium text-primary">GitHub</span>
              </h2>
              <p className="text-muted-foreground/80 mb-6 font-body max-w-2xl mx-auto">
                Discover additional projects, contributions, and open-source work on my GitHub profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://github.com/labsperceptron" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50 hover:border-primary/50">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
