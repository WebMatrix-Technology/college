"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  AlertCircle, Search, Mail, ShieldAlert, BookOpen, Clock, Banknote
} from "lucide-react";

const mockDefaulters = [
  { id: "STU-2024-101", name: "Rahul Verma", dept: "Mechanical", book: "Thermodynamics", due: "2026-06-10", overdueDays: 7, fine: "₹35", status: "Active" },
  { id: "STU-2024-205", name: "Priya Nair", dept: "Electronics", book: "Digital Signal Processing", due: "2026-06-05", overdueDays: 12, fine: "₹60", status: "Blocked" },
  { id: "STU-2025-050", name: "Aarav Sharma", dept: "Computer Science", book: "Clean Code", due: "2026-06-15", overdueDays: 2, fine: "₹10", status: "Active" },
  { id: "FAC-9012", name: "Prof. Anjali Desai", dept: "Business", book: "Macroeconomics", due: "2026-05-20", overdueDays: 28, fine: "₹140", status: "Warning" },
];

export default function DefaultersFines() {
  const [search, setSearch] = useState("");

  const filteredDefaulters = mockDefaulters.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) || 
    d.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <AlertCircle size={36} className="text-red-600" />
            Defaulters & <span className="text-red-600">Fines</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Track overdue circulation and collect fines</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Total Overdue Books", value: "42", icon: BookOpen, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
          { label: "Pending Fines", value: "₹2,450", icon: Banknote, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
          { label: "Blocked Accounts", value: "8", icon: ShieldAlert, color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-200" },
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

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-96 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Student Name or ID..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs outline-none focus:border-red-500 transition-colors"
            />
          </div>
          <button className="w-full md:w-auto bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            <Mail size={14} /> Email All Reminders
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Borrower Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Overdue Book</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Due Date</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Accumulated Fine</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredDefaulters.map((d, idx) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={d.id} 
                  className="bg-white hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        d.status === 'Blocked' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {d.status === 'Blocked' ? <ShieldAlert size={18} /> : <AlertCircle size={18} />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">{d.name}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{d.id} • {d.dept}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-700">{d.book}</p>
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-0.5">{d.overdueDays} Days Overdue</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                      <Clock size={14} /> {d.due}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-lg font-black italic text-red-600">{d.fine}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex flex-col sm:flex-row items-center justify-end gap-2">
                      <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:border-amber-600 hover:text-amber-600 transition-colors">
                        Clear Fine
                      </button>
                      <button className="w-full sm:w-auto bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-100 hover:text-red-600 transition-colors">
                        Block
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
