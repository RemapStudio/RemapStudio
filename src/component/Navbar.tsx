export const Navbar: React.FC = () => (
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