"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LifeBuoy, MessageCircle, AlertCircle, CheckCircle2, Clock, ChevronRight } from "lucide-react";

const mockTickets = [
  { id: "T-8921", subject: "API Integration Failing for BioMetrics", college: "VIT Chennai", status: "Critical", time: "10 mins ago" },
  { id: "T-8920", subject: "Request to increase storage quota", college: "VIT Vellore", status: "Open", time: "2 hours ago" },
  { id: "T-8919", subject: "Custom domain SSL certificate issue", college: "VIT Bhopal", status: "In Progress", time: "1 day ago" },
  { id: "T-8918", subject: "Cannot add more than 500 faculty", college: "VIT AP", status: "Resolved", time: "3 days ago" },
];

export default function SupportModule() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <LifeBuoy size={36} className="text-indigo-600" />
          Support <span className="text-indigo-600">Center</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Tenant Assistance & Ticket Resolution</p>
      </div>

      {/* Ticket Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-black italic text-slate-900">12</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Open Tickets</p>
         </div>
         <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-black italic text-red-600">2</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mt-1">Critical Priority</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-black italic text-slate-900">8</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">In Progress</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-black italic text-emerald-600">842</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Resolved (All Time)</p>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Ticket List */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Recent Tickets</h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600">View All</button>
          </div>
          <div className="divide-y divide-slate-100">
            {mockTickets.map((ticket, idx) => (
              <Link href={`/admin/super-admin/support/${ticket.id}`} key={ticket.id} className="block">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 hover:bg-indigo-50 transition-colors cursor-pointer group flex items-start gap-4"
                >
                  <div className={`mt-1 ${
                    ticket.status === 'Critical' ? 'text-red-500' :
                    ticket.status === 'Resolved' ? 'text-emerald-500' :
                    ticket.status === 'In Progress' ? 'text-blue-500' : 'text-orange-500'
                  }`}>
                     {ticket.status === 'Critical' ? <AlertCircle size={20} /> :
                      ticket.status === 'Resolved' ? <CheckCircle2 size={20} /> :
                      ticket.status === 'In Progress' ? <Clock size={20} /> : <MessageCircle size={20} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-indigo-700 transition-colors">{ticket.subject}</h4>
                      <span className="text-[10px] font-bold text-slate-400">{ticket.time}</span>
                    </div>
                    <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest">
                      <span className="text-slate-400">ID: {ticket.id}</span>
                      <span className="text-indigo-400">{ticket.college}</span>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-indigo-500 self-center" size={20} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions / Info Panel */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl text-white">
            <h3 className="text-lg font-black uppercase italic tracking-widest mb-4">SLA Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                  <span>First Response Time</span>
                  <span className="text-emerald-400">12 mins</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-1/4" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                  <span>Resolution Time</span>
                  <span className="text-orange-400">4.2 hours</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-1/2" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center">
             <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <MessageCircle size={24} />
             </div>
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">Live Chat Support</h3>
             <p className="text-xs font-bold text-slate-500 mb-6">4 agents currently online and taking requests.</p>
             <Link href="/admin/super-admin/support/agent-dashboard">
               <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-colors">
                 Enter Agent Dashboard
               </button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
