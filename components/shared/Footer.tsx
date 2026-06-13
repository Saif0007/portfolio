"use client"

import { Github, Linkedin } from "lucide-react"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "28px clamp(20px,5vw,64px) 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* Socials */}
        <div style={{ display: "flex", gap: 26, flexWrap: "wrap" }}>
          {[
            { href: "https://github.com/Saif-Ur-Rehman0", label: "GitHub" },
            { href: "https://linkedin.com/in/saif-ur-rehman-404650218", label: "LinkedIn" },
            { href: "https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/", label: "Upwork" },
            { href: "mailto:syfin008@gmail.com", label: "Email" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 12,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--ink-dim)",
                textDecoration: "none",
                transition: "color .3s, transform .3s",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.color = "#FFB454"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.color = "var(--ink-dim)"
                ;(e.currentTarget as HTMLElement).style.transform = ""
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            color: "var(--ink-dim)",
            flexWrap: "wrap",
          }}
        >
          <span>Lahore, PK</span>
          <span>© 2026 Saif Ur Rehman</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              background: "none",
              border: "1px solid var(--line)",
              borderRadius: "50%",
              width: 40,
              height: 40,
              color: "var(--ink)",
              cursor: "pointer",
              fontSize: 16,
              transition: "border-color .3s, transform .3s, background .3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.borderColor = "#FFB454"
              ;(e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"
              ;(e.currentTarget as HTMLElement).style.background = "rgba(255,180,84,.08)"
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.borderColor = "var(--line)"
              ;(e.currentTarget as HTMLElement).style.transform = ""
              ;(e.currentTarget as HTMLElement).style.background = ""
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
