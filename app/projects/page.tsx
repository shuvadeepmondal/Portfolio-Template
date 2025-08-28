import { Navigation } from "@/components/navigation"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsHero } from "@/components/projects-hero"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  )
}
