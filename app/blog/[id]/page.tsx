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
      <p class=\"mb-4\">This is the content of blog post number ${postId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p class=\"mb-4\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2 class=\"text-2xl font-medium text-foreground mb-3\">Section 1: AI Ethics</h2>
      <p class=\"mb-4\">Understanding the ethical implications of AI development is crucial for responsible innovation. We delve into topics such as bias in algorithms, data privacy, and the societal impact of artificial intelligence.</p>
      <h2 class=\"text-2xl font-medium text-foreground mb-3\">Section 2: Cloud Computing</h2>
      <p class=\"mb-4\">The backbone of modern applications, cloud computing offers scalability and flexibility. This section explores best practices for deploying and managing applications on platforms like AWS, Azure, and Google Cloud.</p>
    `,
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-background font-sans">
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-md p-8 mt-12 mb-8 border border-border/50">
        <Button variant="outline" size="sm" asChild className="mb-6 group border-border/50 hover:border-primary/50">
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
