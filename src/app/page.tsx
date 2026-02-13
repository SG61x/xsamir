import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { ProjectCard } from "@/components/project-card"
import projects from "@/lib/projects.json"
import { cn } from "@/lib/utils"

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 2)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-12 md:pt-0 md:pb-0">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow" style={{ animationDelay: "4s" }}></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 order-1 lg:order-1 animate-slide-up">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Available for new projects
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital</span> <br className="hidden lg:block" />
                Ecosystems
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-[500px] lg:max-w-[600px] leading-relaxed">
                I'm <span className="font-semibold text-foreground">Samir Gaihre</span> (xSamir). I specialize in Automation, Web Infrastructure, and building efficient digital solutions.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background shadow transition-transform hover:scale-105 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Visual/Profile Area */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-2 animate-fade-in relative mb-8 lg:mb-0">
              <div className="relative w-[180px] h-[180px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-6 opacity-20 blur-2xl"></div>
                <div className="absolute -inset-4 border border-primary/20 rounded-[2.5rem] rotate-3"></div>

                {/* Main Image Container */}
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-background/50 backdrop-blur-sm">
                  <Image
                    src="/assets/SamirIcon.jpg"
                    alt="Samir Gaihre"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <SectionWrapper className="bg-muted/30">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Work</h2>
              <p className="text-muted-foreground">Some of my favorite projects.</p>
            </div>
            <Link href="/projects" className="text-primary hover:underline underline-offset-4 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Snippet */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Technical Expertise</h2>
            <p className="text-muted-foreground text-lg">
              From building complex Telegram bots to optimizing high-traffic web infrastructure, I deliver precision and performance.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Telegram Bots", "Python", "Cloudflare", "CDN Management", "WordPress", "PHP/HTML5"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="pt-6">
              <Link href="/about" className="text-primary hover:underline underline-offset-4">
                More about me &rarr;
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] w-full rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-background to-muted flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-4 w-full h-full opacity-50">
              <div className="bg-primary/20 rounded-lg h-full w-full animate-pulse" style={{ animationDelay: "0s" }}></div>
              <div className="bg-secondary/20 rounded-lg h-full w-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="bg-secondary/20 rounded-lg h-full w-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="bg-primary/20 rounded-lg h-full w-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl md:text-2xl font-bold bg-background/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-lg text-center">
                Automation & <br /> Infrastructure
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
