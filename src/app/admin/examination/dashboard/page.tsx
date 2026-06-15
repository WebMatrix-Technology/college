"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FileCheck, 
  CalendarDays, 
  Clock, 
  AlertCircle,
  FileSpreadsheet,
  Award
} from "lucide-react";

export default function ExaminationDashboard() {
  const stats = [
    { title: "Upcoming Exams", value: "12", icon: CalendarDays, trend: "Next 7 days", color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "Papers to Grade", value: "850", icon: FileCheck, trend: "40% Graded", color: "text-orange-500", bg: "bg-orange-500/10" },
    { title: "Results Pending", value: "4", icon: Clock, trend: "Courses waiting", color: "text-rose-500", bg: "bg-rose-500/10" },
    { title: "Results Published", value: "28", icon: Award, trend: "This semester", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  ];

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between bg-white p-6 md:p-8 rounded-3xl md:rounded-[2rem] shadow-sm border border-slate-100 gap-6"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900">
            Control <span className="text-rose-600">Center</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
            Global Examination Metrics
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
           <button className="flex-1 lg:flex-none justify-center flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg shadow-slate-200">
             <CalendarDays size={14} /> Schedule Exam
           </button>
           <button className="flex-1 lg:flex-none justify-center flex items-center gap-2 px-6 py-3 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-colors">
             <FileSpreadsheet size={14} /> Publish Results
           </button>
        </div>
      </motion.div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 p-4 opacity-20 group-hover:scale-150 transition-transform duration-500 ${stat.color}`}>
              <stat.icon size={80} />
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${stat.bg} ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{stat.title}</p>
            <p className="text-xs font-bold text-slate-500 mt-4">{stat.trend}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* RECENT ACTIVITY */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
           <h2 className="text-xl font-black uppercase tracking-tighter mb-6">Active Examinations</h2>
           <div className="space-y-4">
             {[
               { code: "CS-401", title: "Quantum Computing", date: "Today, 10:00 AM", status: "In Progress", color: "text-blue-500 bg-blue-50" },
               { code: "AI-302", title: "Neural Networks", date: "Tomorrow, 02:00 PM", status: "Scheduled", color: "text-orange-500 bg-orange-50" },
               { code: "DS-105", title: "Data Structures", date: "June 18, 09:00 AM", status: "Scheduled", color: "text-slate-500 bg-slate-50" },
               { code: "SE-204", title: "Software Engineering", date: "Yesterday", status: "Grading Phase", color: "text-rose-500 bg-rose-50" }
             ].map((exam, i) => (
               <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-rose-200 transition-colors group cursor-pointer gap-4">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 shrink-0">
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{exam.code.split('-')[0]}</span>
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-slate-900">{exam.title}</h4>
                     <p className="text-xs font-medium text-slate-500">{exam.code} • {exam.date}</p>
                   </div>
                 </div>
                 <span className={`self-start sm:self-auto px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap ${exam.color}`}>
                   {exam.status}
                 </span>
               </div>
             ))}
           </div>
        </div>

        {/* ALERTS */}
        <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/20 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
            <AlertCircle className="text-rose-500" /> Action Required
          </h2>
          
          <div className="space-y-4 relative z-10">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">Missing Invigilators</h4>
              <p className="text-[10px] text-slate-400">3 halls for AI-302 lack assigned faculty.</p>
              <button className="text-[9px] font-black uppercase tracking-widest text-white mt-3 hover:text-rose-400 transition-colors">Assign Now →</button>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">Overdue Grades</h4>
              <p className="text-[10px] text-slate-400">Dr. Smith has not submitted grades for CS-201.</p>
              <button className="text-[9px] font-black uppercase tracking-widest text-white mt-3 hover:text-orange-400 transition-colors">Send Reminder →</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
