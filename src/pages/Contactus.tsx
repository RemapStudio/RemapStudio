import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { Mail, Phone, Instagram, Linkedin, Youtube, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ContactFormData {
    fullName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export const Contactus = () => {
    const navigate = useNavigate();
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
                loading: 'Sending your inquiry...',
                success: (result) => {
                    console.log('Email sent:', result.text);
                    setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                    });

                    return 'Message sent! We will contact you soon.';
                },
                error: (err) => {
                    console.error('Email error:', err.text);
                    return 'Failed to send. Please try again or email us directly.';
                },
            }
        );
    };



    return (
        <div className="min-h-screen bg-black text-white selection:bg-zinc-800">
            <section className="relative pt-32 pb-16 px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group flex max-w-7xl mx-auto w-full mb-12 cursor-pointer items-center"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft
                        className="mr-2 text-zinc-500 group-hover:text-white group-hover:-translate-x-2 transition-all duration-300"
                        size={20}
                    />
                    <span className="text-sm uppercase tracking-widest font-medium text-zinc-500 group-hover:text-white transition-colors duration-300">
                        back to home
                    </span>
                </motion.div>

                <div className="flex flex-col items-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">Let’s Connect
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl mx-auto text-xl text-zinc-400 font-light leading-relaxed"
                    > Ready to grow your brand with professional visuals? Tell us about your project, and let’s create work that gets results.
                    </motion.p>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your work email"
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">+91</span>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Select Service</label>
                                    <select
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-500 appearance-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="">How can we help?</option>
                                        <option value="photography">Photography & Videography</option>
                                        <option value="ai-ads">AI-Powered Ads</option>
                                        <option value="branding">Commercial Branding</option>
                                        <option value="design">Graphic Design</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-2">Project Details (optional)</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your goals..."
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="flex sm:flex-row gap-4 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-white text-black font-semibold py-4 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                                >
                                    Send Inquiry <ArrowRight size={18} />
                                </button>
                            </div>
                        </form>
                    </div> 

                    {/* Right Column: Direct Contact Info */}
                    <div className="lg:col-span-5 space-y-12 lg:pl-12">
                        <div>
                            <h3 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-6">Reach out directly</h3>
                            <div className="space-y-6">
                                <a href="mailto:manager.remapstudio@gmail.com" className="flex items-center gap-4 group">
                                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-full group-hover:border-zinc-500 transition-colors">
                                        <Mail size={20} className="text-zinc-400" />
                                    </div>
                                    <span className="text-lg hover:text-zinc-400 transition-colors">manager.remapstudio@gmail.com</span>
                                </a>
                                <a href="tel:+916397607997" className="flex items-center gap-4 group">
                                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-full group-hover:border-zinc-500 transition-colors">
                                        <Phone size={20} className="text-zinc-400" />
                                    </div>
                                    <span className="text-lg hover:text-zinc-400 transition-colors">+91 63976 07997</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-6">Follow our work</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: Instagram, link: "https://www.instagram.com/remapstudio?igsh=OGxmbG1jbDBmamM5", label: "Instagram" },
                                    { icon: Linkedin, link: "https://www.linkedin.com/company/remapstudio/", label: "LinkedIn" },
                                    { icon: Youtube, link: "#", label: "YouTube" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-500 transition-all hover:-translate-y-1"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};