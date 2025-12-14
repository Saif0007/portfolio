import { Briefcase, Calendar, MapPin } from "lucide-react"
import { experience } from "@/data/portfolio-data"

interface ExperienceSectionProps {
  isVisible: (id: string) => boolean
}

export const ExperienceSection = ({ isVisible }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          data-animate="experience-header"
          id="experience-header"
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible("experience-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 gradient-text">Experience</h2>
          <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              data-animate={`experience-${index}`}
              id={`experience-${index}`}
              className={`glass rounded-2xl p-6 sm:p-8 hover:bg-background/5 transition-all duration-300 ${
                isVisible(`experience-${index}`)
                  ? `animate-slide-in-up opacity-100 stagger-${index + 1}`
                  : "opacity-0"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`p-2 rounded-xl ${exp.current ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30" : "bg-muted/20"}`}
                  >
                    <Briefcase className={exp.current ? "text-cyan-500" : "text-muted-foreground"} size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-500 mb-1 sm:mb-2">{exp.position}</h3>
                    <h4 className="text-lg font-semibold mb-1 sm:mb-2">{exp.company}</h4>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-emerald-500/10 to-green-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        Current Position
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin size={16} />
                    <span className="font-medium">{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
