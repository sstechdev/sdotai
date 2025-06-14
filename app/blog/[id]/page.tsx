import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = params.id;

  // Placeholder for a single blog post data
  const post = {
    id: postId,
    title: `Blog Post ${postId}: The Future of AI`,
    author: "Sebastian Garcia",
    date: "December 25, 2024",
    content: `
     
    `,
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-background font-sans">
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-md p-8 mt-12 mb-8 border border-border/50">
        <Button variant="outline" size="sm" asChild className="mb-6 group border-border/50 hover:border-[var(--green-accent)]/50">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to all posts</span>
          </Link>
        </Button>
        <h1 className="text-4xl font-light tracking-tight text-foreground mb-4">{post.title}</h1>
        <div className="flex items-center text-muted-foreground text-sm mb-6">
          <User className="h-4 w-4 mr-2" />
          <span>{post.author}</span>
          <Calendar className="h-4 w-4 mr-2 ml-4" />
          <span>{post.date}</span>
        </div>
        <div
          className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  )
}
