import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center">
            <SectionWrapper>
                <h1 className="text-9xl font-black text-primary/20 select-none">404</h1>
                <div className="space-y-6 mt-[-4rem]">
                    <h2 className="text-4xl font-bold tracking-tighter">Page Not Found</h2>
                    <p className="text-muted-foreground text-lg max-w-[500px] mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    )
}
