import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { getTechIcon } from "@/components/tech-icons"

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "OMNI",
      location: "Madrid, Spain",
      period: "Jan 2024 - Present",
      type: "Full-time",
      description:
        "Software engineer focused on developing AI-powered customer service solutions and voice interface systems. Building scalable applications and implementing modern cloud technologies for enhanced user experiences.",
      achievements: [
        "Designed AI-powered workflows to automate company processes",
        "Architected voice interface systems for enhanced user interactions",
        "Led development of intelligent customer service automation platforms",
        "Implemented modern web applications with Next.js and cloud services",
      ],
      technologies: ["Azure", "Node.js", "Next.js", "FastAPI", "Supabase"],
      website: "https://cloud.omniaccounts.co.za",
    },
    {
      id: 2,
      title: "IT Infrastructure Engineer",
      company: "TandiCorp",
      location: "Quito, Ecuador",
      period: "Feb 2020 - Dec 2023",
      type: "Full-time",
      description:
        "IT Infrastructure engineer responsible for managing enterprise systems, cloud infrastructure, and automation solutions. Specialized in maintaining high-availability environments and implementing security best practices.",
      achievements: [
        "Managed cloud infrastructure and production environments at scale",
        "Implemented enterprise security systems and network configurations",
        "Optimized system performance through load balancing and automation",
        "Developed intelligent automation agents for business process optimization",
        "Led data migration projects and database management initiatives",
      ],
      technologies: ["Python", "AWS", "Docker", "PostgreSQL", "Flask", "React"],
      website: "https://tandicorp.com",
    },
    {
      id: 3,
      title: "Financial Analyst",
      company: "Remax Platinum",
      location: "Quito, Ecuador",
      period: "2017 - 2019",
      type: "Full-time",
      description:
        "Financial analyst responsible for accounting operations and strategic financial planning. Provided data-driven insights and financial projections to support management decision-making processes.",
      achievements: [
        "Managed comprehensive accounting operations and financial reporting",
        "Developed financial models and projections for strategic planning",
        "Analyzed market trends and provided actionable business insights",
        "Streamlined financial processes to improve operational efficiency",
      ],
      technologies: ["Excel", "Financial Modeling", "Data Analysis", "Accounting Software"],
      website: "https://www.remax.com.ec",
    },
  ]

  const education = [
    {
      degree: "Software Engineering",
      institution: "SEK International University",
      period: "2022 - 2026",
      status: "In Progress",
      link: "https://uisek.edu.ec"
    },
    {
      degree: "Economics",
      institution: "Universidad San Francisco de Quito",
      period: "2017 - 2020",
      status: "Completed",
      link: "https://www.usfq.edu.ec/es"
    },
  ]

  const skills = [
    {
      category: "Languages",
      items: [{ name: "Python" }, { name: "JavaScript" }, { name: "TypeScript" }],
    },
    {
      category: "Backend",
      items: [{ name: "Flask" }, { name: "Node.js" }, { name: "Express" }, { name: "FastAPI" }],
    },
    {
      category: "Frontend",
      items: [{ name: "React" }, { name: "Next.js" }],
    },
    {
      category: "Databases",
      items: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "MySQL" }, { name: "Supabase" }],
    },
    {
      category: "Cloud",
      items: [{ name: "AWS" }, { name: "Azure" }, { name: "GCP" }],
    },
    {
      category: "AI/ML",
      items: [{ name: "OpenAI API" }, { name: "RAG" }, { name: "AI Agents" }],
    },
    {
      category: "Infrastructure",
      items: [{ name: "Docker" }, { name: "Git" }, { name: "CI/CD" }, { name: "VPS" }],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <PageTransition>
        <div className="container py-12">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
                Professional Journey
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Work <span className="font-medium text-foreground">Experience</span>
              </h1>
              <p className="text-muted-foreground/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                My journey from financial analysis to AI-powered software development and infrastructure engineering.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-12 mb-16">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-border/30 last:border-l-0">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-6 border-4 border-background shadow-lg"></div>

                  <div className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <span className="font-medium text-foreground">{exp.company}</span>
                            {exp.website && (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-primary hover:text-primary/80 transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground/80 mb-6 font-light leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground/80 font-light">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => {
                          const IconComponent = getTechIcon(tech)
                          return (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-muted/30 border-border/50 font-light hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 group/badge"
                            >
                              <IconComponent />
                              <span className="ml-1.5">{tech}</span>
                            </Badge>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-center tracking-tight">
                Technical <span className="font-medium text-foreground">Skills</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 group"
                  >
                    <h3 className="font-medium mb-6 text-primary group-hover:text-primary/80 transition-colors">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-3">
                      {skillGroup.items.map((skill) => {
                        const IconComponent = getTechIcon(skill.name)
                        return (
                          <div key={skill.name} className="flex items-center gap-3">
                            <IconComponent />
                            <span className="text-sm font-light">{skill.name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 text-center tracking-tight">
                <span className="font-medium text-foreground">Education</span>
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-medium text-lg">{edu.degree}</h3>
                        <p className="text-muted-foreground font-light">
                          <span className="font-medium text-foreground">{edu.institution}</span>
                          {edu.link && (
                              <a
                                href={edu.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-primary hover:text-primary/80 transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-2 sm:mt-0">
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                        <Badge
                          variant={edu.status === "In Progress" ? "default" : "secondary"}
                          className={
                            edu.status === "In Progress"
                              ? "bg-primary/10 text-primary border-primary/20"
                              : "bg-muted/50 border-border/50"
                          }
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
                Want to work together?
              </div>
              <h2 className="text-3xl font-light mb-6 tracking-tight">
                Let's <span className="font-medium text-foreground">Collaborate</span>
              </h2>
             
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
