import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"

export default function BlogPage() {
  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      date: "June 12, 2023",
      image: "/placeholder.svg?height=200&width=400&text=Blog+1",
      category: "Development",
    },
    {
      id: 2,
      title: "Designing for Accessibility",
      excerpt: "How to create inclusive digital experiences that work for everyone.",
      date: "May 28, 2023",
      image: "/placeholder.svg?height=200&width=400&text=Blog+2",
      category: "Design",
    },
    {
      id: 3,
      title: "The Rise of AI in Creative Industries",
      excerpt: "How artificial intelligence is transforming design, content creation, and more.",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=200&width=400&text=Blog+3",
      category: "Technology",
    },
    {
      id: 4,
      title: "Building Performant Web Applications",
      excerpt: "Strategies and techniques for optimizing web application performance.",
      date: "April 30, 2023",
      image: "/placeholder.svg?height=200&width=400&text=Blog+4",
      category: "Development",
    },
    {
      id: 5,
      title: "The Psychology of User Experience",
      excerpt: "Understanding how psychology principles can improve your UX design.",
      date: "April 18, 2023",
      image: "/placeholder.svg?height=200&width=400&text=Blog+5",
      category: "Design",
    },
    {
      id: 6,
      title: "From Concept to Launch: Project Management for Developers",
      excerpt: "A comprehensive guide to managing development projects effectively.",
      date: "April 5, 2023",
      image: "/placeholder.svg?height=200&width=400&text=Blog+6",
      category: "Career",
    },
  ]

  return (
    <PageTransition>
      <div className="container py-12">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Blog</h1>
        </div>

        <div className="mb-12">
          <p className="text-muted-foreground max-w-2xl">
            Thoughts, insights, and tutorials on development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="group block overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
