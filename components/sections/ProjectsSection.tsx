"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { projects } from "@/data/portfolio-data"

const codeSnippets: Record<string, string> = {
  "pioneer-voice-ai": `POST /api/voice/outbound
{ agent: "Penny",
  calls: 50,
  salesforce: "synced ✓" }`,
  "auralis-labs-voice-ai": `ws.on("voice", deepgram)
// tenants: 12
// latency: 180ms
// calendar: synced ✓`,
  "trade-gekko": `LSTM.predict(candles)
// accuracy: 78.4%
// trades: live
{ signal: "BUY" }`,
  "true-mortgages-ai-platform": `POST /api/mortgage/query
{ context: rag_docs,
  answer: claude_v3,
  latency: "320ms" }`,
  "pioneer-commissions-portal": `SELECT earnings
FROM salesforce_sync
WHERE month = current
-- 12 commission types`,
  "contact-lens-rag": `GET /api/lens/recommend
{ sku: "ACUVUE",
  match: 94%,
  source: "RAG" }`,
  "pioneer-license-verification-agent": `playwright.scrape(
  state_board_sites, 48
)
// verified: ✓ live`,
  "prd-generator": `openai.generate(prd)
→ jira.create_ticket()
→ figma.export()
// shipped: ✓`,
  "pioneer-submissions-doc-automation": `salesforce.query(contacts)
→ docx.render(template)
→ pdf.export()
// 100s of docs/run`,
}

export const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const featured = projects.filter(p => p.featured).slice(0, 8)

  return (
    <section id="projects" ref={ref} style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="eyebrow"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(10px)", transition: "opacity .6s, transform .6s" }}
        >
          Selected Work
        </div>

        <h2
          style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px,6vw,72px)",
            lineHeight: 1.05,
            letterSpacing: "-.02em",
            marginBottom: 16,
            marginTop: 16,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(20px)",
            transition: "opacity .7s .1s, transform .7s .1s",
          }}
        >
          Things I&apos;ve shipped that{" "}
          <span style={{ color: "#FFB454" }}>people actually use.</span>
        </h2>

        <p
          style={{
            color: "var(--ink-dim)",
            fontSize: 16,
            marginBottom: 64,
            opacity: isInView ? 1 : 0,
            transition: "opacity .7s .2s",
          }}
        >
          Production systems — live in the real world, not portfolio demos.
        </p>

        <div className="work-grid">
          {featured.map((project, i) => {
            const code = codeSnippets[project.slug] || `// ${project.title}\n// live ✓`
            const isEven = i % 2 === 0
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="project-card"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "none" : `translateY(${isEven ? 28 : 14}px)`,
                  transition: `opacity .7s ${0.1 + i * 0.08}s, transform .7s ${0.1 + i * 0.08}s`,
                }}
                onMouseMove={e => {
                  const el = e.currentTarget as HTMLElement
                  const rect = el.getBoundingClientRect()
                  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
                  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10
                  el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.transform = ""
                }}
              >
                {/* Code thumbnail */}
                <div
                  style={{
                    borderRadius: 10,
                    background: "#0D1017",
                    border: "1px solid rgba(232,230,223,0.07)",
                    padding: "18px 20px",
                    marginBottom: 22,
                    minHeight: 90,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <pre
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 12,
                      lineHeight: 1.7,
                      color: "#8B93C9",
                      margin: 0,
                      whiteSpace: "pre",
                      transition: "transform .4s cubic-bezier(.16,1,.3,1)",
                    }}
                  >
                    {code}
                  </pre>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg,rgba(255,180,84,.06),rgba(139,147,201,.04))",
                      opacity: 0,
                      transition: "opacity .4s",
                      borderRadius: 10,
                    }}
                    className="thumb-overlay"
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    marginBottom: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {project.title}
                  <span
                    style={{
                      fontSize: 18,
                      color: "var(--ink-dim)",
                      transform: "translate(-4px,4px)",
                      opacity: 0,
                      transition: "transform .35s, opacity .35s",
                    }}
                    className="card-arrow"
                  >
                    ↗
                  </span>
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "var(--ink-dim)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 18,
                  }}
                >
                  {project.description.length > 120
                    ? project.description.slice(0, 117) + "…"
                    : project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tech.slice(0, 4).map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: 11,
                        letterSpacing: ".08em",
                        padding: "4px 10px",
                        borderRadius: 100,
                        border: "1px solid var(--line)",
                        color: "var(--ink-dim)",
                        transition: "border-color .3s",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.demo && project.demo !== "#" && (
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: 11,
                        letterSpacing: ".08em",
                        padding: "4px 10px",
                        borderRadius: 100,
                        border: "1px solid rgba(255,180,84,.3)",
                        color: "#FFB454",
                      }}
                    >
                      Live ✓
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
