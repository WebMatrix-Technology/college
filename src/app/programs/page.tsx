"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
 Laptop, Activity, Globe, Code, Cpu, Database, 
 ChevronRight, Sparkles, Building, Briefcase, Play, ArrowDown, ArrowRight,
 Microscope, Palette, Gavel, Stethoscope, Landmark
} from "lucide-react";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function ProgramsPage() {
 const allPrograms = [
 {
 school: "Engineering & Tech",
 icon: <Cpu className="w-8 h-8" />,
 color: "border-blue-500 text-blue-600",
 courses: ["Computer Science", "Artificial Intelligence", "Robotics", "Cyber Security", "Data Science"]
 },
 {
 school: "Business & Management",
 icon: <Briefcase className="w-8 h-8" />,
 color: "border-emerald-500 text-emerald-600",
 courses: ["MBA - Finance", "International Business", "Digital Marketing", "HR Management", "Supply Chain"]
 },
 {
 school: "Life Sciences",
 icon: <Microscope className="w-8 h-8" />,
 color: "border-purple-500 text-purple-600",
 courses: ["Biotechnology", "Microbiology", "Forensic Science", "Genetics", "Food Tech"]
 },
 {
 school: "Design & Media",
 icon: <Palette className="w-8 h-8" />,
 color: "border-rose-500 text-rose-600",
 courses: ["UX/UI Design", "Fashion Tech", "Animation & VFX", "Journalism", "Interior Design"]
 },
 // Naye added Programs niche hain:
 {
 school: "Law & Governance",
 icon: <Gavel className="w-8 h-8" />,
 color: "border-amber-500 text-amber-600",
 courses: ["BA LLB (Integrated)", "Corporate Law", "Cyber Law", "Public Policy", "IP Rights"]
 },
 {
 school: "Health Sciences",
 icon: <Stethoscope className="w-8 h-8" />,
 color: "border-red-500 text-red-600",
 courses: ["Physiotherapy", "Clinical Research", "Public Health", "Nutrition", "Sports Medicine"]
 },
 {
 school: "Humanities & Social",
 icon: <Landmark className="w-8 h-8" />,
 color: "border-indigo-500 text-indigo-600",
 courses: ["Psychology", "Applied Economics", "Sociology", "English Lit", "Political Science"]
 },
 {
 school: "Global Languages",
 icon: <Globe className="w-8 h-8" />,
 color: "border-cyan-500 text-cyan-600",
 courses: ["French", "German", "Spanish", "Japanese", "Mandarin"]
 }
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
 <span className="text-white/50">Academics</span>
 </motion.nav>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] break-words mb-6 pr-8 pb-4"
 >
 Global <br /> <span className="text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 pr-8 pb-4 inline-block">Academics.</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-4 mb-10"
 >
 Choose from over 40+ specialized courses across 8 world-class schools designed to bridge the gap between education and industry.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
 Browse Programs <ArrowDown size={14} className="animate-bounce" />
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
 <img src="/library/collegelib.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Academic Excellence" />
 <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
 <p className="text-white font-bold text-sm">40+ Courses</p>
 <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Interdisciplinary Learning</p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 <div className="max-w-7xl mx-auto px-6 py-32">

 {/* Programs Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {allPrograms.map((p, idx) => (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.1 }}
 className={`relative bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-[500px] overflow-hidden`}
 >
 <div className={`absolute top-0 right-0 w-32 h-32 ${p.color.replace('border-', 'bg-').replace('text-', 'bg-').split(' ')[0]}/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`} />
 
 <div className={`mb-8 p-4 rounded-2xl bg-white shadow-sm inline-block w-fit ${p.color.split(' ')[1]} group-hover:scale-110 transition-transform duration-500`}>
 {p.icon}
 </div>
 
 <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none group-hover:text-orange-600 transition-colors">
 {p.school}
 </h3>
 
 <ul className="space-y-4 flex-grow relative z-10">
 {p.courses.map((course, i) => (
 <li key={i} className="text-xs font-bold text-slate-500 group-hover:text-slate-700 flex items-center gap-3 transition-colors">
 <div className={`w-2 h-2 rounded-full border-2 ${p.color.split(' ')[0]} group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors`} />
 {course}
 </li>
 ))}
 </ul>

 <Link href="/curriculum" className="relative z-10 mt-8 py-4 px-6 bg-slate-900 text-white rounded-xl flex items-center justify-between text-[10px] font-black uppercase tracking-widest group-hover:bg-orange-600 transition-colors">
 View Curriculum <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
 </Link>
 </motion.div>
 ))}
 </div>

 </div>
 <CTA theme="light" title="Find Your" titleAccent="Calling." />
 <Footer />
 </main>
 );
}