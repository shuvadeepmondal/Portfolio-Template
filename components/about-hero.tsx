"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">About Me</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a passionate full-stack developer with over 2 years of experience creating digital solutions that make
              a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Profile Image */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
                <Image
                  src="/professional-developer-portrait.png"
                  alt="Shuvadeep Mondal - Full Stack Developer"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
