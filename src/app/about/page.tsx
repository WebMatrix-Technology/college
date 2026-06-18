"use client";
import { useState } from "react";
import Link from "next/link";
// FIX 1: Relative Path
import Navbar from "@/components/landing/Navbar";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

type Leader = { role: string; name: string; message: string; image: string };

export default function AboutPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);

 const leadership: Leader[] = [
 {
 role: "Founder's Message",
 name: "Avan S. Pal",
 message: "Our journey began with a single vision: to create a hub where innovation meets ethics. At VIT, we prepare students for challenges that don't even exist yet.",
 image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
 },
 {
 role: "Chairperson's Message",
 name: "Mrs. Meera Deshmukh",
 message: "Academic excellence is our baseline; character building is our goal. We ensure every student leaves our gates as a responsible global citizen.",
 image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
 },
 {
 role: "Executive Director",
 name: "Prof. Rajesh V. Iyer",
 message: "Efficiency and digital transformation are the pillars of our administration. We bridge the gap between classroom learning and industry requirements.",
 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
 }
 ];

 const faqs = [
 { q: "Is VIT affiliated with any university?", a: "Yes, VIT is a state-private university approved by UGC and AICTE." },
 { q: "What are the scholarship criteria?", a: "We offer up to 100% merit-based scholarships for students with 95% and above in 12th boards." },
 { q: "Does the college provide hostel facilities?", a: "Yes, we have high-tech hostels with Wi-Fi, laundry, and 24/7 security on campus." }
 ];

 return (
 <main className="min-h-screen bg-white ">
 {/* --- HERO SECTION: DYNAMIC REDESIGN --- */}
 <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0a0a0a]">
 {/* Animated Gradient Background */}
 <div className="absolute inset-0 z-0 overflow-hidden">
 <motion.div 
 animate={{ 
 scale: [1, 1.2, 1],
 x: [0, 50, 0],
 y: [0, 30, 0]
 }}
 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
 className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-orange-600/30 rounded-full blur-[120px]" 
 />
 <motion.div 
 animate={{ 
 scale: [1, 1.5, 1],
 x: [0, -50, 0],
 y: [0, -30, 0]
 }}
 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
 className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" 
 />
 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
 </div>

 <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <motion.nav 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="flex items-center gap-3 text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-8"
 >
 <Link href="/" className="hover:text-white transition">Home</Link>
 <span className="w-4 h-[1px] bg-orange-500/50"></span>
 <span className="text-white/50">About Us</span>
 </motion.nav>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] break-words mb-6 pr-8 pb-4"
 >
 Building <br /> <span className="text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 pr-8 pb-4 inline-block">Tomorrow.</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-4 mb-10"
 >
 Vanguard Institute of Technology is more than a college; it's a 40-acre innovation hub for global pioneers.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
 Discover Legacy <ArrowDown size={14} className="animate-bounce" />
 </button>
 </motion.div>
 </div>

 <motion.div 
 initial={{ opacity: 0, x: 50 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.6, duration: 0.8 }}
 className="hidden lg:flex justify-end"
 >
 <div className="relative w-72 h-96 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
 <div className="absolute inset-0 bg-orange-600/20 group-hover:bg-orange-600/0 transition-colors duration-500 z-10" />
 <img src="/library/collegelib.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Campus Legacy" />
 <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
 <p className="text-white font-bold text-sm">Est 1998</p>
 <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Decades of Excellence</p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* --- STATS BENTO GRID --- */}
 <div className="relative z-20 max-w-6xl mx-auto -mt-20 px-6">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { value: "1998", label: "Established", color: "bg-white", border: "border-slate-100" },
 { value: "150+", label: "Global Partners", color: "bg-white", border: "border-slate-100" },
 { value: "45", label: "Research Labs", color: "bg-white", border: "border-slate-100" },
 { value: "A++", label: "NAAC Grade", color: "bg-orange-600 text-white", border: "border-orange-500", highlight: true }
 ].map((stat, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className={`${stat.color} ${stat.border} shadow-2xl border p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300`}
 >
 <p className={`text-4xl font-black mb-2 ${stat.highlight ? "text-white" : "text-slate-900"}`}>{stat.value}</p>
 <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${stat.highlight ? "text-white/80" : "text-slate-400"}`}>{stat.label}</p>
 </motion.div>
 ))}
 </div>
 </div>

 {/* --- LEADERSHIP SECTION --- */}
 <section className="py-32 px-6 max-w-7xl mx-auto">
 <div className="mb-20 text-center">
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-5xl font-black text-slate-900 uppercase tracking-tighter"
 >
 Institute <span className="text-orange-600 italic">Leadership.</span>
 </motion.h2>
 <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full" />
 </div>
 
 <div className="grid md:grid-cols-3 gap-8">
 {leadership.map((leader, i) => (
 <motion.div 
 key={i} 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.15 }}
 className="group cursor-pointer bg-slate-50 rounded-[2.5rem] p-4 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
 >
 <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-[2rem] bg-slate-200">
 <img 
 src={leader.image} 
 alt={leader.name} 
 className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
 <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-2">{leader.role}</p>
 <h3 className="text-3xl font-black italic leading-none">{leader.name}</h3>
 </div>
 </div>
 <p className="text-slate-500 text-sm leading-relaxed px-4 pb-4 font-medium italic">
 "{leader.message}"
 </p>
 </motion.div>
 ))}
 </div>
 </section>

 {/* --- FAQ SECTION --- */}
 <section className="py-32 bg-slate-50 px-6 border-t border-slate-100">
 <div className="max-w-4xl mx-auto">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mb-16"
 >
 <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Common <span className="text-orange-600">Questions</span></h2>
 <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Everything you need to know.</p>
 </motion.div>

 <div className="space-y-4">
 {faqs.map((faq, i) => (
 <motion.div 
 key={i} 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className={`border-2 rounded-[2rem] transition-all duration-300 overflow-hidden ${openFaq === i ? 'bg-white border-orange-500 shadow-xl' : 'bg-white border-slate-100 hover:border-slate-200'}`}
 >
 <button 
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 className="w-full flex justify-between items-center p-8 text-left font-black text-slate-900 transition-all"
 >
 <span className="text-sm uppercase tracking-wide">{faq.q}</span>
 <span className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${openFaq === i ? 'bg-orange-600 border-orange-600 text-white rotate-45' : 'border-slate-200 text-slate-400'}`}>
 +
 </span>
 </button>
 <div className={`transition-all duration-500 overflow-hidden ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
 <p className="px-8 pb-8 text-slate-500 text-sm leading-relaxed font-medium">{faq.a}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <CTA theme="light" title="Shape the" titleAccent="Future." />
 <Footer />
 </main>
 );
}