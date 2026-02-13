import Image from "next/image"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { SkillBadge } from "@/components/skill-badge"

interface SkillCategory {
    title: string
    items: string[]
}

const skillCategories: SkillCategory[] = [
    {
        title: "Bot Automation & API",
        items: ["Telegram Bots", "Python Scripting", "API Integration", "Payment Gateways", "Chat Management"]
    },
    {
        title: "CMS & Web Development",
        items: ["WordPress Expert", "Blogger Customization", "Custom CMS", "PHP & HTML5", "Theme Development"]
    },
    {
        title: "Infrastructure & Performance",
        items: ["Cloudflare", "CDN Management", "Speed Optimization", "Server Security", "DNS Management"]
    }
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SectionWrapper className="pt-32 pb-10">
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                    {/* Profile Sidebar */}
                    <div className="space-y-6 lg:sticky lg:top-24 order-2 md:order-1">
                        <div className="relative aspect-square w-40 md:w-full max-w-[250px] mx-auto rounded-2xl overflow-hidden border-2 border-border shadow-xl">
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
                                    <span>Focus:</span> <span className="text-foreground">Automation & Infra</span>
                                </li>
                                <li className="flex justify-between border-b border-border/50 pb-2">
                                    <span>Location:</span> <span className="text-foreground">Worldwide</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Email:</span> <a href="mailto:contact@xsamir.com" className="text-primary hover:underline">contact@xsamir.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-10 order-1 md:order-2">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter">About Samir</h1>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>

                        <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                            <p className="text-lg leading-relaxed">
                                Samir Gaihre is a versatile developer passionate about building efficient digital ecosystems. With deep expertise in <span className="text-foreground font-medium">Automation</span> and <span className="text-foreground font-medium">Web Infrastructure</span>, he helps businesses streamline operations through custom Telegram bots and optimized Content Management Systems.
                            </p>
                            <p className="leading-relaxed">
                                Whether it's speeding up a site with CDNs or building a complex bot from scratch, Samir delivers precision and performance.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">Technical Arsenal</h2>

                            <div className="grid gap-6 sm:grid-cols-2">
                                {skillCategories.map((category) => (
                                    <div key={category.title} className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors">
                                        <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((item) => (
                                                <SkillBadge key={item} name={item} className="text-xs py-0.5 px-2.5" />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                            <p className="text-muted-foreground mb-6">
                                Ready to optimize your infrastructure or build your next automation tool?
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
