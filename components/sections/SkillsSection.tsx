"use client"

import { Code, Database, Cloud, Zap, Plug, Wrench, Bot } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { skills } from "@/data/portfolio-data"
import { containerVariants, scaleVariants } from "@/lib/animations/variants"

interface SkillsSectionProps {
  isVisible: (id: string) => boolean
}

export const SkillsSection = ({ isVisible }: SkillsSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "AI & ML",
      icon: Bot,
      skills: skills.ai,
      accent: "emerald",
      iconColor: "text-emerald-400",
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
      glow: "rgba(16, 185, 129, 0.15)",
    },
    {
      title: "Backend",
      icon: Zap,
      skills: skills.backend,
      accent: "teal",
      iconColor: "text-teal-400",
      border: "border-teal-500/20",
      bg: "bg-teal-500/5",
      glow: "rgba(20, 184, 166, 0.15)",
    },
    {
      title: "Frontend",
      icon: Code,
      skills: skills.frontend,
      accent: "sky",
      iconColor: "text-sky-400",
      border: "border-sky-500/20",
      bg: "bg-sky-500/5",
      glow: "rgba(56, 189, 248, 0.15)",
    },
    {
      title: "Databases",
      icon: Database,
      skills: skills.databases,
      accent: "violet",
      iconColor: "text-violet-400",
      border: "border-violet-500/20",
      bg: "bg-violet-500/5",
      glow: "rgba(139, 92, 246, 0.15)",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: skills.cloud,
      accent: "amber",
      iconColor: "text-amber-400",
      border: "border-amber-500/20",
      bg: "bg-amber-500/5",
      glow: "rgba(245, 158, 11, 0.15)",
    },
    {
      title: "Integrations & APIs",
      icon: Plug,
      skills: skills.integrations,
      accent: "rose",
      iconColor: "text-rose-400",
      border: "border-rose-500/20",
      bg: "bg-rose-500/5",
      glow: "rgba(244, 63, 94, 0.15)",
    },
    {
      title: "Dev Tools",
      icon: Wrench,
      skills: skills.tools,
      accent: "slate",
      iconColor: "text-slate-400",
      border: "border-slate-500/20",
      bg: "bg-slate-500/5",
      glow: "rgba(100, 116, 139, 0.15)",
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-emerald-500" />
            <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase">Tech Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl border ${category.border} ${category.bg} p-5 cursor-pointer overflow-hidden`}
              variants={scaleVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 0 30px ${category.glow}`,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Top colored line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent ${category.iconColor} opacity-50`} />

              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{
                    rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <category.icon className={category.iconColor} size={18} />
                </motion.div>
                <h3 className={`text-sm font-bold ${category.iconColor}`}>{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-2 py-0.5 bg-background/60 border border-border/50 rounded text-[11px] text-muted-foreground font-medium"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + index * 0.05 + skillIndex * 0.03,
                      type: "spring",
                      stiffness: 300,
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "#10b981",
                      borderColor: "rgba(16,185,129,0.4)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Corner dot decoration */}
              <motion.div
                className={`absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full ${category.iconColor.replace("text-", "bg-")} opacity-30`}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
