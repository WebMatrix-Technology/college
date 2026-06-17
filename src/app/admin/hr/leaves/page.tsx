"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  CalendarClock, Check, X, Clock, CalendarDays, User, FileText
} from "lucide-react";

const mockLeaves = [
  { id: "LR-091", employee: "Dr. Arvind Mehta", type: "Academic Leave", from: "2026-11-10", to: "2026-11-15", days: 5, reason: "Attending International Physics Symposium", status: "Pending", balance: 12 },
  { id: "LR-092", employee: "Suresh Pillai", type: "Sick Leave", from: "2026-10-25", to: "2026-10-26", days: 2, reason: "Viral Fever", status: "Approved", balance: 8 },
  { id: "LR-093", employee: "Prof. Anjali Desai", type: "Casual Leave", from: "2026-12-01", to: "2026-12-05", days: 5, reason: "Family Function", status: "Pending", balance: 4 },
  { id: "LR-094", employee: "Ramesh Kumar", type: "Casual Leave", from: "2026-10-20", to: "2026-10-20", days: 1, reason: "Personal Work", status: "Rejected", balance: 2 },
];

export default function LeaveManagement() {
  const [activeTab, setActiveTab] = useState("Pending");

  const filteredLeaves = mockLeaves.filter(l => activeTab === "All" || l.status === activeTab);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <CalendarClock size={36} className="text-rose-600" />
            Leaves & <span className="text-rose-600">Attendance</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage time-off requests and track leave balances</p>
        </div>
      </div>

      <div className="flex bg-white p-2 rounded-2xl mb-8 shadow-md border border-slate-100 max-w-fit">
        {["Pending", "Approved", "Rejected", "All"].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              activeTab === tab ? "bg-slate-900 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLeaves.map((leave, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={leave.id} 
            className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 flex flex-col relative overflow-hidden group"
          >
            {/* Status indicator bar */}
            <div className={`absolute top-0 left-0 w-full h-2 ${
              leave.status === 'Approved' ? 'bg-emerald-500' : 
              leave.status === 'Rejected' ? 'bg-red-500' : 'bg-amber-500'
            }`} />

            <div className="flex justify-between items-start mb-4 mt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">
                {leave.id}
              </span>
              <span className="text-[9px] font-bold text-rose-500 flex items-center gap-1 bg-rose-50 px-2 py-1 rounded-md">
                <FileText size={10} /> {leave.type}
              </span>
            </div>
            
            <h4 className="text-lg font-black text-slate-900 leading-tight mb-1 flex items-center gap-2">
              <User size={16} className="text-slate-400" /> {leave.employee}
            </h4>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-6 mt-4 space-y-3 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1"><CalendarDays size={12}/> Dates</span>
                <span className="text-xs font-bold text-slate-700">{leave.from} <span className="text-slate-400 mx-1">to</span> {leave.to}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1"><Clock size={12}/> Duration</span>
                <span className="text-xs font-bold text-slate-700">{leave.days} Days</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Available Balance</span>
                <span className={`text-xs font-black italic ${leave.balance < leave.days ? 'text-red-500' : 'text-emerald-600'}`}>
                  {leave.balance} Days Left
                </span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Reason</p>
              <p className="text-xs font-medium text-slate-600">{leave.reason}</p>
            </div>

            {leave.status === 'Pending' && (
              <div className="mt-auto flex gap-2">
                <button className="flex-1 bg-emerald-100 text-emerald-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                  <Check size={14} /> Approve
                </button>
                <button className="flex-1 bg-red-100 text-red-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                  <X size={14} /> Reject
                </button>
              </div>
            )}
            
            {leave.status !== 'Pending' && (
              <div className="mt-auto">
                <div className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 ${
                  leave.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                }`}>
                  {leave.status}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}