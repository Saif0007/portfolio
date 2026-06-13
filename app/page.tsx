"use client"

import { useState } from "react"
import { BackgroundElements } from "@/components/shared/BackgroundElements"
import { Cursor } from "@/components/shared/Cursor"
import { Preloader } from "@/components/shared/Preloader"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { Navigation } from "@/components/shared/Navigation"
import { Footer } from "@/components/shared/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ContactSection } from "@/components/sections/ContactSection"

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false)

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
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity .6s" }}>
        <BackgroundElements />
        <Cursor />
        <ScrollProgress />
        <Navigation scrollToSection={scrollToSection} />

        <HeroSection scrollToSection={scrollToSection} downloadResume={downloadResume} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default Portfolio
