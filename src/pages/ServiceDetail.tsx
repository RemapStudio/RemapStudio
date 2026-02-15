import { useParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Contactus } from '../component/Contactus';
import divine from '../assets/divine.jpg';
import organicmilk from '../assets/organicmilk.jpg';
import post1 from '../assets/post1.png';
import post2 from '../assets/post2.png';
import flyer35e from '../assets/flyer35e.jpg';
import imgurl from '../assets/imgurl.avif';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
};

export const ServiceDetail = () => {
  const { id } = useParams();
  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null);

  // Helper functions for navigation
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (service?.Specializations) {
      setSelectedWorkIndex((prev) => (prev! + 1) % service.Specializations.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (service?.Specializations) {
      setSelectedWorkIndex((prev) => (prev! - 1 + service.Specializations.length) % service.Specializations.length);
    }
  };

  // Close popup on 'Esc' key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedWorkIndex(null);
      if (e.key === 'ArrowRight') setSelectedWorkIndex(prev => prev !== null ? (prev + 1) % service!.Specializations.length : null);
      if (e.key === 'ArrowLeft') setSelectedWorkIndex(prev => prev !== null ? (prev - 1 + service!.Specializations.length) % service!.Specializations.length : null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [id]);

  const services = [
    {
      id: "photography-videography",
      title: "Photography & Videography",
      subtitle: "Professional photos and videos that make your brand look premium and build customer trust.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200",
      deliverables: [
        { title: "High-resolution edited photographs", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800" },
        { title: "4K cinematic video files", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800" },
        { title: "Professional sound mixing", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800" },
        { title: "Full commercial usage rights", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800" }
      ],
      Specializations: [
        { title: "Corporate Photoshoots", type: "image", image: imgurl, youtubeId: undefined },
        { title: "Product Photography", type: "image", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200", youtubeId: undefined },
        { title: "Event Documentation", type: "image", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200", youtubeId: undefined },
        { title: "Real Estate & Interiors", type: "image", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200", youtubeId: undefined },
        { title: "Interviews & Testimonials", type: "image", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200", youtubeId: undefined },
      ]
    }, {
      id: "commercial-brand-production",
      title: "Commercial & Brand Production",
      subtitle: "Complete video production services to help your business grow and reach more people.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        { title: "Full-length commercial videos", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
        { title: "Short-form social media clips", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800" },
        { title: "Behind-the-scenes footage", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop" },
        { title: "Custom thumbnails and graphics", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800" }
      ],
      Specializations: [
        { title: "Bellavita Ad Film", type: "video", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop", youtubeId: "LxDEy-wPVRY?si=tN-fjNNA7sjjBVvQ" },
        { title: "BlueDe chanel CGI Ad", type: "video", image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=800&auto=format&fit=crop", youtubeId: "snNhbkF6nSw?si=ewn1YYddoqydcpDH" },
        { title: "Motion Graphics & Animated Titles", type: "image", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop", youtubeId: undefined }
      ]
    }, {
      id: "editing-post-production",
      title: "Editing & Post-Production",
      subtitle: "We turn your raw footage into professional videos that grab and keep attention.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        { title: "Color graded footage", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
        { title: "Enhanced audio tracks", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800" },
        { title: "Final cut ready for distribution", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800" }
      ],
      Specializations: [
        { title: "Cinematic Editing & Story Pacing", type: "image", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop", youtubeId: undefined },
        { title: "Color Grading & Film Looks", type: "image", image: imgurl, youtubeId: undefined },
        { title: "Audio Cleanup & Sound Design", type: "image", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop", youtubeId: undefined }
      ]
    }, {
      id: "drone-photography-videography",
      title: "Drone Photography & Videography",
      subtitle: "Stunning aerial views for real estate, factories, and big construction projects.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        { title: "High-resolution aerial photographs", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800" },
        { title: "4K drone video footage", image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800" },
        { title: "Edited and color graded content", image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=800" },
        { title: "Compliance with aviation regulations", image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=800" }
      ],
      Specializations: [
        { title: "Above the World Cinematic Travel Visuals", type: "video", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop", youtubeId: "igPWHsJpVaw?si=eC4KWWrO9HQAhSBo" },
        { title: "Construction Site Progress Monitoring – Visual Documentation", type: "video", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop", youtubeId: "0KJmMEetS5U?si=2ZR7igm8G-4E3SK5", },
        { title: "Real Estate Aerial Showcase Drone Cinematography", type: "video", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", youtubeId: "LGZ8YFd-uGI?si=F3V_87WYwwDhta6H" },
      ]
    }, {
      id: "ai-powered-video-ugc-content",
      title: "AI-Powered Video & UGC Content",
      subtitle: "Using AI to create high-quality ads and customer-style videos quickly and affordably.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        { title: "AI-generated video ads", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800" },
        { title: "User-generated content (UGC) assets", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" },
        { title: "Optimized social media clips", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop" },
        { title: "Performance analytics reports", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" }
      ],
      Specializations: [
        { title: "AI Powered Hair Story", type: "reel", image: imgurl, youtubeId: "93mY8Bl3qBs?si=250RdtdzsnqNWyBA" },
        { title: "AI Powered Skin Story", type: "reel", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop", youtubeId: "3HxlK3ZLvdQ?si=bIKHUkpFkDDaMEr-" },
        { title: "Aloe Glow — Reimagined by AI", type: "reel", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", youtubeId: "zl3LUjZL2HA?si=-_PuIIYC5F3zjH5_" },
        { title: "Designed in the Future", type: "reel", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop", youtubeId: "SP0uqnChCqQ?si=5f0uzzRl2Lb29Uot" },
        { title: "Fruit Glow — Reimagined by AI", type: "reel", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=800&auto=format&fit=crop", youtubeId: "tyvopmAo0Ck?si=_SstCevrPCgtIPTE" },
        { title: "Future of Skincare Ads", type: "reel", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop", youtubeId: "Tq-v3pZ2-eI?si=XFG5B42tGPIzMR1R" },
        { title: "Glow the Cocoa Way", type: "reel", image: "https://images.unsplash.com/photo-1608248547160-fbc763c01567?q=80&w=800&auto=format&fit=crop", youtubeId: "ZJ8QqDBXYCo?si=w0lrRujhoeiwmEQs" }
      ]
    }, {
      id: "graphic-design-creative-branding",
      title: "Graphic Design & Creative Branding",
      subtitle: "Modern designs that make your business look professional and trustworthy.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        { title: "Custom logo designs", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800" },
        { title: "Digital assets (social media graphics, banners)", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800" },
        { title: "Comprehensive brand style guide", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800" }
      ],
      Specializations: [
        { title: "Social Media Post & Ad Creatives", type: "image", image: organicmilk, youtubeId: undefined },
        { title: "Posters, Flyers & Event Promotions", type: "image", image: flyer35e, youtubeId: undefined },
        { title: "Business Cards & Corporate Stationery", type: "image", image: divine, youtubeId: undefined },
        { title: "Pitch Deck & Company Profile Design", type: "image", image: post1, youtubeId: undefined },
        { title: "Thumbnails & YouTube Creative Design", type: "image", image: post2, youtubeId: undefined }
      ]
    }]
  const service = services.find(s => s.id === id);

  if (!service) return <div className="text-white bg-black min-h-screen flex items-center justify-center">Service not found</div>;

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">

      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 pointer-events-none">
        <Link to="/" className="pointer-events-auto inline-flex items-center bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all group shadow-2xl">
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={16} />
          <span className="hidden sm:inline">Back Home</span>
          <span className="sm:hidden text-xs">Home</span>
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:py-0 md:h-[60vh] flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            src={service.image}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "text-zinc-500" : "text-white"}>{word} </span>
              ))}
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-20 px-4 md:px-8 mx-0 md:mx-6 bg-zinc-950/50 rounded-none md:rounded-[3.5rem] border-y md:border border-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">Our Portfolio</h2>
          </div>

          {/* CHANGED: From columns-3 to a flexible grid with auto-rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {service.Specializations?.map((item, i) => {
              const thumbId = item.youtubeId?.split('?')[0];
              const displayImage = item.youtubeId
                ? `https://img.youtube.com/vi/${thumbId}/maxresdefault.jpg`
                : item.image;

              // LAYOUT LOGIC
              let aspectClass = "aspect-[4/3]"; // Default Image
              let spanClass = "col-span-1";

              if (item.type === 'video') {
                aspectClass = "aspect-video"; // 16:9
                spanClass = "md:col-span-2 lg:col-span-2"; // Videos take more horizontal space
              } else if (item.type === 'reel') {
                aspectClass = "aspect-[9/16]"; // Portrait
                spanClass = "col-span-1 row-span-2"; // Reels take vertical space
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedWorkIndex(i)}
                  className={`relative rounded-3xl overflow-hidden group cursor-pointer bg-zinc-900 border border-zinc-800/50 transition-all hover:scale-[1.01] z-10 ${aspectClass} ${spanClass}`}
                >
                  <img
                    src={displayImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />

                  {/* Play Overlay for Videos and Reels */}
                  {item.youtubeId && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                        <Play className="text-white fill-white" size={item.type === 'reel' ? 24 : 40} />
                      </div>
                    </div>
                  )}

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-1">{item.type || 'Showcase'}</p>
                    <h4 className="text-lg font-bold leading-tight">{item.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4 font-bold">What You Get</h2>
          <div className="h-px w-12 bg-white/30" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {service.deliverables?.map((item, i) => {
            const itemObj = typeof item === 'string' ? { title: item, image: '' } : item;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-2xl md:rounded-3xl overflow-hidden hover:bg-zinc-900 transition-all"
              >
                {/* Deliverable Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={itemObj.image}
                    alt={itemObj.title}
                    className="w-full h-auto object-cover transition-all duration-700 brightness-100 group-hover:brightness-125 group-hover:scale-105"
                  />
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-2 bg-zinc-800 rounded-lg group-hover:text-cyan-400 transition-colors duration-500">
                      <Camera size={16} />
                    </div>
                    <div className="h-px grow ml-4 bg-zinc-800" />
                  </div>
                  <h4 className="text-sm md:text-base font-medium leading-snug">{itemObj.title}</h4>
                </div>
              </motion.div>
            );
          })}
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
            {/* Close Button */}
            <button className="absolute top-6 cursor-pointer right-6 text-white/50 hover:text-white z-110">
              <X size={32} />
            </button>

            {/* Left Navigation Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white z-110 transition-all"
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
              {service.Specializations[selectedWorkIndex].youtubeId ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${service.Specializations[selectedWorkIndex].youtubeId.split('?')[0]}?autoplay=1&controls=1&rel=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={service.Specializations[selectedWorkIndex].image}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  alt="Portfolio"
                />
              )}

              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold">{service.Specializations[selectedWorkIndex].title}</h3>
              </div>
            </motion.div>

            {/* Right Navigation Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white z-110 transition-all"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT SECTION */}
      <section id="contact" className="mt-10 border-t border-zinc-900">
        <Contactus />
      </section>

      <footer className="py-10 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Greeting */}
          <div className="text-center md:text-left">
            <p className="text-zinc-500 text-sm font-light">
              Thank you for visiting <span className="text-cyan-400">Remap Studio</span>. <br className="md:hidden" />
              We look forward to bringing your vision to life.
            </p>
          </div>

          {/* Developer Credit */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500">Built with precision by</span>
            <a
              href="https://github.com/akashtyagi03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors font-bold"
            >
              Aakash Tyagi ❤️
            </a>
          </div>

        </div>
      </footer>
    </div>

  );
};