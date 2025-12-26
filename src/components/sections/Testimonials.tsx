
const reviews = [
    {
        quote: "Ezekiel’s ROI-driven approach is very different from the one used by most trainers. It is a scientific, numbers-driven way of beating the market that is not taught anywhere.",
        name: "Raymond Wong",
        title: "Full Time Trader (Former Mentee)"
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
    }
]

export const Testimonials = () => {
    return (
        <section className="py-24 bg-corporate-blue text-white border-t border-white/10" id="reviews">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl">Client Perspectives.</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {reviews.map((review, i) => (
                        <div key={i} className="space-y-6">
                            <div className="text-4xl text-blue-300 font-serif">“</div>
                            <p className="font-serif text-xl leading-relaxed text-blue-50">
                                {review.quote}
                            </p>
                            <div className="border-t border-white/20 pt-4">
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
