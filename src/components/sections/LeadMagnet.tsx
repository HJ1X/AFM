import { Download } from "lucide-react";

export const LeadMagnet = () => {
    return (
        <section className="bg-white py-24 border-t border-neutral-200">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">Complimentary Access</span>
                <h2 className="font-serif text-4xl md:text-6xl text-corporate-blue">
                    The 3-Step System.
                </h2>
                <p className="font-serif text-xl text-neutral-500 italic max-w-2xl mx-auto">
                    "How to generate consistent returns in any market environment."
                </p>
                <div className="max-w-xl mx-auto text-sm text-neutral-400 font-sans leading-relaxed">
                    This proprietary framework is the exact introduction we give to our institutional clients. It is available to the public for a limited time.
                </div>

                <div className="pt-8">
                    <button className="group relative inline-flex items-center gap-3 bg-corporate-blue text-white font-sans font-bold text-sm px-10 py-5 uppercase tracking-widest hover:bg-blue-900 transition-colors">
                        <Download className="w-5 h-5" />
                        <span>Download Whitepaper</span>
                    </button>
                    <p className="mt-4 text-[10px] text-neutral-400 uppercase tracking-wide">
                        Instant PDF Access • No Credit Card Required
                    </p>
                </div>
            </div>
        </section>
    )
}
