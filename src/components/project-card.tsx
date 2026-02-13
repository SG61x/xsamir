import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
    id: string
    title: string
    description: string
    tech: string[]
    image: string
    demo: string
    repo: string
    featured?: boolean
}

interface ProjectCardProps {
    project: Project
    className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50 flex flex-col h-full",
                className
            )}
        >
            <div className="relative aspect-video overflow-hidden">
                {/* Placeholder for image if it doesn't exist, using a gradient fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary/30" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                        href={project.demo}
                        target="_blank"
                        className="p-2 bg-background rounded-full hover:text-primary transition-colors"
                        title="View Demo"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                    <Link
                        href={project.repo}
                        target="_blank"
                        className="p-2 bg-background rounded-full hover:text-primary transition-colors"
                        title="View Code"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
