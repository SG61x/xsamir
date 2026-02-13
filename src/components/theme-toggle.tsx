"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative rounded-full p-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            aria-label="Toggle theme"
        >
            <div className="relative h-[1.2rem] w-[1.2rem] overflow-hidden">
                <div className="absolute inset-0 transform transition-transform duration-500 ease-in-out dark:-rotate-90 dark:opacity-0">
                    <Sun className="h-full w-full" />
                </div>
                <div className="absolute inset-0 transform transition-transform duration-500 ease-in-out rotate-90 opacity-0 dark:rotate-0 dark:opacity-100">
                    <Moon className="h-full w-full" />
                </div>
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
