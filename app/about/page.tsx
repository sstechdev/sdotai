import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-background font-sans">
      <Navigation />
      <PageTransition>
        <div className="container py-12">
          <Button variant="outline" size="sm" asChild className="mb-6 group border-border/50 hover:border-[var(--green-accent)]/50">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>

          <div className="mx-auto max-w-4xl">

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1 p-8 rounded-lg border border-border/50 shadow-md bg-card">
                <div className="w-24 h-24 mx-auto overflow-hidden rounded-full mb-6">
                  <img
                    src="/profile-image.png"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h1 className="text-3xl font-light text-foreground mb-2 text-center">Sebastian Salgado</h1>
                <p className="text-primary text-base mb-4 text-center">Software Engineer</p>

                <div className="space-y-4 text-muted-foreground/90 text-base text-center">
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p>sebsalgado44@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p>Online</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Availability</h3>
                    <p>I like to work on cool projects.</p>
                  </div>
                </div>

              </div>

              <div className="md:col-span-2 p-8 rounded-lg border border-border/50 shadow-md bg-card">
                <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">
                  About <span className="font-medium text-[var(--green-accent)]">Me</span>
                </h2>

                <div className="prose prose-base dark:prose-invert max-w-none text-muted-foreground/90 leading-relaxed mb-12">
                  <p>
                  I like machines and the way electricity and fuel pass through them. My passion lies in understanding the intricate dance between bits and atoms

                  </p>
                  <p>
                    If you have an <em>interesting project</em>, a compelling proposal, or simply questions about my work, please don't hesitate to <Link href="/contact" className="text-[var(--green-accent)] hover:underline">reach out</Link>.
                  </p>
                  <p>Currently, I'm dedicating my efforts to the following key areas:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Enabling multi-modal AI to have full control over Operating Systems.</li>
                    <li>Applying Genetic Algorithms to state-of-the-art models with long context windows to solve complex mathematical problems and optimize code.</li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
