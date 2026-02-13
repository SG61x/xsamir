import Link from "next/link"
import { Github, Send, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold">xSamir</h2>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Samir Gaihre. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <Link
                        href="https://github.com/sg61x"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://t.me/SG61x"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Telegram"
                    >
                        <Send className="h-5 w-5" />
                    </Link>
                    <Link
                        href="mailto:contact@xsamir.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
