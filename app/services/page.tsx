import Link from "next/link"
import { ArrowLeft, Code, Brain, Cog, Server, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { getTechIcon } from "@/components/tech-icons"

export default function ServicesPage() {
  const services = [
    {
      title: "Full Stack Applications",
      description: "End-to-end web applications with modern frameworks and scalable architecture",
      icon: Code,
      features: [
        "User Experience first philosophy",
        "API development and integration",
        "Performance optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
      pricing: "",
    },
    {
      title: "Local and Cloud AI Integration",
      description: "AI-powered solutions with OpenAI API, RAG implementation, and intelligent automation",
      icon: Brain,
      features: [
        "OpenAI API integration and optimization",
        "RAG (Retrieval-Augmented Generation) systems",
        "AI agent development and deployment",
        "Voice interface implementation",
        "Custom AI model fine-tuning",
        "AI workflow automation",
      ],
      technologies: ["OpenAI API", "RAG", "AI Agents", "Google Speech API", "ElevenLabs", "Python"],
      pricing: "",
    },
    
    {
      title: "IT Infrastructure & CI/CD",
      description: "Cloud infrastructure management, deployment pipelines, and system optimization",
      icon: Server,
      features: [
        "AWS, Azure, and GCP infrastructure setup",
        "CI/CD pipeline implementation",
        "Docker containerization",
        "Load balancing and scaling",
        "Security and monitoring setup",
        "Infrastructure as Code (IaC)",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      pricing: "",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
     <Navigation />

      <PageTransition>
        <div className="container py-12">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green-accent)]"></span>
                </span>
                Professional Services
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                My <span className="font-medium text-[var(--green-accent)]">Services</span>
              </h1>
              <p className="text-muted-foreground/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Comprehensive solutions across AI systems, web development, and infrastructure automation tailored to
                your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={index}
                    className="group border-border/50 bg-card hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--green-accent)]/10 flex items-center justify-center group-hover:bg-[var(--green-accent)]/20 transition-colors">
                          <Icon className="h-6 w-6 text-[var(--green-accent)]" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-medium text-xl group-hover:text-[var(--green-accent)] transition-colors">
                            {service.title}
                          </CardTitle>
                          <p className="text-[var(--green-accent)] font-medium text-sm">{service.pricing}</p>
                        </div>
                      </div>
                      <CardDescription className="font-light text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-[var(--green-accent)] mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground/80 font-light text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => {
                            const IconComponent = getTechIcon(tech)
                            return (
                              <div
                                key={tech}
                                className="flex items-center gap-1.5 text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                              >
                                <IconComponent />
                                <span>{tech}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Process Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light mb-4 tracking-tight">
                  My <span className="font-medium text-[var(--green-accent)]">Process</span>
                </h2>
                <p className="text-muted-foreground/80 font-light">
                  How I work with clients to deliver exceptional results.
                </p>
              </div>

              {/* Horizontal Timeline Container */}
              <div className="relative flex justify-between items-start pt-10 pb-10">
                {/* Timeline Line */}
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-border/50"></div>

                {[
                  { step: "01", title: "Discovery", description: "Understanding your needs and project requirements" },
                  { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
                  { step: "03", title: "Development", description: "Building your solution with regular updates" },
                  { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
                ].map((phase, index) => (
                  <div key={index} className="relative z-10 flex flex-col items-center w-1/4 px-2">
                    {/* Timeline Marker (Circle) */}
                    <div className="w-10 h-10 rounded-full bg-[var(--green-accent)] flex items-center justify-center mb-4 transform -translate-y-1/2 border-4 border-background shadow-md">
                      <span className="text-[var(--green-accent-foreground)] font-bold text-base">{phase.step}</span>
                    </div>

                    {/* Card Content */}
                    <Card className="border-border/50 bg-background/80 backdrop-blur-sm text-center p-4">
                      <h3 className="font-medium text-lg mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground/80 font-light text-sm">{phase.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-[var(--green-accent)]/5 to-[var(--green-accent)]/10 rounded-2xl p-8 border border-[var(--green-accent)]/20">
              <h2 className="text-2xl font-light mb-4 tracking-tight">
                Contact <span className="font-medium text-[var(--green-accent)]">Me</span>
              </h2>
              <p className="text-muted-foreground/80 mb-6 font-light max-w-2xl mx-auto">
                Let's discuss how I can help with your next project.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="group bg-[var(--green-accent)] text-[var(--green-accent-foreground)] hover:bg-[var(--green-accent)]/90 hover:shadow-lg hover:shadow-[var(--green-accent)]/20 transition-all duration-300">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
