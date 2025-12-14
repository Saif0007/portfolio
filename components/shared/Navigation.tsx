interface NavigationProps {
  activeSection: string
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}

export const Navigation = ({ activeSection, isScrolled, scrollToSection }: NavigationProps) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold gradient-text">Saif Ur Rehman</div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base ${
                    activeSection === item.toLowerCase()
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-foreground hover:bg-muted/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
