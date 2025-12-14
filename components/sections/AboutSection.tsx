"use client"

import { Award, Star } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { containerVariants, slideUpVariants, scaleVariants, fadeInVariants } from "@/lib/animations/variants"

interface AboutSectionProps {
  isVisible: (id: string) => boolean
}

export const AboutSection = ({ isVisible }: AboutSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { number: "3+", label: "Years Experience", color: "text-cyan-500" },
    { number: "25+", label: "Projects Delivered", color: "text-amber-500" },
  ]

  const certifications = [
    "Python For Programmers Course - Codecademy",
    "Django Framework Course - Great Learning",
    "Learn JavaScript Course - Codecademy",
  ]

  return (
    <section id="about" className="py-16 sm:py-20 relative" ref={ref}>
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
            About Me
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              As a <span className="text-cyan-400 font-semibold">Full Stack AI Engineer</span>, I specialize in
              building scalable AI-powered web applications, GPT-based chatbots, and end-to-end automation using LLMs,
              Deep Learning, and NLP. With hands-on expertise in AI model development and full-stack engineering, I've
              delivered intelligent systems that combine real-time AI with modern frontend and backend technologies.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Whether it's fine-tuning LLMs, developing custom RAG systems, or deploying AI apps on the cloud, I bring{" "}
              <span className="text-amber-400 font-semibold">robust, production-ready solutions</span> tailored to your
              business goals. I've worked across FinTech, E-commerce, Healthcare, and EdTech industries, delivering
              end-to-end solutions from AI training to frontend integration.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 sm:p-6 glass rounded-xl cursor-pointer"
                  variants={scaleVariants}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`text-2xl sm:text-3xl font-black ${stat.color} mb-1 sm:mb-2`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.9 + index * 0.1,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground font-medium text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              boxShadow: "0 20px 60px rgba(6, 182, 212, 0.2)",
            }}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Award className="text-amber-500" />
              </motion.div>
              Education & Certifications
            </motion.h3>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                className="border-l-4 border-cyan-500 pl-4 sm:pl-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ x: 10, borderColor: "#22d3ee" }}
              >
                <h4 className="text-xl font-bold text-cyan-500 mb-2">Bachelor of Computer Science</h4>
                <p className="text-foreground font-medium">FAST NUCES, Lahore</p>
                <p className="text-muted-foreground text-sm">August 2018 - June 2022</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Key Coursework: Programming Fundamentals, Design and Analysis of Algorithms, Databases, Object
                  Oriented Programming, Data Structures
                </p>
              </motion.div>

              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20 cursor-pointer"
                    variants={fadeInVariants("left")}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      backgroundColor: "rgba(6, 182, 212, 0.1)",
                      borderColor: "rgba(6, 182, 212, 0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <Star className="text-amber-500 flex-shrink-0" size={16} />
                    </motion.div>
                    <span className="text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
