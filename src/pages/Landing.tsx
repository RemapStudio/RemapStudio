import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Camera, Video, Scissors, Plane, 
  Cpu, PenTool, CheckCircle2, ArrowRight,
  LucideIcon 
} from 'lucide-react';

// --- Types & Interfaces ---

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ServiceCardProps extends ServiceItem {
  index: number;
}

// --- Animation Variants ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// --- Sub-Components ---

const Navbar: React.FC = () => (
  <nav className="fixed w-full z-50 px-6 py-5 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5">
    <div className="text-xl font-black tracking-tighter text-white">REMAP STUDIO</div>
    <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-500">
      <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
      <a href="#work" className="hover:text-white transition-colors">Portfolio</a>
      <a href="#about" className="hover:text-white transition-colors">Approach</a>
    </div>
    <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-all uppercase tracking-wider">
      Get Started
    </button>
  </nav>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, desc, index }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -8 }}
    className="p-10 border border-zinc-900 bg-gradient-to-b from-zinc-900/50 to-black rounded-3xl hover:border-zinc-700 transition-all group"
  >
    <div className="w-12 h-12 bg-zinc-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
      <Icon className="text-zinc-400 group-hover:text-black transition-colors" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

// --- Main Page Component ---

export const Landing: React.FC = () => {
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
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl"
        >
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            High-Impact Visuals <br />
            <span className="text-zinc-600 italic font-medium">For The Modern Brand</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We deliver cinematic production and AI-powered creative solutions designed to scale your brand’s digital footprint.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-white text-black px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform">
              Book a Consultation <ArrowRight size={20} />
            </button>
            <button className="border border-zinc-800 text-white px-10 py-5 rounded-full font-bold hover:bg-white/5 transition-all">
              Our Capabilities
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <div className="border-y border-zinc-900 py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-10 opacity-30">
          {['Corporate-Ready', 'Cinematic Quality', 'Fast Turnaround', 'AI-Driven'].map((item) => (
            <span key={item} className="text-[10px] uppercase tracking-[0.3em] font-bold">{item}</span>
          ))}
        </div>
      </div>

      {/* Services Grid */}
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

      {/* Process Section */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-20 tracking-tighter italic">The Remap Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {['Discover', 'Plan', 'Produce', 'Deliver'].map((step, i) => (
              <div key={step} className="group">
                <div className="text-xs font-mono text-zinc-700 mb-4 tracking-widest">STEP_0{i + 1}</div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-zinc-400 transition-colors">{step}</h4>
                <div className="w-full h-[1px] bg-zinc-800 mb-4" />
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

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-[4rem] border border-white/5 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-none">
              Ready to elevate your <br /> brand's visual identity?
            </h2>
            <button className="bg-white text-black px-12 py-6 rounded-full font-black text-lg hover:bg-zinc-200 transition-all hover:px-16">
              Start Your Project
            </button>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
        </motion.div>
      </section>

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
