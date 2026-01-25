
import { motion, Variants } from 'framer-motion';
import {LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ServiceCardProps extends ServiceItem {
  index: number;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, desc }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -8 }}
    className="p-10 border border-zinc-900 bg-linear-to-b from-zinc-900/50 to-black rounded-3xl hover:border-zinc-700 transition-all group"
  >
    <div className="w-12 h-12 bg-zinc-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
      <Icon className="text-zinc-400 group-hover:text-black transition-colors" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);
