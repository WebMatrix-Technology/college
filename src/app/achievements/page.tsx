"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
 Award, Trophy, Star, Target, 
 Medal, Rocket, Globe, ChevronRight, ArrowDown,
 CheckCircle, ArrowRight
} from "lucide-react";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function AchievementPage() {
 const institutionalAwards = [
  {
  title: "Global Tech Excellence 2025",
  org: "International Education Forum",
  desc: "Ranked #1 for AI integration in the undergraduate curriculum.",
  icon: <Trophy className="w-8 h-8" />,
  tag: "Ranked #1",
  year: "2025"
  },
  {
  title: "Sustainable Campus Award",
  org: "Green Building Council",
  desc: "Recognized for 100% solar-powered infrastructure and zero-waste systems.",
  icon: <Award className="w-8 h-8" />,
  tag: "Elite Grade",
  year: "2024"
  },
  {
  title: "Top Placement Achievement",
  org: "Corporate HR Council",
  desc: "Awarded for achieving a 98% placement rate with a high average CTC.",
  icon: <Target className="w-8 h-8" />,
  tag: "Industry Leader",
  year: "2024"
  }
 ];

 const timelineMilestones = [
 { year: "2026", title: "Quantum Leap", event: "Inaugurated Advanced Quantum Computing Research Wing." },
 { year: "2025", title: "Peak Accreditation", event: "Secured NAAC A++ Grade with institutional record score." },
 { year: "2023", title: "Global Expansion", event: "Global Partnership with Silicon Valley Tech Hubs." },
 { year: "1998", title: "The Beginning", event: "Establishment of Vanguard Institute of Technology." }
 ];

 return (
 <main className="min-h-screen bg-white overflow-x-hidden">

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
 <span className="text-white/50">Unrivaled Legacy</span>
 </motion.nav>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] break-words mb-6"
 >
 Elite <br /> <span className="text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">Milestones.</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-4 mb-10"
 >
 Charting the evolution of an institution dedicated to engineering the future and celebrating the innovators who lead the way.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
 Explore History <ArrowDown size={14} className="animate-bounce" />
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
 <img src="/library/collegelib.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Excellence" />
 <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
 <p className="text-white font-bold text-sm">NAAC A++</p>
 <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Top Ranked Institution</p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* --- BENTO AWARDS GRID --- */}
 <section className="py-24 px-6 max-w-7xl mx-auto -mt-20 relative z-20">
 <div className="grid md:grid-cols-3 gap-6">
 {institutionalAwards.map((award, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className={`relative overflow-hidden rounded-[2.5rem] p-10 group hover:-translate-y-2 transition-all duration-500 shadow-xl border ${i === 0 ? 'md:col-span-2 bg-slate-950 border-slate-800 text-white shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'bg-white border-slate-100 hover:shadow-2xl'}`}
 >
 {i === 0 && (
 <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-orange-600/20 blur-[100px] rounded-full group-hover:bg-orange-600/30 transition-colors duration-700" />
 )}
 <div className={`mb-8 p-5 rounded-[1.5rem] inline-block relative z-10 transition-transform duration-500 group-hover:scale-110 ${i === 0 ? 'bg-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.4)]' : 'bg-slate-50 text-orange-600'}`}>
 {award.icon}
 </div>
 <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 relative z-10">{award.title}</h3>
 <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 relative z-10 ${i === 0 ? 'text-orange-400' : 'text-slate-400'}`}>
 {award.org} • {award.year}
 </p>
 <p className={`relative z-10 leading-relaxed font-medium ${i === 0 ? 'text-slate-300 max-w-xl' : 'text-slate-500'}`}>
 {award.desc}
 </p>
 </motion.div>
 ))}
 </div>
 </section>

 {/* --- INTERACTIVE TIMELINE --- */}
 <section className="py-32 bg-slate-50 relative overflow-hidden">
 <div className="max-w-4xl mx-auto px-6">
 <div className="text-center mb-24">
 <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-6 text-slate-900">Decades of <span className="text-orange-600">Excellence.</span></h2>
 <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full" />
 </div>

 <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
 {timelineMilestones.map((item, i) => (
 <motion.div 
 key={i} 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
 >
 <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 group-hover:bg-orange-600 text-transparent group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500 z-10">
 <Star size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
 </div>
 
 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
 <div className="flex items-center gap-4 mb-4">
 <span className="text-4xl font-black text-orange-600 italic tracking-tighter">{item.year}</span>
 <div className="h-px flex-1 bg-slate-100" />
 </div>
 <h4 className="text-xl font-black uppercase text-slate-900 mb-3 leading-tight">{item.title}</h4>
 <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.event}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* --- GLORY SECTION --- */}
 <section className="py-32 px-6 bg-white overflow-hidden">
 <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
 <motion.div 
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 className="relative"
 >
 <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative shadow-2xl">
 <img 
 src="/library/collegelib.jpg" 
 alt="Convocation" 
 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
 />
 <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay" />
 </div>
 
 {/* Floating Stat Badge */}
 <motion.div 
 initial={{ y: 20, opacity: 0 }}
 whileInView={{ y: 0, opacity: 1 }}
 viewport={{ once: true }}
 transition={{ delay: 0.3 }}
 className="absolute -bottom-8 -right-8 bg-slate-950 text-white p-8 rounded-[2rem] shadow-2xl border border-slate-800"
 >
 <p className="text-5xl font-black italic mb-2 tracking-tighter">50K+</p>
 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">Global Alumni</p>
 </motion.div>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="pl-8"
 >
 <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 text-slate-900 leading-none">
 A Tradition of <br />
 <span className="text-orange-600 italic">Winning.</span>
 </h2>
 <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
 Winning isn't just a habit; it's our culture. Year after year, our students and faculty push the boundaries of what's possible, securing top ranks in national hackathons, global research symposiums, and athletic championships.
 </p>
 <ul className="space-y-6">
 {[
 "Smart India Hackathon Winners (3 Consecutive Years)",
 "Limca Book of Records for Largest Student Solar Project",
 "Best Engineering Campus Award 2025"
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-4">
 <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-orange-600">
 <CheckCircle size={16} />
 </div>
 <span className="font-bold text-slate-700">{item}</span>
 </li>
 ))}
 </ul>
 </motion.div>
 </div>
 </section>

 <CTA theme="light" title="Write Your" titleAccent="Legacy." />
 <Footer />
 </main>
 );
}