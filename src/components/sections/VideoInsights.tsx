import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Real top videos from AFM Channel
const videos = [
    {
        id: "NdDy6EpJsLA",
        title: "I Make 6 Figures A Trade Using This Strategy",
        category: "Price Action",
        views: "467K Views"
    },
    {
        id: "nQ_1VRarxE4",
        title: "Most Traders Use The RSI WRONG!",
        category: "Indicators",
        views: "175K Views"
    },
    {
        id: "sy-rgmQDGcg",
        title: "How To Identify THE END Of A Trend?",
        category: "Live Trading",
        views: "Popular"
    }
];

export const VideoInsights = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedVideo]);

    return (
        <section className="py-24 bg-neutral-50 border-t border-neutral-200" id="insights">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Market Analysis</span>
                        <h2 className="font-serif text-3xl md:text-5xl text-corporate-blue leading-tight">
                            Inside The Trading Desk.
                        </h2>
                        <p className="font-sans text-neutral-600 mt-6 text-lg leading-relaxed">
                            Watch how we analyze the markets in real-time. Transparent, unfiltered, and strictly educational.
                        </p>
                    </div>
                    <a
                        href="https://www.youtube.com/@asiaforexmentor/videos"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-corporate-blue font-bold uppercase tracking-widest text-xs hover:text-blue-700 transition-colors"
                    >
                        <span>View Channel</span>
                        <Play className="w-3 h-3 fill-current group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video, i) => (
                        <motion.div
                            key={i}
                            layoutId={`video-card-${video.id}`}
                            className="group cursor-pointer"
                            onClick={() => setSelectedVideo(video.id)}
                        >
                            <div className="relative aspect-video bg-neutral-900 rounded-sm overflow-hidden mb-4 shadow-lg border border-neutral-200 group-hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white/80 bg-black/20 backdrop-blur-md group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                                        <Play className="w-8 h-8 fill-white text-white ml-1 group-hover:fill-corporate-blue group-hover:text-corporate-blue transition-colors duration-500" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-sm">
                                        {video.category}
                                    </span>
                                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                                        {video.views}
                                    </span>
                                </div>
                                <h3 className="font-serif text-xl text-corporate-blue leading-tight group-hover:text-blue-700 transition-colors">
                                    {video.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedVideo(null)}
                            className="absolute inset-0 bg-neutral-900/90 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={`video-card-${selectedVideo}`}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden z-10"
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                                title="YouTube Video Player"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
