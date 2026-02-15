import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { ArrowRight, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

interface ContactFormData {
    fullName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export const Contactus = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const templateParams = {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
        };

        toast.promise(
            emailjs.send(
                'service_ob5ufhl',
                'template_kmoxjic',
                templateParams,
                'wVFz4kxzDVcgah9kr'
            ),
            {
                loading: 'Sending your vision...',
                success: () => {
                    setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
                    return 'Message sent! We’ll talk soon.';
                },
                error: 'Failed to send. Please try again.',
            }
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className=" text-white selection:bg-white selection:text-black overflow-x-hidden">
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-348 mx-auto px-6 py-20 md:py-15">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column */}
                    <motion.div
                        className="lg:col-span-5 space-y-12"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.85]">
                                Let's craft <br />
                                <span className="italic font-light text-cyan-400">Visuals together.</span>
                            </h1>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-sm">
                            Have a concept? We have the craft. Reach out and let’s start the conversation.
                        </motion.p>

                        <motion.div variants={itemVariants} className="space-y-8 pt-8 border-t border-zinc-900">
                            <div className="grid grid-cols-1 gap-8">
                                <ContactLink
                                    label="Project Inquiries"
                                    value="hello@remapstudio.com"
                                    href="mailto:hello@remapstudio.com"
                                    icon={<Mail size={16} />}
                                />
                                <ContactLink
                                    label="Direct Line"
                                    value="+91 63976 07997"
                                    href="tel:+916397607997"
                                    icon={<Phone size={16} />}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column  */}
                    <motion.div
                        className="lg:col-span-7 bg-zinc-900/20 border border-zinc-800/50 p-8 md:p-12 rounded-4xl backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FloatingInput
                                    label="Name"
                                    placeholder="Enter Your Name"
                                    value={formData.fullName}
                                    onChange={(v) => setFormData({ ...formData, fullName: v })}
                                />
                                <FloatingInput
                                    label="Email"
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={(v) => setFormData({ ...formData, email: v })}
                                />
                                <FloatingInput
                                    label="Phone"
                                    type="tel"
                                    placeholder="Enter Your Phone Number"
                                    value={formData.phone}
                                    onChange={(v) => setFormData({ ...formData, phone: v })}
                                />
                                <div className="space-y-2 group">
                                    <label className="text-xs uppercase tracking-widest text-zinc-300 font-bold ml-1 group-focus-within:text-cyan-400 transition-colors">
                                        Service Interested In
                                    </label>
                                    <div className="relative border-b border-zinc-800 group-focus-within:border-cyan-400 transition-colors duration-500">
                                        <select
                                            required
                                            className="w-full bg-transparent py-4 outline-none appearance-none cursor-pointer text-lg font-light group-focus-within:text-cyan-400 transition-colors"
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        >
                                            <option value="" disabled className="bg-black">Select Experience</option>
                                            <option value="photography" className="bg-black text-white">Production & Visuals</option>
                                            <option value="ai-ads" className="bg-black text-white">AI-Powered Ads</option>
                                            <option value="branding" className="bg-black text-white">Brand Architecture</option>
                                            <option value="design" className="bg-black text-white">Creative Design</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-focus-within:text-cyan-400 transition-colors">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="space-y-2 group">
                                <label className="text-xs uppercase tracking-widest text-zinc-300 font-bold ml-1 group-focus-within:text-cyan-400 transition-colors">
                                    Message
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Briefly describe your objective..."
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none group-focus-within:border-cyan-400 transition-colors duration-500 resize-none text-lg font-light placeholder:text-zinc-800"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full cursor-pointer md:w-auto flex items-center justify-between gap-12 bg-white text-black pl-8 pr-3 py-3 rounded-full overflow-hidden hover:bg-cyan-50 transition-all active:scale-[0.98]"
                            >
                                <span className="font-bold uppercase text-xs tracking-widest">Send Inquiry</span>
                                <div className="bg-black text-white p-3 rounded-full group-hover:bg-cyan-400 group-hover:text-black group-hover:rotate-45 transition-all duration-500">
                                    <ArrowRight size={20} />
                                </div>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

/* Helper Components to keep the main code clean */
const ContactLink = ({ label, value, href }: { label: string, value: string, href: string, icon: React.ReactNode }) => (
    <a href={href} className="group flex flex-col gap-1 transition-all">
        <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold group-hover:text-cyan-400 transition-colors">{label}</span>
        <div className="flex items-center gap-3">
            <span className="text-xl font-light text-zinc-300 group-hover:text-cyan-400 transition-colors">{value}</span>
            <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400">
                <ArrowUpRight size={18} />
            </div>
        </div>
    </a>
);

const FloatingInput = ({ label, placeholder, value, onChange, type = "text" }: { label: string, placeholder: string, value: string, onChange: (v: string) => void, type?: string }) => (
    <div className="space-y-2 group">
        <label className="text-xs uppercase tracking-widest text-zinc-300 font-bold ml-1 group-focus-within:text-cyan-400 transition-colors">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            required
            className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none group-focus-within:border-cyan-400 transition-colors duration-500 text-lg font-light placeholder:text-zinc-800"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);