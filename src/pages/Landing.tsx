import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ProjectModal } from '../component/ProjectModal';

import {
  Camera, Video, Scissors, Plane,
  Cpu, PenTool, ArrowRight, LucideIcon
} from 'lucide-react';
import { Navbar } from '../component/Navbar';
import { ServiceCard } from '../component/ServiceCard';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// Main Page Component 
export const Landing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services: ServiceItem[] = [
    { icon: Camera, title: "Photography & Videography", desc: "High-fidelity visual storytelling for premium product launches and brand campaigns." },
    { icon: Video, title: "Commercial Production", desc: "End-to-end video production specifically engineered for high-growth SaaS and Corporate brands." },
    { icon: Scissors, title: "Editing & Post-Production", desc: "Precision color grading, sound design, and narrative flow that commands viewer attention." },
    { icon: Plane, title: "Aerial Cinematography", desc: "Specialized drone operations for real estate, industrial, and large-scale architectural projects." },
    { icon: Cpu, title: "AI-Powered Creative", desc: "Leveraging generative AI to produce high-volume UGC and performance-driven social ad content." },
    { icon: PenTool, title: "Brand Identity", desc: "Modern visual systems that bridge the gap between corporate reliability and creative edge." },
  ];

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black font-sans antialiased">
      <Navbar onStartClick={() => setIsModalOpen(true)} />
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden bg-black">

        {/* Cinematic gradient base */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-zinc-950 to-black" />
        {/* Directional studio light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-225 h-125 bg-zinc-700/10 blur-[160px] rounded-full pointer-events-none" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_80%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-8xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]"
          >
            High-Impact Visuals <br className="hidden md:block" />
            <span className="text-zinc-500 italic font-medium">
              For The Modern Brand
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-2 md:px-0"
          >
            We deliver cinematic production and AI-powered creative solutions designed to scale your brand’s digital footprint.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-white cursor-pointer text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform whitespace-nowrap text-sm md:text-base"
            >
              Book a Consultation
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </button>

            <button className="w-full sm:w-auto border cursor-pointer border-zinc-800 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold hover:bg-white/5 transition-all text-sm md:text-base whitespace-nowrap">
              Our Capabilities
            </button>
          </motion.div>
        </motion.div>
      </section>


      <div className="border-y border-zinc-900 py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-10 opacity-30">
          {['Corporate-Ready', 'Cinematic Quality', 'Fast Turnaround', 'AI-Driven'].map((item) => (
            <span key={item} className="text-[10px] uppercase tracking-[0.3em] font-bold">{item}</span>
          ))}
        </div>
      </div>

      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Core Capabilities</h2>
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

      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-20 tracking-tighter italic">The Remap Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {['Discover', 'Plan', 'Produce', 'Deliver'].map((step, i) => (
              <div key={step} className="group">
                <div className="text-xs font-mono text-zinc-700 mb-4 tracking-widest">STEP_0{i + 1}</div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-zinc-400 transition-colors">{step}</h4>
                <div className="w-full h-px bg-zinc-800 mb-4" />
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  {i === 0 && "We align on your KPIs and brand narrative."}
                  {i === 1 && "Technical storyboarding and logistics mapping."}
                  {i === 2 && "Execution using 8K standards and pro gear."}
                  {i === 3 && "Optimized assets delivered for your platforms."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto p-10 md:p-20 bg-linear-to-br from-zinc-800 to-zinc-950 rounded-4xl md:rounded-[4rem] border border-white/5 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-7xl font-bold mb-8 md:mb-10 tracking-tighter leading-tight md:leading-none">
              Ready to elevate your <br className="hidden md:block" /> brand's visual identity?
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black cursor-pointer px-8 py-4 md:px-12 md:py-6 rounded-full font-black text-sm md:text-lg hover:bg-zinc-200 transition-all hover:scale-105 whitespace-nowrap"
            >
              Start Your Project
            </button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-125 md:h-125 bg-white/5 blur-[80px] md:blur-[120px] rounded-full" />
        </motion.div>
      </section>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="font-black text-2xl tracking-tighter mb-4">REMAP STUDIO</div>
            <p className="text-zinc-600 text-sm max-w-xs font-light">
              Premium visual production for startups, corporate brands, and marketing teams worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-widest text-zinc-400">Contact</h5>
              <div className="text-sm text-zinc-500 hover:text-white transition-colors cursor-pointer">hello@remapstudio.com</div>
              <div className="text-sm text-zinc-500">London / Remote</div>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-widest text-zinc-400">Social</h5>
              <div className="flex flex-col gap-2 text-sm text-zinc-500">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Vimeo</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-zinc-900 text-[10px] text-zinc-800 uppercase tracking-widest">
          © 2026 Remap Studio. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};
