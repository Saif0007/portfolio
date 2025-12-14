import { Github, Linkedin, Mail, Briefcase } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg sm:text-xl font-bold gradient-text mb-1 sm:mb-2">Saif Ur Rehman</div>
            <p className="text-muted-foreground text-sm sm:text-base">© 2025 Built with Next JS & Tailwind</p>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            {[
              {
                icon: Github,
                href: "https://github.com/Saif-Ur-Rehman0",
                color: "hover:bg-gray-600/10 hover:text-gray-600",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/saif-ur-rehman-404650218",
                color: "hover:bg-blue-500/10 hover:text-blue-500",
              },
              {
                icon: Briefcase,
                href: "https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/",
                color: "hover:bg-green-500/10 hover:text-green-500",
              },
              { icon: Mail, href: "mailto:syfin008@gmail.com", color: "hover:bg-amber-500/10 hover:text-amber-500" },
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                className={`p-2.5 sm:p-3 glass rounded-lg ${color} transition-all duration-300 transform hover:scale-110`}
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
