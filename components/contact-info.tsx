"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Calendar } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "shuvadeep.mondal@example.com",
    href: "mailto:shuvadeep.mondal@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9876543210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "West Bengal, India",
    href: "https://maps.google.com/?q=West+Bengal,+India",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/shuvadeepmondal",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    color: "hover:text-blue-600",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/ShuvadeepM",
    color: "hover:text-blue-400",
  },
]

export function ContactInfo() {
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

    const element = document.getElementById("contact-info")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact-info" className="py-16 bg-muted/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {contactDetails.map((detail, index) => {
                    const IconComponent = detail.icon
                    return (
                      <div key={index} className="flex items-center group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{detail.label}</p>
                          <a
                            href={detail.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                            target={detail.href.startsWith("http") ? "_blank" : undefined}
                            rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {detail.value}
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Connect With Me</h2>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <Button
                        key={index}
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 min-w-32 bg-transparent hover:bg-primary/10 transition-all duration-300"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center ${social.color}`}
                        >
                          <IconComponent className="h-5 w-5 mr-2" />
                          {social.label}
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-primary mr-3" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">Availability</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Currently Available</p>
                      <p className="text-sm text-muted-foreground">Open for new projects and collaborations</p>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">
                      <strong>Response Time:</strong> Usually within 24 hours
                    </p>
                    <p>
                      <strong>Best Time to Reach:</strong> Monday - Friday, 9 AM - 6 PM PST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg py-6 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                <a href="mailto:shuvadeep.mondal@example.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Me
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg py-6 rounded-full bg-transparent hover:bg-primary/10 transition-all duration-300"
              >
                <a href="/" download>
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
