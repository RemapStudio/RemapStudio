import { ArrowLeft, Link } from "lucide-react";
import { motion } from "framer-motion";

export const HeroCinematic = ({ service }: any) => {
    return (
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center pt-24 pb-12 px-6 lg:px-20 gap-12 overflow-hidden">
            {/* Background Glow */}
            <div className="flex flex-col absolute top-0 right-0 w-125 h-125 bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
            

            {/* <div className="w-full lg:w-1/2 z-10">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                    <Link to="/" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={25} />
                        Back to Home
                    </Link>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                        {service.title.split('&').map((t: string, i: number) => (
                            <span key={i} className="block">{t}</span>
                        ))}
                    </h1>
                    <p className="max-w-md text-xl text-zinc-400 font-light leading-relaxed mb-10">
                        {service.subtitle}
                    </p>
                    <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all scale-100 hover:scale-105 active:scale-95">
                        Book a Production Call
                    </button>
                </motion.div>
            </div> */}

            {/* Hero Video Loop (Proof above the fold) */}
            {/* <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative group">
                <div className="absolute inset-0 border border-white/10 rounded-4xl -m-2 z-0 scale-95 group-hover:scale-100 transition-transform duration-700" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full h-full rounded-4xl overflow-hidden border border-zinc-800 relative z-10 shadow-2xl shadow-blue-900/20"
                >
                    <video
                        src={service.workSamples[0]?.videoUrl}
                        poster={service.workSamples[0]?.poster}
                        autoPlay muted loop playsInline
                        className="w-full h-full object-cover grayscale-30% group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </motion.div>
            </div> */}
        </section>
    );
};