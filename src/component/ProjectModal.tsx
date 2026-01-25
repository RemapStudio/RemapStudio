import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors z-20">
              <X size={24} />
            </button>

            <div className="p-8 md:p-14">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-3">Start a Project</h2>
                <p className="text-zinc-500 font-light">Tell us about your vision. We'll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/20 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/20 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Budget Range</label>
                    <select className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/20 transition-all appearance-none cursor-pointer">
                      <option>Select Budget</option>
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Timeline</label>
                    <select className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/20 transition-all appearance-none cursor-pointer">
                      <option>Select Timeline</option>
                      <option>Urgent (1-2 weeks)</option>
                      <option>Standard (1 month)</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Project Brief</label>
                  <textarea rows={4} placeholder="What are we creating together?" className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/20 transition-all resize-none" />
                </div>

                <button className="w-full bg-white text-black py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all group">
                  Send Brief <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};