"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Send, User, Clock, CheckCircle2, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

const mockChats = [
  { id: "T-8921", subject: "API Integration Failing", college: "VIT Chennai", status: "Critical", time: "10m", active: true },
  { id: "T-8920", subject: "Increase storage quota", college: "VIT Vellore", status: "Open", time: "2h", active: false },
  { id: "T-8919", subject: "SSL certificate issue", college: "VIT Bhopal", status: "In Progress", time: "1d", active: false },
];

export default function AgentDashboardPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="p-6 lg:p-12 font-sans h-screen flex flex-col">
      {/* Header Context */}
      <div className="mb-6 shrink-0">
        <Link href="/admin/super-admin/support" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-2 mb-4 w-fit">
          <ArrowLeft size={12} /> Exit Agent Mode
        </Link>
        <div className="flex justify-between items-end">
          <h1 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <MessageCircle size={32} className="text-indigo-600" />
            Live <span className="text-indigo-600">Operations</span>
          </h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Online & Routing
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
         {/* Queue Column */}
         <div className="w-80 bg-white rounded-3xl border border-slate-100 shadow-xl flex flex-col shrink-0 overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
               <div className="relative mb-3">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                 <input type="text" placeholder="Search queue..." className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 outline-none focus:border-indigo-500 transition-colors" />
               </div>
               <div className="flex gap-2">
                 <button className="flex-1 py-1.5 bg-indigo-50 text-indigo-700 rounded text-[9px] font-black uppercase tracking-widest border border-indigo-100">Active (3)</button>
                 <button className="flex-1 py-1.5 bg-white text-slate-500 rounded text-[9px] font-black uppercase tracking-widest border border-slate-200 hover:bg-slate-50">Snoozed</button>
               </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar divide-y divide-slate-100">
               {mockChats.map(chat => (
                 <div key={chat.id} className={`p-4 cursor-pointer transition-colors ${chat.active ? 'bg-indigo-50 border-l-4 border-indigo-500' : 'hover:bg-slate-50 border-l-4 border-transparent'}`}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className={`text-xs font-black truncate pr-2 ${chat.active ? 'text-indigo-900' : 'text-slate-900'}`}>{chat.subject}</h4>
                      <span className="text-[9px] font-bold text-slate-400">{chat.time}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 mb-1">{chat.college}</p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{chat.id}</p>
                      </div>
                      {chat.status === 'Critical' && <span className="w-2 h-2 rounded-full bg-red-500" />}
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Chat Interface */}
         <div className="flex-1 bg-white rounded-3xl border border-slate-100 shadow-xl flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center shrink-0">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                   <User size={24} />
                 </div>
                 <div>
                   <h3 className="text-sm font-black text-slate-900">Dr. Arvind Ramesh</h3>
                   <p className="text-[10px] font-bold text-slate-500">College Admin • VIT Chennai</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-[9px] font-black uppercase tracking-widest hover:border-indigo-500 transition-colors">
                   Transfer
                 </button>
                 <button className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-emerald-100 transition-colors flex items-center gap-1">
                   <CheckCircle2 size={12}/> Resolve
                 </button>
               </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
               <div className="flex justify-center">
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Today</span>
               </div>
               
               {/* Client Message */}
               <div className="flex items-start gap-3 max-w-2xl">
                 <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0"><User size={14}/></div>
                 <div>
                   <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-sm shadow-sm">
                     <p className="text-sm font-bold text-slate-700">Hi, our automated bio-metric sync is throwing a 500 internal server error since 9 AM today. It's critical as attendance is completely halted.</p>
                   </div>
                   <p className="text-[9px] font-bold text-slate-400 mt-1 ml-1">10:42 AM</p>
                 </div>
               </div>

               {/* Agent Message */}
               <div className="flex items-start gap-3 max-w-2xl ml-auto flex-row-reverse">
                 <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0"><span className="text-[10px] font-black">ME</span></div>
                 <div>
                   <div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-sm shadow-sm text-white">
                     <p className="text-sm font-bold">I apologize for the disruption. I'm checking the API logs for the Chennai node right now. Could you confirm if the hardware devices are still online?</p>
                   </div>
                   <p className="text-[9px] font-bold text-slate-400 mt-1 mr-1 text-right">10:45 AM</p>
                 </div>
               </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
               <div className="flex items-end gap-3 bg-slate-50 border-2 border-slate-100 rounded-2xl p-2 focus-within:border-indigo-500 transition-colors">
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here... Use '/' for saved replies."
                    className="flex-1 bg-transparent border-none outline-none resize-none p-2 text-sm font-bold text-slate-700 min-h-[44px] max-h-32"
                    rows={1}
                  />
                  <button className="w-10 h-10 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <Send size={16} className="ml-1" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
