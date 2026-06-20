"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// Added Toast for feedback (optional, requires a toast library or simple alert)
import { 
 Calendar, 
 Clock, 
 FileText, 
 ChevronLeft, 
 Download, 
 AlertCircle,
 MapPin,
 ExternalLink,
 ArrowRight
} from "lucide-react";
import VanguardHeader from "@/components/VanguardHeader";

export default function ExamSchedulePage() {
 // 1. Working Download Handler
 const handleDownload = (fileName: string) => {
 // In a real app, this would point to /public/files/filename.pdf
 alert(`Starting download for: ${fileName}`);
 };

 const examData = [
 { date: "April 10, 2026", time: "10:00 AM", subject: "Quantum Computing", code: "CS-401", room: "Block A - 202" },
 { date: "April 12, 2026", time: "02:00 PM", subject: "Neural Networks", code: "AI-302", room: "Main Hall" },
 { date: "April 15, 2026", time: "10:00 AM", subject: "Advanced React Patterns", code: "WD-205", room: "Lab 04" },
 { date: "April 18, 2026", time: "10:00 AM", subject: "Cyber Security", code: "CS-405", room: "Block B - 101" },
 ];

 return (
 <main className="min-h-screen bg-[#F8FAFC] selection:bg-orange-500 selection:text-white">
 <VanguardHeader 
      title="Exam" 
      subtitle="Schedule." 
      tag="Academic Timeline" 
      TagIcon={Calendar} 
      primaryColor="orange"
      showBack={true}
      backHref="/students-corner"
    />

 <section className="py-12 max-w-7xl mx-auto px-6 relative z-20 -mt-8">
 <div className="grid lg:grid-cols-12 gap-8">
 {/* --- LEFT: EXAM TABLE --- */}
 <div className="lg:col-span-8">
 <div className="bg-white border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden relative">
 <div className="absolute top-0 left-0 w-1 h-full bg-orange-600"></div>
 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse">
 <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
 <tr>
 <th className="p-6">Subject</th>
 <th className="p-6">Schedule</th>
 <th className="p-4 border-b border-slate-100">Action</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-100">
 {examData.map((exam, i) => (
 <tr key={i} className="group hover:bg-orange-50/50 transition-colors">
 <td className="p-6">
 <p className="font-black text-slate-900 uppercase tracking-tight">{exam.subject}</p>
 <span className="text-[9px] font-bold text-orange-600 uppercase tracking-widest">{exam.code}</span>
 </td>
 <td className="p-6">
 <div className="text-xs font-bold text-slate-700 flex items-center gap-2 mb-1">
 <Calendar size={12} /> {exam.date}
 </div>
 <div className="text-[10px] text-slate-400 font-bold flex items-center gap-2">
 <MapPin size={10} /> {exam.room}
 </div>
 </td>
 <td className="p-6">
 {/* 2. Functional Syllabus Link */}
 <Link 
 href={`/students-corner/courses`}
 className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-900 hover:text-orange-600"
 >
 Syllabus <ExternalLink size={10} />
 </Link>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </div>

 {/* --- RIGHT: INTERACTIVE SIDEBAR --- */}
 <div className="lg:col-span-4 space-y-8">
 {/* DOWNLOAD TILES */}
 <div className="bg-white border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl">
 <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2"><Download size={14}/> Available Documents</h3>
 <div className="space-y-4">
 <button 
 onClick={() => handleDownload("Hall_Ticket_Spring_2026.pdf")}
 className="w-full flex items-center justify-between p-4 bg-slate-50 border border-slate-100 hover:border-orange-600 hover:bg-white rounded-2xl transition-all group shadow-sm"
 >
 <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
 <FileText size={16} className="text-orange-600" /> My Hall Ticket
 </span>
 <Download size={14} className="text-slate-300 group-hover:text-orange-600" />
 </button>

 <button 
 onClick={() => handleDownload("Full_Timetable_VIT_2026.pdf")}
 className="w-full flex items-center justify-between p-4 bg-slate-50 border border-slate-100 hover:border-orange-600 hover:bg-white rounded-2xl transition-all group shadow-sm"
 >
 <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
 <Download size={16} className="text-orange-600" /> Official Timetable
 </span>
 <ArrowRight size={14} className="text-slate-300 group-hover:text-orange-600" />
 </button>
 </div>
 </div>

 {/* QUICK CONTACT */}
 <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 text-white rounded-2xl shadow-2xl relative overflow-hidden group">
 <div className="absolute right-0 bottom-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform duration-700">
    <AlertCircle size={120} />
  </div>
  <div className="relative z-10">
 <h4 className="text-xl font-black uppercase tracking-tight mb-2">Discrepancy?</h4>
 <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-6">Report clashes in your exam dates immediately.</p>
 <Link 
 href="/contact" 
 className="block text-center w-full py-4 bg-white text-orange-600 font-black rounded-2xl uppercase tracking-widest text-[9px] hover:bg-slate-100 transition-all shadow-xl"
 >
 Contact Controller
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 );
}