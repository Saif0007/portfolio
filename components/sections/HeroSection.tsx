"use client"

import { ArrowRight, Download, Linkedin, Github, Mail, Phone, Briefcase } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { containerVariants, slideUpVariants, scaleVariants } from "@/lib/animations/variants"

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

const codeLines = [
  { tokens: [{ t: "# Full Stack AI Platform", c: "text-muted-foreground" }] },
  { tokens: [{ t: "from ", c: "text-purple-400" }, { t: "langchain", c: "text-emerald-400" }, { t: " import ", c: "text-purple-400" }, { t: "RAGPipeline", c: "text-teal-400" }] },
  { tokens: [{ t: "from ", c: "text-purple-400" }, { t: "openai", c: "text-emerald-400" }, { t: " import ", c: "text-purple-400" }, { t: "GPT4", c: "text-teal-400" }] },
  { tokens: [] },
  { tokens: [{ t: "async def ", c: "text-purple-400" }, { t: "build_ai_feature", c: "text-emerald-400" }, { t: "(req):", c: "text-foreground" }] },
  { tokens: [{ t: "    context ", c: "text-foreground" }, { t: "= await ", c: "text-amber-400" }, { t: "RAGPipeline", c: "text-teal-400" }, { t: ".query(req)", c: "text-foreground" }] },
  { tokens: [{ t: "    response ", c: "text-foreground" }, { t: "= await ", c: "text-amber-400" }, { t: "GPT4", c: "text-teal-400" }, { t: ".complete(", c: "text-foreground" }] },
  { tokens: [{ t: "        prompt", c: "text-emerald-400" }, { t: "=context, ", c: "text-foreground" }, { t: "stream", c: "text-emerald-400" }, { t: "=", c: "text-foreground" }, { t: "True", c: "text-amber-400" }] },
  { tokens: [{ t: "    )", c: "text-foreground" }] },
  { tokens: [{ t: "    return ", c: "text-purple-400" }, { t: "StreamingResponse", c: "text-teal-400" }, { t: "(response)", c: "text-foreground" }] },
]


export const HeroSection = ({ mousePosition, isVisible, scrollToSection, downloadResume }: HeroSectionProps) => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const yParallax = useTransform(scrollY, [0, 300], [0, 60])

  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/saif-ur-rehman-404650218", label: "LinkedIn", color: "hover:border-teal-500/50 hover:text-teal-400" },
    { icon: Github, href: "https://github.com/Saif-Ur-Rehman0", label: "GitHub", color: "hover:border-slate-400/50 hover:text-slate-300" },
    { icon: Briefcase, href: "https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/", label: "Upwork", color: "hover:border-green-500/50 hover:text-green-400" },
    { icon: Mail, href: "mailto:syfin008@gmail.com", label: "Email", color: "hover:border-amber-500/50 hover:text-amber-400" },
    { icon: Phone, href: "tel:+923224016585", label: "Phone", color: "hover:border-emerald-500/50 hover:text-emerald-400" },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-4"
    >
      {/* Subtle grid */}
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
          background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          top: "5%", left: "0%",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          bottom: "10%", right: "5%",
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 w-full"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Status badge */}
            <motion.div className="mb-7" variants={slideUpVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div className="mb-5" variants={slideUpVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="block text-foreground mb-1">M. Saif</span>
                <span className="block gradient-text">Ur Rehman</span>
              </h1>
            </motion.div>

            {/* Title tags */}
            <motion.div className="flex flex-wrap gap-2 mb-6" variants={slideUpVariants}>
              <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                Full Stack AI Engineer
              </span>
              <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
                SaaS & AI Systems
              </span>
              <span className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium">
                FAST'22
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Building <span className="text-emerald-400 font-semibold">intelligent AI-powered products</span> from backend APIs to production — RAG systems,{" "}
              <span className="text-purple-400 font-semibold">multi-tenant SaaS platforms</span>, LLM integrations, and full-stack applications that scale.
              Specialized in <span className="text-amber-400 font-semibold">AI, full-stack engineering</span>, and turning complex requirements into clean, shipped systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              variants={containerVariants}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm rounded-xl transition-all duration-200"
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(16,185,129,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={downloadResume}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-emerald-500/50 text-muted-foreground hover:text-foreground font-bold text-sm rounded-xl transition-all duration-200 bg-card/50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-2" variants={containerVariants}>
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
                  <Icon size={15} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Animated code visual ── */}
          <motion.div
            className="flex items-center justify-center order-1 lg:order-2"
            style={{ y: yParallax }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {/* Inner wrapper — stat cards anchor to this */}
            <div className="relative w-full max-w-[440px] mx-auto">
            {/* Outer glow ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] rounded-full border border-emerald-500/10 animate-spin-slow" />
            </div>

            {/* Main terminal card */}
            <div className="relative w-full rounded-2xl border border-border bg-[#0a1628] shadow-[0_0_60px_rgba(16,185,129,0.1)] overflow-hidden">

              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#060d1f]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-[11px] text-muted-foreground font-mono">ai_feature.py</span>
                <span className="ml-auto text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  running
                </span>
              </div>

              {/* Code lines */}
              <div className="px-5 py-5 font-mono text-[12px] leading-6 space-y-0.5">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    className="flex"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.3 }}
                  >
                    <span className="text-muted-foreground/30 w-6 shrink-0 text-right mr-4 select-none text-[10px] leading-6">{i + 1}</span>
                    <span className="whitespace-pre">
                      {line.tokens.map((tok, j) => (
                        <span key={j} className={tok.c}>{tok.t}</span>
                      ))}
                    </span>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  className="flex mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <span className="text-muted-foreground/30 w-6 shrink-0 text-right mr-4 text-[10px] leading-6 select-none">
                    {codeLines.length + 1}
                  </span>
                  <motion.span
                    className="w-2 h-4 bg-emerald-400 inline-block self-center"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center gap-3 px-5 py-2 border-t border-border bg-[#060d1f] text-[10px] font-mono">
                <span className="text-emerald-400">✓ 0 errors</span>
                <span className="text-muted-foreground/50">|</span>
                <span className="text-muted-foreground">Python 3.11</span>
                <span className="text-muted-foreground/50">|</span>
                <span className="text-amber-400">FastAPI</span>
              </div>
            </div>

            {/* Stat cards — anchored to terminal corners */}
            <motion.div
              className="absolute -bottom-5 -left-5 flex items-center gap-3 px-4 py-3 rounded-xl border border-emerald-500/20 bg-card/95 backdrop-blur-sm shadow-xl z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-2xl font-black text-emerald-400">25+</div>
              <div className="text-[10px] text-muted-foreground font-medium leading-tight">Projects<br />Shipped</div>
            </motion.div>

            <motion.div
              className="absolute -top-5 -right-5 flex items-center gap-3 px-4 py-3 rounded-xl border border-purple-500/20 bg-card/95 backdrop-blur-sm shadow-xl z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="text-2xl font-black text-purple-400">3+</div>
              <div className="text-[10px] text-muted-foreground font-medium leading-tight">Years<br />Experience</div>
            </motion.div>

            </div>{/* end inner wrapper */}
          </motion.div>
        </div>
      </motion.div>

      {/* Tech Marquee */}
      <div className="w-full border-t border-b border-border/60 py-3 overflow-hidden mt-10">
        <div className="flex animate-marquee gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-muted-foreground text-xs font-mono shrink-0">
              <span className="text-emerald-500 text-xs">▸</span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
