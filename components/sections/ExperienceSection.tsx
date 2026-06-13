"use client"

import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import { experience } from "@/data/portfolio-data"

export const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    const fill = fillRef.current
    const section = sectionRef.current
    if (!fill || !section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowH = window.innerHeight
      const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (rect.height + windowH * 0.5)))
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
      style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px)", background: "var(--surface)", borderTop: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <div
          className="eyebrow"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(10px)", transition: "opacity .6s, transform .6s" }}
        >
          Experience
        </div>

        <h2
          style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px,6vw,72px)",
            lineHeight: 1.05,
            letterSpacing: "-.02em",
            marginBottom: 64,
            marginTop: 16,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(20px)",
            transition: "opacity .7s .1s, transform .7s .1s",
          }}
        >
          Where I&apos;ve <span style={{ color: "#FFB454" }}>been.</span>
        </h2>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: 820,
          }}
        >
          {/* Static track line */}
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 6,
              bottom: 6,
              width: 1,
              background: "var(--line)",
            }}
          />
          {/* Amber fill */}
          <div
            ref={fillRef}
            className="timeline-fill"
          />

          {experience.map((exp, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                paddingLeft: 44,
                paddingBottom: i < experience.length - 1 ? 54 : 0,
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : "translateY(20px)",
                transition: `opacity .7s ${0.2 + i * 0.15}s, transform .7s ${0.2 + i * 0.15}s`,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 6,
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  border: `2px solid #FFB454`,
                  background: exp.current ? "#FFB454" : "var(--bg)",
                  boxShadow: exp.current ? "0 0 16px rgba(255,180,84,.5)" : "none",
                  zIndex: 1,
                }}
              />

              {/* Role label */}
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 12,
                  letterSpacing: ".14em",
                  color: "#FFB454",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {exp.current ? "Present" : exp.duration}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  marginBottom: 4,
                }}
              >
                {exp.position}
              </h3>

              <div
                style={{
                  color: "var(--cool)",
                  fontSize: 14,
                  marginBottom: 12,
                }}
              >
                {exp.company} · {exp.location}
              </div>

              {exp.description && (
                <p
                  style={{
                    color: "var(--ink-dim)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    maxWidth: 600,
                  }}
                >
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
