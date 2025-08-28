"use client"

import { useEffect, useState } from "react"

export function AboutStory() {
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

    const element = document.getElementById("about-story")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-story" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">My Journey</h2>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              My journey into web development started during my computer science studies, where I discovered my passion
              for creating digital experiences that solve real-world problems. What began as curiosity about how
              websites work evolved into a deep love for crafting elegant, efficient solutions.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Over the past 2 years, I've had the privilege of working with startups and established companies, helping
              them bring their visions to life through code. From building responsive e-commerce platforms to developing
              complex data visualization tools, each project has taught me something new and reinforced my commitment to
              continuous learning.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community. I believe that great software is built by great teams, and
              I'm always excited to collaborate with like-minded individuals who share a passion for innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
