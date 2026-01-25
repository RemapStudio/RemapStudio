import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, Calendar } from 'lucide-react';

export const Navbar: React.FC<{ onStartClick: () => void }> = ({ onStartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { name: "Capabilities", href: "#services" },
    { name: "Portfolio", href: "#work" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <nav className="fixed w-full z-60 px-6 py-5 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="text-xl font-black tracking-tighter text-white">REMAP STUDIO</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-500">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors uppercase">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button 
          onClick={onStartClick}
          className="hidden md:block bg-white cursor-pointer text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-all uppercase tracking-wider"
        >
          Get Started
        </button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-black pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-white"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-white text-black py-5 rounded-2xl font-bold text-lg"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Popup Modal Form --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tighter text-white mb-2">Let’s Start Your Project</h2>
                <p className="text-zinc-500 text-sm">Fill in the details below or book a direct call.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20"
                  />
                </div>
                <select className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 appearance-none">
                  <option>Select Service</option>
                  <option>Commercial Video</option>
                  <option>Brand Photography</option>
                  <option>AI-Powered Ads</option>
                </select>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20"
                ></textarea>

                <button className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all">
                  <Send size={18} /> Send Inquiry
                </button>
                
                <div className="relative py-4 flex items-center">
                  <div className="grow border-t border-white/5"></div>
                  <span className="px-4 text-[10px] text-zinc-600 uppercase tracking-widest">or</span>
                  <div className="grow border-t border-white/5"></div>
                </div>

                <button className="w-full border border-zinc-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                  <Calendar size={18} /> Book Discovery Call
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};