"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, MessageSquare, Send, Loader2, Users 
} from "lucide-react";

export default function FacultyCommunication() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-orange-600" size={40} />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FDFDFD] p-6 pt-24 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-4 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Faculty Dashboard
            </Link>
            <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Student <span className="text-orange-600">Comms.</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Node: Broadcast_Center // Active</p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-xl">
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 flex items-center gap-3">
              <MessageSquare className="text-orange-600" /> New Broadcast
            </h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Select Target Batch</label>
              <div className="relative">
                <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all appearance-none cursor-pointer">
                  <option>CS-401 Quantum Computing (Sem 8)</option>
                  <option>AI-302 Neural Networks (Sem 6)</option>
                  <option>DS-105 Data Structures (Sem 2)</option>
                  <option>All Enrolled Students</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message Content</label>
              <textarea 
                rows={6}
                placeholder="Enter your message here..."
                className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
              ></textarea>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-orange-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 transition-colors shadow-lg shadow-orange-600/30 active:scale-95">
              <Send size={16} /> Broadcast Message
            </button>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 px-4">Recent Broadcasts</h3>
          <div className="space-y-4">
            {[
              { to: "CS-401 Quantum Computing", date: "Today, 09:30 AM", msg: "Tomorrow's lecture is shifted to Lab 4A due to maintenance." },
              { to: "All Enrolled Students", date: "Feb 12, 2026", msg: "Please note the updated submission deadline for your final projects." }
            ].map((msg, i) => (
              <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2 py-1 rounded">{msg.to}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{msg.date}</span>
                </div>
                <p className="text-sm font-medium text-slate-700">{msg.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
