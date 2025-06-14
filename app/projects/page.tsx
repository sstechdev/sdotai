import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  // This is a placeholder page. In a real application, you would fetch projects from a database.
  const projects = [
    { id: 1, title: "Project Alpha", description: "A web application for data visualization.", link: "#" },
    { id: 2, title: "Project Beta", description: "An AI-powered content generation tool.", link: "#" },
    { id: 3, title: "Project Gamma", description: "Cloud infrastructure automation for startups.", link: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background font-sans">
      <h1 className="text-4xl font-light tracking-tight text-foreground mb-8">
        All <span className="font-medium text-primary">Projects</span>
      </h1>
      <p className="text-muted-foreground/80 mb-12 text-base font-light max-w-xl mx-auto leading-relaxed">
        Here are some of my recent open-source projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group block p-6 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
          >
            <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              {project.description}
            </p>
            <span className="mt-4 inline-flex items-center text-primary text-sm font-medium">
              View Details <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <Button asChild variant="outline" className="group border-border/50 hover:border-primary/50">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
} 