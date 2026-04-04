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
    const printWindow = window.open("/resume.html", "_blank")
    printWindow?.addEventListener("load", () => {
      printWindow.print()
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundElements mousePosition={mousePosition} />

      <Navigation activeSection={activeSection} isScrolled={isScrolled} scrollToSection={scrollToSection} />

      {/* Back to top button */}
      {activeSection !== "hero" && (
        <button
          onClick={() => scrollToSection("hero")}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-200 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}

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
