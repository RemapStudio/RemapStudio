import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface WorkSample {
    id: number;
    type: 'featured' | 'grid';
    format: 'vertical' | 'horizontal';
    title: string;
    category: string;
    outcome: string;
    videoUrl: string;
    poster: string;
}

const ProjectCard = ({ project }: { project: WorkSample }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isVertical = project.format === 'vertical';

    const handleMouseEnter = () => videoRef.current?.play().catch(() => { });
    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-zinc-600"
        >
            {/* FIXED: Added brackets to aspect-[9/16] */}
            <div className={`${isVertical ? 'aspect-[9/16]' : 'aspect-video'} overflow-hidden relative bg-zinc-800`}>
                <video
                    ref={videoRef}
                    src={project.videoUrl}
                    poster={project.poster}
                    className="h-full w-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    muted loop playsInline
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <Play size={24} fill="white" className="text-white" />
                    </div>
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-1">{project.category}</span>
                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                    <p className="text-zinc-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity italic">
                        "{project.outcome}"
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export const WorkSection: React.FC<{ samples?: WorkSample[] }> = ({ samples }) => {
    // Debugging: Check your console to see if data is actually arriving
    console.log("WorkSection Samples:", samples);

    if (!samples || samples.length === 0) {
        return (
            <div className="py-20 text-center border-t border-zinc-900">
                <p className="text-zinc-600 italic">Portfolio coming soon for this service...</p>
            </div>
        );
    } 

    const featured = samples.find(s => s.type === 'featured');
    const gridItems = samples.filter(s => s.type === 'grid');

    return (
        <section className="py-15 px-6 max-w-7xl mx-auto  border-zinc-900">

            {featured && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-8 relative aspect-video rounded-4xl overflow-hidden border border-zinc-800 bg-zinc-900"
                >
                    <video
                        src={featured.videoUrl}
                        poster={featured.poster}
                        className="w-full h-full object-cover"
                        muted loop playsInline autoPlay
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent p-8 md:p-16 flex flex-col justify-end">
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">{featured.title}</h3>
                        <p className="text-zinc-300 max-w-lg text-lg border-l-2 border-blue-500 pl-4">
                            {featured.outcome}
                        </p>
                    </div>
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridItems.map((item) => (
                    <ProjectCard key={item.id} project={item} />
                ))}
            </div>
        </section>
    );
};