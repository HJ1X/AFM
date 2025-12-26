import { SectionWrapper } from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";
import ezekielImg from "@/assets/ezekiel-invest-newspaper.png";

export const MentorBio = () => {
    return (
        <SectionWrapper id="about" className="bg-neutral-900/30 border-y border-neutral-900">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 md:order-1">
                    <div className="absolute inset-0 bg-gold-500/10 blur-[80px] rounded-full"></div>
                    <img
                        src={ezekielImg}
                        alt="Ezekiel Chew"
                        className="relative z-10 w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-neutral-800 shadow-2xl"
                    />
                </div>

                <div className="space-y-8 order-1 md:order-2">
                    <div className="space-y-4">
                        <h4 className="text-gold-400 font-bold uppercase tracking-widest text-sm">The Mentor</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Ezekiel Chew.
                        </h2>
                        <h3 className="text-2xl text-neutral-400 font-light">
                            The Trader Behind The Banks.
                        </h3>
                    </div>

                    <div className="space-y-4 text-neutral-400 leading-relaxed text-lg">
                        <p>
                            "I don't just teach trading. I trade for a living. And when you trade for a living, you don't care about 'fanciful strategies'. You care about what makes money."
                        </p>
                        <p>
                            Ezekiel is frequently consulted by banks and investment firms for his market insights. He has turned $24k into $300k (1250% ROI) in a single month and generated 6-figures per trade in public view.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                            Read Full Bio
                        </Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
