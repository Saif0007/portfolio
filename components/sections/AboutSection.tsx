"use client"

import { useRef, useEffect, useState } from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

const EASE = [0.16, 1, 0.3, 1] as const

const skillRows = [
  { name: "Frontend", meta: "React · Next.js · TypeScript · Tailwind" },
  { name: "Backend", meta: "Python · FastAPI · Django · Node" },
  { name: "AI / ML", meta: "LangChain · OpenAI · RAG · Voice Agents" },
  { name: "Infra", meta: "AWS · Docker · PostgreSQL · Redis" },
  { name: "Integrations", meta: "Salesforce · Twilio · Stripe · Retell AI" },
]

const stats = [
  { target: 30, label: "Projects shipped", suffix: "+" },
  { target: 10, label: "Industries served", suffix: "+" },
  { target: 100, label: "Client satisfaction", suffix: "%" },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let current = 0
    const interval = Math.max(12, Math.floor(1600 / target))
    const timer = setInterval(() => {
      current++
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [active, target])
  return <>{count}{suffix}</>
}

function StatCard({ target, suffix, label, index, active }: { target: number; suffix: string; label: string; index: number; active: boolean }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 400, damping: 30 })
  const sy = useSpring(my, { stiffness: 400, damping: 30 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6])

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.94 },
        visible: {
          opacity: 1, y: 0, scale: 1,
          transition: { duration: 0.6, ease: EASE, delay: index * 0.1 },
        },
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ borderColor: "rgba(255,180,84,.4)", y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      className="stat-card"
      style={{
        border: "1px solid var(--line)",
        borderRadius: 14,
        padding: "22px 18px",
        background: "var(--bg)",
        cursor: "default",
      } as React.CSSProperties}
    >
      <div style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.4vw,44px)", color: "#FFB454", lineHeight: 1 }}>
        <Counter target={target} suffix={suffix} active={active} />
      </div>
      <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", marginTop: 6 }}>
        {label}
      </div>
    </motion.div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const rowVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
}

export const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          About
        </motion.div>

        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px,6vw,72px)",
              lineHeight: 1.05,
              letterSpacing: "-.02em",
              marginBottom: 64,
              marginTop: 16,
            }}
          >
            Engineering with <span style={{ color: "#FFB454" }}>taste.</span>
          </motion.h2>
        </div>

        <div className="about-grid">
          {/* Left — bio + stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <p style={{ fontSize: "clamp(17px,2.2vw,22px)", lineHeight: 1.65, color: "var(--ink)", marginBottom: 44 }}>
              I work across the whole stack — from{" "}
              <span style={{ color: "#FFB454" }}>database schema</span> to the{" "}
              <span style={{ color: "#FFB454" }}>last pixel</span>. I build production AI systems,
              voice agents, multi-tenant SaaS platforms, and full-stack applications — end-to-end, shipped and live.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}
            >
              {stats.map((s, i) => (
                <StatCard key={i} index={i} target={s.target} suffix={s.suffix} label={s.label} active={isInView} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right — skill rows + education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          >
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {skillRows.map((row, i) => (
                <motion.div
                  key={i}
                  variants={rowVariant}
                  className="skill-row-item"
                  whileHover={{ paddingLeft: 16, backgroundColor: "rgba(255,180,84,.04)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <span style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: 20 }}>
                    {row.name}
                  </span>
                  <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, color: "var(--ink-dim)", letterSpacing: ".08em", textAlign: "right" }}>
                    {row.meta}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
              whileHover={{ borderColor: "rgba(255,180,84,.25)" }}
              style={{ marginTop: 36, padding: 24, border: "1px solid var(--line)", borderRadius: 14, background: "var(--bg)", transition: "border-color .3s" }}
            >
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#FFB454", marginBottom: 12 }}>
                Education
              </div>
              <div style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: 18 }}>
                Bachelor of Computer Science
              </div>
              <div style={{ color: "var(--cool)", fontSize: 14, marginTop: 4 }}>FAST NUCES, Lahore</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
