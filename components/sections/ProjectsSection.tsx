import Link from "next/link"
import { ExternalLink, ArrowRight, Globe } from "lucide-react"
import { projects } from "@/data/portfolio-data"

interface ProjectsSectionProps {
  isVisible: (id: string) => boolean
}

export const ProjectsSection = ({ isVisible }: ProjectsSectionProps) => {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div
          id="projects-header"
          data-animate="projects-header"
          className={`mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible("projects-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-emerald-500" />
            <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase">Selected Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Production systems live in the real world — not portfolio demos.
          </p>
        </div>

        {/* Featured Projects — horizontal cards */}
        <div className="space-y-6 mb-14">
          {featured.map((project, index) => (
            <div
              key={index}
              id={`featured-project-${index}`}
              data-animate={`featured-project-${index}`}
              className={`group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-700 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)] ${
                isVisible(`featured-project-${index}`) ? "animate-fade-in-scale opacity-100" : "opacity-0"
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                {/* Image */}
                <div className="relative lg:w-[45%] shrink-0 min-h-[220px] lg:min-h-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/30" />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded-md">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="w-6 h-px bg-border" />
                      {project.demo && project.demo !== "#" && (
                        <span className="flex items-center gap-1 text-xs text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-background border border-border text-muted-foreground rounded-md text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 6 && (
                        <span className="px-2.5 py-1 bg-background border border-border text-muted-foreground rounded-md text-xs font-mono">
                          +{project.tech.length - 6}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl transition-colors font-semibold text-sm"
                      >
                        <Globe size={14} />
                        Live Site
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-emerald-500/50 text-muted-foreground hover:text-emerald-400 rounded-xl transition-all font-semibold text-sm"
                    >
                      Case Study
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section sub-header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-amber-500" />
          <span className="text-amber-400 text-xs font-mono tracking-widest uppercase">More Projects</span>
        </div>

        {/* Other Projects — clean list-style cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((project, index) => (
            <div
              key={index}
              id={`project-${index}`}
              data-animate={`project-${index}`}
              className={`group rounded-xl border border-border bg-card overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.06)] ${
                isVisible(`project-${index}`) ? "animate-fade-in-scale opacity-100" : "opacity-0"
              }`}
            >
              {project.image && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
              )}

              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  {!project.image && (
                    <div className="p-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg shrink-0">
                      <Globe className="text-emerald-500" size={14} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-background border border-border text-muted-foreground rounded text-[10px] font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1.5 py-0.5 bg-background border border-border text-muted-foreground rounded text-[10px] font-mono">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-amber-400 transition-colors"
                    >
                      <ExternalLink size={11} />
                      Live
                    </a>
                  ) : <span />}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    Details
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
