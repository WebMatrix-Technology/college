"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Globe, Award, Users, Zap, Shield, Target, Beaker, Library } from "lucide-react";
import Programs from "@/components/landing/Programs";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
 const containerRef = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start start", "end end"]
 });

 return (
 <main className="relative min-h-screen bg-white overflow-hidden ">
 
 {/* --- IMMERSIVE CINEMATIC HERO --- */}
 <section className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20">
 {/* Background Layer */}
 <div className="absolute inset-0 z-0">
 <motion.div 
 initial={{ scale: 1.1, opacity: 0 }}
 animate={{ scale: 1, opacity: 0.6 }}
 transition={{ duration: 2, ease: "easeOut" }}
 className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986')] bg-cover bg-center"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950" />
 </div>

 <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 >
 <span className="inline-block px-5 py-2 mb-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-white/80 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">
 Admissions Open for 2026
 </span>
 
 <h1 className="text-[clamp(3rem,10vw,8rem)] font-black text-white uppercase tracking-tighter leading-[0.85]">
 ENGINEERING <br /> 
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">THE FUTURE.</span>
 </h1>
 
 <p className="mt-8 text-slate-300 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
 Vanguard Institute of Technology is a global powerhouse for research, innovation, and elite placement opportunities.
 </p>

 <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
 <Link href="/admissions" className="group px-10 py-5 bg-white text-slate-950 font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center">
 Start Application <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
 </Link>
 <Link href="/campus" className="group px-8 py-5 bg-white/5 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-md flex items-center justify-center gap-3">
 <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
 <Play size={10} className="fill-current" />
 </div>
 Virtual Tour
 </Link>
 </div>
 </motion.div>
 </div>
 </section>

 {/* --- INFINITE MARQUEE --- */}
 <section className="bg-slate-950 py-6 border-b border-white/5 overflow-hidden">
 <div className="flex whitespace-nowrap">
 <motion.div 
 animate={{ x: ["0%", "-50%"] }}
 transition={{ ease: "linear", duration: 20, repeat: Infinity }}
 className="flex items-center gap-16 px-8"
 >
 {[...Array(2)].map((_, i) => (
 <React.Fragment key={i}>
 <span className="text-white/40 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4"><Award size={14}/> NAAC A++ ACCREDITED</span>
 <span className="text-white/40 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4"><Globe size={14}/> 400+ GLOBAL PARTNERS</span>
 <span className="text-white/40 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4"><Zap size={14}/> 52 LPA HIGHEST PACKAGE</span>
 <span className="text-white/40 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4"><Users size={14}/> 15,000+ ALUMNI</span>
 </React.Fragment>
 ))}
 </motion.div>
 </div>
 </section>

 {/* --- THE VANGUARD EXPERIENCE (BENTO GRID) --- */}
 <section className="py-32 bg-slate-50">
 <div className="max-w-[1400px] mx-auto px-6">
 <div className="mb-16">
 <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-slate-950 uppercase tracking-tighter leading-none mb-4">
 The Vanguard Experience
 </h2>
 <p className="text-slate-500 font-medium max-w-xl text-lg">
 Explore a campus built for the ambitious. From world-class research facilities to a vibrant student community.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
 
 {/* Main Feature - Global Placements (Spans 2 columns, 2 rows) */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="md:col-span-2 md:row-span-2 bg-slate-950 rounded-[2rem] p-10 relative overflow-hidden group"
 >
 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
 <div className="relative z-10 h-full flex flex-col justify-end">
 <span className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-4">Top Tier Hiring</span>
 <h3 className="text-5xl font-black text-white tracking-tighter mb-4">Global Placements</h3>
 <p className="text-slate-300 font-medium max-w-md">Our graduates are recruited by the world's leading tech and fortune 500 companies.</p>
 <div className="mt-8 flex gap-4">
 <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
 <div className="text-3xl font-black text-white">₹52L</div>
 <div className="text-[10px] font-black text-white/50 uppercase tracking-widest mt-1">Highest</div>
 </div>
 <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
 <div className="text-3xl font-black text-white">₹12L</div>
 <div className="text-[10px] font-black text-white/50 uppercase tracking-widest mt-1">Average</div>
 </div>
 </div>
 </div>
 </motion.div>

 {/* Research Labs */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-xl flex flex-col justify-between group"
 >
 <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
 <Beaker size={24} />
 </div>
 <div>
 <h3 className="text-2xl font-black text-slate-950 tracking-tighter mb-2">50+ Research Labs</h3>
 <p className="text-slate-500 text-sm font-medium">State-of-the-art facilities for AI, Robotics, and Bio-Tech.</p>
 </div>
 </motion.div>

 {/* Huge Stat */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 className="bg-orange-600 rounded-[2rem] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group"
 >
 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
 <h3 className="text-7xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform duration-500">A++</h3>
 <p className="text-white/80 text-xs font-black uppercase tracking-[0.2em] mt-4">NAAC Highest Grade</p>
 </motion.div>

 {/* Campus Life */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.3 }}
 className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-slate-100 shadow-xl relative overflow-hidden group"
 >
 <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
 <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Campus" />
 <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
 </div>
 <div className="relative z-10 h-full flex flex-col justify-center max-w-[50%]">
 <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 mb-6">
 <Library size={20} />
 </div>
 <h3 className="text-3xl font-black text-slate-950 tracking-tighter mb-4">Vibrant Campus Life</h3>
 <p className="text-slate-500 font-medium">Over 100+ student clubs, regular hackathons, and cultural fests.</p>
 </div>
 </motion.div>

 </div>
 </div>
 </section>

 {/* --- PARALLAX VISION SCROLL --- */}
 <section ref={containerRef} className="bg-white py-32 relative">
 <div className="max-w-[1400px] mx-auto px-6">
 <div className="grid lg:grid-cols-2 gap-24 items-start">
 
 {/* Sticky Left Content */}
 <div className="lg:sticky lg:top-32 space-y-8">
 <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs bg-orange-50 px-4 py-2 rounded-full">The Vision</span>
 <h2 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9]">
 Architecting <br /> <span className="text-slate-400">The Future.</span>
 </h2>
 <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
 At Vanguard, we don't just teach code or business; we build the problem-solvers of tomorrow through intensive, hands-on experiential learning.
 </p>
 
 <div className="flex gap-6 pt-8 border-t border-slate-100">
 <div className="space-y-2">
 <div className="text-4xl font-black text-slate-950">1:15</div>
 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Faculty Ratio</div>
 </div>
 <div className="space-y-2">
 <div className="text-4xl font-black text-slate-950">100%</div>
 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Placement Assist</div>
 </div>
 </div>
 </div>

 {/* Scrolling Right Content */}
 <div className="space-y-12">
 <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative group">
 <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Students" />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-10">
 <h3 className="text-3xl font-black text-white tracking-tighter">Collaborative Learning</h3>
 </div>
 </div>
 <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative group">
 <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Lab" />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-10">
 <h3 className="text-3xl font-black text-white tracking-tighter">Advanced Innovation Labs</h3>
 </div>
 </div>
 </div>

 </div>
 </div>
 </section>

 <Programs />
 <CTA theme="light" />
 <Footer />
 </main>
 );
}