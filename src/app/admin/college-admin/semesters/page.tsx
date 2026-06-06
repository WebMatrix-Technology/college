"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Plus, Play, Square, Settings, ChevronRight, AlertCircle } from "lucide-react";
import Link from "next/link";

const mockSemesters = [
  { id: "SEM-F26", name: "Fall 2026", term: "Odd Semester", duration: "Jul 2026 - Dec 2026", status: "Active", workingDays: 92 },
  { id: "SEM-W26", name: "Winter 2026", term: "Even Semester", duration: "Jan 2026 - May 2026", status: "Completed", workingDays: 88 },
  { id: "SEM-F25", name: "Fall 2025", term: "Odd Semester", duration: "Jul 2025 - Dec 2025", status: "Completed", workingDays: 94 },
  { id: "SEM-W27", name: "Winter 2027", term: "Even Semester", duration: "Jan 2027 - May 2027", status: "Upcoming", workingDays: 89 },
];

export default function SemestersModule() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <CalendarDays size={36} className="text-blue-600" />
            Academic <span className="text-blue-600">Semesters</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Academic Terms & Statuses</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm">
             <Settings size={16} /> Global Rules
           </button>
           <Link href="/admin/college-admin/semesters/new">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-blue-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-colors"
             >
               <Plus size={16} /> Declare New Term
             </motion.button>
           </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
           <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
             <div className="divide-y divide-slate-100">
                {mockSemesters.map((sem, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={sem.id}
                    className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-blue-50/30 transition-colors group cursor-pointer"
                  >
                     <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-black text-slate-900">{sem.name}</h3>
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${
                            sem.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                            sem.status === 'Completed' ? 'bg-slate-100 text-slate-500' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {sem.status}
                          </span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-500">{sem.term} • {sem.duration}</p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">Term Code: {sem.id}</p>
                     </div>
                     
                     <div className="flex items-center gap-8">
                        <div className="text-center">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Working Days</p>
                          <p className="text-xl font-black italic text-slate-900">{sem.workingDays}</p>
                        </div>
                        {sem.status === 'Active' && (
                          <button className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors shadow-sm" title="End Semester">
                             <Square size={16} fill="currentColor" />
                          </button>
                        )}
                        {sem.status === 'Upcoming' && (
                          <button className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-sm" title="Start Semester">
                             <Play size={16} fill="currentColor" />
                          </button>
                        )}
                        {sem.status === 'Completed' && (
                          <div className="w-10 h-10 flex items-center justify-center text-slate-300 group-hover:text-blue-500 transition-colors">
                             <ChevronRight size={20} />
                          </div>
                        )}
                     </div>
                  </motion.div>
                ))}
             </div>
           </div>
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Current Term Overview</h3>
             
             <div className="mb-6">
                <p className="text-[10px] font-bold text-slate-500 mb-1">Active Semester</p>
                <p className="text-3xl font-black italic text-blue-400">Fall 2026</p>
             </div>

             <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                    <span>Progress (Days)</span>
                    <span className="text-blue-300">45 / 92</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '48%' }} className="h-full bg-blue-500" />
                  </div>
                </div>
             </div>
           </div>

           <div className="bg-orange-50 border border-orange-100 p-6 rounded-3xl flex items-start gap-4">
              <AlertCircle size={20} className="text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-orange-900 mb-1">Pre-Registration Open</h4>
                <p className="text-[10px] font-bold text-orange-700 leading-relaxed">
                  Course pre-registration for Winter 2027 is currently open. Ensure faculty mapping is complete before November 15th.
                </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
