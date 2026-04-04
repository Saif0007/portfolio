"use client"

import { ArrowRight, Download, Linkedin, Github, Mail, Phone, Briefcase, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import {
  containerVariants,
  slideUpVariants,
  scaleVariants,
} from "@/lib/animations/variants"

interface HeroSectionProps {
  mousePosition: { x: number; y: number }
  isVisible: (id: string) => boolean
  scrollToSection: (sectionId: string) => void
  downloadResume: () => void
}

const techStack = [
  "Next.js", "React", "Python", "FastAPI", "Django",
  "OpenAI", "LangChain", "Retell AI", "Twilio", "Deepgram",
  "ElevenLabs", "Supabase", "PostgreSQL", "Redis", "AWS",
  "Docker", "Stripe", "Salesforce", "TypeScript", "TailwindCSS",
]

export const HeroSection = ({ mousePosition, isVisible, scrollToSection, downloadResume }: HeroSectionProps) => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y1 = useTransform(scrollY, [0, 300], [0, 80])

  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/saif-ur-rehman-404650218",
      label: "LinkedIn",
      color: "hover:border-teal-500/50 hover:text-teal-400",
    },
    {
      icon: Github,
      href: "https://github.com/Saif-Ur-Rehman0",
      label: "GitHub",
      color: "hover:border-slate-400/50 hover:text-slate-300",
    },
    {
      icon: Briefcase,
      href: "https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/",
      label: "Upwork",
      color: "hover:border-green-500/50 hover:text-green-400",
    },
    {
      icon: Mail,
      href: "mailto:syfin008@gmail.com",
      label: "Email",
      color: "hover:border-amber-500/50 hover:text-amber-400",
    },
    {
      icon: Phone,
      href: "tel:+923224016585",
      label: "Phone",
      color: "hover:border-emerald-500/50 hover:text-emerald-400",
    },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
          y: y1,
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          top: "20%",
          right: "5%",
        }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto w-full"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div className="mb-8" variants={slideUpVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div className="mb-6" variants={slideUpVariants}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
            <span className="block text-foreground mb-1">M. Saif</span>
            <span className="block gradient-text">Ur Rehman</span>
          </h1>
        </motion.div>

        {/* Title row */}
        <motion.div className="mb-8 flex flex-wrap items-center justify-center gap-3" variants={slideUpVariants}>
          <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono font-medium">
            Full Stack AI Engineer
          </span>
          <span className="text-border">|</span>
          <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-mono font-medium">
            Voice AI Specialist
          </span>
          <span className="text-border">|</span>
          <span className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-mono font-medium">
            FAST'22
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Building <span className="text-emerald-400 font-semibold">production AI voice agents</span> and{" "}
          <span className="text-purple-400 font-semibold">multi-tenant SaaS platforms</span> that go live — not demos.
          Specialized in <span className="text-amber-400 font-semibold">LLMs, RAG, Voice AI</span>, and end-to-end full-stack engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          variants={containerVariants}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm rounded-xl transition-all duration-200"
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={downloadResume}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border hover:border-emerald-500/50 text-muted-foreground hover:text-foreground font-bold text-sm rounded-xl transition-all duration-200 bg-card/50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-3 mb-14"
          variants={containerVariants}
        >
          {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
            <motion.a
              key={index}
              href={href}
              aria-label={label}
              className={`p-2.5 rounded-lg border border-border text-muted-foreground transition-all duration-200 ${color}`}
              variants={scaleVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Tech Marquee */}
      <div className="w-full border-t border-b border-border/60 py-3 overflow-hidden">
        <div className="flex animate-marquee gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-muted-foreground text-xs font-mono shrink-0"
            >
              <span className="text-emerald-500 text-xs">▸</span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/40"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  )
}
