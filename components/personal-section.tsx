"use client"

import { useEffect, useState } from "react"
import { Coffee, Camera, Music, Plane, Book, Code } from "lucide-react"

const interests = [
  {
    icon: Coffee,
    title: "Coffee Enthusiast",
    description: "Always exploring new brewing methods and coffee origins",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and landscapes during travels",
  },
  {
    icon: Music,
    title: "Music Production",
    description: "Creating electronic music in my spare time",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Exploring new cultures and gaining fresh perspectives",
  },
  {
    icon: Book,
    title: "Reading",
    description: "Tech blogs, sci-fi novels, and philosophy books",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contributing to projects and building tools for developers",
  },
]

export function PersonalSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("personal-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="personal-section" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Beyond Coding
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            When I'm not building applications, here's what keeps me inspired and motivated
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon
              return (
                <div
                  key={index}
                  className="group bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground ml-4">{interest.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{interest.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
