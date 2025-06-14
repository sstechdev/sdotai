"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Wrench, BookOpen, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl tracking-wide group">
          <p className="text-foreground font-light text-2xl">sebastian.<span className="font-medium text-[var(--green-accent)]">ai</span></p>
        </Link>

        <nav className="flex items-center gap-4 transition-all duration-500">
          <Button
            key="services"
            variant="ghost"
            className="text-muted-foreground hover:text-[var(--green-accent)] transition-colors text-sm px-2"
            asChild
          >
            <Link href="/services">Services</Link>
          </Button>
          <Button
            key="projects"
            variant="ghost"
            className="text-muted-foreground hover:text-[var(--green-accent)] transition-colors text-sm px-2"
            asChild
          >
            
            <Link href="/about">About</Link>
          </Button>
          <Button
            key="contact"
            variant="ghost"
            className="text-muted-foreground hover:text-[var(--green-accent)] transition-colors text-sm px-2"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
