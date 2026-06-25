"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
 ArrowLeft, UserCheck, Calendar, 
 AlertCircle, CheckCircle2, Loader2,
 TrendingUp, BarChart3, Activity
} from "lucide-react";
import VanguardHeader from "@/components/VanguardHeader";

// Mock Data for Student Attendance
const ATTENDANCE_DATA = [
 { id: 1, subject: "Quantum Computing", total: 40, attended: 35, faculty: "Dr. Elena" },
 { id: 2, subject: "Neural Networks", total: 35, attended: 30, faculty: "Prof. Marcus" },
 { id: 3, subject: "Web Architecture", total: 42, attended: 28, faculty: "Siddharth Roy" },
 { id: 4, subject: "Ethical Hacking", total: 38, attended: 36, faculty: "Anjali Verma" },
];

export default function StudentAttendance() {
 const [loading, setLoading] = useState(true);

 // Client-side rendering safe check
 useEffect(() => {
 setLoading(false);
 }, []);

 if (loading) return (
 <div className="min-h-screen flex items-center justify-center bg-slate-50">
 <Loader2 className="animate-spin text-orange-600" size={40} />
 </div>
 );

 const totalPossible = ATTENDANCE_DATA.reduce((acc, curr) => acc + curr.total, 0);
 const totalAttended = ATTENDANCE_DATA.reduce((acc, curr) => acc + curr.attended, 0);
 const aggregatePercentage = ((totalAttended / totalPossible) * 100).toFixed(1);

 return (
 <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-orange-500 selection:text-white">
 
 <VanguardHeader 
    title="Live" 
    subtitle="Attendance." 
    tag="Node: Student_VIT2026001 // Session: Spring 2026" 
    TagIcon={Activity} 
    primaryColor="orange"
    showBack={true}
    backHref="/students-corner"
  />

  <section className="py-12 max-w-7xl mx-auto px-6 relative z-20 -mt-8">
  
 {/* --- SUMMARY STATS --- */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
 <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
 className="bg-slate-950 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
 <div className="absolute -right-4 -bottom-4 opacity-10 text-orange-600"><TrendingUp size={150} /></div>
 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Aggregate Score</p>
 <p className="text-5xl font-black italic text-orange-500 mt-2">{aggregatePercentage}%</p>
 <div className="mt-4 flex items-center gap-2 text-[9px] font-bold text-emerald-400 bg-emerald-400/10 w-fit px-3 py-1 rounded-full">
 <CheckCircle2 size={12}/> ELIGIBLE FOR EXAMS
 </div>
 </motion.div>

 <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Lectures</p>
 <p className="text-5xl font-black italic text-slate-900 mt-2">{totalPossible}</p>
 <p className="text-[9px] font-bold text-slate-500 uppercase mt-2">Combined Subjects</p>
 </div>

 <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Attended</p>
 <p className="text-5xl font-black italic text-slate-900 mt-2">{totalAttended}</p>
 <p className="text-[9px] font-bold text-slate-500 uppercase mt-2 text-emerald-600">Active Presence Recorded</p>
 </div>
 </div>

 {/* --- SUBJECT LISTING --- */}
 <div className="space-y-6">
 <h2 className="text-xl font-black uppercase tracking-tighter italic text-slate-900 flex items-center gap-3">
 <BarChart3 className="text-orange-600" /> Subject-wise Breakdown
 </h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {ATTENDANCE_DATA.map((item) => {
 const perc = (item.attended / item.total) * 100;
 const isLow = perc < 75;

 return (
 <motion.div 
 key={item.id}
 whileHover={{ y: -5 }}
 className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-orange-600/30 transition-all flex flex-col justify-between group"
 >
 <div className="flex justify-between items-start mb-6">
 <div>
 <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">{item.subject}</h3>
 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Instructor: {item.faculty}</p>
 </div>
 <div className={`p-3 rounded-2xl ${isLow ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
 <UserCheck size={20} />
 </div>
 </div>

 {/* Progress Bar */}
 <div>
 <div className="flex justify-between items-end mb-2">
 <span className="text-[10px] font-black text-slate-400 uppercase">Track: {item.attended}/{item.total}</span>
 <span className={`text-xl font-black italic ${isLow ? 'text-red-600' : 'text-slate-900'}`}>{perc.toFixed(0)}%</span>
 </div>
 <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
 <motion.div 
 initial={{ width: 0 }}
 animate={{ width: `${perc}%` }}
 transition={{ duration: 1, ease: "easeOut" }}
 className={`h-full rounded-full ${isLow ? 'bg-red-500' : 'bg-orange-600'}`}
 />
 </div>
 {isLow && (
 <p className="text-[9px] font-black text-red-500 uppercase mt-3 flex items-center gap-1 animate-pulse">
 <AlertCircle size={10} /> Warning: Low Attendance Threshold
 </p>
 )}
 </div>
 </motion.div>
 );
 })}
 </div>
 </div>

 {/* --- FOOTER --- */}
 <footer className="mt-20 py-10 border-t border-slate-100 text-center opacity-30">
 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">Vanguard Active Node // Session 2026</p>
 </footer>
 </section>
 </main>
 );
}