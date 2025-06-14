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
        "React & Next.js frontend development",
        "Node.js & Express backend systems",
        "Database design and optimization",
        "API development and integration",
        "Responsive and accessible UI/UX",
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
      title: "Workflow Automations",
      description: "Python-based automation systems for business processes and data management",
      icon: Cog,
      features: [
        "Business process automation",
        "Data migration and synchronization",
        "API integration and orchestration",
        "Custom automation scripts",
        "Monitoring and alerting systems",
        "Performance optimization",
      ],
      technologies: ["Python", "Flask", "FastAPI", "Celery", "Redis", "PostgreSQL"],
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
      pricing: "Starting from €2,000",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
     <Navigation conversationStarted={false} />

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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Professional Services
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                My <span className="font-medium text-primary">Services</span>
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
                    className="group border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-medium text-xl group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                          <p className="text-primary font-medium text-sm">{service.pricing}</p>
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
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
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
                  My <span className="font-medium text-primary">Process</span>
                </h2>
                <p className="text-muted-foreground/80 font-light">
                  How I work with clients to deliver exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Discovery", description: "Understanding your needs and project requirements" },
                  { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
                  { step: "03", title: "Development", description: "Building your solution with regular updates" },
                  { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
                ].map((phase, index) => (
                  <Card key={index} className="border-border/50 bg-background/80 backdrop-blur-sm text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary font-bold">{phase.step}</span>
                      </div>
                      <h3 className="font-medium mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground/80 font-light text-sm">{phase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-light mb-4 tracking-tight">
                Ready to get <span className="font-medium text-primary">started</span>?
              </h2>
              <p className="text-muted-foreground/80 mb-6 font-light max-w-2xl mx-auto">
                Let's discuss your project requirements and how I can help bring your ideas to life with cutting-edge
                technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50 hover:border-primary/50">
                  <a href="mailto:sebsalgado44@gmail.com">Send Email Directly</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
