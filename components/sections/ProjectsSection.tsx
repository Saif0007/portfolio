import { Github, ExternalLink, Globe } from "lucide-react"
import { projects } from "@/data/portfolio-data"

interface ProjectsSectionProps {
  isVisible: (id: string) => boolean
}

export const ProjectsSection = ({ isVisible }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          data-animate="projects-header"
          id="projects-header"
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible("projects-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 gradient-text">Featured Projects</h2>
          <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                data-animate={`featured-project-${index}`}
                id={`featured-project-${index}`}
                className={`group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 ${
                  isVisible(`featured-project-${index}`)
                    ? `animate-fade-in-scale opacity-100 stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs font-bold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 sm:gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 font-medium text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-medium text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                data-animate={`project-${index}`}
                id={`project-${index}`}
                className={`glass rounded-xl p-5 sm:p-6 hover:scale-105 transition-all duration-300 ${
                  isVisible(`project-${index}`)
                    ? `animate-fade-in-scale opacity-100 stagger-${index + 3}`
                    : "opacity-0"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                    <Globe className="text-cyan-500" size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 sm:mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-1.5 py-0.5 bg-muted/50 text-muted-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1.5 py-0.5 bg-muted/50 text-muted-foreground rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-cyan-500 transition-colors">
                    <Github size={16} />
                  </a>
                  <a href={project.demo} className="text-muted-foreground hover:text-amber-500 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
