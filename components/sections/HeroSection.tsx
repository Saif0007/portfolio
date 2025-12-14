"use client"

import { Sparkles, ArrowRight, Download, Linkedin, Github, Mail, Phone, Briefcase } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import {
  containerVariants,
  slideUpVariants,
  scaleVariants,
  magneticVariants,
  glowVariants,
  floatVariants,
} from "@/lib/animations/variants"

interface HeroSectionProps {
  mousePosition: { x: number; y: number }
  isVisible: (id: string) => boolean
  scrollToSection: (sectionId: string) => void
  downloadResume: () => void
}

export const HeroSection = ({ mousePosition, isVisible, scrollToSection, downloadResume }: HeroSectionProps) => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/saif-ur-rehman-404650218",
      color: "hover:text-blue-500 hover:bg-blue-500/20 hover:border-blue-500/30 hover:shadow-blue-500/25",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Saif-Ur-Rehman0",
      color:
        "hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-600/20 hover:border-gray-500/30 hover:shadow-gray-500/25",
      label: "GitHub",
    },
    {
      icon: Briefcase,
      href: "https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/",
      color: "hover:text-green-500 hover:bg-green-500/20 hover:border-green-500/30 hover:shadow-green-500/25",
      label: "Upwork",
    },
    {
      icon: Mail,
      href: "mailto:syfin008@gmail.com",
      color: "hover:text-amber-500 hover:bg-amber-500/20 hover:border-amber-500/30 hover:shadow-amber-500/25",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+923224016585",
      color: "hover:text-emerald-500 hover:bg-emerald-500/20 hover:border-emerald-500/30 hover:shadow-emerald-500/25",
      label: "Phone",
    },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Animated Background Blobs with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/20 to-blue-500/15 rounded-full blur-3xl opacity-50"
          style={{ y: y1, x: mousePosition.x * 0.02, top: "-15%", left: "-15%" }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-amber-400/15 to-orange-500/10 rounded-full blur-3xl opacity-40"
          style={{ y: y2, x: mousePosition.x * -0.015, top: "30%", right: "-10%" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-400/15 to-pink-500/10 rounded-full blur-3xl opacity-30"
          style={{ y: y1, bottom: "10%", left: "50%" }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      <motion.div
        className="text-center z-10 px-4 sm:px-6 max-w-6xl mx-auto relative"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Available Badge with Glow */}
        <motion.div className="mb-6 sm:mb-8" variants={slideUpVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-400 rounded-full text-xs sm:text-sm font-medium shadow-lg"
            variants={glowVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Sparkles size={10} className="sm:w-3 sm:h-3" />
            </motion.div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Available for new opportunities
            </span>
            <motion.div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Animated Name */}
        <motion.div className="mb-8 sm:mb-10" variants={slideUpVariants}>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] mb-6 sm:mb-8">
            <div className="mb-2 sm:mb-3">
              <motion.span
                className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 dark:from-gray-100 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent drop-shadow-2xl inline-block mr-7"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                M. Saif
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 },
                  x: { duration: 0.8, delay: 0.4 },
                  backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Ur Rehman
              </motion.span>
            </div>
          </motion.h1>
        </motion.div>

        {/* Title with Animated Gradient */}
        <motion.div className="mb-10 sm:mb-12" variants={slideUpVariants}>
          <motion.div
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              className="bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Full Stack AI Engineer
            </motion.span>
            <span className="mx-2 sm:mx-3 text-cyan-500 text-lg sm:text-xl md:text-2xl lg:text-3xl">|</span>
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              FAST'22
            </span>
          </motion.div>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* Description */}
        <motion.div className="mb-12 sm:mb-16" variants={slideUpVariants}>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Building scalable{" "}
            <motion.span
              className="text-cyan-400 font-semibold"
              whileHover={{ scale: 1.05, color: "#22d3ee" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AI-powered applications, GPT-based chatbots
            </motion.span>
            , and intelligent automation systems.
            <br className="hidden sm:block" />
            Specialized in{" "}
            <motion.span
              className="text-purple-400 font-semibold"
              whileHover={{ scale: 1.05, color: "#c084fc" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              LLMs, RAG, Deep Learning
            </motion.span>
            ,{" "}
            <motion.span
              className="text-amber-400 font-semibold"
              whileHover={{ scale: 1.05, color: "#fbbf24" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              full-stack development
            </motion.span>
            , and{" "}
            <motion.span
              className="text-emerald-400 font-semibold"
              whileHover={{ scale: 1.05, color: "#34d399" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              cloud deployment
            </motion.span>
            .
          </motion.p>
        </motion.div>

        {/* CTA Buttons with Magnetic Effect */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-16 sm:mb-20 px-2"
          variants={containerVariants}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="group relative px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-2xl overflow-hidden font-bold text-sm sm:text-base md:text-lg"
            variants={scaleVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredButton("projects")}
            onHoverEnd={() => setHoveredButton(null)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: hoveredButton === "projects" ? "100%" : "-100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <motion.div
                animate={{ rotate: hoveredButton === "projects" ? 12 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.div>
              View My Work
              <motion.div
                animate={{ x: hoveredButton === "projects" ? 8 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            onClick={downloadResume}
            className="group relative px-5 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-cyan-500/30 bg-card/80 backdrop-blur-sm text-card-foreground rounded-2xl font-bold text-sm sm:text-base md:text-lg overflow-hidden"
            variants={scaleVariants}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(6, 182, 212, 0.6)",
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredButton("resume")}
            onHoverEnd={() => setHoveredButton(null)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredButton === "resume" ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <motion.div
                animate={{ y: hoveredButton === "resume" ? -4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.div>
              Download Resume
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links with 3D Hover */}
        <motion.div
          className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6"
          variants={containerVariants}
        >
          {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
            <motion.a
              key={index}
              href={href}
              className={`group relative p-2.5 sm:p-3 md:p-4 glass rounded-2xl ${color} transition-all duration-500 shadow-lg border border-border/50`}
              aria-label={label}
              variants={scaleVariants}
              whileHover={{
                scale: 1.15,
                y: -8,
                rotateZ: index % 2 === 0 ? 5 : -5,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Icon size={18} className="sm:w-5 sm:h-5 transition-transform duration-300" />
              </motion.div>
              <motion.div
                className="absolute -inset-1 rounded-2xl opacity-0 blur-sm -z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
