import Link from "next/link"
import Image from "next/image"
import { SectionWrapper } from "@/components/section-wrapper"
import projects from "@/lib/projects.json"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Showcase — xSamir",
    description: "A visual gallery of my creative work, designs, and experiments.",
}

export default function ShowcasePage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <SectionWrapper>
                <div className="space-y-4 mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter">Visual Showcase</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A collection of visual highlights from my work.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {projects.map((project) => (
                        <div key={project.id} className="relative group overflow-hidden rounded-xl break-inside-avoid">
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-sm text-gray-200 mt-2 line-clamp-2">{project.description}</p>
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add some placeholder visual items to fill the masonry if needed */}
                    <div className="relative group overflow-hidden rounded-xl break-inside-avoid bg-secondary aspect-square flex items-center justify-center p-8 text-center">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Design Concept</h3>
                            <p className="text-muted-foreground text-sm">Experimental UI layout for a dashboard interface.</p>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-xl break-inside-avoid bg-muted aspect-[3/4] flex items-center justify-center p-8 text-center">
                        <Image
                            src="/assets/xSamirOG.jpg"
                            alt="Brand visuals"
                            fill
                            className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
                            <p className="text-white text-sm">Exploration of typography and color details.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
