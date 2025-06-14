import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-background font-sans">
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-md p-8 mt-12 mb-8 border border-border/50">
        <Button variant="outline" size="sm" asChild className="mb-6 group border-border/50 hover:border-primary/50">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="aspect-square overflow-hidden rounded-xl mb-6 border border-border/50">
              <img
                src="/profile-image.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-light text-foreground mb-2">Sebastian Salgado</h1>
            <p className="text-primary text-sm mb-4">Software Engineer</p>

            <div className="space-y-4 text-muted-foreground/90 text-sm">
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p>sebsalgado44@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Location</h3>
                <p>Madrid, Spain</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Availability</h3>
                <p>Open to new opportunities</p>
              </div>
            </div>

          </div>

          <div className="md:col-span-2">
            <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">
              About <span className="font-medium text-primary">Me</span>
            </h2>

            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground/90 leading-relaxed mb-12">
              <p>
                Hello! I'm Sebastian, a passionate full-stack developer with over 5 years of experience building web
                applications and integrating cutting-edge AI solutions. I specialize in creating clean, efficient, and user-friendly
                solutions that solve real-world problems.
              </p>
              <p>
                My journey in tech began with a deep curiosity for how things work, leading me to explore various
                programming languages and frameworks. I thrive on bringing ideas to life, from backend logic to intuitive
                user interfaces.
              </p>
              <p>
                I believe that impactful software is not just about writing code—it's about understanding complex challenges and crafting
                solutions that are scalable, maintainable, and delightful to use. This philosophy drives my approach to every
                project I undertake.
              </p>
              <p>
                When I'm not coding, I'm usually exploring new AI models, contributing to open-source projects, or learning about the latest advancements in cloud infrastructure.
              </p>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">
              Technical <span className="font-medium text-primary">Summary</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-light text-foreground mb-4">Languages & Frameworks</h3>
                <ul className="space-y-3 text-muted-foreground/90 text-sm">
                  <li className="flex items-center justify-between">
                    <span>Python</span>
                    <span className="font-medium text-primary">Advanced</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>JavaScript / TypeScript</span>
                    <span className="font-medium text-primary">Advanced</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Flask, Node.js, Express</span>
                    <span className="font-medium text-primary">Proficient</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>React / Next.js</span>
                    <span className="font-medium text-primary">Advanced</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-light text-foreground mb-4">Databases & Cloud</h3>
                <ul className="space-y-3 text-muted-foreground/90 text-sm">
                  <li className="flex items-center justify-between">
                    <span>MySQL, PostgreSQL, MongoDB, Supabase</span>
                    <span className="font-medium text-primary">Proficient</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>AWS (4+ years), Azure, GCP</span>
                    <span className="font-medium text-primary">Advanced</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Docker, CI/CD, XenServer, VPS</span>
                    <span className="font-medium text-primary">Proficient</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>OpenAI API, RAG, AI Agents</span>
                    <span className="font-medium text-primary">Advanced</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">
              My <span className="font-medium text-primary">Journey</span>
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[0.3125rem] top-1.5"></div>
                <h3 className="text-xl font-light text-foreground">Product Manager / Tech Lead</h3>
                <p className="text-muted-foreground/80 text-sm mb-2">OMNI – Madrid • Jan 2024 – Present</p>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  Led development of AI-powered systems for customer interaction and automation. Designed and deployed voice interfaces and agent workflows using OpenAI, Google STT, and TTS systems. Managed end-to-end integration of cloud infrastructure and platform services.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[0.3125rem] top-1.5"></div>
                <h3 className="text-xl font-light text-foreground">Software Engineer</h3>
                <p className="text-muted-foreground/80 text-sm mb-2">TandiCorp – Quito • Feb 2020 – Dec 2023</p>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  Managed hybrid infrastructure (AWS and on-premise), including networking and security. Developed automation tools and internal agents to streamline business operations. Oversaw data migrations, system performance, and deployment pipelines.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-foreground mt-12 mb-6">
              My <span className="font-medium text-primary">Education</span>
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[0.3125rem] top-1.5"></div>
                <h3 className="text-xl font-light text-foreground">Software Engineering</h3>
                <p className="text-muted-foreground/80 text-sm mb-2">SEK International University • 2022 – 2026</p>
              </div>

              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[0.3125rem] top-1.5"></div>
                <h3 className="text-xl font-light text-foreground">Economics</h3>
                <p className="text-muted-foreground/80 text-sm mb-2">Universidad San Francisco de Quito • 2017 – 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
