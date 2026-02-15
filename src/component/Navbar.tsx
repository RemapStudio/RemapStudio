import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import RS from '../assets/LOGO/RS.png';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle background change on scroll for better visibility over content
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", hash: "#home" },
    { name: "Services", hash: "#services" },
    { name : "our work", hash: "#ourwork" },
    { name: "About", hash: "#about" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'
        }`}>
        {/* Main section */}
        <div className="max-w-360 mx-auto px-4 md:px-10">
          <div className={`flex justify-between items-center transition-all duration-500 px-6 py-4 rounded-full border ${scrolled
              ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl'
              : 'bg-transparent border-transparent'
            }`}>

            {/* Logo */}
              <a href="#home" className="text-xl font-black tracking-tighter text-white cursor-pointer">
              <img
                src={RS}
                alt="Remap Studio Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex gap-8 text-sm uppercase tracking-[0.3em] font-bold text-zinc-500">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.hash}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => window.location.hash = '#contact'}
                className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black hover:bg-zinc-200 transition-all uppercase tracking-widest flex items-center gap-2 group cursor-pointer"
              >
                Contact Us
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2 cursor-pointer relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.hash}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-bold tracking-tighter text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.hash = '#contact';
                }}
                className="mt-8 bg-white text-black py-5 px-12 rounded-full font-bold text-xl"
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};