"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, Search, Filter, Download, UserCheck, ShieldAlert, Award
} from "lucide-react";

const mockStudents = [
  { id: "STU-2026-101", name: "Aarav Sharma", dept: "Computer Science", cgpa: 9.2, status: "Placed", company: "Google", offers: 1 },
  { id: "STU-2026-102", name: "Priya Nair", dept: "Electronics", cgpa: 8.8, status: "Multiple Offers", company: "Amazon, Deloitte", offers: 2 },
  { id: "STU-2026-103", name: "Rahul Verma", dept: "Mechanical", cgpa: 7.5, status: "Unplaced", company: "-", offers: 0 },
  { id: "STU-2026-104", name: "Sneha Patel", dept: "Computer Science", cgpa: 9.5, status: "Multiple Offers", company: "Microsoft, Oracle, TCS", offers: 3 },
  { id: "STU-2026-105", name: "Vikram Singh", dept: "Business", cgpa: 6.8, status: "Blocked", company: "-", offers: 0 },
];

export default function StudentProfiles() {
  const [search, setSearch] = useState("");

  const filteredStudents = mockStudents.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Users size={36} className="text-violet-600" />
            Student <span className="text-violet-600">Profiles</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Track eligibility, resumes, and placement status</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Eligible Pool", value: "1,205", icon: Users, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Currently Placed", value: "842", icon: Award, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Blocked from Drives", value: "12", icon: ShieldAlert, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
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
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col xl:flex-row items-center gap-4">
          <div className="relative w-full xl:w-96 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Name or ID..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <div className="flex w-full xl:w-auto gap-2">
            <button className="flex-1 xl:flex-none bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Filter size={14} /> Filters
            </button>
            <button className="flex-1 xl:flex-none bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Download size={14} /> Export Eligible
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Student Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Academics</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Placement Status</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredStudents.map((s, idx) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={s.id} 
                  className="bg-white hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <UserCheck size={16} className="text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">{s.name}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{s.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-black italic text-slate-900">{s.cgpa} CGPA</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{s.dept}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-start gap-1">
                      <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                        s.status === 'Multiple Offers' ? 'bg-amber-100 text-amber-700' :
                        s.status === 'Placed' ? 'bg-emerald-100 text-emerald-700' :
                        s.status === 'Blocked' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {s.status}
                      </span>
                      {s.offers > 0 && (
                        <p className="text-[10px] font-bold text-slate-500 mt-1 max-w-[200px] truncate">
                          {s.company}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-white border border-slate-200 text-violet-600 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:border-violet-600 hover:bg-violet-50 transition-all">
                      View Resume
                    </button>
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
