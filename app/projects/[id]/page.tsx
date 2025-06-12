import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/page-transition"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the project data based on the ID
  const project = {
    id: params.id,
    title: "E-commerce Platform",
    description: "A full-featured online store with real-time inventory and payment processing",
    longDescription: `
      This e-commerce platform was built to provide a seamless shopping experience with real-time inventory updates and secure payment processing. The project features a responsive design, user authentication, product search and filtering, shopping cart functionality, and integration with multiple payment gateways.
      
      The frontend is built with Next.js and TypeScript, providing a fast and type-safe user interface. The backend uses Node.js with Express, connected to a MongoDB database for storing product information, user data, and order history.
      
      Real-time inventory updates are implemented using WebSockets, ensuring that customers always see accurate product availability. The payment processing system integrates with Stripe for secure transactions, with support for various payment methods including credit cards, Apple Pay, and Google Pay.
    `,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Screenshot+1",
      "/placeholder.svg?height=300&width=500&text=Screenshot+2",
      "/placeholder.svg?height=300&width=500&text=Screenshot+3",
      "/placeholder.svg?height=300&width=500&text=Screenshot+4",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    featured: true,
  }

  return (
    <PageTransition>
      <div className="container py-12">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all projects
          </Link>
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              {project.longDescription.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-24 space-y-8">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full justify-start" variant="outline">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <ul className="space-y-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in working together or have questions about this project?
                </p>
                <Button className="w-full">Contact Me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
