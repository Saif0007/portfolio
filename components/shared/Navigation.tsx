interface NavigationProps {
  activeSection: string
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}

export const Navigation = ({ activeSection, isScrolled, scrollToSection }: NavigationProps) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#060d1f]/95 backdrop-blur-xl border-emerald-500/20 shadow-[0_1px_30px_rgba(16,185,129,0.08)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-6 rounded-sm bg-emerald-500 inline-block" />
            <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
              Saif <span className="text-emerald-400">Ur Rehman</span>
            </span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
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

          {/* CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}
