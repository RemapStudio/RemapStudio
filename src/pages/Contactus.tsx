import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { ArrowLeft, ArrowRight, ChevronDown, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ContactFormData {
    fullName: string;
    email: string;
    service: string;
    message: string;
}

export const Contactus = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: '',
        email: '',
        service: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            full_name: formData.fullName,
            email: formData.email,
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
                loading: 'Sending...',
                success: () => {
                    setFormData({ fullName: '', email: '', service: '', message: '' });
                    return 'Message sent successfully!';
                },
                error: 'Failed to send. Please try again.',
            }
        );
    };

    const inputClasses = "w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors placeholder:text-zinc-700 text-white";
    const labelClasses = "block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1";

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 pt-15 pb-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group flex max-w-7xl mx-auto w-full mb-12 cursor-pointer items-center"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft
                        className="mr-2 text-zinc-500 group-hover:text-white group-hover:-translate-x-2 transition-all duration-300"
                        size={25}
                    />
                    <span className="text-sm uppercase tracking-widest font-medium text-zinc-500 group-hover:text-white transition-colors duration-300">
                        back to home
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left Column: Branding & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h3 className="text-white text-sm font-bold tracking-[0.2em] uppercase">Start a Project</h3>
                            <h1 className="text-6xl text-zinc-500 md:text-8xl font-bold tracking-tight leading-[0.9]">
                                Let's create <br />
                                <span className="text-white">together</span>
                            </h1>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                            Ready to bring your vision to life? Tell us about your project and we'll get back to you within 24 hours.
                        </p>

                        <div className="pt-8">
                            <p className="text-zinc-500 text-sm mb-2">Email</p>
                            <a href="mailto:manager.remapstudio@gmail.com" className="text-xl text-zinc-500 hover:text-white transition-colors font-medium">
                                manager.remapstudio@gmail.com
                            </a>
                            <a href="tel:+916397607997" className="flex items-center gap-4 group pt-5">
                                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-full group-hover:border-zinc-500 transition-colors">
                                    <Phone size={15} className="text-zinc-400" />
                                </div>
                                <span className="text-lg hover:text-zinc-400 transition-colors">+91 63976 07997</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="space-y-2">
                                <label className={labelClasses}>Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    required
                                    className={inputClasses}
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className={labelClasses}>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    required
                                    className={inputClasses}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2 relative">
                                <label className={labelClasses}>Service Interested In</label>
                                <div className="relative">
                                    <select
                                        required
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="" disabled className="bg-black">Select a service</option>
                                        <option value="photography" className="bg-black">Photography & Videography</option>
                                        <option value="ai-ads" className="bg-black">AI-Powered Ads</option>
                                        <option value="branding" className="bg-black">Commercial Branding</option>
                                        <option value="design" className="bg-black">Graphic Design</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className={labelClasses}>Message</label>
                                <textarea
                                    rows={1}
                                    placeholder="Tell us about your project..."
                                    className={`${inputClasses} resize-none`}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center gap-3 bg-white cursor-pointer text-black px-8 py-4 font-bold transition-all mt-4"
                            >
                                Send Message
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-zinc-900 py-10 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* change logo here? */}
                    <div className="text-xl font-bold tracking-tighter">R$</div>
                    <div className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
                        <a href="mailto:manager.remapstudio@gmail.com">manager.remapstudio@gmail.com</a>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-zinc-500">
                        <a href="https://www.instagram.com/remapstudio?igsh=OGxmbG1jbDBmamM5" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://www.linkedin.com/company/remapstudio/" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};