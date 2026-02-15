import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Camera, Video, Scissors, Plane, Cpu, PenTool, LucideIcon, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Navbar } from '../component/Navbar';
import { ServiceCard } from '../component/ServiceCard';
import { Contactus } from '../component/Contactus';
import { Ouework } from '../component/Ourwork';
import { ConstellationBackground } from '../component/ConstellationBackground';
import remapstudio from '../assets/LOGO/remapStudio.png';
import { About } from '../component/About';

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  capabilities?: string[];
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

// Main Page Component 
export const Landing: React.FC = () => {

  const services: ServiceItem[] = [
    {
      id: "photography-videography",
      icon: Camera,
      title: "Photography & Videography",
      desc: "High-fidelity visual storytelling for premium product launches and brand campaigns.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "commercial-brand-production",
      icon: Video,
      title: "Commercial & Brand Production",
      desc: "End-to-end video production specifically engineered for high-growth SaaS and Corporate brands.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "editing-post-production",
      icon: Scissors,
      title: "Editing & Post-Production",
      desc: "Precision color grading, sound design, and narrative flow that commands viewer attention.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "drone-photography-videography",
      icon: Plane,
      title: "Drone Photography & Videography",
      desc: "Specialized drone operations for real estate, industrial, and large-scale architectural projects.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "ai-powered-video-ugc-content",
      icon: Cpu,
      title: "AI-Powered Video & UGC Content",
      desc: "Leveraging generative AI to produce high-volume UGC and performance-driven social ad content.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "graphic-design-creative-branding",
      icon: PenTool,
      title: "Graphic Design & Creative Branding",
      desc: "Modern visual systems that bridge the gap between corporate reliability and creative edge.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop"
    },
  ];
  const [index, setIndex] = useState(0);
  const words = ["STORY", "VISION", "BRAND", "IDEAS"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black font-sans antialiased">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-45"><ConstellationBackground /></div>
      <Navbar />

      <main className="relative z-10">

        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen overflow-hidden pt-20 lg:pt-30 flex flex-col justify-center">
          <div className="max-w-348 mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-12 items-stretch">

              <div className="flex flex-col justify-end order-1">
                <h2 className="font-helvetica text-white text-6xl md:text-[110px] font-black tracking-[-0.06em] uppercase leading-[0.85] lg:leading-[0.8]">
                  BRINGING <br />
                  YOUR <br />
                  <span className="text-cyan-400">{words[index]}</span> <br />
                  TO THE WORLD
                </h2>
              </div>

              <div className="relative order-2 lg:row-span-1 flex items-stretch">
                <div className="relative w-full h-full min-h-62.5 sm:min-h-87.5 lg:min-h-0 aspect-video lg:aspect-auto overflow-hidden rounded-3xl md:rounded-4xl border border-white/10 shadow-2xl bg-black">
                  <iframe
                    className="absolute top-1/2 left-1/2 w-[180%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    src={`https://www.youtube.com/embed/snNhbkF6nSw?autoplay=1&mute=1&loop=1&playlist=snNhbkF6nSw&controls=0&modestbranding=1&rel=0`}
                    allow="autoplay; encrypted-media"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-transparent z-10" />
                </div>
                <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full z-[-1]" />
              </div>

              <div className="order-3 mt-2 lg:mt-8 md:mt-12">
                <p className="text-zinc-400 text-base md:text-xl font-medium max-w-sm mx-auto lg:mx-0 leading-tight">
                  We deliver Cinematic production and <br />
                  AI-powered <span className="text-white">creative to scale your brand.</span>
                </p>
              </div>

              <div className="hidden lg:block order-4"></div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 max-w-350 mx-auto">
          <div className="px-6">
            <div className="mb-15 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Core Services</h2>
                <p className="text-zinc-500 font-light">From traditional lenses to artificial intelligence, we use the best tool for the objective.</p>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, i) => (
                <ServiceCard key={service.title} {...service} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="ourwork" className='relative border-t border-zinc-900/50'>
          <Ouework />
        </section>

        <section id="about" className='relative border-t border-zinc-900/50'>
          <About />
        </section>

        <section id="contact" className='relative border-t border-zinc-900/50'>
          <Contactus />
        </section>

      </main>

      <footer className="relative py-15 px-6 border-t border-zinc-900 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <ConstellationBackground />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_10%,black_70%)] z-1 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="group flex flex-col items-start text-left">
            <img
              src={remapstudio}
              alt="Remap Studio Logo"
              className="h-8 md:h-10 w-auto mb-5 object-left object-contain"
            />
            <p className="text-[15px] md:text-[16px] text-zinc-300 max-w-100 font-light leading-relaxed">
              Premium visual production for startups, corporate brands, and marketing teams worldwide.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-24">
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-widest text-zinc-300">Contact</h5>
              <div className="flex flex-col space-y-2">
                <a href="mailto:manager.remapstudio@gmail.com" className="text-[15px] text-zinc-300 hover:text-white transition-colors duration-300">
                  manager.remapstudio@gmail.com
                </a>
                <a href="mailto:hello@remapstudio.com" className="text-[15px] text-zinc-300 hover:text-white transition-colors duration-300">
                  hello@remapstudio.com
                </a>
                <div className="text-xs text-zinc-300 ">Hyderabad / Delhi / Remote</div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-widest text-zinc-300 md:pt-0">Social</h5>
              <div className="flex gap-6 text-zinc-500">
                <a href="https://www.instagram.com/remapstudio?igsh=OGxmbG1jbDBmamM5" target="_blank"
                  rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/company/remapstudio/" target="_blank"
                  rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
                <a href="https://www.youtube.com/@RemapStudio" target="_blank"
                  rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Youtube size={24} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mt-20 pt-5 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-zinc-300 uppercase tracking-[0.2em]">
            © 2026 Remap Studio. All Rights Reserved.
          </p>
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
