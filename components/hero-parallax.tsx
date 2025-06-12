"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(135deg, hsl(var(--primary)/0.1) 0%, hsl(var(--muted)/0.3) 100%)",
          y: backgroundY,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />

      <motion.div className="relative z-20 container text-center" style={{ y: textY, opacity }}>
        <motion.div
          className="inline-flex items-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-light text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sebastian Salgado
          <br />
          <span className="font-medium text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Software Engineer
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
              AI systems, IT infrastructure & Full Stack Developmet.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50">
            <Link href="/experience">Experience</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-light">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </motion.div>
    </div>
  )
}
