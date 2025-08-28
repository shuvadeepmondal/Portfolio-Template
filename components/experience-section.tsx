"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2024 - Present",
    description:
      "Lead development of enterprise web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2023 - 2024",
    description:
      "Built the company's main product from MVP to production, handling both frontend and backend development. Implemented CI/CD pipelines and automated testing.",
    technologies: ["Vue.js", "Python", "MongoDB", "Redis", "Jenkins"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2023 - 2024",
    description:
      "Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UI/UX designs.",
    technologies: ["JavaScript", "SCSS", "WordPress", "Figma"],
  },
]

export function ExperienceSection() {
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

    const element = document.getElementById("experience-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience-section" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />

                  {/* Content */}
                  <div className="ml-16 bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">{experience.title}</h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0">
                        {experience.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{experience.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
