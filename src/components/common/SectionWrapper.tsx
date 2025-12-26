import { cn } from "@/lib/utils";
import React from "react";

export const SectionWrapper = ({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) => {
    return (
        <section id={id} className={cn("py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10", className)}>
            {children}
        </section>
    );
};
