import { Github, Linkedin, Mail, Briefcase } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-sm bg-emerald-500 inline-block" />
            <span className="font-bold text-foreground">
              Saif <span className="text-emerald-400">Ur Rehman</span>
            </span>
            <span className="text-border mx-2">·</span>
            <span className="text-muted-foreground text-sm">© 2026</span>
          </div>

          {/* Social links */}
          <div className="flex gap-2">
            {[
              { icon: Github, href: "https://github.com/Saif-Ur-Rehman0", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/saif-ur-rehman-404650218", label: "LinkedIn" },
              { icon: Briefcase, href: "https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/", label: "Upwork" },
              { icon: Mail, href: "mailto:syfin008@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
