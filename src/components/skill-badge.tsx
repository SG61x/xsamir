import { cn } from "@/lib/utils"

interface SkillBadgeProps {
    name: string
    className?: string
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/50 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default select-none",
                className
            )}
        >
            {name}
        </div>
    )
}
