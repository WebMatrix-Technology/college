"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
 Download, FileText, Cpu, Briefcase, 
 Microscope, Palette, Gavel, Stethoscope, 
 Landmark, Globe, CheckCircle2 
} from "lucide-react";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const curriculums = [
 { id: 1, school: "Engineering & Tech", degree: "B.Tech Computer Science", duration: "4 Years", icon: <Cpu />, color: "text-blue-600", bg: "bg-blue-50" },
 { id: 2, school: "Engineering & Tech", degree: "M.Tech Artificial Intelligence", duration: "2 Years", icon: <Cpu />, color: "text-blue-600", bg: "bg-blue-50" },
 { id: 3, school: "Business & Mgmt", degree: "MBA Finance", duration: "2 Years", icon: <Briefcase />, color: "text-emerald-600", bg: "bg-emerald-50" },
 { id: 4, school: "Business & Mgmt", degree: "BBA International Business", duration: "3 Years", icon: <Briefcase />, color: "text-emerald-600", bg: "bg-emerald-50" },
 { id: 5, school: "Life Sciences", degree: "B.Sc Biotechnology", duration: "3 Years", icon: <Microscope />, color: "text-purple-600", bg: "bg-purple-50" },
 { id: 6, school: "Design & Media", degree: "B.Des UX/UI Design", duration: "4 Years", icon: <Palette />, color: "text-rose-600", bg: "bg-rose-50" },
 { id: 7, school: "Law & Governance", degree: "BA LLB (Integrated)", duration: "5 Years", icon: <Gavel />, color: "text-amber-600", bg: "bg-amber-50" },
 { id: 8, school: "Health Sciences", degree: "B.Sc Clinical Research", duration: "3 Years", icon: <Stethoscope />, color: "text-red-600", bg: "bg-red-50" },
 { id: 9, school: "Humanities & Social", degree: "BA Applied Economics", duration: "3 Years", icon: <Landmark />, color: "text-indigo-600", bg: "bg-indigo-50" },
 { id: 10, school: "Global Languages", degree: "Diploma in French", duration: "1 Year", icon: <Globe />, color: "text-cyan-600", bg: "bg-cyan-50" },
];

const categories = ["All", "Engineering & Tech", "Business & Mgmt", "Life Sciences", "Design & Media", "Law & Governance", "Health Sciences", "Humanities & Social", "Global Languages"];

export default function CurriculumPage() {
 const [activeFilter, setActiveFilter] = useState("All");
 const [downloadingId, setDownloadingId] = useState<number | null>(null);

 const filteredCurriculums = activeFilter === "All" 
 ? curriculums 
 : curriculums.filter(c => c.school === activeFilter);

 const handleDownload = (id: number) => {
 setDownloadingId(id);
 // Simulate a download delay
 setTimeout(() => {
 setDownloadingId(null);
 }, 2000);
 };

 return (
 <main className="min-h-screen bg-slate-50">
 
 {/* HERO SECTION */}
 <section className="relative pt-40 pb-20 bg-slate-950 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none" />
 </div>

 <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 >
 <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white uppercase tracking-tighter leading-none mb-6">
 Academic <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">Curriculum.</span>
 </h1>
 <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
 Download and explore detailed course structures, syllabi, and credit requirements for all our global programs.
 </p>
 </motion.div>
 </div>
 </section>

 {/* FILTER & CONTENT SECTION */}
 <section className="py-20">
 <div className="max-w-[1400px] mx-auto px-6">
 
 {/* Sticky Filter Bar */}
 <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 mb-12 shadow-[0_10px_40px_rgb(0,0,0,0.05)] overflow-x-auto hide-scrollbar">
 <div className="flex items-center gap-2 min-w-max">
 {categories.map((cat) => (
 <button
 key={cat}
 onClick={() => setActiveFilter(cat)}
 className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
 activeFilter === cat
 ? "bg-slate-950 text-white shadow-lg"
 : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
 }`}
 >
 {cat}
 </button>
 ))}
 </div>
 </div>

 {/* Curriculum Grid */}
 <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
 <AnimatePresence>
 {filteredCurriculums.map((item) => (
 <motion.div
 key={item.id}
 layout
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.9 }}
 transition={{ duration: 0.3 }}
 className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group flex flex-col h-full hover:-translate-y-1"
 >
 <div className="flex items-start justify-between mb-8">
 <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
 {item.icon}
 </div>
 <span className="bg-slate-50 text-slate-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100">
 {item.duration}
 </span>
 </div>

 <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-2">
 {item.degree}
 </h3>
 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">
 {item.school}
 </p>

 <button 
 onClick={() => handleDownload(item.id)}
 disabled={downloadingId === item.id}
 className={`mt-auto w-full py-4 rounded-xl border text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
 downloadingId === item.id 
 ? "bg-emerald-50 border-emerald-200 text-emerald-600" 
 : "border-slate-100 text-slate-400 hover:bg-orange-600 hover:border-orange-600 hover:text-white"
 }`}
 >
 {downloadingId === item.id ? (
 <>
 <CheckCircle2 size={16} /> Downloaded
 </>
 ) : (
 <>
 <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" /> Download PDF
 </>
 )}
 </button>
 </motion.div>
 ))}
 </AnimatePresence>
 </motion.div>

 {filteredCurriculums.length === 0 && (
 <div className="py-20 text-center">
 <FileText className="w-16 h-16 text-slate-200 mx-auto mb-4" />
 <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">No Curriculums Found</h3>
 <p className="text-slate-500 mt-2">Try selecting a different category.</p>
 </div>
 )}

 </div>
 </section>

 <CTA theme="light" />
 <Footer />
 </main>
 );
}
