"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Coffee, BookOpen, Dumbbell, Tv, Zap, Wind, Shield, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function CampusPage() {
 const facilities = [
 { name: "Tech Library", desc: "24/7 Access to 500,000+ digital and physical volumes.", icon: <BookOpen className="w-8 h-8" /> },
 { name: "Smart Hostels", desc: "Fully air-conditioned rooms with high-speed fiber Wi-Fi.", icon: <Tv className="w-8 h-8" /> },
 { name: "Olympic Sports", desc: "Indoor stadium, swimming pool, and professional turf.", icon: <Dumbbell className="w-8 h-8" /> },
 { name: "Global Cafeteria", desc: "Multi-cuisine food court with organic options.", icon: <Coffee className="w-8 h-8" /> },
 ];

 const perks = [
 { title: "24/7 Power", icon: <Zap className="w-5 h-5" /> },
 { title: "Eco-Friendly", icon: <Wind className="w-5 h-5" /> },
 { title: "Secure Campus", icon: <Shield className="w-5 h-5" /> },
 ];

 return (
 <main className="min-h-screen bg-white ">
 {/* Navbar always active on sub-pages */}

 {/* --- HERO SECTION: DYNAMIC REDESIGN --- */}
 <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0a0a0a]">
 {/* Dramatic background image with overlay */}
 <div className="absolute inset-0 z-0">
 <motion.img 
 initial={{ scale: 1.1, opacity: 0 }}
 animate={{ scale: 1, opacity: 0.6 }}
 transition={{ duration: 1.5, ease: "easeOut" }}
 src="/library/collegelib.jpg" 
 className="w-full h-full object-cover"
 alt="Campus Architecture"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
 <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
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
 <span className="text-white/50">Campus Experience</span>
 </motion.nav>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] break-words mb-6 pr-8 pb-4"
 >
 Where <br /> <span className="text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 pr-8 pb-4 inline-block">Innovation</span> <br/> Lives.
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-4 mb-10"
 >
 Experience 40 acres of cutting-edge infrastructure designed to elevate human potential and foster a community of visionary thinkers.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
 Explore Facilities <ArrowDown size={14} className="animate-bounce" />
 </button>
 </motion.div>
 </div>

 {/* Right side floating card */}
 <motion.div 
 initial={{ opacity: 0, x: 50 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.6, duration: 0.8 }}
 className="hidden lg:flex justify-end"
 >
 <div className="relative w-72 h-96 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
 <div className="absolute inset-0 bg-orange-600/20 group-hover:bg-orange-600/0 transition-colors duration-500 z-10" />
 <img src="/library/collegelib.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
 <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
 <p className="text-white font-bold text-sm">Virtual Tour</p>
 <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Immersive 360° View</p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* --- INFRASTRUCTURE HIGHLIGHTS --- */}
 <section className="py-20 border-b border-slate-100 bg-white">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
 <div className="space-y-4">
 <h2 className="text-3xl font-black uppercase tracking-tighter">Built for <br/> <span className="text-orange-600 italic">Ambition.</span></h2>
 <p className="text-slate-500 text-sm leading-relaxed">
 Spread across 40 acres of lush greenery, VIT offers a world-class environment 
 designed to foster innovation, creativity, and physical well-being.
 </p>
 </div>
 
 <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { label: "Acres", val: "40+" },
 { label: "Blocks", val: "12" },
 { label: "Hostels", val: "05" },
 { label: "Labs", val: "45+" }
 ].map((stat, i) => (
 <div key={i} className="bg-slate-50 p-6 rounded-sm border border-slate-100 flex flex-col justify-center items-center">
 <span className="text-3xl font-black text-slate-900">{stat.val}</span>
 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
 </div>
 ))}
 </div>
 </div> 
 </div>
 </section>

 {/* --- MASONRY GALLERY --- */}
 <section className="py-24 max-w-7xl mx-auto px-6">
 <div className="columns-1 md:columns-3 gap-6 space-y-6">
 
 <div className="relative group overflow-hidden rounded-sm bg-slate-100">
 <img src="/library/collegelib.jpg" alt="Library" className="w-full h-auto group-hover:scale-110 transition-transform duration-700" />
 </div>
 <div className="relative group overflow-hidden rounded-sm bg-slate-100">
 <img src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974" alt="Accommodation" className="w-full h-auto group-hover:scale-110 transition-transform duration-700" />
 </div>
 <div className="relative group overflow-hidden rounded-sm bg-slate-100">
 <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070" alt="Innovation Lab" className="w-full h-auto group-hover:scale-110 transition-transform duration-700" />
 </div>
 </div>
 </section>

 {/* --- CORE FACILITIES GRID --- */}
 <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
 {/* Decorative elements */}
 <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
 
 <div className="max-w-7xl mx-auto px-6 relative z-10">
 <h2 className="text-3xl md:text-4xl font-black uppercase mb-12 md:mb-20 italic tracking-tighter">Infrastructure <br className="md:hidden" /><span className="text-orange-500">Standards</span></h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
 {facilities.map((f, i) => (
 <div key={i} className="group">
 <div className="text-orange-500 mb-8 transform group-hover:-translate-y-2 transition-transform duration-300">
 {f.icon}
 </div>
 <h4 className="text-xl font-bold uppercase mb-4 tracking-tight">{f.name}</h4>
 <p className="text-slate-400 text-sm leading-relaxed border-l border-white/10 pl-4">
 {f.desc}
 </p>
 </div>
 ))}
 </div>

 <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap gap-12">
 {perks.map((p, i) => (
 <div key={i} className="flex items-center gap-3 text-slate-400">
 <div className="text-orange-500">{p.icon}</div>
 <span className="text-[10px] font-black uppercase tracking-widest">{p.title}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* --- CALL TO ACTION --- */}
 <section className="py-32 text-center bg-white">
 <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tighter px-4">Experience it first hand.</h3>
 <p className="text-slate-400 mb-10 max-w-sm mx-auto text-sm">Guided campus tours available Monday to Friday, 10 AM to 4 PM.</p>
 <Link 
 href="/contact" 
 className="inline-block px-12 py-5 bg-orange-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-900 transition-all shadow-xl shadow-orange-600/20"
 >
 Book a Campus Tour
 </Link>
 </section>

 <footer className="py-12 bg-slate-50 border-t border-slate-100 text-center">
 <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[1em]">Vanguard Institute • Corporate Relations</p>
 </footer>
 </main>
 );
}