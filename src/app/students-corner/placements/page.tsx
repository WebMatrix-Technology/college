"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
 ArrowLeft, Trophy, MapPin, Calendar, 
 Search, CheckCircle, XCircle, Loader2, 
 ArrowUpRight, Building2, Briefcase
} from "lucide-react";

// Mock Data for Campus Drives
const INITIAL_DRIVES = [
 { id: 1, company: "Microsoft", role: "Software Engineer", package: "45 LPA", date: "Feb 20, 2026", location: "Redmond / Remote", status: "eligible", applied: false },
 { id: 2, company: "Google", role: "Cloud Architect", package: "52 LPA", date: "Feb 25, 2026", location: "Bangalore", status: "eligible", applied: false },
 { id: 3, company: "Amazon", role: "SDE-1", package: "32 LPA", date: "March 05, 2026", location: "Hyderabad", status: "not-eligible", applied: false },
 { id: 4, company: "Netflix", role: "UI/UX Designer", package: "28 LPA", date: "March 12, 2026", location: "Mumbai", status: "eligible", applied: false },
];

export default function PlacementPage() {
 const [loading, setLoading] = useState(true);
 const [drives, setDrives] = useState(INITIAL_DRIVES);
 const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
 const timer = setTimeout(() => setLoading(false), 800);
 return () => clearTimeout(timer);
 }, []);

 // --- BUTTON LOGIC: Apply Action ---
 const handleApply = (id: number) => {
 setDrives(prev => prev.map(drive => 
 drive.id === id ? { ...drive, applied: true } : drive
 ));
 alert("PLACEMENT_NODE: Application encrypted and transmitted to Recruitment Server.");
 };

 const filteredDrives = drives.filter(d => 
 d.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
 d.role.toLowerCase().includes(searchTerm.toLowerCase())
 );

 if (loading) return (
 <div className="min-h-screen flex items-center justify-center bg-slate-50">
 <Loader2 className="animate-spin text-orange-600" size={40} />
 </div>
 );

 return (
 <main className="min-h-screen bg-[#FDFDFD] p-6 pt-24 font-sans text-slate-900">
 <div className="max-w-6xl mx-auto">
 
 {/* --- HEADER --- */}
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
 <div>
 <Link href="/students-corner" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-4 transition">
 <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Command Center
 </Link>
 <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
 Career <span className="text-orange-600">Drives.</span>
 </h1>
 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Node: Placement_Hub // Recruitment 2026</p>
 </div>

 {/* Stats Bar */}
 <div className="bg-slate-950 p-6 rounded-3xl text-white shadow-xl flex gap-8">
 <div>
 <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Active Drives</p>
 <p className="text-xl font-black italic">{drives.length}</p>
 </div>
 <div className="w-px h-8 bg-slate-800" />
 <div>
 <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Applied</p>
 <p className="text-xl font-black italic text-orange-500">{drives.filter(d => d.applied).length}</p>
 </div>
 </div>
 </div>

 {/* --- SEARCH BOX --- */}
 <div className="relative mb-10 group">
 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
 <input 
 type="text" 
 placeholder="SEARCH COMPANY OR ROLE..." 
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 className="w-full bg-white border-2 border-slate-100 p-6 pl-16 rounded-[2rem] outline-none focus:border-orange-500 font-black text-[10px] uppercase tracking-widest shadow-sm transition-all"
 />
 </div>

 {/* --- DRIVES LIST --- */}
 <div className="grid grid-cols-1 gap-6">
 <AnimatePresence mode="popLayout">
 {filteredDrives.map((drive) => (
 <motion.div
 key={drive.id}
 layout
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
 >
 {/* Background Icon Watermark */}
 <Building2 className="absolute -right-10 -bottom-10 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" size={200} />

 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
 <div className="flex gap-8 items-center">
 {/* Company Logo Placeholder */}
 <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-orange-500 text-2xl font-black italic shadow-lg">
 {drive.company.charAt(0)}
 </div>
 
 <div>
 <div className="flex items-center gap-3">
 <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">{drive.company}</h3>
 <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${
 drive.status === 'eligible' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'
 }`}>
 {drive.status}
 </span>
 </div>
 <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1 flex items-center gap-2">
 <Briefcase size={14} className="text-orange-600" /> {drive.role} • <span className="text-slate-900">{drive.package}</span>
 </p>
 
 <div className="flex gap-6 mt-4">
 <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
 <Calendar size={12} /> {drive.date}
 </span>
 <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
 <MapPin size={12} /> {drive.location}
 </span>
 </div>
 </div>
 </div>

 {/* ACTION BUTTONS */}
 <div className="flex gap-3 w-full md:w-auto">
 {drive.applied ? (
 <div className="flex-1 md:flex-none px-10 py-5 bg-emerald-50 text-emerald-600 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 border border-emerald-100">
 <CheckCircle size={16} /> Applied
 </div>
 ) : drive.status === 'eligible' ? (
 <button 
 onClick={() => handleApply(drive.id)}
 className="flex-1 md:flex-none px-10 py-5 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95"
 >
 Apply Now <ArrowUpRight size={16} />
 </button>
 ) : (
 <div className="flex-1 md:flex-none px-10 py-5 bg-slate-100 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 cursor-not-allowed">
 <XCircle size={16} /> Ineligible
 </div>
 )}
 </div>
 </div>
 </motion.div>
 ))}
 </AnimatePresence>
 </div>

 {/* --- FOOTER --- */}
 <footer className="mt-20 py-10 border-t border-slate-100 text-center opacity-30">
 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">Vanguard Placement Protocol // 2026</p>
 </footer>
 </div>
 </main>
 );
}