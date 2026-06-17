"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRightLeft, ScanBarcode, UserCheck, Search, BookOpen, Clock, AlertTriangle, CheckCircle2
} from "lucide-react";

export default function CirculationTerminal() {
  const [activeTab, setActiveTab] = useState<"issue" | "return">("issue");

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <ArrowRightLeft size={36} className="text-amber-600" />
          Circulation <span className="text-amber-600">Terminal</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Daily Issue & Return Operations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Fast Action Terminal */}
        <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 relative overflow-hidden flex flex-col h-full border border-slate-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex bg-slate-800/50 p-1.5 rounded-2xl mb-8 relative z-10">
            <button 
              onClick={() => setActiveTab("issue")}
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === "issue" ? "bg-amber-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              Issue Book
            </button>
            <button 
              onClick={() => setActiveTab("return")}
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === "return" ? "bg-emerald-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
              }`}
            >
              Return Book
            </button>
          </div>

          <div className="space-y-6 relative z-10 flex-1">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Student / Faculty ID</label>
              <div className="relative">
                <UserCheck size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Scan or type ID..." 
                  className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-800 rounded-2xl font-black text-white outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Book ID / Barcode</label>
              <div className="relative">
                <ScanBarcode size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Scan barcode..." 
                  className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-800 rounded-2xl font-black text-white outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-white mt-4 shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98] ${
              activeTab === "issue" ? "bg-amber-600 hover:bg-amber-500 shadow-amber-600/20" : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20"
            }`}>
              {activeTab === "issue" ? "Process Issue" : "Confirm Return"}
            </button>
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden flex flex-col h-full">
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center shrink-0">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Live Activity Feed</h3>
              <p className="text-[10px] font-bold text-slate-500">Today's transactions</p>
            </div>
            <div className="relative w-48 hidden sm:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search logs..." className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold outline-none focus:border-amber-500" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {[
              { type: 'issue', student: "Aarav Sharma (CS-A)", book: "Clean Code", time: "Just now", status: "Due in 14 days" },
              { type: 'return', student: "Priya Nair (EC-B)", book: "Principles of Physics", time: "10 mins ago", status: "Returned on time" },
              { type: 'return', student: "Rahul Verma (ME-A)", book: "Thermodynamics", time: "45 mins ago", status: "Overdue by 2 days - ₹10 Fine" },
              { type: 'issue', student: "Prof. Anjali Desai", book: "Macroeconomics", time: "1 hour ago", status: "Due in 30 days" },
              { type: 'issue', student: "Vikram Singh (BBA)", book: "Marketing 101", time: "2 hours ago", status: "Due in 14 days" },
            ].map((log, idx) => (
              <div key={idx} className="p-4 flex items-start gap-4 hover:bg-slate-50 rounded-2xl transition-colors group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                  log.type === 'issue' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {log.type === 'issue' ? <ArrowRightLeft size={16} /> : <CheckCircle2 size={16} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-slate-900">{log.book}</h4>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                      <Clock size={10} /> {log.time}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-600 mt-0.5">{log.student}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mt-2 flex items-center gap-1 ${
                    log.status.includes('Fine') ? 'text-red-600' : 'text-slate-500'
                  }`}>
                    {log.status.includes('Fine') ? <AlertTriangle size={12} /> : <BookOpen size={12} />} {log.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
