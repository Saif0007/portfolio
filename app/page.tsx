"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Zap,
  Users,
  Award,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Sparkles,
  Star,
  Globe,
  Briefcase,
  Moon,
  Sun,
} from "lucide-react"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [isDarkMode, setIsDarkMode] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    // Observe all animated elements
    const animatedElements = document.querySelectorAll("[data-animate]")
    animatedElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    backend: ["Python", "Django", "Flask", "FastAPI", "REST APIs"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
    cloud: ["AWS", "EC2", "S3", "RDS", "Docker"],
    ai: ["LangChain", "Machine Learning", "AI Integration"],
  }

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Full-stack web application with real-time analytics, built using Django REST API and React frontend. Features advanced data visualization and machine learning insights.",
      tech: ["Python", "Django", "PostgreSQL", "React", "AWS"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "#",
      image: "/modern-analytics-dashboard.png",
      featured: true,
    },
    {
      title: "E-Commerce Microservices Platform",
      description:
        "Scalable microservices architecture with Docker containerization, featuring payment integration, inventory management, and real-time notifications.",
      tech: ["Python", "FastAPI", "Docker", "MongoDB", "Redis"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "#",
      image: "/e-commerce-platform-interface-with-shopping-cart.png",
      featured: true,
    },
    {
      title: "Fake News Detection System",
      description:
        "AI/ML-based system using hybrid feature selection techniques for fake news detection and sentiment analysis. Advanced NLP processing with 94% accuracy.",
      tech: ["Python", "Machine Learning", "NLP", "Flask", "TensorFlow"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "#",
      image: "/ai-news-analysis-interface-with-text-processing.png",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "WebSocket-based chat application with real-time messaging, file sharing, and user authentication. Deployed on AWS with auto-scaling capabilities.",
      tech: ["Django", "WebSocket", "Redis", "PostgreSQL", "AWS"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "#",
      image: "/modern-chat-app.png",
    },
  ]

  const experience = [
    {
      company: "Tron AI",
      position: "Senior Software Engineer (Team Lead)",
      duration: "October 2024 - Present",
      location: "Lahore",
      description:
        "Leading a team of developers in building AI-powered solutions and managing end-to-end project delivery.",
      current: true,
    },
    {
      company: "Rolustech",
      position: "Software Engineer",
      duration: "July 2022 - September 2024",
      location: "Lahore",
      description:
        "Developed and deployed dynamic web applications using Python Django and REST APIs, ensuring high performance and scalability.",
      current: false,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-72 h-72 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            top: "60%",
            right: "10%",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            bottom: "20%",
            left: "50%",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Saif Ur Rehman</div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-foreground hover:bg-muted/10"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className="p-3 glass rounded-xl hover:bg-accent/10 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-6 max-w-5xl mx-auto">
          <div
            data-animate="hero-content"
            id="hero-content"
            className={`transition-all duration-1000 ${
              isVisible("hero-content") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-glow">
                <Sparkles size={16} />
                Available for new opportunities
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text leading-tight">Saif Ur Rehman</h1>

              <div className="text-2xl md:text-4xl font-bold text-muted mb-6">Senior Full Stack Developer</div>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Building scalable web applications with cutting-edge technologies. Specialized in Python, Django, AI/ML
                integration, and cloud solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500/30 bg-card text-card-foreground rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                <Download size={20} />
                Download Resume
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/saif-ur-rehman-404650218",
                  color: "hover:text-blue-500 hover:bg-blue-500/10",
                },
                {
                  icon: Github,
                  href: "https://github.com/Saif-Ur-Rehman0",
                  color: "hover:text-gray-600 hover:bg-gray-600/10",
                },
                { icon: Mail, href: "mailto:syfin008@gmail.com", color: "hover:text-amber-500 hover:bg-amber-500/10" },
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-4 glass rounded-xl ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 glass rounded-full"
        >
          <ChevronDown size={32} className="text-accent" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div
            data-animate="about-header"
            id="about-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible("about-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl font-black mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              data-animate="about-content"
              id="about-content"
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                isVisible("about-content") ? "animate-slide-in-up opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Senior Full Stack Developer with over 2+ years of experience in building robust web
                applications. Currently leading a team at Tron AI, I specialize in creating scalable solutions using
                modern technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across Python Django, REST APIs, cloud technologies, and AI/ML integration. I'm
                passionate about writing clean, efficient code and mentoring junior developers.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "2+", label: "Years Experience", color: "text-cyan-500" },
                  { number: "15+", label: "Projects Completed", color: "text-amber-500" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 glass rounded-xl hover:scale-105 transition-transform duration-300"
                  >
                    <div className={`text-3xl font-black ${stat.color} mb-2`}>{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-animate="about-education"
              id="about-education"
              className={`glass rounded-2xl p-8 transition-all duration-1000 delay-400 ${
                isVisible("about-education") ? "animate-slide-in-up opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-amber-500" />
                Education & Certifications
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold text-cyan-500 mb-2">Bachelor's of Computer Science</h4>
                  <p className="text-foreground font-medium">FAST NUCES, Lahore</p>
                  <p className="text-muted-foreground text-sm">August 2018 - June 2022</p>
                </div>
                <div className="space-y-3">
                  {[
                    "Python For Programmers - Codecademy",
                    "Django Framework - Great Learning",
                    "JavaScript Course - Codecademy",
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20"
                    >
                      <Star className="text-amber-500 flex-shrink-0" size={16} />
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div
            data-animate="skills-header"
            id="skills-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible("skills-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl font-black mb-6 gradient-text">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: Code,
                skills: skills.frontend,
                color: "from-blue-500/20 to-cyan-500/10",
                iconColor: "text-blue-500",
              },
              {
                title: "Backend",
                icon: Zap,
                skills: skills.backend,
                color: "from-cyan-500/20 to-teal-500/10",
                iconColor: "text-cyan-500",
              },
              {
                title: "Databases",
                icon: Database,
                skills: skills.databases,
                color: "from-emerald-500/20 to-green-500/10",
                iconColor: "text-emerald-500",
              },
              {
                title: "Cloud & DevOps",
                icon: Cloud,
                skills: skills.cloud,
                color: "from-amber-500/20 to-orange-500/10",
                iconColor: "text-amber-500",
              },
              {
                title: "AI & ML",
                icon: Users,
                skills: skills.ai,
                color: "from-purple-500/20 to-pink-500/10",
                iconColor: "text-purple-500",
              },
            ].map((category, index) => (
              <div
                key={index}
                data-animate={`skill-${index}`}
                id={`skill-${index}`}
                className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${
                  isVisible(`skill-${index}`) ? `animate-fade-in-scale opacity-100 stagger-${index + 1}` : "opacity-0"
                }`}
              >
                <div className="flex items-center mb-4">
                  <category.icon className={`${category.iconColor} mr-3`} size={24} />
                  <h3 className={`text-xl font-bold ${category.iconColor}`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-background/50 backdrop-blur-sm rounded-full text-sm font-medium border border-border/50 hover:bg-background/70 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            data-animate="projects-header"
            id="projects-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible("projects-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl font-black mb-6 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  data-animate={`featured-project-${index}`}
                  id={`featured-project-${index}`}
                  className={`group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 ${
                    isVisible(`featured-project-${index}`)
                      ? `animate-fade-in-scale opacity-100 stagger-${index + 1}`
                      : "opacity-0"
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 font-medium"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-medium"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  data-animate={`project-${index}`}
                  id={`project-${index}`}
                  className={`glass rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                    isVisible(`project-${index}`)
                      ? `animate-fade-in-scale opacity-100 stagger-${index + 3}`
                      : "opacity-0"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                      <Globe className="text-cyan-500" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-cyan-500 transition-colors">
                      <Github size={16} />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-amber-500 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div
            data-animate="experience-header"
            id="experience-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible("experience-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl font-black mb-6 gradient-text">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                data-animate={`experience-${index}`}
                id={`experience-${index}`}
                className={`glass rounded-2xl p-8 hover:bg-background/5 transition-all duration-300 ${
                  isVisible(`experience-${index}`)
                    ? `animate-slide-in-up opacity-100 stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${exp.current ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30" : "bg-muted/20"}`}
                    >
                      <Briefcase className={exp.current ? "text-cyan-500" : "text-muted-foreground"} size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-500 mb-2">{exp.position}</h3>
                      <h4 className="text-xl font-semibold mb-2">{exp.company}</h4>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-500/10 to-green-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          Current Position
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end mt-4 lg:mt-0 space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div
            data-animate="contact-header"
            id="contact-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible("contact-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl font-black mb-6 gradient-text">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div
              data-animate="contact-content"
              id="contact-content"
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                isVisible("contact-content") ? "animate-slide-in-up opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  I'm always interested in hearing about new opportunities, interesting projects, or just having a chat
                  about technology. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "syfin008@gmail.com",
                    href: "mailto:syfin008@gmail.com",
                    color: "bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-500 border-red-500/20",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+92 322 401 6585",
                    href: "tel:+923224016585",
                    color:
                      "bg-gradient-to-r from-emerald-500/10 to-green-500/10 text-emerald-500 border-emerald-500/20",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Connect with me",
                    href: "https://linkedin.com/in/saif-ur-rehman-404650218",
                    color: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-500 border-blue-500/20",
                  },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className={`flex items-center gap-6 p-6 glass rounded-xl hover:bg-background/5 transition-all duration-300 group border ${contact.color.split(" ").slice(3).join(" ")}`}
                  >
                    <div
                      className={`p-4 rounded-xl ${contact.color.split(" ").slice(0, 3).join(" ")} group-hover:scale-110 transition-transform border`}
                    >
                      <contact.icon size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{contact.label}</div>
                      <div className="text-muted-foreground">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              data-animate="contact-form"
              id="contact-form"
              className={`glass rounded-2xl p-8 transition-all duration-1000 delay-400 ${
                isVisible("contact-form") ? "animate-slide-in-up opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Project discussion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] font-semibold shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold gradient-text mb-2">Saif Ur Rehman</div>
              <p className="text-muted-foreground">© 2024 Built with React & Tailwind CSS</p>
            </div>
            <div className="flex space-x-6">
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
                { icon: Mail, href: "mailto:syfin008@gmail.com", color: "hover:bg-amber-500/10 hover:text-amber-500" },
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-3 glass rounded-lg ${color} transition-all duration-300 transform hover:scale-110`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
