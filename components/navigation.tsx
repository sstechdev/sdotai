"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Wrench, BookOpen, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Services", href: "/services", icon: Wrench },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

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
        <Link href="/" className=" text-xl tracking-wide group pl-4">
          <p>Sebastian</p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "group relative px-3 py-2 text-sm font-light transition-all duration-200",
                  isActive
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "hover:bg-muted/50 hover:text-foreground",
                )}
              >
                <Link href={item.href}>
                  <Icon className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <nav className="container py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-light rounded-lg transition-colors",
                    isActive ? "text-primary bg-primary/10 border border-primary/20" : "hover:bg-muted/50",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
