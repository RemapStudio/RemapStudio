import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Ouework = () => {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null);

  const featuredWork = [
    { title: "AI Powered Skin Story", size: "md:col-span-2 md:row-span-2", youtubeId: "3HxlK3ZLvdQ" },
    { title: "Above the World Cinematic Travel Visuals", size: "md:col-span-1 md:row-span-1", youtubeId: "igPWHsJpVaw" },
    { title: "Glow the Cocoa Way",  size: "md:col-span-1 md:row-span-1", youtubeId: "ZJ8QqDBXYCo" },
  ];

  // Navigation Logic
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedWorkIndex((prev) => (prev! + 1) % featuredWork.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedWorkIndex((prev) => (prev! - 1 + featuredWork.length) % featuredWork.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedWorkIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen text-white selection:bg-zinc-800 ${selectedWorkIndex !== null ? 'h-screen overflow-hidden' : ''}`}>

      {/* BENTO GRID SECTION */}
      <section className="py-15 px-6">
        <div className="max-w-338 mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our work</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4">
            {featuredWork.map((work, i) => {
              // Dynamically generate the YouTube Thumbnail URL
              const thumbId = work.youtubeId?.split('?')[0];
              const displayImage = `https://img.youtube.com/vi/${thumbId}/maxresdefault.jpg`;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredWork(i)}
                  onMouseLeave={() => setHoveredWork(null)}
                  onClick={() => setSelectedWorkIndex(i)}
                  // Added 'pointer-events-auto' to ensure click capture
                  className={`relative overflow-hidden rounded-4xl group cursor-pointer pointer-events-auto bg-zinc-900 ${work.size}`}
                >
                  <div className="absolute inset-0 z-0">
                    {work.youtubeId && hoveredWork === i ? (
                      <iframe
                        className="w-full h-full scale-110 pointer-events-none"
                        src={`https://www.youtube.com/embed/${thumbId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${thumbId}`}
                        allow="autoplay; encrypted-media"
                      />
                    ) : (
                      <img
                        src={displayImage} // Using the YouTube Thumbnail directly
                        alt={work.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    )}
                  </div>
                  <div className="relative z-10 h-full p-8 flex flex-col justify-end bg-linear-to-t from-black via-transparent to-transparent">
                    {/* <p className="text-[10px] uppercase tracking-widest text-cyan-400 mb-2 font-bold">{work.category}</p> */}
                    <h4 className="text-2xl font-bold tracking-tight">{work.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHATSAPP-STYLE POPUP WINDOW */}
      <AnimatePresence>
        {selectedWorkIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWorkIndex(null)}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >

            {/* NAVIGATION BUTTONS */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white z-110 cursor-pointer pointer-events-auto transition-all"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Content Container */}
            <motion.div
              key={selectedWorkIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${featuredWork[selectedWorkIndex].youtubeId.split('?')[0]}?autoplay=1&controls=1&rel=0`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold">{featuredWork[selectedWorkIndex].title}</h3>
              </div>
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white z-110 cursor-pointer pointer-events-auto transition-all"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};