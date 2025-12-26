import { Star } from "lucide-react";

const reviews = [
    {
        quote: "Ezekiel’s ROI-driven approach is very different. It is a scientific, numbers-driven way of beating the market that is not taught anywhere.",
        name: "Raymond Wong",
        title: "Full Time Trader"
    },
    {
        quote: "Made $70,000 in 1 year after AFM Program. It completely changed my perspective on risk management.",
        name: "Amardeep",
        title: "AFM Student"
    },
    {
        quote: "Made 30% growth in 40 days. The logic behind the One Core Program is undeniable.",
        name: "Casey",
        title: "AFM Student"
    },
    {
        quote: "Get ready to learn from one of the World's Most Successful Trader. The value is priceless.",
        name: "Sam Manning",
        title: "AFM Student"
    }
]

export const Testimonials = () => {
    return (
        <section className="py-24 bg-corporate-blue text-white border-t border-white/10" id="reviews">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Header with Rating */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-yellow-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                            <span className="text-white font-bold ml-2 tracking-widest text-sm">4.9/5 RATING</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl">Client Perspectives.</h2>
                        <p className="font-sans text-blue-200 mt-4 max-w-xl text-lg">
                            We train bank traders, fund managers, and retail investors globally.
                        </p>
                    </div>

                    <div>
                        <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors">
                            See All Reviews
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="flex flex-col justify-between bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/10 transition-colors duration-300">
                            <div className="space-y-6">
                                <div className="text-4xl text-blue-400 font-serif leading-none">“</div>
                                <p className="font-serif text-lg leading-relaxed text-blue-50">
                                    {review.quote}
                                </p>
                            </div>
                            <div className="border-t border-white/10 pt-6 mt-8">
                                <p className="font-bold text-white text-sm uppercase tracking-wide">{review.name}</p>
                                <p className="text-xs text-blue-300 mt-1 uppercase tracking-wide">{review.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
