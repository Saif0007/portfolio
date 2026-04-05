"use client"

import { Github, Linkedin, Mail, Briefcase, Phone, MapPin } from "lucide-react"

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-6 rounded-sm bg-emerald-500 inline-block" />
              <span className="text-xl font-bold text-foreground">
                Saif <span className="text-emerald-400">Ur Rehman</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Full Stack AI Engineer specializing in building intelligent, production-ready systems — RAG pipelines, multi-tenant SaaS platforms, LLM integrations, and end-to-end full-stack applications that scale.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Github, href: "https://github.com/Saif-Ur-Rehman0", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/saif-ur-rehman-404650218", label: "LinkedIn" },
                { icon: Briefcase, href: "https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/", label: "Upwork" },
                { icon: Mail, href: "mailto:syfin008@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:syfin008@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                >
                  <Mail size={13} className="shrink-0" />
                  syfin008@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923224016585"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                >
                  <Phone size={13} className="shrink-0" />
                  +92 322 401 6585
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={13} className="shrink-0" />
                Pakistan
              </li>
              <li className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-semibold">Available for work</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2026 Saif Ur Rehman. All rights reserved.</span>
          <span>Built with Next.js & passion.</span>
        </div>
      </div>
    </footer>
  )
}
