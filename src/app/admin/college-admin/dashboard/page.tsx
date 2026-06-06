"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

export default function CollegeAdminDashboard() {
  const stats = [
    { label: "Total Students", value: "12,450", change: "+4.2%", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Faculty", value: "482", change: "+1.1%", icon: Users, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Active Courses", value: "156", change: "0%", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Attendance Rate", value: "92.4%", change: "-0.5%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="p-6 lg:p-12 font-sans">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Tenant <span className="text-blue-600">Overview</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">VIT Chennai Campus Operations</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-xl border-2 border-slate-100 flex items-center gap-2">
            <Calendar size={14} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-600">Fall Semester 2026</span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-colors shadow-lg">
            Generate Daily Report
          </button>
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={stat.label} 
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors"
          >
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${stat.bg} opacity-50 group-hover:scale-150 transition-transform duration-500`} />
            
            <div className="relative z-10 flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <span className={`text-[10px] font-black tracking-wider ${stat.change.startsWith('+') ? 'text-emerald-500' : stat.change.startsWith('-') ? 'text-red-500' : 'text-slate-400'}`}>
                {stat.change}
              </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black italic tracking-tighter text-slate-900">{stat.value}</h3>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Activity Area */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-6">
               <h3 className="text-lg font-black uppercase tracking-widest text-slate-900">Today's Schedule</h3>
               <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">480 Classes</span>
             </div>
             
             <div className="space-y-4">
               {[
                 { time: "08:00 AM", event: "Morning Classes Begin", status: "In Progress", type: "academic" },
                 { time: "11:30 AM", event: "Mid-Semester Meeting (HODs)", status: "Upcoming", type: "admin" },
                 { time: "02:00 PM", event: "Fee Defaulter Notices Dispatch", status: "Scheduled", type: "finance" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 border-2 border-slate-50 rounded-xl hover:border-slate-100 transition-colors">
                    <div className="w-20 shrink-0">
                      <p className="text-xs font-black text-slate-900">{item.time}</p>
                    </div>
                    <div className={`w-2 h-10 rounded-full ${item.type === 'academic' ? 'bg-blue-500' : item.type === 'admin' ? 'bg-purple-500' : 'bg-emerald-500'}`} />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-700">{item.event}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1 flex items-center gap-1">
                        <Clock size={10}/> {item.status}
                      </p>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Right Sidebar Area */}
        <div className="space-y-8">
           <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">System Health</h3>
             
             <div className="space-y-6 relative z-10">
               <div>
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Biometric Sync</span>
                   <CheckCircle2 size={14} className="text-emerald-400" />
                 </div>
                 <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 w-full" />
                 </div>
               </div>
               <div>
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">ERP Database Load</span>
                   <span className="text-[10px] font-bold text-orange-400">78%</span>
                 </div>
                 <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-orange-500 w-[78%]" />
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <AlertTriangle size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-red-900 mb-1">Action Required</h4>
                <p className="text-[10px] font-bold text-red-600 leading-relaxed">
                  142 students have pending fees crossing the 30-day default window. Immediate notification dispatch is recommended.
                </p>
                <button className="mt-3 text-[9px] font-black uppercase tracking-widest text-red-700 hover:text-red-800 underline">
                  Review Defaulters
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
