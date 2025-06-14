"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Copy, Check, Github, Linkedin, Twitter, Instagram, Phone, Calendar, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { toast } from "sonner"

export default function ContactPage() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const contactInfo = [
    {
      id: "email",
      label: "Email",
      value: "sebsalgado44@gmail.com",
      icon: Mail,
      href: "mailto:sebsalgado44@gmail.com",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+593 93 980 0968",
      icon: Phone,
      href: "tel:+593939800968",
    },
    {
      id: "calendly",
      label: "Schedule a Meeting",
      value: "calendly.com/sebsalgado44",
      icon: Calendar,
      href: "https://calendly.com/sebsalgado44",
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/labsperceptron",
      icon: Github,
      href: "https://github.com/labsperceptron",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/sebastian-salgado-80377021b/",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sebastian-salgado-80377021b/",
    },
    {
      id: "twitter",
      label: "Twitter",
      value: "@JSebastianS01",
      icon: Twitter,
      href: "https://x.com/JSebastianS01",
    },
    
  ]

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(id)
      toast.success("Copied to clipboard!")
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      toast.error("Failed to copy to clipboard")
    }
  }

  const faqs = [
    {
      question: "What AI technologies do you specialize in?",
      answer:
        "I specialize in integrating AI system from the major providers (OpenAI, Anthopic, Google) API's, RAG (Retrieval-Augmented Generation) implementation, AI agent development with LangGraph and Crewai, and voice interface systems using Google Speech-to-Text and ElevenLabs TTS.",
    },
    {
      question: "Can you help with cloud infrastructure setup?",
      answer:
        "Yes, I have 4+ years of AWS experience and also work with Azure and GCP. I can help with infrastructure management, load balancing, VPN configuration, setting up VPS and automated deployments using Docker and CI/CD pipelines.",
    },
    {
      question: "Do you work on full-stack web applications?",
      answer:
        "I work with modern tech stacks including React, Next.js, Node.js, Express, FasAPI and various databases like PostgreSQL, MongoDB, and Supabase. I can handle both frontend and backend development.",
    },
    {
      question: "What is your experience with automation and AI agents?",
      answer:
        "I've built Python-based and JavaScript AI agents for consumer facing aplication, customer service automation, and business process optimization. I also have experience with data migrations and system integrations.",
    },
    {
      question: "Do you offer consulting services?",
      answer:
        "Yes, I offer consulting services for AI implementation, cloud architecture, and technical strategy. I can help assess your needs and provide recommendations for technology solutions.",
    },
    {
      question: "What's your typical project timeline?",
      answer:
        "Project timelines vary based on complexity. Simple integrations might take 1-2 weeks, while complex AI systems or infrastructure projects can take 1-3 months. I provide detailed estimates during initial consultations.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation conversationStarted={true} />

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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green-accent)]"></span>
                </span>
                Let's Connect
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                My <span className="font-medium text-[var(--green-accent)]">Info</span>
              </h1>
              <p className="text-muted-foreground/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                You can reach me from any plataform below, i'll answer as soon as possible!
              </p>
            </div>

            <p className="text-muted-foreground/80 text-sm mb-6">
              Feel free to reach out to me for collaborations, inquiries, or questions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-light text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground/90 text-sm">
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-[var(--green-accent)]" />
                    <p>sebsalgado44@gmail.com</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-[var(--green-accent)]" />
                    <p>The World, Online</p>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="mr-3 h-5 w-5 text-[var(--green-accent)]" />
                    <p>Open to interesting opportunities</p>
                  </div>
                </div>
              </div>

              <div>
                {/* Contact Information */}
                <div className="mb-16">
                  <h2 className="text-2xl font-light mb-8 text-center tracking-tight">
                    Contact <span className="font-medium text-[var(--green-accent)]">Information</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contactInfo.map((contact) => {
                      const Icon = contact.icon
                      const isCopied = copiedItem === contact.id

                      return (
                        <Card
                          key={contact.id}
                          className="border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--green-accent)]/5 transition-all duration-300 hover:border-[var(--green-accent)]/20"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3 flex-1 min-w-0">
                                <div className="w-10 h-10 rounded-full bg-[var(--green-accent)]/10 flex items-center justify-center flex-shrink-0">
                                  <Icon className="h-5 w-5 text-[var(--green-accent)]" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                                  <p className="text-sm font-light truncate">{contact.value}</p>
                                </div>
                              </div>
                              <div className="flex gap-1 ml-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => copyToClipboard(contact.value, contact.id)}
                                >
                                  {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                                    <Icon className="h-4 w-4" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light mb-4 tracking-tight">
                  Frequently Asked <span className="font-medium text-[var(--green-accent)]">Questions</span>
                </h2>
                <p className="text-muted-foreground/80 font-light">Common questions about my services and expertise.</p>
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

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-[var(--green-accent)]/5 to-[var(--green-accent)]/10 rounded-2xl p-8 border border-[var(--green-accent)]/20">
              <h2 className="text-2xl font-light mb-4 tracking-tight">
                Ready to start your <span className="font-medium text-[var(--green-accent)]">project</span>?
              </h2>
              <p className="text-muted-foreground/80 mb-6 font-light">
                Whether you need AI integration, cloud infrastructure, or full-stack development, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[var(--green-accent)] text-[var(--green-accent-foreground)] hover:bg-[var(--green-accent)]/90">
                  <a href="mailto:sebsalgado44@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50 hover:border-[var(--green-accent)]/50">
                  <Link href="/services">View My Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
