import { Briefcase, Calendar, MapPin } from "lucide-react"
import { experience } from "@/data/portfolio-data"

interface ExperienceSectionProps {
  isVisible: (id: string) => boolean
}

export const ExperienceSection = ({ isVisible }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div
          id="experience-header"
          data-animate="experience-header"
          className={`mb-14 transition-all duration-700 ${
            isVisible("experience-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-amber-400 text-xs font-mono tracking-widest uppercase">Work History</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-10 sm:pl-14">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/30 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div
                key={index}
                id={`experience-${index}`}
                data-animate={`experience-${index}`}
                className={`relative transition-all duration-700 ${
                  isVisible(`experience-${index}`)
                    ? `animate-slide-in-up opacity-100 stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-10 sm:-left-14 top-1 flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 z-10 ${
                      exp.current
                        ? "bg-emerald-500 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                        : "bg-card border-border"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-border bg-background hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)] overflow-hidden">
                  {/* Top accent bar */}
                  {exp.current && (
                    <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                  )}

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-xl shrink-0 ${
                          exp.current
                            ? "bg-emerald-500/10 border border-emerald-500/20"
                            : "bg-muted/20 border border-border"
                        }`}>
                          <Briefcase className={exp.current ? "text-emerald-400" : "text-muted-foreground"} size={18} />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-emerald-400 leading-tight">
                            {exp.position}
                          </h3>
                          <h4 className="text-base font-semibold text-foreground mt-0.5">{exp.company}</h4>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col sm:items-end gap-3 sm:gap-1.5 shrink-0">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin size={12} />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
