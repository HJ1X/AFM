import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/common/SectionWrapper";

export const Footer = () => {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10">
            <SectionWrapper className="py-0 grid md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6 col-span-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">AFM.</h3>
                    <p className="text-neutral-400 max-w-sm">
                        Asia Forex Mentor is the world's leading trading education provider, serving retail traders, banks, and institutions globally.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-semibold">Resources</h4>
                    <ul className="space-y-2 text-neutral-500 text-sm">
                        <li className="hover:text-gold-400 cursor-pointer">Free 3-Step System</li>
                        <li className="hover:text-gold-400 cursor-pointer">One Core Program</li>
                        <li className="hover:text-gold-400 cursor-pointer">Blog</li>
                        <li className="hover:text-gold-400 cursor-pointer">Reviews</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-semibold">Legal</h4>
                    <ul className="space-y-2 text-neutral-500 text-sm">
                        <li className="hover:text-gold-400 cursor-pointer">Global Privacy Policy</li>
                        <li className="hover:text-gold-400 cursor-pointer">Terms of Service</li>
                        <li className="hover:text-gold-400 cursor-pointer">Risk Disclosure</li>
                    </ul>
                </div>
            </SectionWrapper>

            <div className="w-full h-px bg-neutral-900 mb-8" />

            <div className="text-center text-neutral-600 text-sm">
                &copy; 2024 Asia Forex Mentor. All rights reserved.
            </div>

            <div className="fixed bottom-8 right-8 z-50">
                <Button className="rounded-full h-14 w-14 shadow-2xl bg-gold-500 hover:bg-gold-600 text-black p-0 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                </Button>
            </div>
        </footer>
    )
}
