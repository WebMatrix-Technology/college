"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart, Download, Filter, FileText, ChevronRight, Activity, Users, FileSpreadsheet, IndianRupee } from "lucide-react";

const reportCategories = [
  { id: "REP-ACAD", name: "Academic Performance", desc: "Grade distributions, pass percentages, and subject-wise analysis.", icon: FileSpreadsheet, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "REP-ATT", name: "Attendance Analytics", desc: "Global attendance trends, defaulter heatmaps, and leave patterns.", icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "REP-FIN", name: "Financial Ledger", desc: "Fee collection progress, outstanding dues, and revenue projections.", icon: IndianRupee, color: "text-orange-600", bg: "bg-orange-50" },
  { id: "REP-DEMO", name: "Demographic Census", desc: "Student enrollment stats, gender ratios, and regional distribution.", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
];

const recentGenerations = [
  { name: "Fall 26 Mid-Term Analytics.pdf", type: "Academic", date: "Today, 10:30 AM" },
  { name: "Oct Defaulters List.csv", type: "Attendance", date: "Yesterday, 04:15 PM" },
  { name: "Q3 Fee Collection Report.xlsx", type: "Financial", date: "Oct 01, 2026, 09:00 AM" },
];

export default function ReportsModule() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <BarChart size={36} className="text-pink-600" />
            Intelligence <span className="text-pink-600">Reports</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Generate Insights & Export Data</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Categories */}
         <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
               <div className="flex items-center justify-between mb-6">
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Report Categories</h3>
                 <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">
                   <Filter size={14} /> Filter Templates
                 </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reportCategories.map((category, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={category.id}
                      className="p-6 rounded-2xl border-2 border-slate-50 hover:border-slate-100 group cursor-pointer transition-colors"
                    >
                       <div className="flex justify-between items-start mb-4">
                          <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center`}>
                            <category.icon className={category.color} size={24} />
                          </div>
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-600 transition-colors">
                            <ChevronRight size={16} />
                          </div>
                       </div>
                       <h4 className="text-base font-black text-slate-900 group-hover:text-pink-600 transition-colors">{category.name}</h4>
                       <p className="text-[10px] font-bold text-slate-500 mt-2 leading-relaxed">{category.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none" />
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                   <h3 className="text-xl font-black italic tracking-tighter mb-2">Custom Query Engine</h3>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Build complex reports using visual data selection parameters.</p>
                 </div>
                 <button className="bg-pink-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:bg-pink-700 transition-colors whitespace-nowrap">
                   Launch Builder
                 </button>
               </div>
            </div>
         </div>

         {/* Sidebar */}
         <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
               <div className="bg-slate-50 p-6 border-b border-slate-100">
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Recent Generations</h3>
               </div>
               <div className="divide-y divide-slate-100">
                  {recentGenerations.map((file, idx) => (
                    <div key={idx} className="p-6 hover:bg-slate-50/50 transition-colors group">
                       <div className="flex items-start gap-4">
                         <FileText size={20} className="text-slate-400 shrink-0 mt-1" />
                         <div>
                           <p className="text-xs font-black text-slate-800 leading-tight group-hover:text-pink-600 transition-colors cursor-pointer">{file.name}</p>
                           <p className="text-[9px] font-bold text-slate-400 mt-1">{file.type} • {file.date}</p>
                         </div>
                       </div>
                       <div className="mt-4 flex gap-2">
                          <button className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                             <Download size={12} /> Download
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
