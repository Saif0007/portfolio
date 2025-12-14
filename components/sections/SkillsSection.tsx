"use client"

import { Code, Database, Cloud, Zap, Users, Bot } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { skills } from "@/data/portfolio-data"
import { containerVariants, scaleVariants } from "@/lib/animations/variants"

interface SkillsSectionProps {
  isVisible: (id: string) => boolean
}

export const SkillsSection = ({ isVisible }: SkillsSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "AI & ML",
      icon: Bot,
      skills: skills.ai,
      color: "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-500",
      hoverGlow: "rgba(168, 85, 247, 0.4)",
    },
    {
      title: "Backend",
      icon: Zap,
      skills: skills.backend,
      color: "from-cyan-500/20 to-teal-500/10",
      iconColor: "text-cyan-500",
      hoverGlow: "rgba(6, 182, 212, 0.4)",
    },
    {
      title: "Frontend",
      icon: Code,
      skills: skills.frontend,
      color: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-500",
      hoverGlow: "rgba(59, 130, 246, 0.4)",
    },
    {
      title: "Databases",
      icon: Database,
      skills: skills.databases,
      color: "from-emerald-500/20 to-green-500/10",
      iconColor: "text-emerald-500",
      hoverGlow: "rgba(16, 185, 129, 0.4)",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: skills.cloud,
      color: "from-amber-500/20 to-orange-500/10",
      iconColor: "text-amber-500",
      hoverGlow: "rgba(251, 191, 36, 0.4)",
    },
    {
      title: "Development Tools",
      icon: Users,
      skills: skills.tools,
      color: "from-rose-500/20 to-red-500/10",
      iconColor: "text-rose-500",
      hoverGlow: "rgba(244, 63, 94, 0.4)",
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-2xl p-5 sm:p-6 cursor-pointer relative`}
              variants={scaleVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: `0 25px 50px ${category.hoverGlow}`,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 0.5 : 0,
                }}
                style={{
                  background: `radial-gradient(circle at center, ${category.hoverGlow}, transparent)`,
                  filter: "blur(20px)",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center mb-3 sm:mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0,
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className={`${category.iconColor} mr-2 sm:mr-3`} size={24} />
                  </motion.div>
                  <h3 className={`text-lg sm:text-xl font-bold ${category.iconColor}`}>{category.title}</h3>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-2 py-1 bg-background/50 backdrop-blur-sm rounded-full text-xs font-medium border border-border/50"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderColor: category.iconColor,
                        y: -3,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Floating corner decoration */}
              <motion.div
                className={`absolute top-2 right-2 w-3 h-3 rounded-full ${category.iconColor.replace("text-", "bg-")} opacity-50`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
