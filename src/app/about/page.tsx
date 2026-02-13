import Image from "next/image"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { SkillBadge } from "@/components/skill-badge"
import { Download } from "lucide-react"

const skills = [
    "React", "Next.js", "TypeScript", "JavaScript",
    "Tailwind CSS", "Node.js", "PHP", "SQL",
    "Web APIs", "Git", "Figma", "UI/UX Basics"
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SectionWrapper className="pt-32 pb-10">
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                    {/* Profile Sidebar */}
                    <div className="space-y-6">
                        <div className="relative aspect-square w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                            <Image
                                src="/assets/SamirIcon.jpg"
                                alt="Samir Gaihre"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="p-6 bg-card border border-border rounded-xl shadow-sm space-y-4">
                            <h3 className="font-bold text-lg">Quick Facts</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex justify-between border-b border-border/50 pb-2">
                                    <span>Name:</span> <span className="text-foreground">Samir Gaihre</span>
                                </li>
                                <li className="flex justify-between border-b border-border/50 pb-2">
                                    <span>Focus:</span> <span className="text-foreground">Full Stack Dev</span>
                                </li>
                                <li className="flex justify-between border-b border-border/50 pb-2">
                                    <span>Location:</span> <span className="text-foreground">Worldwide (Remote)</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Email:</span> <a href="mailto:contact@xsamir.com" className="text-primary hover:underline">contact@xsamir.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter">About Me</h1>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>

                        <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                            <p className="text-lg leading-relaxed">
                                Hi, I’m Samir Gaihre — a technology enthusiast and developer who enjoys building clean, fast, and useful digital projects. I focus on practical solutions, modern UI, and solid engineering.
                            </p>
                            <p className="leading-relaxed">
                                My journey in technology started with a curiosity for how things work on the web. Over the years, I've honed my skills in modern web development stacks, particularly utilizing the power of React and Next.js to create seamless user experiences.
                            </p>
                            <p className="leading-relaxed">
                                I believe in code that is not only functional but also maintainable and accessible. Whether it's a small personal automation script or a full-scale web application, I approach every challenge with a problem-solving mindset and a drive for excellence.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Skills & Technologies</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <SkillBadge key={skill} name={skill} />
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                            <p className="text-muted-foreground mb-6">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                            >
                                Get intouch
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
