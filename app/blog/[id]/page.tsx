import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the post data based on the ID
  const post = {
    id: params.id,
    title: "The Future of Web Development",
    date: "June 12, 2023",
    author: "John Doe",
    category: "Development",
    content: `
      <p class="mb-4">The landscape of web development is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we look to the future, several key trends are shaping the way we build and interact with web applications.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Rise of AI-Assisted Development</h2>
      <p class="mb-4">Artificial intelligence is revolutionizing the way developers work. From code completion tools like GitHub Copilot to AI-powered debugging assistants, these technologies are enhancing productivity and enabling developers to focus on higher-level problems rather than routine coding tasks.</p>
      <p class="mb-4">As these tools become more sophisticated, we can expect them to take on more complex tasks, such as generating entire components or suggesting architectural improvements based on best practices and performance metrics.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">WebAssembly: Breaking Performance Barriers</h2>
      <p class="mb-4">WebAssembly (Wasm) continues to gain traction as a way to run high-performance code in the browser. By allowing developers to compile languages like C, C++, and Rust to run in a web environment, Wasm is enabling a new generation of web applications that rival native performance.</p>
      <p class="mb-4">From complex data visualizations to in-browser video editing and gaming, WebAssembly is expanding what's possible on the web platform.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Serverless Evolution</h2>
      <p class="mb-4">Serverless architectures are becoming increasingly popular for web applications. By abstracting away infrastructure management, serverless platforms allow developers to focus solely on writing code that responds to events.</p>
      <p class="mb-4">The combination of edge computing and serverless functions is particularly powerful, enabling applications to run closer to users for improved performance while maintaining the scalability benefits of serverless architecture.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">The future of web development is bright, with technologies that enable faster, more powerful, and more accessible applications. By staying informed about these trends and embracing new tools and methodologies, developers can create exceptional web experiences that meet the evolving needs of users around the world.</p>
    `,
  }

  return (
    <PageTransition>
      <article className="container py-12 max-w-4xl">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img
            src={`/placeholder.svg?height=400&width=800&text=Blog+${post.id}`}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">Share this post</h3>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Facebook
            </Button>
          </div>
        </div>
      </article>
    </PageTransition>
  )
}
