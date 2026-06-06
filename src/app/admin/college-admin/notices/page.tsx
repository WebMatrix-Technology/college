"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bell, Plus, Search, Filter, Megaphone, Trash2, Edit3, Send } from "lucide-react";
import Link from "next/link";

const mockNotices = [
  { id: 1, title: "Revised Guidelines for Mid-Term Examinations", target: "All Students & Faculty", date: "Oct 01, 2026", status: "Published", priority: "High" },
  { id: 2, title: "Campus Network Maintenance Downtime", target: "All Users", date: "Sep 28, 2026", status: "Published", priority: "Medium" },
  { id: 3, title: "Faculty Workshop on Outcome Based Education", target: "Faculty Only", date: "Sep 25, 2026", status: "Draft", priority: "Low" },
  { id: 4, title: "Fee Payment Deadline Extension", target: "Defaulter Students", date: "Sep 20, 2026", status: "Published", priority: "High" },
];

export default function NoticesModule() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Bell size={36} className="text-yellow-500" />
            Digital <span className="text-yellow-500">Noticeboard</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Broadcast Announcements & Circulars</p>
        </div>
        <div className="flex gap-2">
           <Link href="/admin/college-admin/notices/new">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-yellow-500 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:bg-yellow-600 transition-colors"
             >
               <Plus size={16} /> Compose Broadcast
             </motion.button>
           </Link>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        {/* Filters */}
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search notices by title..." 
              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-yellow-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <select className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 outline-none hover:border-slate-300 transition-colors">
               <option>All Priorities</option>
               <option>High Priority</option>
               <option>Medium Priority</option>
               <option>Low Priority</option>
             </select>
             <button className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors">
               <Filter size={16} />
             </button>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-100">
           {mockNotices.map((notice, idx) => (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.05 }}
               key={notice.id}
               className="p-6 hover:bg-yellow-50/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
             >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    notice.priority === 'High' ? 'bg-red-100 text-red-500' : 
                    notice.priority === 'Medium' ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'
                  }`}>
                    <Megaphone size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-black text-slate-900 group-hover:text-yellow-600 transition-colors">{notice.title}</h3>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                        notice.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {notice.status}
                      </span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-500">Target: {notice.target} • Published: {notice.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   {notice.status === 'Draft' && (
                     <button className="px-4 py-2 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mr-2">
                       <Send size={14} /> Publish Now
                     </button>
                   )}
                   <button className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors">
                     <Edit3 size={16} />
                   </button>
                   <button className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors">
                     <Trash2 size={16} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
