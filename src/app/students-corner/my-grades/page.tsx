"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
 ArrowLeft, Printer, BookOpen, CheckCircle, 
 Loader2, AlertTriangle, GraduationCap, XCircle, FileBarChart2 
} from "lucide-react";
import VanguardHeader from "@/components/VanguardHeader";

// DATA: Full 6 Semesters
const STUDENT_RESULTS = [
 { 
 sem: "SEM 1", 
 subjects: [
 { code: "MTH-101", name: "Engineering Mathematics I", internal: 28, external: 52, practical: 0 },
 { code: "PHY-101", name: "Engineering Physics", internal: 12, external: 15, practical: 10 }, // Total 37 < 40 (FAIL)
 { code: "BEE-102", name: "Basic Electrical Eng.", internal: 25, external: 40, practical: 15 },
 { code: "ME-103", name: "Engineering Graphics", internal: 20, external: 35, practical: 20 },
 { code: "CS-104", name: "Programming in C", internal: 29, external: 55, practical: 18 },
 ] 
 },
 { 
 sem: "SEM 2", 
 subjects: [
 { code: "MTH-201", name: "Engineering Mathematics II", internal: 26, external: 45, practical: 0 },
 { code: "CHM-202", name: "Engineering Chemistry", internal: 22, external: 48, practical: 18 },
 { code: "CS-203", name: "Data Structures & Algorithms", internal: 28, external: 50, practical: 20 },
 { code: "ME-204", name: "Applied Mechanics", internal: 10, external: 20, practical: 5 }, // Total 35 < 40 (FAIL)
 { code: "ENG-205", name: "Professional Communication", internal: 25, external: 60, practical: 10 },
 ] 
 },
 { 
 sem: "SEM 3", 
 subjects: [
 { code: "CS-301", name: "Discrete Structures", internal: 27, external: 52, practical: 0 },
 { code: "CS-302", name: "Computer Organization", internal: 24, external: 45, practical: 0 },
 { code: "CS-303", name: "Object Oriented Programming", internal: 29, external: 58, practical: 20 },
 { code: "CS-304", name: "Operating Systems", internal: 25, external: 40, practical: 15 },
 { code: "CS-305", name: "Digital Electronics", internal: 22, external: 38, practical: 12 },
 ] 
 },
 { 
 sem: "SEM 4", 
 subjects: [
 { code: "CS-401", name: "Database Management Systems", internal: 26, external: 54, practical: 18 },
 { code: "CS-402", name: "Theory of Computation", internal: 22, external: 42, practical: 0 },
 { code: "CS-403", name: "Software Engineering", internal: 28, external: 48, practical: 15 },
 { code: "CS-404", name: "Microprocessors", internal: 20, external: 38, practical: 20 },
 { code: "MTH-405", name: "Probability & Statistics", internal: 25, external: 50, practical: 0 },
 ] 
 },
 { 
 sem: "SEM 5", 
 subjects: [
 { code: "CS-501", name: "Computer Networks", internal: 27, external: 58, practical: 18 },
 { code: "CS-502", name: "Design & Analysis of Algorithms", internal: 24, external: 46, practical: 0 },
 { code: "CS-503", name: "Web Technologies", internal: 29, external: 62, practical: 20 },
 { code: "CS-504", name: "Artificial Intelligence", internal: 28, external: 55, practical: 15 },
 { code: "CS-505", name: "Formal Language & Automata", internal: 22, external: 40, practical: 0 },
 ] 
 },
 { 
 sem: "SEM 6", 
 subjects: [
 { code: "CS-601", name: "Cloud Computing", internal: 28, external: 60, practical: 18 },
 { code: "CS-602", name: "Cyber Security", internal: 26, external: 52, practical: 0 },
 { code: "CS-603", name: "Mobile App Development", internal: 30, external: 58, practical: 20 },
 { code: "CS-604", name: "Compiler Design", internal: 23, external: 45, practical: 0 },
 { code: "PR-605", name: "Major Project Phase I", internal: 45, external: 0, practical: 45 },
 ] 
 }
];

const SEMESTERS = ["ALL SEM", "SEM 1", "SEM 2", "SEM 3", "SEM 4", "SEM 5", "SEM 6"];

export default function MyGradesPage() {
 const [loading, setLoading] = useState(true);
 const [activeSem, setActiveSem] = useState("ALL SEM");

 useEffect(() => {
 const timer = setTimeout(() => setLoading(false), 800);
 return () => clearTimeout(timer);
 }, []);

 const getFilteredResults = () => {
 if (activeSem === "ALL SEM") return STUDENT_RESULTS;
 return STUDENT_RESULTS.filter(r => r.sem === activeSem);
 };

 if (loading) return (
 <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
 <Loader2 className="animate-spin text-orange-600" size={48} />
 </div>
 );

 return (
 <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-orange-500 selection:text-white">
 
 <VanguardHeader 
    title="Exam" 
    subtitle="Marksheet." 
    tag="Candidate: Rahul Singh // VIT2026001" 
    TagIcon={FileBarChart2} 
    primaryColor="orange"
    showBack={true}
    backHref="/students-corner"
  >
    <button onClick={() => window.print()} className="mt-12 px-6 py-4 bg-slate-950/40 backdrop-blur-md border border-white/10 text-white font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 transition-all flex items-center gap-2 rounded-2xl shadow-2xl active:scale-95 md:absolute md:right-0 md:bottom-0 md:mb-12 md:mr-6">
    <Printer size={16} /> Print Marksheet
    </button>
  </VanguardHeader>

  <section className="py-12 max-w-7xl mx-auto px-6 relative z-20 -mt-8">

 {/* --- SEMESTER TABS --- */}
 <div className="flex gap-2 overflow-x-auto no-scrollbar pb-6 mb-10">
 {SEMESTERS.map((sem) => (
 <button
 key={sem}
 onClick={() => setActiveSem(sem)}
 className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 whitespace-nowrap ${
 activeSem === sem 
 ? "bg-slate-950 text-white border-slate-950 shadow-xl" 
 : "bg-white text-slate-400 border-slate-50 hover:border-orange-500 hover:text-slate-900"
 }`}
 >
 {sem}
 </button>
 ))}
 </div>

 {/* --- RESULTS AREA --- */}
 <div className="space-y-12">
 <AnimatePresence mode="wait">
 {getFilteredResults().map((semester) => (
 <motion.section 
 key={semester.sem}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 className="mb-10"
 >
 <div className="flex items-center gap-4 mb-6">
 <div className="bg-orange-600 p-3 rounded-xl text-white shadow-lg">
 <GraduationCap size={20} />
 </div>
 <h2 className="text-2xl font-black uppercase tracking-tighter italic text-slate-900">{semester.sem} Details</h2>
 <div className="flex-1 h-px bg-slate-200" />
 </div>

 <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="bg-slate-50/50 border-b border-slate-100">
 <th className="p-8 text-[9px] font-black uppercase text-slate-400 tracking-[0.3em]">Subject Node</th>
 <th className="p-8 text-[9px] font-black uppercase text-slate-400 tracking-[0.3em] text-center">Internal</th>
 <th className="p-8 text-[9px] font-black uppercase text-slate-400 tracking-[0.3em] text-center">External</th>
 <th className="p-8 text-[9px] font-black uppercase text-slate-400 tracking-[0.3em] text-center">Practical</th>
 <th className="p-8 text-[9px] font-black uppercase text-slate-400 tracking-[0.4em] text-center">Status</th>
 <th className="p-8 text-[9px] font-black uppercase text-slate-400 tracking-[0.3em] text-right">Total</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-50">
 {semester.subjects.map((sub, idx) => {
 const totalMarks = sub.internal + sub.external + sub.practical;
 const isPass = totalMarks >= 40;

 return (
 <tr key={idx} className={`group hover:bg-slate-50/50 transition-all ${!isPass ? 'bg-red-50/20' : ''}`}>
 <td className="p-8">
 <p className="text-sm font-black uppercase text-slate-900 group-hover:text-orange-600 transition-colors">{sub.name}</p>
 <p className="text-[9px] font-bold text-slate-400 uppercase mt-1 tracking-widest">
 {sub.code} {sub.practical > 0 && <span className="text-orange-600 font-black">(PR)</span>}
 </p>
 </td>
 <td className="p-8 text-center font-bold text-slate-600 text-sm">{sub.internal}</td>
 <td className="p-8 text-center font-bold text-slate-600 text-sm">{sub.external}</td>
 <td className="p-8 text-center font-bold text-slate-600 text-sm">{sub.practical || "00"}</td>
 <td className="p-8">
 <div className={`mx-auto flex items-center justify-center gap-2 text-[9px] font-black uppercase px-3 py-1.5 rounded-full w-fit border-2 ${
 isPass ? "text-emerald-600 bg-emerald-50 border-emerald-100" : "text-red-600 bg-red-50 border-red-100 animate-pulse"
 }`}>
 {isPass ? <CheckCircle size={12} /> : <XCircle size={12} />} 
 {isPass ? "PASS" : "FAIL"}
 </div>
 </td>
 <td className="p-8 text-right">
 <span className={`text-2xl font-black italic ${isPass ? 'text-slate-950' : 'text-red-600'}`}>{totalMarks}</span>
 </td>
 </tr>
 );
 })}
 </tbody>
 </table>
 </div>
 </motion.section>
 ))}
 </AnimatePresence>
 </div>
 </section>
 </main>
 );
}