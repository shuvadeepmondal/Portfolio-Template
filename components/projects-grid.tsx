"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "Full Stack",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    category: "Full Stack",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/taskmanager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "/weather-dashboard.png",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
    category: "Frontend",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/weather",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media API",
    description:
      "RESTful API for a social media platform with authentication, posts, comments, and real-time messaging.",
    image: "/api-documentation-interface.png",
    technologies: ["Express.js", "JWT", "Redis", "PostgreSQL", "Docker"],
    category: "Backend",
    demoUrl: "https://api.example.com/docs",
    githubUrl: "https://github.com/example/social-api",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations and optimized performance.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    category: "Frontend",
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/example/portfolio",
    featured: false,
  },
  {
    id: 6,
    title: "AI Chat Application",
    description:
      "An intelligent chatbot application with natural language processing and machine learning integration.",
    image: "/ai-chatbot-interface.png",
    technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
    category: "AI/ML",
    demoUrl: "https://chat.example.com",
    githubUrl: "https://github.com/example/ai-chat",
    featured: true,
  },
]

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"]

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category))
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
