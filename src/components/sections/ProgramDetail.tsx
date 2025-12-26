import { CheckCircle2 } from "lucide-react";
import programImg from "@/assets/afm-one-core-program.png";

const features = [
    "Mathematical Probability Models",
    "Risk-Management Protocols",
    "Price Action Psychology",
    "Institutional Flow Analysis"
];

export const ProgramDetail = () => {
    return (
        <section className="py-24 bg-corporate-gray" id="program">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">

                {/* Graphic */}
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-900/5 transform translate-x-4 translate-y-4 rounded-sm" />
                    <div className="relative bg-white p-8 border border-neutral-200 shadow-sm">
                        <img src={programImg} alt="One Core Program" className="w-full h-auto" />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    <h2 className="font-serif text-3xl md:text-5xl text-corporate-blue">
                        One Core Program.
                    </h2>
                    <p className="font-sans text-neutral-600 leading-relaxed text-lg">
                        We assume you know nothing. We take you from zero to executing trades with the precision of a fund manager.
                    </p>
                    <p className="font-sans text-neutral-600 leading-relaxed text-sm">
                        Most courses teach "strategies" that fail when market conditions change. We teach a <strong>Universal Framework</strong> that works across Forex, Stocks, Crypto, and Commodities.
                    </p>

                    <div className="space-y-4 pt-4">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-blue-700 w-5 h-5" />
                                <span className="font-serif text-corporate-blue text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8">
                        <button className="bg-corporate-blue text-white font-sans font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-blue-800 transition-colors">
                            Explore Curriculum
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
