"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { experience } from "@/data/portfolio-data"

const EASE = [0.16, 1, 0.3, 1] as const

export const ExperienceSection = () => {
  const fillRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const fill = fillRef.current
    const section = sectionRef.current
    if (!fill || !section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowH = window.innerHeight
      const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (rect.height + windowH * 0.4)))
      fill.style.height = progress * 100 + "%"
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px)",
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
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
          Experience
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
            Where I&apos;ve <span style={{ color: "#FFB454" }}>been.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: 820 }}>
          {/* Track */}
          <div style={{ position: "absolute", left: 7, top: 6, bottom: 6, width: 1, background: "var(--line)" }} />
          {/* Scroll-driven amber fill */}
          <div ref={fillRef} className="timeline-fill" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
              style={{
                position: "relative",
                paddingLeft: 44,
                paddingBottom: i < experience.length - 1 ? 56 : 0,
              }}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.12 + 0.2 }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 6,
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  border: "2px solid #FFB454",
                  background: exp.current ? "#FFB454" : "var(--bg)",
                  boxShadow: exp.current ? "0 0 18px rgba(255,180,84,.55)" : "none",
                  zIndex: 1,
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ x: 6, borderColor: "rgba(255,180,84,.25)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                  padding: "20px 24px",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  background: "var(--bg)",
                  transition: "border-color .3s",
                }}
              >
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".14em", color: "#FFB454", textTransform: "uppercase", marginBottom: 8 }}>
                  {exp.current ? "Present" : exp.duration}
                  {exp.current && (
                    <span style={{ marginLeft: 12, display: "inline-flex", alignItems: "center", gap: 5, verticalAlign: "middle" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FFB454", display: "inline-block", animation: "ping-amber 1.8s cubic-bezier(0,0,.2,1) infinite" }} />
                      <span style={{ color: "var(--ink-dim)", fontSize: 11, letterSpacing: ".08em" }}>Active</span>
                    </span>
                  )}
                </div>

                <h3 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 4 }}>
                  {exp.position}
                </h3>
                <div style={{ color: "var(--cool)", fontSize: 14, marginBottom: 12 }}>
                  {exp.company} · {exp.location}
                </div>
                {exp.description && (
                  <p style={{ color: "var(--ink-dim)", fontSize: 15, lineHeight: 1.7, maxWidth: 600 }}>
                    {exp.description}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
