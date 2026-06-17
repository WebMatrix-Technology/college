"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Library, BookOpen, AlertCircle, 
  ArrowRightLeft, Laptop, Plus, QrCode, Search,
  Clock, BookMarked
} from "lucide-react";

const recentActivities = [
  { id: "ISS-4412", student: "Rahul Verma (26BCE1042)", book: "Introduction to Algorithms", action: "Issued", time: "15 mins ago" },
  { id: "RET-4413", student: "Priya Nair (27BEE0042)", book: "Data Structures in C", action: "Returned", time: "1 hour ago" },
  { id: "FIN-4414", student: "Aarav Sharma (25BME2011)", book: "Engineering Mechanics", action: "Fine Paid", time: "2 hours ago" },
  { id: "ISS-4415", student: "Meera K. (26MBA102)", book: "Marketing Management", action: "Issued", time: "4 hours ago" },
];

export default function LibrarianDashboard() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Library size={36} className="text-blue-600" />
            Central <span className="text-blue-600">Library</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Inventory & Circulation Management</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-slate-900 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg hover:bg-slate-800 transition-colors"
           >
             <QrCode size={16} /> Scan Book
           </motion.button>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-blue-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-colors"
           >
             <Plus size={16} /> Add Asset
           </motion.button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Physical Assets", value: "124.5K", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Active Loans", value: "3,412", icon: ArrowRightLeft, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Overdue Items", value: "148", icon: AlertCircle, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
          { label: "E-Resources Views", value: "45K+", icon: Laptop, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
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
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Live Circulation Feed</h3>
               <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                 <input 
                   type="text" 
                   placeholder="Search Reg No..." 
                   className="pl-9 pr-4 py-2 bg-white border-2 border-slate-100 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 outline-none focus:border-blue-500 transition-colors w-40 md:w-auto"
                 />
               </div>
             </div>
             <div className="divide-y divide-slate-50">
               {recentActivities.map((act, idx) => (
                 <div key={idx} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-blue-50/30 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                        <BookMarked size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-700 transition-colors">{act.book}</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{act.student}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between w-full md:w-auto gap-8">
                      <div className="text-left md:text-right">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1 md:justify-end mb-1">
                          <Clock size={10} /> {act.time}
                        </p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">ID: {act.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded text-[8px] font-black uppercase tracking-widest ${
                        act.action === 'Issued' ? 'bg-amber-100 text-amber-700' :
                        act.action === 'Returned' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {act.action}
                      </span>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Library Capacity</h3>
             
             <div className="mb-8">
               <p className="text-[10px] font-bold text-slate-500 mb-1">Reading Room Occupancy</p>
               <p className="text-4xl font-black italic text-blue-400 leading-none">62%</p>
             </div>

             <div className="space-y-4">
               <div>
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Seats Available</span>
                   <span className="text-[10px] font-bold text-white">142 / 380</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: '62%' }} className="h-full bg-blue-500" />
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-amber-50 border border-amber-100 p-6 rounded-3xl flex items-start gap-4">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-amber-900 mb-1">Stock Verification</h4>
                <p className="text-[10px] font-bold text-amber-700 leading-relaxed">
                  Annual physical stock verification is scheduled for next month. Ensure all non-essential issues are recalled by the 15th.
                </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
