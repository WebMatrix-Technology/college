"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
 Mail, Phone, MapPin, Send, 
 MessageSquare, Globe, Clock, CheckCircle,
 AlertCircle, ShieldCheck, Zap, ArrowRight, ArrowDown
} from "lucide-react";
import Link from "next/link";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function ContactPage() {
 const [submitted, setSubmitted] = useState(false);
 const [isOfficeOpen, setIsOfficeOpen] = useState(false);
 const [formData, setFormData] = useState({ name: "", email: "", subject: "General Inquiry", message: "" });

 // Real-time Office Status Logic
 useEffect(() => {
 const hour = new Date().getHours();
 setIsOfficeOpen(hour >= 9 && hour < 18);
 }, []);

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setSubmitted(true);
 setTimeout(() => setSubmitted(false), 5000);
 };

 return (
 <main className="min-h-screen bg-slate-50 overflow-x-hidden">
 
 
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
 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-slate-50" />
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
 <span className="text-white/50">24/7 Global Support Hub</span>
 </motion.nav>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] break-words mb-6 pr-8 pb-4"
 >
 Get In <br /> <span className="text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 pr-8 pb-4 inline-block">Touch.</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-4 mb-10"
 >
 Whether you're a prospective student, an industry partner, or alumni, we're always ready to connect. Reach out and dispatch your comms.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
 Contact Methods <ArrowDown size={14} className="animate-bounce" />
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
 <img src="/library/collegelib.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Contact Support" />
 <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
 <p className="text-white font-bold text-sm">Response Time</p>
 <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">&lt; 2 Hours</p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* --- BENTO CONTACT GRID --- */}
 <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-32">
 <div className="grid lg:grid-cols-12 gap-8">
 
 {/* LEFT: INTERACTIVE FORM */}
 <motion.div 
 initial={{ y: 40, opacity: 0 }} 
 animate={{ y: 0, opacity: 1 }} 
 className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden"
 >
 <div className="absolute top-0 right-0 p-8">
 <ShieldCheck className="text-slate-100" size={80} />
 </div>

 <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-950 mb-4">
 Dispatch <span className="text-orange-600">Comms.</span>
 </h2>
 <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-12">Average response time: &lt; 2 Hours</p>

 <form onSubmit={handleSubmit} className="space-y-8">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="group space-y-2">
 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Protocol: Name</label>
 <input 
 required type="text" 
 placeholder="Identify yourself..." 
 className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm" 
 />
 </div>
 <div className="group space-y-2">
 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Protocol: Email</label>
 <input 
 required type="email" 
 placeholder="return_address@host.com" 
 className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm" 
 />
 </div>
 </div>
 
 <div className="group space-y-2">
 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject Matter</label>
 <div className="relative">
 <select className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm appearance-none cursor-pointer">
 <option>General Command</option>
 <option>Admission Intel</option>
 <option>Tech Support Request</option>
 
 </select>
 <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">▼</div>
 </div>
 </div>

 <div className="group space-y-2">
 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message Content</label>
 <textarea rows={4} placeholder="Type your transmission here..." className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm resize-none" />
 </div>

 <button 
 type="submit"
 disabled={submitted}
 className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] ${
 submitted ? "bg-green-600 text-white" : "bg-slate-950 text-white hover:bg-orange-600"
 }`}
 >
 {submitted ? <><CheckCircle size={18} /> Transmission Successful</> : <><Send size={18} /> Dispatch Message</>}
 </button>
 </form>
 </motion.div>

 {/* RIGHT: LIVE STATUS & BENTO INFO */}
 <div className="lg:col-span-5 space-y-6">
 
 {/* Live Office Status Card */}
 <div className={`p-8 rounded-[2rem] border-2 transition-all ${isOfficeOpen ? 'bg-green-50 border-green-100' : 'bg-slate-900 border-slate-800'}`}>
 <div className="flex justify-between items-center mb-6">
 <Clock size={32} className={isOfficeOpen ? 'text-green-600' : 'text-orange-600'} />
 <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] ${isOfficeOpen ? 'bg-green-600 text-white' : 'bg-orange-600 text-white'}`}>
 {isOfficeOpen ? 'Office: Online' : 'Office: Offline'}
 </span>
 </div>
 <h3 className={`text-xl font-black uppercase italic tracking-tighter ${isOfficeOpen ? 'text-slate-900' : 'text-white'}`}>
 Operational Hours
 </h3>
 <p className={`text-xs mt-2 font-medium ${isOfficeOpen ? 'text-slate-500' : 'text-slate-400'}`}>
 Our team is ready to support you. Drop an email during offline hours, and we will resolve it on priority.
 </p>
 </div>

 {/* Info Bento Pieces */}
 <div className="grid gap-4">
 {[
 { icon: <Phone size={20} />, title: "Voice Line", info: "+91 9833602082", color: "bg-blue-600" },
 { icon: <Mail size={20} />, title: "Digital Mail", info: "admissions@vitnode.edu", color: "bg-orange-600" },
 { icon: <MapPin size={20} />, title: "Physical Node", info: "Mumbai, Maharashtra, India", color: "bg-slate-950" }
 ].map((item, i) => (
 <motion.div 
 key={i} 
 whileHover={{ x: 10 }}
 className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-6 group hover:shadow-xl transition-all"
 >
 <div className={`p-4 rounded-xl text-white ${item.color} shadow-lg shadow-inherit/20`}>
 {item.icon}
 </div>
 <div>
 <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">{item.title}</h4>
 <p className="text-sm font-black text-slate-950 mt-0.5">{item.info}</p>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Virtual Campus CTA */}
 <div className="bg-orange-600 p-8 rounded-[2rem] text-white relative overflow-hidden group cursor-pointer shadow-xl">
 <div className="relative z-10">
 <Globe size={40} className="mb-4 group-hover:rotate-45 transition-transform duration-700" />
 <h3 className="text-2xl font-black italic uppercase tracking-tighter">Virtual Tour</h3>
 <p className="text-white/80 text-[10px] font-bold mt-2 uppercase tracking-widest flex items-center gap-2">
 Explore 3D Campus <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
 </p>
 </div>
 <Globe size={180} className="absolute -right-10 -bottom-10 text-white/10 group-hover:scale-110 transition-transform duration-700" />
 </div>

 </div>

 </div>
 </section>

 {/* --- FAQ SECTION --- */}
 <section className="py-32 bg-slate-50 border-t border-slate-100">
 <div className="max-w-4xl mx-auto px-6">
 <div className="text-center mb-16">
 <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Quick <span className="text-orange-600">Answers.</span></h2>
 <p className="text-slate-400 font-bold tracking-widest text-[10px] uppercase">Before you reach out.</p>
 </div>
 <div className="space-y-4">
 {[
 { q: "What are the admission office hours?", a: "The admission office is open Monday to Friday from 8:00 AM to 5:00 PM (EST). We are closed on national holidays." },
 { q: "Do you offer campus tours?", a: "Yes, guided campus tours are available every Wednesday and Friday. You can book a slot through our Admissions page." },
 { q: "How long does it take to get a reply?", a: "We strive to respond to all inquiries within 24 hours. During peak admission seasons, it may take up to 48 hours." }
 ].map((faq, i) => (
 <motion.div 
 key={i} 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:border-slate-300 transition-colors group shadow-sm"
 >
 <div className="w-full flex items-start gap-6 p-8 text-left">
 <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors font-black text-xs">
 Q
 </div>
 <div>
 <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">{faq.q}</h4>
 <p className="text-slate-500 leading-relaxed font-medium text-sm">{faq.a}</p>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <CTA theme="light" title="Still have" titleAccent="Questions?" subtitle="Reach out to our specialized support teams." buttonText="View Directory" buttonLink="/contact" />
 <Footer />
 </main>
 );
}