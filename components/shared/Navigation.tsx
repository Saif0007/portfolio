"use client"

import { useState, useEffect } from "react"

interface NavigationProps {
  scrollToSection: (id: string) => void
}

export const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > 400 && y > lastY)
      setLastY(y)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastY])

  const navItems = [
    { label: "Work", id: "projects" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
  ]

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
    document.body.style.overflow = ""
  }

  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? "hidden" : ""
  }

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px clamp(20px,5vw,64px)",
          backdropFilter: "blur(14px)",
          background: scrolled ? "rgba(10,12,20,0.92)" : "linear-gradient(rgba(10,12,20,.85),rgba(10,12,20,.2))",
          borderBottom: `1px solid ${scrolled ? "rgba(232,230,223,0.09)" : "transparent"}`,
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform .45s, border-color .4s, background .4s",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("hero")}
          style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: ".04em", color: "var(--ink)", background: "none", border: "none", cursor: "pointer" }}
        >
          Saif<span style={{ color: "#FFB454" }}>.</span>dev
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="nav-link-line relative"
              style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-dim)", background: "none", border: "none", cursor: "pointer", transition: "color .3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-dim)")}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#0A0C14", background: "#FFB454", padding: "10px 20px", borderRadius: 100, border: "none", cursor: "pointer", transition: "transform .3s, box-shadow .3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(255,180,84,.35)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "" }}
          >
            Let&apos;s talk
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={toggleMobile}
          aria-label="Menu"
          style={{ background: "none", border: "none", cursor: "pointer", width: 34, height: 24, position: "relative", zIndex: 1002 }}
        >
          {[3, 11, 19].map((top, i) => (
            <span
              key={i}
              style={{
                position: "absolute", left: 0, width: "100%", height: 2, background: "var(--ink)",
                top: mobileOpen ? (i === 0 ? 11 : i === 1 ? 11 : 11) : top,
                transform: mobileOpen ? (i === 0 ? "rotate(45deg)" : i === 1 ? "none" : "rotate(-45deg)") : "none",
                opacity: mobileOpen && i === 1 ? 0 : 1,
                transition: "transform .35s, top .35s, opacity .3s",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu-overlay${mobileOpen ? " open" : ""}`}>
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className="mobile-menu-link"
            style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
          >
            <span style={{ color: "#FFB454", fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, verticalAlign: "super" }}>
              0{navItems.findIndex(n => n.id === id) + 1}
            </span>
            {" "}{label}
          </button>
        ))}
        <button
          onClick={() => handleNav("contact")}
          className="mobile-menu-link"
          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
        >
          <span style={{ color: "#FFB454", fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, verticalAlign: "super" }}>04</span>
          {" "}Contact
        </button>
      </div>
    </>
  )
}
