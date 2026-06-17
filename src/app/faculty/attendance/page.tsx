"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
 ArrowLeft, Save, Search, CheckCircle, 
 UserCheck, UserX, Loader2, Calendar,
 Users, Clock, MapPin, Hash, Filter,
 TrendingUp, ChevronRight, Mail, ShieldAlert, Zap
} from "lucide-react";

// Professional Student Manifest (12 Students)
const MASTER_STUDENT_LIST = [
 { id: "VIT2026001", name: "Alex Rivera", status: "present", avatar: "AR", email: "alex.r@vit.edu" },
 { id: "VIT2026002", name: "Sarah Chen", status: "present", avatar: "SC", email: "s.chen@vit.edu" },
 { id: "VIT2026003", name: "Jordan Smith", status: "absent", avatar: "JS", email: "j.smith@vit.edu" },
 { id: "VIT2026004", name: "Maria Garcia", status: "present", avatar: "MG", email: "m.garcia@vit.edu" },
 { id: "VIT2026005", name: "Kevin Zhang", status: "present", avatar: "KZ", email: "k.zhang@vit.edu" },
 { id: "VIT2026006", name: "Isha Malhotra", status: "present", avatar: "IM", email: "isha.m@vit.edu" },
 { id: "VIT2026007", name: "Ryan Cooper", status: "absent", avatar: "RC", email: "ryan.c@vit.edu" },
 { id: "VIT2026008", name: "Elena Gomez", status: "present", avatar: "EG", email: "elena.g@vit.edu" },
 { id: "VIT2026009", name: "Arjun Reddy", status: "present", avatar: "AR", email: "arjun.r@vit.edu" },
 { id: "VIT2026010", name: "Sophia Kim", status: "present", avatar: "SK", email: "sophia.k@vit.edu" },
 { id: "VIT2026011", name: "Liam Wilson", status: "absent", avatar: "LW", email: "liam.w@vit.edu" },
 { id: "VIT2026012", name: "Zoya Khan", status: "present", avatar: "ZK", email: "zoya.k@vit.edu" },
];

export default function AttendancePage() {
 const [students, setStudents] = useState(MASTER_STUDENT_LIST);
 const [searchTerm, setSearchTerm] = useState("");
 const [isSaving, setIsSaving] = useState(false);
 const [showSuccess, setShowSuccess] = useState(false);
 const [loading, setLoading] = useState(true);
 const [activeFilter, setActiveFilter] = useState("all"); // all, present, absent

 useEffect(() => {
 const timer = setTimeout(() => setLoading(false), 800);
 return () => clearTimeout(timer);
 }, []);

 // 1. Toggle Single Student Status
 const toggleStatus = (id: string) => {
 setStudents(prev => prev.map(s => 
 s.id === id ? { ...s, status: s.status === "present" ? "absent" : "present" } : s
 ));
 };

 // 2. Mark All Present (Quick Action)
 const markAllPresent = () => {
 setStudents(prev => prev.map(s => ({ ...s, status: "present" })));
 };

 // 3. Mark All Absent (Quick Action)
 const markAllAbsent = () => {
 setStudents(prev => prev.map(s => ({ ...s, status: "absent" })));
 };

 // 4. Save/Sync Logic
 const handleSave = () => {
 setIsSaving(true);
 setTimeout(() => {
 setIsSaving(false);
 setShowSuccess(true);
 setTimeout(() => setShowSuccess(false), 3000);
 }, 1500);
 };

 // Advanced Multi-filtering (Search + Toggle filters)
 const filteredStudents = students.filter(s => {
 const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
 s.id.toLowerCase().includes(searchTerm.toLowerCase());
 const matchesFilter = activeFilter === "all" ? true : s.status === activeFilter;
 return matchesSearch && matchesFilter;
 });

 const presentCount = students.filter(s => s.status === "present").length;
 const absentCount = students.length - presentCount;
 const attendanceRate = Math.round((presentCount / students.length) * 100);

 if (loading) return (
 <div className="min-h-screen flex items-center justify-center bg-slate-50">
 <Loader2 className="animate-spin text-orange-600" size={40} />
 </div>
 );

 return (
 <main className="min-h-screen bg-[#F8FAFC] pb-20 font-sans text-slate-900">
 
 {/* --- TOP STICKY NAV --- */}
 <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4">
 <div className="max-w-7xl mx-auto flex justify-between items-center">
 <div className="flex items-center gap-4">
 <Link href="/faculty" className="p-2 hover:bg-slate-100 rounded-xl transition-all">
 <ArrowLeft size={20} className="text-slate-600" />
 </Link>
 <div className="h-6 w-px bg-slate-200" />
 <div>
 <h2 className="text-sm font-black text-slate-900 uppercase italic tracking-tight">Vanguard Class Portal</h2>
 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Registry Node — CS SEC-A</p>
 </div>
 </div>
 
 <button 
 onClick={handleSave}
 disabled={isSaving}
 className="bg-slate-950 text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center gap-3 shadow-xl active:scale-95 disabled:opacity-50"
 >
 {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
 {isSaving ? "Syncing Record..." : "Sync Roll Call"}
 </button>
 </div>
 </nav>

 <div className="max-w-7xl mx-auto px-6 pt-32">
 
 {/* --- ADVANCED ANALYTICS HUD --- */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
 
 {/* Main Visual Metric */}
 <div className="lg:col-span-5 bg-slate-950 p-8 rounded-[3rem] text-white flex items-center justify-between shadow-2xl relative overflow-hidden group">
 <div className="z-10">
 <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-500 flex items-center gap-2">
 <Zap size={12} className="animate-pulse" /> Live Telemetry
 </span>
 <p className="text-6xl font-black italic mt-2 text-white">{attendanceRate}%</p>
 <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-emerald-400">
 <TrendingUp size={14}/> +4% Above General Target
 </div>
 </div>
 
 <div className="relative w-28 h-28 z-10 flex items-center justify-center">
 <svg className="w-full h-full transform -rotate-90">
 <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
 <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" fill="transparent" 
 strokeDasharray={301.5} strokeDashoffset={301.5 - (301.5 * attendanceRate) / 100}
 className="text-orange-500 transition-all duration-1000 ease-in-out" strokeLinecap="round" />
 </svg>
 <div className="absolute flex flex-col items-center">
 <span className="text-xl font-black italic text-white leading-none">{attendanceRate}</span>
 <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Rate</span>
 </div>
 </div>
 <Users className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" size={180} />
 </div>

 {/* Details & Information Bento */}
 <div className="lg:col-span-7 bg-white border border-slate-200/70 p-8 rounded-[3rem] shadow-sm flex flex-col justify-between gap-6">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 <div className="flex items-center gap-4">
 <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
 <Calendar size={20}/>
 </div>
 <div>
 <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Registry Date</p>
 <p className="text-base font-black text-slate-900 italic tracking-tight uppercase">30 April 2026</p>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
 <MapPin size={20}/>
 </div>
 <div>
 <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Class Node</p>
 <p className="text-base font-black text-slate-900 italic tracking-tight uppercase">Lab Node 402</p>
 </div>
 </div>
 </div>

 <div className="h-px bg-slate-100 w-full" />

 <div className="grid grid-cols-3 gap-4 items-center">
 <div>
 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enrolled</p>
 <p className="text-2xl font-black text-slate-900 mt-0.5 leading-none">{students.length}</p>
 </div>
 <div>
 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active</p>
 <p className="text-2xl font-black text-emerald-600 mt-0.5 leading-none">{presentCount}</p>
 </div>
 <div>
 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Absent</p>
 <p className="text-2xl font-black text-red-600 mt-0.5 leading-none">{absentCount}</p>
 </div>
 </div>
 </div>
 </div>

 {/* --- CONTROLS HUB --- */}
 <div className="flex flex-col xl:flex-row gap-4 mb-8 justify-between">
 <div className="flex-1 relative group">
 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
 <input 
 type="text" 
 placeholder="QUICK SEARCH BY NAME OR UID..." 
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 className="w-full bg-white border border-slate-200/80 p-5 pl-16 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500 font-black text-[11px] uppercase tracking-widest shadow-sm transition-all"
 />
 </div>

 <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 select-none">
 {/* Direct Filters */}
 <div className="flex border border-slate-200/80 bg-white rounded-2xl p-1 shadow-sm">
 <button onClick={() => setActiveFilter("all")} className={`px-5 py-3.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeFilter === "all" ? "bg-slate-950 text-white" : "text-slate-400 hover:text-slate-900"}`}>All Nodes</button>
 <button onClick={() => setActiveFilter("present")} className={`px-5 py-3.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeFilter === "present" ? "bg-emerald-50 text-emerald-700 font-black" : "text-slate-400 hover:text-slate-900"}`}>Present</button>
 <button onClick={() => setActiveFilter("absent")} className={`px-5 py-3.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeFilter === "absent" ? "bg-red-50 text-red-700 font-black" : "text-slate-400 hover:text-slate-900"}`}>Absent</button>
 </div>
 
 {/* Quick Bulk Actions */}
 <div className="flex gap-2">
 <button onClick={markAllPresent} className="px-5 py-4 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all shadow-sm flex items-center gap-2 border border-emerald-100">
 <CheckCircle size={14}/> Mark All Present
 </button>
 <button onClick={markAllAbsent} className="px-5 py-4 bg-red-50 hover:bg-red-600 hover:text-white text-red-700 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all shadow-sm flex items-center gap-2 border border-red-100">
 <UserX size={14}/> Mark All Absent
 </button>
 </div>
 </div>
 </div>

 {/* --- STUDENT REGISTRY MANIFEST --- */}
 <div className="bg-white rounded-[2.5rem] border border-slate-200/60 overflow-hidden shadow-2xl shadow-slate-200/40">
 <div className="overflow-x-auto">
 <table className="w-full text-left">
 <thead>
 <tr className="bg-slate-50/50 border-b border-slate-100">
 <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">Enrolled Candidate</th>
 <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] text-center">Current Status</th>
 <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] text-right">Toggle Status</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-50">
 <AnimatePresence mode="popLayout">
 {filteredStudents.map((student) => (
 <motion.tr 
 layout
 key={student.id} 
 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
 className="hover:bg-slate-50/80 transition-all group"
 >
 <td className="p-8">
 <div className="flex items-center gap-5">
 {/* Modern Circular Initials Badge */}
 <div className="w-14 h-14 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black text-lg italic shadow-lg group-hover:scale-110 group-hover:bg-orange-600 transition-all">
 {student.avatar}
 </div>
 <div>
 <p className="text-base font-black text-slate-900 uppercase tracking-tight italic leading-none mb-1 group-hover:text-orange-600 transition-colors">{student.name}</p>
 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
 <span>{student.id}</span>
 <span className="w-1 h-1 bg-slate-200 rounded-full" />
 <span className="flex items-center gap-1 leading-none"><Mail size={12} className="text-slate-300"/> {student.email}</span>
 </div>
 </div>
 </div>
 </td>
 
 <td className="p-8 text-center">
 <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 transition-all ${
 student.status === 'present' 
 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
 : 'bg-red-50 text-red-600 border-red-100'
 }`}>
 <div className={`w-2 h-2 rounded-full ${student.status === 'present' ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'}`} />
 {student.status}
 </span>
 </td>

 <td className="p-8 text-right">
 <div className="flex justify-end gap-2">
 <button 
 onClick={() => toggleStatus(student.id)}
 className={`p-4 rounded-xl transition-all shadow-sm active:scale-90 border ${
 student.status === 'present' 
 ? 'bg-red-50 text-red-500 hover:bg-red-600 hover:text-white border-red-100' 
 : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white border-emerald-100'
 }`}
 >
 {student.status === 'present' ? <UserX size={20} /> : <UserCheck size={20} />}
 </button>
 <button className="p-4 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all border border-slate-100">
 <ChevronRight size={20} />
 </button>
 </div>
 </td>
 </motion.tr>
 ))}
 </AnimatePresence>
 </tbody>
 </table>
 
 {filteredStudents.length === 0 && (
 <div className="p-20 text-center">
 <p className="text-slate-300 font-black uppercase tracking-[0.5em] text-xs italic">No matching student nodes found in registry.</p>
 </div>
 )}
 </div>
 </div>
 </div>

 {/* --- PROTOCOL SYNC TOAST --- */}
 <AnimatePresence>
 {showSuccess && (
 <motion.div 
 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}
 className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-10 py-6 rounded-[2.5rem] shadow-2xl flex items-center gap-6 z-[60] border border-white/10 backdrop-blur-xl"
 >
 <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
 <CheckCircle size={24} />
 </div>
 <div className="flex flex-col text-left">
 <span className="text-sm font-black uppercase tracking-widest">Protocol Sync Success</span>
 <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Class roll call successfully committed to central directory.</span>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </main>
 );
}