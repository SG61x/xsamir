import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    id?: string
    className?: string
}

export function SectionWrapper({
    children,
    id,
    className,
    ...props
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("w-full py-20 px-4 md:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    )
}
