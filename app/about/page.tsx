import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { PersonalSection } from "@/components/personal-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <PersonalSection />
    </main>
  )
}
