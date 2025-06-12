import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container py-12">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-square overflow-hidden rounded-xl mb-6">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Profile"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-primary font-medium mb-4">Full-Stack Developer</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p>hello@johndoe.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                  <p>San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Availability</h3>
                  <p>Open to opportunities</p>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full">Download Resume</Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>
                Hello! I'm John, a passionate full-stack developer with over 5 years of experience building web
                applications and digital experiences. I specialize in creating clean, efficient, and user-friendly
                solutions that solve real-world problems.
              </p>
              <p>
                My journey in web development began during my computer science studies, where I discovered my passion
                for creating interactive and visually appealing interfaces. Since then, I've worked with various
                technologies and frameworks, always striving to stay at the cutting edge of web development.
              </p>
              <p>
                I believe that great software is not just about code—it's about understanding user needs and creating
                experiences that are intuitive, accessible, and delightful. This philosophy guides my approach to every
                project I undertake.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes in the
                kitchen, or diving into a good book on technology and design.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>React / Next.js</span>
                    <div className="w-1/2 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>TypeScript</span>
                    <div className="w-1/2 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Tailwind CSS</span>
                    <div className="w-1/2 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Framer Motion</span>
                    <div className="w-1/2 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Node.js</span>
                    <div className="w-1/2 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Express</span>
                    <div className="w-1/2 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>MongoDB</span>
                    <div className="w-1/2 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>PostgreSQL</span>
                    <div className="w-1/2 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Experience</h2>

            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[0.4375rem] top-1.5"></div>
                <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                <p className="text-primary">TechCorp Inc. • 2021 - Present</p>
                <p className="mt-2 text-muted-foreground">
                  Led the development of the company's flagship web application, improving performance by 40%. Mentored
                  junior developers and implemented modern frontend practices across the team.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[0.4375rem] top-1.5"></div>
                <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                <p className="text-primary">WebSolutions • 2018 - 2021</p>
                <p className="mt-2 text-muted-foreground">
                  Developed and maintained multiple client websites and web applications. Worked with React, Node.js,
                  and various databases to deliver full-stack solutions.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[0.4375rem] top-1.5"></div>
                <h3 className="text-xl font-semibold">Junior Web Developer</h3>
                <p className="text-primary">Digital Agency • 2016 - 2018</p>
                <p className="mt-2 text-muted-foreground">
                  Started as an intern and quickly progressed to a full-time role. Focused on frontend development with
                  HTML, CSS, and JavaScript.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Education</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[0.4375rem] top-1.5"></div>
                <h3 className="text-xl font-semibold">Master's in Computer Science</h3>
                <p className="text-primary">Tech University • 2014 - 2016</p>
                <p className="mt-2 text-muted-foreground">
                  Specialized in Human-Computer Interaction and Web Technologies.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[0.4375rem] top-1.5"></div>
                <h3 className="text-xl font-semibold">Bachelor's in Software Engineering</h3>
                <p className="text-primary">State University • 2010 - 2014</p>
                <p className="mt-2 text-muted-foreground">
                  Graduated with honors. Participated in multiple hackathons and coding competitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
