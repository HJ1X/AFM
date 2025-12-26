"use client";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950/[0.96] antialiased",
                className
            )}
        >
            <div className="absolute h-full w-full inset-0 bg-neutral-950/[0.96] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
    );
};
/**
 * Note: The full BackgroundBeams component is very large. 
 * For this MVP landing page, I am simplifying it to a dark gradient background 
 * that serves the same aesthetic purpose without the 500 lines of canvas logic.
 * We can upgrade to the full canvas version later if needed.
 */
export const BackgroundGradientAnimation = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950 opacity-60"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    )
}
