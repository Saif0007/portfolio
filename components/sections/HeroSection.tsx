"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Github, Linkedin, Briefcase } from "lucide-react"

const techStack = [
  "Next.js", "FastAPI", "Python", "LangChain", "OpenAI", "Retell AI",
  "Twilio", "Deepgram", "ElevenLabs", "Supabase", "PostgreSQL", "Redis",
  "AWS", "Docker", "Salesforce", "Stripe", "TypeScript", "TailwindCSS",
]

interface HeroSectionProps {
  scrollToSection: (id: string) => void
  downloadResume: () => void
}

export const HeroSection = ({ scrollToSection, downloadResume }: HeroSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const rawY = useTransform(scrollY, [0, 600], [0, -90])
  const parallaxY = useSpring(rawY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext("2d")
    if (!ctx) return

    type Dot = { x: number; y: number; ox: number; oy: number }
    let dots: Dot[] = []
    let mx = -999, my = -999
    let animId: number
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const buildGrid = () => {
      cv.width = cv.offsetWidth * window.devicePixelRatio
      cv.height = cv.offsetHeight * window.devicePixelRatio
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
      dots = []
      const gap = 46
      for (let x = gap / 2; x < cv.offsetWidth; x += gap)
        for (let y = gap / 2; y < cv.offsetHeight; y += gap)
          dots.push({ x, y, ox: x, oy: y })
    }
    buildGrid()

    const handleResize = () => buildGrid()
    window.addEventListener("resize", handleResize)

    const parent = cv.parentElement
    const onMove = (e: MouseEvent) => {
      const r = cv.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
    }
    const onLeave = () => { mx = -999; my = -999 }
    parent?.addEventListener("mousemove", onMove)
    parent?.addEventListener("mouseleave", onLeave)

    const draw = () => {
      ctx.clearRect(0, 0, cv.offsetWidth, cv.offsetHeight)
      for (const d of dots) {
        const dx = d.ox - mx, dy = d.oy - my
        const dist = Math.hypot(dx, dy)
        const force = Math.max(0, 1 - dist / 180)
        if (!reduced) {
          d.x += (d.ox + (dx / (dist || 1)) * force * 26 - d.x) * 0.12
          d.y += (d.oy + (dy / (dist || 1)) * force * 26 - d.y) * 0.12
        }
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.2 + force * 1.8, 0, Math.PI * 2)
        ctx.fillStyle = force > 0.05
          ? `rgba(255,180,84,${0.25 + force * 0.7})`
          : "rgba(139,147,201,0.2)"
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener("resize", handleResize)
      parent?.removeEventListener("mousemove", onMove)
      parent?.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(animId)
    }
  }, [])

  const rowVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const wordVariant = {
    hidden: { y: "110%" },
    visible: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="hero" ref={sectionRef} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", padding: "140px clamp(20px,5vw,64px) 0" }}>
      {/* Dot grid canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.55, width: "100%", height: "100%" }}
      />

      <motion.div style={{ position: "relative", zIndex: 1, maxWidth: 900, y: parallaxY }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", border: "1px solid var(--line)", borderRadius: 100, padding: "8px 18px", marginBottom: 38, background: "rgba(17,20,31,.6)" }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFB454", position: "relative", flexShrink: 0 }}>
            <span style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "1px solid #FFB454", animation: "ping-amber 1.8s cubic-bezier(0,0,.2,1) infinite" }} />
          </span>
          Available for new projects · Lahore / Remote
        </motion.div>

        {/* Hero headline */}
        <motion.h1
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "clamp(52px,10.5vw,140px)", lineHeight: 0.95, letterSpacing: "-.02em", textTransform: "uppercase", marginBottom: 40 }}
        >
          <span className="hero-row">
            <motion.span variants={wordVariant} style={{ display: "inline-block" }}>
              Full Stack
            </motion.span>
          </span>
          <span className="hero-row">
            <motion.span variants={wordVariant} style={{ display: "inline-block", color: "transparent", WebkitTextStroke: "1.5px var(--ink)" }}>
              AI &amp;
            </motion.span>
          </span>
          <span className="hero-row">
            <motion.span variants={wordVariant} style={{ display: "inline-block" }}>
              Systems{" "}
              <span style={{ color: "#FFB454" }}>Builder</span>
            </motion.span>
          </span>
        </motion.h1>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between" }}
        >
          <p style={{ maxWidth: 440, color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.6 }}>
            I&apos;m <span style={{ color: "var(--ink)", fontWeight: 600 }}>Saif Ur Rehman</span> — I design, build and ship production AI systems end-to-end:{" "}
            <span style={{ color: "#FFB454" }}>RAG pipelines</span>, voice agents, multi-tenant SaaS, and full-stack applications that run in the real world.
          </p>

          {/* Scroll hint */}
          <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ink-dim)", display: "flex", alignItems: "center", gap: 12 }}>
            Scroll{" "}
            <span style={{ display: "block", width: 1, height: 46, background: "var(--line)" }} className="scroll-drip" />
          </div>
        </motion.div>

        {/* CTA + social row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 48 }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#0A0C14", background: "#FFB454", padding: "14px 28px", borderRadius: 100, border: "none", cursor: "pointer", transition: "transform .3s, box-shadow .3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(255,180,84,.4)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "" }}
          >
            View Work
          </button>
          <button
            onClick={downloadResume}
            style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-dim)", background: "none", padding: "13px 28px", borderRadius: 100, border: "1px solid var(--line)", cursor: "pointer", transition: "border-color .3s, color .3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,180,84,.5)"; (e.currentTarget as HTMLElement).style.color = "var(--ink)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; (e.currentTarget as HTMLElement).style.color = "var(--ink-dim)" }}
          >
            Resume
          </button>

          <div style={{ display: "flex", gap: 12, marginLeft: 4 }}>
            {[
              { icon: Github, href: "https://github.com/Saif-Ur-Rehman0", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/saif-ur-rehman-404650218", label: "LinkedIn" },
              { icon: Briefcase, href: "https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/", label: "Upwork" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1px solid var(--line)", color: "var(--ink-dim)", transition: "border-color .3s, color .3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,180,84,.5)"; (e.currentTarget as HTMLElement).style.color = "#FFB454" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; (e.currentTarget as HTMLElement).style.color = "var(--ink-dim)" }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Rotating badge */}
      <div style={{ position: "absolute", right: "clamp(20px,6vw,80px)", bottom: 120, width: 128, height: 128, zIndex: 2 }} className="hidden lg:block">
        <svg viewBox="0 0 120 120" width="100%" height="100%" className="rotating-badge">
          <defs>
            <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
          </defs>
          <text>
            <textPath href="#circ" style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10.5, letterSpacing: ".28em", fill: "var(--ink-dim)", textTransform: "uppercase" }}>
              open to work · open to work ·{" "}
            </textPath>
          </text>
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, color: "#FFB454" }}>
          ✦
        </div>
      </div>

      {/* Tech marquee */}
      <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", overflow: "hidden", padding: "22px 0", background: "var(--surface)", display: "flex", whiteSpace: "nowrap", marginTop: 80 }}>
        <div style={{ display: "flex", animation: "scrollx 32s linear infinite" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-dim)", padding: "0 28px", display: "flex", alignItems: "center", gap: 28 }}
            >
              {tech}
              <span style={{ color: "#FFB454", fontSize: 8 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
