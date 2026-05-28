"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}

export const Navigation = ({ activeSection, isScrolled, scrollToSection }: NavigationProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"]

  const handleNav = (item: string) => {
    scrollToSection(item.toLowerCase())
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#060d1f]/95 backdrop-blur-xl border-emerald-500/20 shadow-[0_1px_30px_rgba(16,185,129,0.08)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-6 rounded-sm bg-emerald-500 inline-block" />
            <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
              Saif <span className="text-emerald-400">Ur Rehman</span>
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  activeSection === item.toLowerCase()
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {activeSection === item.toLowerCase() && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400" />
                )}
                {item}
              </button>
            ))}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Hire Me
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-[#060d1f]/98 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.toLowerCase()
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
            <div className="pt-2 border-t border-border">
              <button
                onClick={() => handleNav("contact")}
                className="w-full px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
