import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", hash: "#services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About", to: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="text-xl font-black tracking-tighter text-white">REMAP STUDIO</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[15px] uppercase tracking-[0.2em] font-semibold text-zinc-500">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.name} to={link.to} className="hover:text-white transition-colors uppercase">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.hash} className="hover:text-white transition-colors uppercase">
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Desktop Button */}
        <button
          onClick={() => navigate('/contact')}
          className="hidden md:block bg-white cursor-pointer text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-all uppercase tracking-wider"
        >
          Contact Us
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) =>
                link.to ? (
                  <Link key={link.name} to={link.to} onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold tracking-tighter text-white">
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.hash} onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold tracking-tighter text-white">
                    {link.name}
                  </a>
                )
              )}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/contact');
                }}
                className="w-full bg-white text-black py-5 rounded-2xl font-bold text-lg"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};