import { BackgroundGradientAnimation } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import heroImg from "@/assets/New-Hero-Section.webp"; // Ensure @ alias works or use relative

export const Hero = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-neutral-950">
            <BackgroundGradientAnimation />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center pt-20">
                <div className="flex flex-col items-start space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="px-3 py-1 rounded-full border border-gold-500/30 bg-gold-900/10 text-gold-400 text-sm font-medium tracking-wide">
                            THE GOLD STANDARD OF TRADING
                        </span>
                    </motion.div>

                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            Master the Art of <span className="text-gold-400">Trading.</span>
                        </h1>
                        <TextGenerateEffect
                            words="Stop Gambling. Start Winning. Learn the One Core Program used by Banks and Fund Managers."
                            className="text-neutral-400 text-lg md:text-xl font-light max-w-xl"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-bold text-lg h-14 px-8 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all transform hover:scale-105">
                            Start Your Journey
                        </Button>
                        <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-800 text-white h-14 px-8 rounded-full">
                            Watch Free Training
                        </Button>
                    </motion.div>

                    <div className="pt-8 flex items-center gap-4 text-sm text-neutral-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-950"></div>
                            ))}
                        </div>
                        <p>Trusted by 10,000+ Students Worldwide</p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full"></div>
                    <img
                        src={heroImg}
                        alt="Ezekiel Chew Trading"
                        className="relative z-10 w-full h-auto drop-shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>
            </div>
        </div>
    );
};
