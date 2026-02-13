import { ProjectCard } from "@/components/project-card"
import { SectionWrapper } from "@/components/section-wrapper"
import projects from "@/lib/projects.json"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects — xSamir",
    description: "Explore my portfolio of projects, ranging from Telegram automation bots to high-performance web applications.",
}

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <SectionWrapper>
                <div className="space-y-4 mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tighter">My Projects</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A selection of projects I've worked on, ranging from web applications to experimental tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    )
}
