"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 93 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
    ],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars
          setTimeout(() => {
            const skillsMap: Record<string, number> = {}
            skillCategories.forEach((category) => {
              category.skills.forEach((skill) => {
                skillsMap[skill.name] = skill.level
              })
            })
            setAnimatedSkills(skillsMap)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills-section" className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">{category.title}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={animatedSkills[skill.name] || 0}
                        className="h-2"
                        style={{
                          transition: "all 1.5s ease-out",
                          transitionDelay: `${categoryIndex * 200 + 500}ms`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
