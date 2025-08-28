"use client"

import { useEffect, useState } from "react"

export function ProjectsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">My Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in full-stack development, from responsive web applications
            to complex backend systems.
          </p>
        </div>
      </div>
    </section>
  )
}
