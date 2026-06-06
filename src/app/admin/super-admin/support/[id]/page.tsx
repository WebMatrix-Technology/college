"use client";
import React, { use } from "react";
import Link from "next/link";
import { ArrowLeft, Ticket, Clock, CheckCircle2, User, FileText, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function TicketDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const ticketId = resolvedParams.id;
  
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      {/* Header Context */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href="/admin/super-admin/support" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-2 mb-4 w-fit">
            <ArrowLeft size={12} /> Back to Support Center
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Ticket size={36} className="text-indigo-600" />
            Ticket <span className="text-indigo-600">{ticketId}</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Submitted by VIT Chennai • 10 mins ago</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-slate-100 text-slate-600 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-slate-200 transition-colors">
             Transfer
           </button>
           <button className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-emerald-700 transition-colors shadow-xl">
             <CheckCircle2 size={16} /> Mark Resolved
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6">
            {/* Subject Card */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
               <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-black text-slate-900 leading-tight">API Integration Failing for BioMetrics System</h3>
                  <span className="bg-red-50 text-red-600 px-3 py-1.5 rounded-md text-[9px] font-black uppercase tracking-widest border border-red-100 shrink-0">Critical</span>
               </div>
               
               <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"><User size={16}/></div>
                  <div>
                    <p className="text-xs font-black text-slate-900">Dr. Arvind Ramesh</p>
                    <p className="text-[10px] font-bold text-slate-500">College Admin • VIT Chennai</p>
                  </div>
               </div>
            </div>

            {/* Event Timeline / Thread */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-8">
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1"><User size={14} className="text-slate-400"/></div>
                  <div>
                     <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-black text-slate-900">Arvind Ramesh</span>
                        <span className="text-[10px] font-bold text-slate-400">10:42 AM</span>
                     </div>
                     <p className="text-sm font-bold text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl rounded-tl-sm border border-slate-100">
                       Hi, our automated bio-metric sync is throwing a 500 internal server error since 9 AM today. It's critical as attendance is completely halted. I have checked the firewall settings on our end and nothing has changed. Please advise.
                     </p>
                     
                     <div className="flex gap-2 mt-3">
                       <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-widest cursor-pointer hover:border-slate-300">
                         <FileText size={12}/> error_log.txt
                       </div>
                     </div>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 mt-1"><span className="text-[10px] font-black text-white">ME</span></div>
                  <div className="flex-1">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-black text-indigo-700">You (System Admin)</span>
                        <span className="text-[10px] font-bold text-slate-400">10:45 AM</span>
                     </div>
                     <div className="flex items-end gap-3 bg-white border-2 border-slate-100 focus-within:border-indigo-500 transition-colors p-2 rounded-xl">
                        <textarea 
                          placeholder="Type your reply..." 
                          className="flex-1 outline-none resize-none p-2 text-sm font-bold text-slate-700 min-h-[60px]"
                        />
                        <button className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors"><Send size={16}/></button>
                     </div>
                     <div className="flex items-center gap-4 mt-3 pl-2">
                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 cursor-pointer">
                           <input type="checkbox" className="accent-indigo-600" /> Internal Note
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">SLA Tracker</h3>
               
               <div className="mb-6">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Time to breach SLA</p>
                 <p className="text-2xl font-black italic text-emerald-400 flex items-center gap-2">
                    <Clock size={20}/> 3h 45m
                 </p>
               </div>
               
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '25%' }} className="h-full bg-emerald-500" />
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Ticket Metadata</h3>
               
               <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category</span>
                    <span className="text-xs font-bold text-slate-700">API/Integration</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Component</span>
                    <span className="text-xs font-bold text-slate-700">BioMetrics Sync</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Assignee</span>
                    <span className="text-xs font-bold text-indigo-600 cursor-pointer hover:underline">Unassigned</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
