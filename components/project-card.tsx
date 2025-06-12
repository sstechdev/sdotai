"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  href?: string
}

export function ProjectCard({ title, description, tags, image, href = "#" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
        whileHover={{ y: -8 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video w-full overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-xl group-hover:text-primary transition-colors">{title}</h3>
            <motion.div
              animate={{
                x: isHovered ? 0 : 8,
                y: isHovered ? 0 : 8,
                opacity: isHovered ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="h-5 w-5 text-primary" />
            </motion.div>
          </div>

          <p className="text-muted-foreground/80 mb-4 font-light leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-muted/50 text-muted-foreground border border-border/50 font-light"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
