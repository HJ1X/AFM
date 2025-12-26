import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import {
    TrendingUp,
    Landmark,
    PieChart,
    Award,
    ShieldCheck
} from "lucide-react";

export const ValueProp = () => {
    return (
        <SectionWrapper className="bg-neutral-950 py-32" id="why-afm">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                    Why The World's Top Traders <br /> Choose AFM
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                    We don't teach you to gamble. We teach you the mathematical edge used by institutions to generate consistent ROI.
                </p>
            </div>

            <BentoGrid className="max-w-6xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </SectionWrapper>
    );
};
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800"></div>
);
const items = [
    {
        title: "Bank-Grade Strategies",
        description: "Learn the exact systems used by prop firms and bank traders.",
        header: <Skeleton />,
        icon: <Landmark className="h-4 w-4 text-gold-400" />,
    },
    {
        title: "ROI Focused Approach",
        description: "We focus on one thing: Return on Investment. No fluff.",
        header: <Skeleton />,
        icon: <TrendingUp className="h-4 w-4 text-gold-400" />,
    },
    {
        title: "Proprietary System",
        description: "The 'One Core Program' is a scientific method to beat the market.",
        header: <Skeleton />,
        icon: <PieChart className="h-4 w-4 text-gold-400" />,
    },
    {
        title: "Proven Track Record",
        description:
            "From generating 950% in 2 weeks to training thousands of students worldwide. Our results speak for themselves.",
        header: <Skeleton />,
        icon: <Award className="h-4 w-4 text-gold-400" />,
    },
    {
        title: "Risk Management",
        description: "Master the art of preserving capital while maximizing gains.",
        header: <Skeleton />,
        icon: <ShieldCheck className="h-4 w-4 text-gold-400" />,
    },
];
