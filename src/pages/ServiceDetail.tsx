import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, CheckCircle2, ExternalLink, Play } from 'lucide-react';
import CorporateImg from '../assets/CorporateImg.avif';
import ProductImg from '../assets/ProductImg.avif';
import EventImg from '../assets/EventImg.avif';
import RealEstateImg from '../assets/RealEstateImg.avif';
import InterviewsImg from '../assets/InterviewsImg.avif';
import imgurl from '../assets/imgurl.avif';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } // Using a cubic-bezier for smoother feel
};

export const ServiceDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const services = [
    {
      id: "photography-videography",
      title: "Photography & Videography",
      subtitle: "Professional photos and videos that make your brand look premium and build customer trust.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200",
      deliverables: [
        "High-resolution edited photographs",
        "4K cinematic video files",
        "Professional sound mixing",
        "Full commercial usage rights"
      ],
      Specializations: [
        {
          title: "Corporate Photoshoots",
          image: CorporateImg,
          desc: "Executive portraits and environmental office photography captured with high-end lighting setups.",
        },
        {
          title: "Product Photography",
          image: ProductImg,
          desc: "Precision e-commerce and catalog photography focusing on material texture and color accuracy.",
        },
        {
          title: "Event Documentation",
          image: EventImg,
          desc: "Comprehensive photo and video coverage for high-stakes corporate seminars and product launches.",
        },
        {
          title: "Real Estate & Interiors",
          image: RealEstateImg,
          desc: "Architectural photography using specialized lenses to document commercial and residential spaces.",
        },
        {
          title: "Interviews & Testimonials",
          image: InterviewsImg,
          desc: "Direct-to-camera video production featuring professional sound engineering and multicam setups.",
        },
        {
          title: "Business Campaign Shoots",
          image: imgurl,
          desc: "Concept-driven visual production for multi-channel digital ads and brand promotions.",
        }
      ]
    }, {
      id: "commercial-brand-production",
      title: "Commercial & Brand Production",
      subtitle: "Complete video production services to help your business grow and reach more people.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "Full-length commercial videos",
        "Short-form social media clips",
        "Behind-the-scenes footage",
        "Custom thumbnails and graphics"
      ],
      Specializations: [
        {
          title: "Ad Creatives & Promotional Videos",
          image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop",
          desc: "Dynamic video ads optimized for social media platforms to drive engagement and conversions.",
        },
        {
          title: "Social Media Reels & Short-Form Content",
          image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=800&auto=format&fit=crop",
          desc: "Bite-sized video content tailored for platforms like Instagram, TikTok, and LinkedIn to boost brand visibility.",
        },
        {
          title: "Motion Graphics & Animated Titles",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
          desc: "Engaging motion graphics and animated elements to enhance video storytelling and viewer retention.",
        }
      ]
    }, {
      id: "editing-post-production",
      title: "Editing & Post-Production",
      subtitle: "We turn your raw footage into professional videos that grab and keep attention.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "Edited video files in desired formats",
        "Color graded footage",
        "Enhanced audio tracks",
        "Final cut ready for distribution"
      ],
      Specializations: [
        {
          title: "Cinematic Editing & Story Pacing",
          image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
          desc: "Crafting compelling narratives through meticulous editing techniques that maintain audience engagement.",
        }, {
          title: "Color Grading & Film Looks",
          image: imgurl,
          desc: "Applying professional color grading to achieve specific moods and visual aesthetics aligned with brand identity.",
        }, {
          title: "Audio Cleanup & Sound Design",
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
          desc: "Enhancing audio quality through noise reduction, sound effects, and balanced mixing for a polished final product."
        }
      ]
    }, {
      id: "drone-photography-videography",
      subtitle: "Stunning aerial views for real estate, factories, and big construction projects.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "High-resolution aerial photographs",
        "4K drone video footage",
        "Edited and color graded content",
        "Compliance with aviation regulations"
      ],
      Specializations: [
        {
          title: "Real Estate Drone Tours",
          image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
          desc: "Captivating aerial footage showcasing property exteriors and surrounding landscapes for real estate marketing.",
        }, {
          title: "Corporate & Industrial Aerial Coverage",
          image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop",
          desc: "Professional drone videography for large-scale corporate events, construction sites, and industrial facilities.",
        }, {
          title: "Outdoor Events & Travel Visuals",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
          desc: "Dynamic aerial coverage capturing the essence of outdoor events and travel experiences.",
        }, {
          title: "Construction Progress Monitoring",
          image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800&auto=format&fit=crop",
          desc: "Regular aerial documentation of construction sites to monitor progress and provide stakeholders with visual updates.",
        }
      ]
    }, {
      id: "ai-powered-video-ugc-content",
      title: "AI-Powered Video & UGC Content",
      subtitle: "Using AI to create high-quality ads and customer-style videos quickly and affordably.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "AI-generated video ads",
        "User-generated content (UGC) assets",
        "Optimized social media clips",
        "Performance analytics reports"
      ],
      Specializations: [
        {
          title: "AI-Generated Commercial Videos for Campaigns",
          image: imgurl,
          desc: "Utilizing generative AI to create engaging commercial videos tailored for digital marketing campaigns.",
        },
        {
          title: "Creator-Style AI UGC Ads (Reels, Shorts Formats)",
          image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
          desc: "Producing authentic, creator-style user-generated content using AI for platforms like Instagram Reels and YouTube Shorts.",
        },
        {
          title: "AI Product Reviews & Testimonial Videos",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
          desc: "Generating realistic product review and testimonial videos through advanced AI techniques to build trust and credibility.",
        },
        {
          title: "Script-to-Video Ads with AI Voiceovers",
          image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
          desc: "Transforming scripts into engaging video ads with AI-generated voiceovers for a polished and professional finish.",
        }
      ]
    }, {
      id: "graphic-design-creative-branding",
      title: "Graphic Design & Creative Branding",
      subtitle: "Modern designs that make your business look professional and trustworthy.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      deliverables: [
        "Custom logo designs",
        "Marketing collateral (brochures, flyers)",
        "Digital assets (social media graphics, banners)",
        "Comprehensive brand style guide"
      ],
      Specializations: [
        {
          title: "Social Media Post & Ad Creatives",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
          desc: "Eye-catching graphics designed for maximum engagement across various social media platforms.",
        },
        {
          title: "Posters, Flyers & Event Promotions",
          image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800&auto=format&fit=crop",
          desc: "Creative designs for posters, flyers, and event promotions that capture attention and convey your message effectively.",
        },
        {
          title: "Business Cards & Corporate Stationery",
          image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800&auto=format&fit=crop",
          desc: "Professional business card and corporate stationery designs that reinforce your brand identity.",
        },
        {
          title: "Pitch Deck & Company Profile Design",
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
          desc: "Visually compelling pitch decks and company profiles that effectively communicate your value proposition to stakeholders.",
        }, {
          title: "Thumbnails & YouTube Creative Design",
          image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
          desc: "Custom-designed thumbnails and YouTube graphics that enhance video visibility and attract viewers.",
        }
      ]
    }]
  const service = services.find(s => s.id === id);

  if (!service) return <div className="text-white bg-black min-h-screen flex items-center justify-center">Service not found</div>;

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">

      {/* SECTION 1: POLISHED HERO */}
      <section className="relative min-h-[80vh] flex items-center px-4 md:px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src={service.image}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
        </div>

        <Link to="/" className="fixed top-6 left-4 md:top-8 md:left-10 z-50 inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all group shadow-2xl">
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
          Back Home
        </Link>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div {...fadeInUp}>
            <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs uppercase tracking-widest mb-6 bg-white/5 backdrop-blur-sm">Premium Studio Service</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85]">
              {(service.title || '').split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "text  -zinc-500" : ""}>{word} </span>
              ))}
            </h1>
            <p className="max-w-xl text-lg md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SUB-SERVICES (Interactive Chips) */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Specializations</h2>
          <div className="h-px w-20 bg-white" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.Specializations?.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              key={i}
              className="group relative overflow-hidden bg-zinc-950 border border-zinc-900 rounded-3xl p-6 hover:border-white/30 transition-all cursor-default"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-zinc-900 rounded-2xl group-hover:bg-white group-hover:text-black transition-colors">
                  <Camera size={20} />
                </div>
                <ArrowLeft className="rotate-135 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" size={20} />
              </div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: THE WORK GALLERY (Bento Grid) */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-zinc-950/30 rounded-[3rem] border border-zinc-900/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="..."
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Our Portfolio</h2>
            <p className="text-zinc-500 mt-4">A curated selection of {service.title} projects.</p>
          </motion.div>
          <div className="flex gap-4">
            <span className="text-xs uppercase tracking-widest text-zinc-600 border border-zinc-800 px-4 py-2 rounded-full">4K Cinematic</span>
            <span className="text-xs uppercase tracking-widest text-zinc-600 border border-zinc-800 px-4 py-2 rounded-full">Color Graded</span>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {service.Specializations?.map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredWork(i)}
              onMouseLeave={() => setHoveredWork(null)}
              className={`${hoveredWork === i ? 'ring-2 ring-white/20' : ''} relative break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer bg-zinc-900`}
              {...fadeInUp}
            >
              <img
                src={item.image}
                alt=""
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-lg">{item.title}</p>
                <div className="flex items-center gap-2 text-zinc-400 text-xs mt-2 uppercase tracking-tighter">
                  <Play size={12} fill="currentColor" /> Preview Work
                </div>
              </div>

              {/* Icon Overlay */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <ExternalLink size={18} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE CONNECTION (Consultative CTA) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-white rounded-[3rem] p-8 md:p-20 text-black group">
          {/* Animated Background Element */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-zinc-200 rounded-full blur-3xl group-hover:bg-zinc-300 transition-colors duration-700" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                Ready to elevate your <span className="text-zinc-400">visual story?</span>
              </h3>
              <div className="space-y-4">
                {service.deliverables.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle2 size={18} className="text-black" />
                    <span className="text-lg font-medium tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <p className="text-zinc-500 mb-8 text-lg text-center lg:text-right max-w-sm">
                We're currently booking projects for next month. Let's discuss your timeline.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="w-full md:w-auto bg-black text-white px-12 py-6 rounded-2xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-3 text-xl shadow-xl active:scale-95"
              >
                Start a Project
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};