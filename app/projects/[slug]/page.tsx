import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Phone, Globe, Code, Shield, Check } from "lucide-react"
import { projects } from "@/data/portfolio-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Saif Ur Rehman`,
    description: project.description,
  }
}

// ── Shared style helpers ───────────────────────────────────────────────────
const syne: React.CSSProperties = { fontFamily: "var(--font-syne), Syne, sans-serif" }
const mono: React.CSSProperties = { fontFamily: "var(--font-jetbrains), monospace" }
const eyebrow: React.CSSProperties = { ...mono, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#FFB454" }

// ─────────────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const isPioneer   = project.slug === "pioneer-voice-ai"
  const isAuralis   = project.slug === "auralis-labs-voice-ai"
  const isVoiceProj = isPioneer || isAuralis

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--ink)" }}>

      {/* Ambient orb */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "-10%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,180,84,.06) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto", padding: "clamp(24px,5vw,48px) clamp(20px,5vw,64px) 80px" }}>

        {/* Back link */}
        <Link
          href="/#projects"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--ink-dim)", textDecoration: "none", ...mono, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 48, transition: "color .3s" }}
          className="detail-back-link"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {project.featured && (
              <span style={{ ...mono, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, border: "1px solid rgba(255,180,84,.4)", color: "#FFB454", background: "rgba(255,180,84,.08)" }}>
                Featured Project
              </span>
            )}
            {isAuralis && (
              <span style={{ ...mono, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, border: "1px solid var(--line)", color: "var(--cool)", background: "rgba(139,147,201,.06)" }}>
                B2B SaaS · Multi-Tenant
              </span>
            )}
            {isPioneer && (
              <span style={{ ...mono, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, border: "1px solid var(--line)", color: "var(--cool)", background: "rgba(139,147,201,.06)" }}>
                Healthcare Recruitment
              </span>
            )}
          </div>

          <h1 style={{ ...syne, fontWeight: 800, fontSize: "clamp(32px,6vw,64px)", lineHeight: 1.06, letterSpacing: "-.02em", marginBottom: 20 }}>
            {project.title}
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-dim)", maxWidth: 720, marginBottom: 24 }}>
            {project.description}
          </p>

          {/* Auralis test phone */}
          {isAuralis && project.testPhone && (
            <a
              href={`tel:${project.testPhone.replace(/[\s()+-]/g, "")}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,180,84,.25)", color: "#FFB454", ...mono, fontSize: 13, textDecoration: "none", background: "rgba(255,180,84,.05)", marginBottom: 24 }}
            >
              <Phone size={14} />
              Test tenant: {project.testPhone}
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FFB454", animation: "ping-amber 1.8s cubic-bezier(0,0,.2,1) infinite", flexShrink: 0 }} />
            </a>
          )}

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#FFB454", color: "#0A0C14", ...mono, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", borderRadius: 100, textDecoration: "none", fontWeight: 700, transition: "transform .3s, box-shadow .3s" }}
                className="detail-cta-primary"
              >
                <Globe size={15} />
                Live Website
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 24px", border: "1px solid var(--line)", color: "var(--ink-dim)", ...mono, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", borderRadius: 100, textDecoration: "none", transition: "border-color .3s, color .3s" }}
                className="detail-cta-secondary"
              >
                <Code size={15} />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,180,84,.25), transparent)", marginBottom: 56 }} />

        {/* ── Screenshot / Image ─────────────────────────────────────────── */}
        {!project.noDetailImage && (project.images?.length || project.image) && (
          <section style={{ marginBottom: 56 }}>
            <div style={{ display: "grid", gridTemplateColumns: (project.images?.length ?? 0) > 1 ? "repeat(2,1fr)" : "1fr", gap: 16 }}>
              {(project.images ?? (project.image ? [project.image] : [])).map((src, i) => (
                <div key={i} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} style={{ width: "100%", display: "block", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Tech Stack ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ ...eyebrow, marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 28, height: 1, background: "#FFB454", display: "inline-block" }} />
            Tech Stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tech.map((t) => (
              <span key={t} style={{ ...mono, fontSize: 12, letterSpacing: ".08em", padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", color: "var(--ink-dim)", background: "var(--surface)", transition: "border-color .3s, color .3s" }} className="detail-tag">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── Overview ───────────────────────────────────────────────────── */}
        {project.overview && (
          <section style={{ marginBottom: 56 }}>
            <div style={{ ...eyebrow, marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 28, height: 1, background: "#FFB454", display: "inline-block" }} />
              Overview
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-dim)", maxWidth: 780 }}>
              {project.overview}
            </p>
          </section>
        )}

        {/* ── Voice Pipeline — Auralis ───────────────────────────────────── */}
        {isAuralis && project.pipeline && (
          <section style={{ marginBottom: 56 }}>
            <div style={{ ...eyebrow, marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 28, height: 1, background: "#FFB454", display: "inline-block" }} />
              How a Call Works
            </div>
            <div style={{ position: "relative", paddingLeft: 36 }}>
              <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 1, background: "var(--line)" }} />
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 24 }}>
                {project.pipeline.map((step, i) => (
                  <li key={i} style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute", left: -36, top: 2,
                      width: 22, height: 22, borderRadius: "50%",
                      border: "1px solid rgba(255,180,84,.4)", background: "var(--bg)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      ...mono, fontSize: 10, color: "#FFB454",
                    }}>
                      {i + 1}
                    </span>
                    <p style={{ fontSize: 15, color: "var(--ink-dim)", lineHeight: 1.7, margin: 0 }}>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* ── Pioneer Voice Agents ───────────────────────────────────────── */}
        {isPioneer && project.agents && (
          <section style={{ marginBottom: 56 }}>
            <div style={{ ...eyebrow, marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 28, height: 1, background: "#FFB454", display: "inline-block" }} />
              AI Voice Agents
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
              {project.agents.map((agent) => (
                <div key={agent.name} style={{ border: "1px solid var(--line)", borderRadius: 16, padding: 28, background: "var(--surface)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ ...syne, fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{agent.name}</h3>
                      <span style={{ ...mono, fontSize: 11, letterSpacing: ".1em", color: "#FFB454", textTransform: "uppercase" }}>{agent.role}</span>
                    </div>
                    <a
                      href={`tel:${agent.phone.replace(/[\s()+-]/g, "")}`}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: 8, border: "1px solid rgba(255,180,84,.3)", color: "#FFB454", ...mono, fontSize: 12, textDecoration: "none", background: "rgba(255,180,84,.06)", flexShrink: 0, whiteSpace: "nowrap" }}
                    >
                      <Phone size={12} />
                      {agent.phone}
                    </a>
                  </div>
                  <p style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{agent.description}</p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {agent.capabilities.map((cap) => (
                      <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink-dim)" }}>
                        <Check size={14} style={{ color: "#FFB454", flexShrink: 0, marginTop: 3 }} />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {project.liveNote && (
              <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, ...mono, fontSize: 12, color: "#FFB454" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FFB454", flexShrink: 0, animation: "ping-amber 1.8s cubic-bezier(0,0,.2,1) infinite" }} />
                {project.liveNote}
              </div>
            )}
          </section>
        )}

        {/* ── User Roles — Auralis ───────────────────────────────────────── */}
        {isAuralis && project.roles && (
          <section style={{ marginBottom: 56 }}>
            <div style={{ ...eyebrow, marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 28, height: 1, background: "#FFB454", display: "inline-block" }} />
              User Roles & Access Control
            </div>
            <p style={{ color: "var(--ink-dim)", fontSize: 14, marginBottom: 28 }}>Three-tier role system with strict access controls per tenant.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {project.roles.map((role, i) => {
                const accent = i === 0 ? "#FFB454" : i === 1 ? "#8B93C9" : "var(--ink-dim)"
                return (
                  <div key={role.name} style={{ border: "1px solid var(--line)", borderRadius: 14, padding: 22, background: "var(--surface)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: accent, flexShrink: 0 }} />
                      <h3 style={{ ...syne, fontWeight: 700, fontSize: 15, color: accent }}>{role.name}</h3>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--ink-dim)", marginBottom: 14, lineHeight: 1.6 }}>{role.description}</p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      {role.permissions.map((perm) => (
                        <li key={perm} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--ink-dim)" }}>
                          <Shield size={11} style={{ color: accent, flexShrink: 0, marginTop: 2 }} />
                          {perm}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* ── Features ───────────────────────────────────────────────────── */}
        {project.features && project.features.length > 0 && (
          <section style={{ marginBottom: 56 }}>
            <div style={{ ...eyebrow, marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 28, height: 1, background: "#FFB454", display: "inline-block" }} />
              {isVoiceProj ? "Dashboard & Platform Features" : "Key Features"}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              {project.features.map((feature) => (
                <div
                  key={feature}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 18px", border: "1px solid var(--line)", borderRadius: 12, background: "var(--surface)", fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.6 }}
                >
                  <Check size={15} style={{ color: "#FFB454", flexShrink: 0, marginTop: 2 }} />
                  {feature}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Auralis live note ──────────────────────────────────────────── */}
        {isAuralis && project.liveNote && (
          <div style={{ marginBottom: 48, display: "flex", alignItems: "center", gap: 10, padding: "14px 20px", border: "1px solid rgba(255,180,84,.2)", borderRadius: 12, background: "rgba(255,180,84,.04)", ...mono, fontSize: 12, color: "#FFB454" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FFB454", flexShrink: 0, animation: "ping-amber 1.8s cubic-bezier(0,0,.2,1) infinite" }} />
            {project.liveNote}
          </div>
        )}

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <Link
            href="/#projects"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--ink-dim)", textDecoration: "none", ...mono, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", transition: "color .3s" }}
            className="detail-back-link"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#FFB454", textDecoration: "none", ...mono, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", transition: "opacity .3s" }}
              className="detail-live-link"
            >
              <ExternalLink size={14} />
              {project.demo}
            </a>
          )}
        </div>
      </div>

      <style>{`
        .detail-back-link:hover { color: #FFB454 !important; }
        .detail-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,180,84,.35); }
        .detail-cta-secondary:hover { border-color: rgba(255,180,84,.4) !important; color: var(--ink) !important; }
        .detail-tag:hover { border-color: rgba(255,180,84,.35) !important; color: var(--ink) !important; }
        .detail-live-link:hover { opacity: .7; }
      `}</style>
    </div>
  )
}
