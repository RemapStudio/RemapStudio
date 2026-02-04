import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Camera, Video, Scissors, Plane, Cpu, PenTool, ArrowRight, LucideIcon, Instagram, Linkedin } from 'lucide-react';
import { Navbar } from '../component/Navbar';
import { ServiceCard } from '../component/ServiceCard';
import { Contactus } from './Contactus';
import { AboutPage } from './Aboutpage';
import { ConstellationBackground } from '../component/ConstellationBackground';

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  capabilities?: string[];
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 }, // Add this key
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

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black font-sans antialiased">
      <Navbar />
      <section className="relative min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden bg-black pt-25 md:pt-24">
        <div className="absolute inset-0 z-0">
          <ConstellationBackground />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_90%)] z-1 pointer-events-none" />
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-5xl px-4 md:px-0 mt-20 md:mt-24"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[1.1]"
          >
            High-Impact Visuals <br className="hidden md:block" />
            <span className="text-zinc-500 italic font-medium block md:inline mt-2 md:mt-0">
              For The Modern Brand
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-4 md:px-0"
          >
            We deliver cinematic production and AI-powered creative solutions designed to scale your brand’s digital footprint.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center"
          >
            <button
              onClick={() => window.location.hash = '#contact'}
              className="w-full sm:w-auto bg-white cursor-pointer text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              Book a Consultation
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </button>

            <button className="w-full sm:w-auto border border-zinc-800 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold hover:bg-white/5 transition-all">
              <a href="#services" className="uppercase tracking-widest text-xs">
                Our Capabilities
              </a>
            </button>
          </motion.div>
        </motion.div>
      </section>

      <div className="border-y border-zinc-900 mt-8 bg-black"></div>

      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Core Services</h2>
            <p className="text-zinc-500 font-light">From traditional lenses to artificial intelligence, we use the best tool for the objective.</p>
          </div>
          <div className="text-zinc-700 font-mono text-sm uppercase">/ Services_06</div>
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
      </section>

      <section id="about" className='bg-zinc-950 border-y border-zinc-900'>
        <AboutPage />
      </section>
      <section id="contact" className='bg-zinc-950 border-y border-zinc-900'>
        <Contactus />
      </section>

      <footer className="relative py-15 px-6 border-t border-zinc-900 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <ConstellationBackground />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_10%,black_70%)] z-1 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="group">
            <div className="font-black text-2xl tracking-tighter mb-4 group-hover:tracking-normal transition-all duration-500 ease-in-out">
              REMAP STUDIO
            </div>
            <p className="text-[12px] md:text-sm text-zinc-400 max-w-xs font-light leading-relaxed">
              Premium visual production for startups, corporate brands, and marketing teams worldwide.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-24">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-widest text-zinc-500">Contact</h5>
              <div className="flex flex-col space-y-2">
                <a href="mailto:manager.remapstudio@gmail.com" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">
                  manager.remapstudio@gmail.com
                </a>
                <a href="mailto:hello@remapstudio.com" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">
                  hello@remapstudio.com
                </a>
                <div className="text-sm text-zinc-500 font-light">Hyderabad / Delhi / Remote</div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-widest text-zinc-500 md:pt-0">Social</h5>
              <div className="flex gap-6 text-zinc-500">
                <a href="https://www.instagram.com/remapstudio?igsh=OGxmbG1jbDBmamM5" className="hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Instagram size={22} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/company/remapstudio/" className="hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Linkedin size={22} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mt-20 pt-5 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
            © 2026 Remap Studio. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
