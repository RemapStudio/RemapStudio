import { useParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Contactus } from './Contactus';
import divine from '../assets/divine.jpg';
import organicmilk from '../assets/organicmilk.jpg';
import post1 from '../assets/post1.png';
import post2 from '../assets/post2.png';
import flyer35e from '../assets/flyer35e.jpg';
import RealEstateImg from '../assets/RealEstateImg.avif';
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
        { title: "Corporate Photoshoots", image: imgurl, youtubeId: undefined },
        { title: "Product Photography", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200", youtubeId: undefined },
        { title: "Event Documentation", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200", youtubeId: undefined },
        { title: "Real Estate & Interiors", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200", youtubeId: undefined },
        { title: "Interviews & Testimonials", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200", youtubeId: undefined },
        { title: "Business Campaign Shoots", image: RealEstateImg, youtubeId: undefined }
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
        { title: "Bellavita Ad Film", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop", youtubeId: "LxDEy-wPVRY?si=tN-fjNNA7sjjBVvQ" },
        { title: "BlueDe chanel CGI Ad", image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=800&auto=format&fit=crop", youtubeId: "snNhbkF6nSw?si=ewn1YYddoqydcpDH" },
        { title: "Motion Graphics & Animated Titles", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop", youtubeId: undefined }
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
        { title: "Cinematic Editing & Story Pacing", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop", youtubeId: undefined },
        { title: "Color Grading & Film Looks", image: imgurl, youtubeId: undefined },
        { title: "Audio Cleanup & Sound Design", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop", youtubeId: undefined }
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
        { title: "Above the World Cinematic Travel Visuals", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop", youtubeId: "igPWHsJpVaw?si=eC4KWWrO9HQAhSBo" },
        { title: "Construction Site Progress Monitoring – Visual Documentation", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop", youtubeId: "0KJmMEetS5U?si=2ZR7igm8G-4E3SK5", },
        { title: "Real Estate Aerial Showcase Drone Cinematography", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", youtubeId: "LGZ8YFd-uGI?si=F3V_87WYwwDhta6H" },
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
        { title: "AI Powered Hair Story", image: imgurl, youtubeId: "93mY8Bl3qBs?si=250RdtdzsnqNWyBA" },
        { title: "AI Powered Skin Story", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop", youtubeId: "3HxlK3ZLvdQ?si=bIKHUkpFkDDaMEr-" },
        { title: "Aloe Glow — Reimagined by AI", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", youtubeId: "zl3LUjZL2HA?si=-_PuIIYC5F3zjH5_" },
        { title: "Designed in the Future", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop", youtubeId: "SP0uqnChCqQ?si=5f0uzzRl2Lb29Uot" },
        { title: "Fruit Glow — Reimagined by AI", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=800&auto=format&fit=crop", youtubeId: "tyvopmAo0Ck?si=_SstCevrPCgtIPTE" },
        { title: "Future of Skincare Ads", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop", youtubeId: "Tq-v3pZ2-eI?si=XFG5B42tGPIzMR1R" },
        { title: "Glow the Cocoa Way", image: "https://images.unsplash.com/photo-1608248547160-fbc763c01567?q=80&w=800&auto=format&fit=crop", youtubeId: "ZJ8QqDBXYCo?si=w0lrRujhoeiwmEQs" }
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
        { title: "Social Media Post & Ad Creatives", image: organicmilk, youtubeId: undefined },
        { title: "Posters, Flyers & Event Promotions", image: flyer35e, youtubeId: undefined },
        { title: "Business Cards & Corporate Stationery", image: divine, youtubeId: undefined },
        { title: "Pitch Deck & Company Profile Design", image: post1, youtubeId: undefined },
        { title: "Thumbnails & YouTube Creative Design", image: post2, youtubeId: undefined }
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
      <section className="py-10 px-4 md:px-8 mx-0 md:mx-6 bg-zinc-950/50 rounded-none md:rounded-[3.5rem] border-y md:border border-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-12 gap-4">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">Our Portfolio</h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {service.Specializations?.map((item, i) => {
              // Define the image source logic HERE, before the return
              const displayImage = item.youtubeId
                ? `https://img.youtube.com/vi/${item.youtubeId.split('?')[0]}/maxresdefault.jpg`
                : item.image;

              return (
                <motion.div
                  key={i}
                  onClick={() => setSelectedWorkIndex(i)}
                  className="relative break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer bg-zinc-900 border border-zinc-800/50 transition-all hover:scale-[1.02] z-10"
                >
                  <div className="relative aspect-video sm:aspect-auto">
                    <img
                      src={displayImage} // Use the variable we defined above
                      alt={item.title}
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    {item.youtubeId && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="text-white opacity-50 group-hover:opacity-100 transition-opacity" size={48} />
                      </div>
                    )}
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
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 font-bold">What You Get</h2>
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
                    <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-white group-hover:text-black transition-colors duration-500">
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
            <button className="absolute top-6 right-6 text-white/50 hover:text-white z-110">
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
    </div>
  );
};