import { motion } from 'framer-motion';
import { Target, Trophy, Clock, CheckCircle2 } from 'lucide-react';

export const About = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Who We Are */}
            <section className="py-12 px-6 relative overflow-hidden">
                <div className="max-w-335 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* TEXT SIDE: More compact with tighter leading */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
                                    About Remap Studio
                                </h3>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.85]">
                                    We Design <br />
                                    <span className="text-zinc-500">The Future Of</span> <br />
                                    Visual Storytelling
                                </h2>
                            </div>

                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-light">
                                At Remap Studio, we engineer visual experiences. By blending
                                <span className="text-white font-medium"> cinematic production </span> with
                                <span className="text-white font-medium"> AI innovation</span>, we help brands dominate.
                            </p>
                        </motion.div>

                        {/* ART SIDE: Permanent Color & No Transparency */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            // {/* 'bg-black' blocks the background dots from showing through */}
                            className="relative aspect-video lg:aspect-4/3 rounded-4xl overflow-hidden border border-white/10 bg-black shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200"
                                alt="Creative Studio"
                                //   {/* Removed grayscale and opacity-60 to keep color permanent */}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Permanent Cyan Overlay with higher opacity */}
                            <div className="absolute inset-0 bg-cyan-500/30 mix-blend-multiply pointer-events-none" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TRUST FACTORS SECTION */}
            <section className="py-24 px-6 bg-zinc-950/40 border-b border-zinc-900">
                <div className="max-w-335 mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] uppercase leading-[0.9] mb-6">
                                Why Businesses <br /> <span className="text-cyan-400">Trust Us</span>
                            </h2>
                            <p className="text-zinc-500 text-lg">We bridge the gap between corporate reliability and creative edge.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { icon: Target, title: "Business-Focused Results", desc: "Visuals designed specifically to get you more customers." },
                            { icon: Trophy, title: "Premium Quality", desc: "High standards in lighting, sound, and professional editing." },
                            { icon: Clock, title: "Reliable Timelines", desc: "We stick to our schedules and deliver on or before the deadline." },
                            { icon: CheckCircle2, title: "Market Expertise", desc: "Local Indian expertise with global production standards." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-cyan-500/10 transition-colors">
                                    <item.icon className="text-white group-hover:text-cyan-400 transition-colors" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};