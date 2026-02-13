import { ContactForm } from "@/components/contact-form"
import { SectionWrapper } from "@/components/section-wrapper"
import { Github, Send, Mail, MapPin } from "lucide-react"
import Link from "next/link"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact — xSamir",
    description: "Get in touch with Samir Gaihre for collaboration, project inquiries, or just to say hi.",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <SectionWrapper>
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter">Get in Touch</h1>
                            <p className="text-muted-foreground text-lg">
                                Have a project in mind or want to collaborate? I'd love to hear from you.
                                Fill out the form or reach out through social media.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border">
                                <div className="p-3 bg-secondary rounded-full text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <a href="mailto:contact@xsamir.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        contact@xsamir.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border">
                                <div className="p-3 bg-secondary rounded-full text-primary">
                                    <Send className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Telegram</h3>
                                    <a href="https://t.me/SG61x" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        @SG61x
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border">
                                <div className="p-3 bg-secondary rounded-full text-primary">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium">GitHub</h3>
                                    <a href="https://github.com/sg61x" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        github.com/sg61x
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border">
                                <div className="p-3 bg-secondary rounded-full text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Location</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Available Worldwide (Remote)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <ContactForm />
                    </div>

                </div>
            </SectionWrapper>
        </div>
    )
}
