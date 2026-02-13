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
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full mix-blend-screen opacity-30"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20" />
              <Image
                src="/assets/SamirIcon.jpg"
                alt="Samir Gaihre"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4 max-w-3xl animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] animate-gradient">
                Hi, I'm Samir Gaihre
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-[600px] mx-auto">
                I love technology — I build <span className="text-primary font-medium">clean</span> and <span className="text-primary font-medium">creative</span> projects.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Me
              </Link>
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
              I focus on practical solutions, modern UI, and solid engineering.
              My toolkit allows me to bring creative ideas to life efficiently.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Database Design"].map((skill) => (
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
              <span className="text-2xl font-bold bg-background/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-lg">
                System Architecture
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
