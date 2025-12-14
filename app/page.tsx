"use client"

import { useEffect } from "react"
import { useScrollTracking, useMousePosition, useVisibilityObserver } from "@/lib/hooks/usePortfolio"
import { BackgroundElements } from "@/components/shared/BackgroundElements"
import { Navigation } from "@/components/shared/Navigation"
import { Footer } from "@/components/shared/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ContactSection } from "@/components/sections/ContactSection"

const Portfolio = () => {
  const { activeSection, isScrolled } = useScrollTracking()
  const mousePosition = useMousePosition()
  const { isVisible } = useVisibilityObserver()

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Saif_Ur_Rehman_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundElements mousePosition={mousePosition} />

      <Navigation activeSection={activeSection} isScrolled={isScrolled} scrollToSection={scrollToSection} />

      <HeroSection
        mousePosition={mousePosition}
        isVisible={isVisible}
        scrollToSection={scrollToSection}
        downloadResume={downloadResume}
      />

      <AboutSection isVisible={isVisible} />

      <SkillsSection isVisible={isVisible} />

      <ProjectsSection isVisible={isVisible} />

      <ExperienceSection isVisible={isVisible} />

      <ContactSection isVisible={isVisible} />

      <Footer />
    </div>
  )
}

export default Portfolio
