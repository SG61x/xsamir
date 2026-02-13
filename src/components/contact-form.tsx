"use client"

import * as React from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    })
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")

        // Simulate submission delay
        setTimeout(() => {
            const subject = `Portfolio Contact from ${formData.name}`
            const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`

            // Open mailto link
            window.location.href = `mailto:contact@xsamir.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

            setStatus("success")
            setFormData({ name: "", email: "", message: "" })

            // Reset status after 5 seconds
            setTimeout(() => setStatus("idle"), 5000)
        }, 1000)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                    placeholder="your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
                {status === "submitting" ? (
                    "Opening Email Client..."
                ) : status === "success" ? (
                    <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Message Ready
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                    </span>
                )}
            </button>

            {status === "success" && (
                <p className="text-sm text-center text-muted-foreground animate-fade-in flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4" /> Please send the email from your client.
                </p>
            )}
        </form>
    )
}
