"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Building2, TrendingUp, Users, 
  FileSignature, ChevronRight, Star, ExternalLink,
  Target
} from "lucide-react";

const upcomingDrives = [
  { id: "DRV-104", company: "Google India", role: "Software Engineer", date: "Oct 15, 2026", status: "Registration Open", applicants: 450 },
  { id: "DRV-105", company: "Microsoft", role: "Cloud Consultant", date: "Oct 18, 2026", status: "Upcoming", applicants: 320 },
  { id: "DRV-106", company: "Deloitte", role: "Business Analyst", date: "Oct 22, 2026", status: "Upcoming", applicants: 210 },
  { id: "DRV-107", company: "Amazon", role: "SDE-1", date: "Nov 05, 2026", status: "Draft", applicants: 0 },
];

export default function PlacementDashboard() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Briefcase size={36} className="text-indigo-600" />
            Career <span className="text-indigo-600">Services</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Placements & Corporate Relations</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:bg-indigo-700 transition-colors"
           >
             <Briefcase size={16} /> Schedule Drive
           </motion.button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Placement Rate", value: "88.5%", icon: TrendingUp, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
          { label: "Active Partners", value: "342", icon: Building2, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
          { label: "Eligible Students", value: "1,205", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Offers Made", value: "940", icon: FileSignature, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
        ].map((stat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className={`bg-white p-6 rounded-[2rem] border ${stat.border} shadow-xl relative overflow-hidden group`}
          >
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <stat.icon className={stat.color} size={24} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black italic text-slate-900">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
             <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Upcoming Placement Drives</h3>
               <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors">View Calendar</button>
             </div>
             <div className="divide-y divide-slate-50">
               {upcomingDrives.map((drive, idx) => (
                 <div key={idx} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-indigo-50/30 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 font-black italic text-xl">
                        {drive.company.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-base font-black text-slate-900 group-hover:text-indigo-700 transition-colors">{drive.company}</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{drive.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between w-full md:w-auto gap-8">
                      <div className="text-left md:text-right">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{drive.date}</p>
                        <p className="text-sm font-black italic text-slate-900">{drive.applicants} Applicants</p>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Drive Engagement</h3>
             
             <div className="mb-8">
               <p className="text-[10px] font-bold text-slate-500 mb-1">Average CTC</p>
               <p className="text-4xl font-black italic text-purple-400 leading-none">12.4 LPA</p>
             </div>

             <div className="space-y-4">
               <div>
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Target Highest CTC</span>
                   <span className="text-[10px] font-bold text-white">45 LPA / 50 LPA</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} className="h-full bg-purple-500" />
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xl space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Top Recruiters</h3>
              {[
                { name: "Google", hires: 45, type: "Tech" },
                { name: "Amazon", hires: 120, type: "E-Commerce" },
                { name: "Deloitte", hires: 85, type: "Consulting" },
              ].map((comp, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <Star size={14} className="text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                    <div>
                      <p className="text-xs font-black text-slate-800">{comp.name}</p>
                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mt-0.5">{comp.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black italic text-slate-900">{comp.hires}</span>
                    <ExternalLink size={12} className="text-slate-300 group-hover:text-indigo-500" />
                  </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
