import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Import logos 
import forbes from "@/assets/forbes.png";
import cnn from "@/assets/cnn.png";
import bloomberg from "@/assets/benzinga.png"; // Placeholder for financial news
import investopedia from "@/assets/investopedia.png";
import yahoo from "@/assets/yahoo-finance.png";

const testimonials = [
    { image: forbes, name: "Forbes" },
    { image: cnn, name: "CNN" },
    { image: bloomberg, name: "Benzinga" },
    { image: investopedia, name: "Investopedia" },
    { image: yahoo, name: "Yahoo Finance" },
];

export const TrustBar = () => {
    return (
        <div className="bg-neutral-950 border-y border-neutral-900 py-8 relative z-20">
            <div className="text-center mb-6">
                <span className="text-neutral-500 uppercase tracking-widest text-xs font-semibold">
                    As Featured In The World's Leading Financial Media
                </span>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
};
