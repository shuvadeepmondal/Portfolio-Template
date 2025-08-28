"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mt-5 mb-4 font-medium">Hello, I'm</p>

          {/* Name */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Shuvadeep Mondal
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-8">Full Stack Developer</h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I craft exceptional digital experiences with modern technologies. Passionate about creating scalable web
            applications that solve real-world problems and deliver outstanding user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full">
              <Link href="/projects">View My Work</Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full bg-transparent">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button
              variant="ghost"
              size="lg"
              className="w-12 h-12 p-0 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="w-12 h-12 p-0 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="w-12 h-12 p-0 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
