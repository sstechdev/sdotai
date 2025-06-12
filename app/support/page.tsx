import Link from "next/link"
import { ArrowLeft, MessageCircle, Mail, Phone, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function SupportPage() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help with your questions",
      availability: "Mon-Fri, 9AM-6PM PST",
      responseTime: "Usually within 5 minutes",
      action: "Start Chat",
      href: "#chat",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      availability: "24/7",
      responseTime: "Within 24 hours",
      action: "Send Email",
      href: "mailto:support@johndoe.com",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      availability: "Mon-Fri, 10AM-5PM PST",
      responseTime: "Immediate",
      action: "Call Now",
      href: "tel:+1-555-123-4567",
    },
  ]

  const faqs = [
    {
      question: "How can I request a custom project?",
      answer:
        "You can request a custom project by contacting me through the contact form or email. I'll review your requirements and provide a detailed proposal with timeline and pricing.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. I also work with cloud platforms like AWS and Vercel.",
    },
    {
      question: "Do you offer maintenance and support for completed projects?",
      answer:
        "Yes, I offer ongoing maintenance and support packages for all completed projects. This includes bug fixes, security updates, and feature enhancements.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during the proposal phase.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "I work with clients worldwide and am experienced in remote collaboration. I'm flexible with time zones and communication preferences.",
    },
    {
      question: "Can you help with existing projects or only new ones?",
      answer:
        "I can help with both new projects and existing ones. Whether you need bug fixes, feature additions, performance optimization, or complete redesigns, I'm here to help.",
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
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Here to Help
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Get <span className="font-medium text-primary">Support</span>
              </h1>
              <p className="text-muted-foreground/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Need help with a project or have questions? I'm here to assist you every step of the way.
              </p>
            </div>

            {/* Support Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {supportOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-medium">{option.title}</CardTitle>
                      <CardDescription className="font-light">{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{option.availability}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span>{option.responseTime}</span>
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={option.href}>{option.action}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light mb-4 tracking-tight">
                  Frequently Asked <span className="font-medium text-primary">Questions</span>
                </h2>
                <p className="text-muted-foreground/80 font-light">
                  Find answers to common questions about my services and process.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-border/50 bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="font-medium text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground/80 font-light leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-light mb-4 tracking-tight">
                Still need <span className="font-medium text-primary">help</span>?
              </h2>
              <p className="text-muted-foreground/80 mb-6 font-light">
                Don't hesitate to reach out. I'm always happy to help with your questions or projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Me Directly</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50 hover:border-primary/50">
                  <Link href="https://github.com/labsperceptron">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
