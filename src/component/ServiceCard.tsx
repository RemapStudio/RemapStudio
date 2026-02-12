import { motion, Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
}
interface ServiceCardProps extends ServiceItem {
  id: string;
  capabilities?: string[] 
  index: number;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ id, icon: Icon, title, desc, image }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${id}`);
  }

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="overflow-hidden cursor-pointer border border-zinc-900 bg-linear-to-b from-zinc-900/50 to-black rounded-3xl hover:border-zinc-700 transition-all group"
      onClick={handleClick}
    >
      <div className="relative h-48 w-full overflow-hidden bg-zinc-800/20">
        {!isLoaded && (
          <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
        )}

        <img
          src={image}
          alt={title}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 
            ${isLoaded ? 'opacity-60 grayscale-[0.5] group-hover:opacity-100 group-hover:grayscale-0' : 'opacity-0'}`}
        />

        <div className="absolute bottom-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-white transition-colors">
          <Icon className="text-zinc-400 group-hover:text-black transition-colors" size={20} />
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed font-light">{desc}</p>
      </div>
    </motion.div>
  );
};
