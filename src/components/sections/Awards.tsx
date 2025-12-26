import awardPlate from "@/assets/course-award-plate-hero.png";
import investopedia from "@/assets/investopedia.png";
import benzinga from "@/assets/benzinga.png";

export const Awards = () => {
    return (
        <section className="bg-corporate-blue py-24 text-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">

                {/* Text & Logos */}
                <div className="md:col-span-7 space-y-10">
                    <div>
                        <h2 className="font-serif text-3xl md:text-5xl mb-6">Results Recognized Globally.</h2>
                        <p className="font-sans text-blue-100 text-lg max-w-xl leading-relaxed">
                            Independent financial authorities have audited our methodologies and curriculum. The verdict is consistent.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                        <div>
                            <img src={investopedia} alt="Investopedia" className="h-6 w-auto mb-4 brightness-0 invert opacity-80" />
                            <p className="font-serif text-xl italic">"Best Forex Trading Course"</p>
                            <p className="text-xs text-blue-300 mt-2 uppercase tracking-wide">Investopedia Review</p>
                        </div>
                        <div>
                            <img src={benzinga} alt="Benzinga" className="h-6 w-auto mb-4 brightness-0 invert opacity-80" />
                            <p className="font-serif text-xl italic">"Top Trading Educator"</p>
                            <p className="text-xs text-blue-300 mt-2 uppercase tracking-wide">Benzinga Awards</p>
                        </div>
                    </div>
                </div>

                {/* Visual Anchor */}
                <div className="md:col-span-5 flex justify-center md:justify-end">
                    <img src={awardPlate} alt="AFM Awards Plate" className="w-full max-w-sm h-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity" />
                </div>

            </div>
        </section>
    )
}
