"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  // Placeholder blog posts for demonstration
  const blogPosts = [
    { id: 1, title: "Building AI Agents for Customer Service", date: "Dec 10, 2024", category: "AI/ML" },
    { id: 2, title: "AWS Infrastructure Best Practices", date: "Dec 15, 2024", category: "Cloud" },
    { id: 3, title: "Modern Full-Stack Development", date: "Dec 20, 2024", category: "Development" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background font-sans">
      <h1 className="text-4xl font-light tracking-tight text-foreground mb-8">
        All <span className="font-medium text-primary">Essays</span>
      </h1>
      <p className="text-muted-foreground/80 mb-12 text-base font-light max-w-xl mx-auto leading-relaxed">
        Thoughts, insights, and essays on development, design, technology, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group block p-6 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
          >
            <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Category: {post.category} - {post.date}
            </p>
            <span className="mt-4 inline-flex items-center text-primary text-sm font-medium">
              Read More <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
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
