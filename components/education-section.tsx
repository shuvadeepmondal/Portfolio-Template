"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Institute of Technology",
    period: "2022 - 2026",
    description: "Graduated Magna Cum Laude with focus on Software Engineering and Web Development.",
    achievements: ["Dean's List", "Outstanding Student Award", "Hackathon Winner"],
  },
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    year: "2023",
  },
]

export function EducationSection() {
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

    const element = document.getElementById("education-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education-section" className="py-16 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-heading text-2xl font-semibold text-foreground">Education</h3>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0">
                      {edu.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <Badge key={achievement} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-heading text-2xl font-semibold text-foreground">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
