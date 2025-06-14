import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = params.id;

  // Placeholder for a single project's data
  const project = {
    id: projectId,
    title: `Project ${projectId}: AI Chatbot`,
    description: `Detailed description of Project ${projectId}. This project involves building an intelligent chatbot using natural language processing and machine learning techniques. It aims to provide automated customer support and information retrieval.`,
    technologies: ["Python", "TensorFlow", "Natural Language Processing", "React", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-background font-sans">
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-md p-8 mt-12 mb-8 border border-border/50">
        <Button variant="outline" size="sm" asChild className="mb-6 group border-border/50 hover:border-primary/50">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to all projects</span>
          </Link>
        </Button>
        <h1 className="text-4xl font-light tracking-tight text-foreground mb-4">{project.title}</h1>
        <p className="text-muted-foreground/90 text-base font-light leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-medium text-foreground mb-2">Technologies Used:</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-full border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Button asChild className="group">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </a>
          </Button>
          <Button asChild variant="outline" className="group border-border/50 hover:border-primary/50">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <span>GitHub Repo</span>
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
} 