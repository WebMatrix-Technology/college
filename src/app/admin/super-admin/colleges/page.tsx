"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Plus, Search, MoreVertical, Edit, Ban, CheckCircle } from "lucide-react";

// Mock Data
const mockColleges = [
  { id: "COL-001", name: "VIT Chennai", type: "University", status: "Active", students: 12500, joined: "2024-01-15" },
  { id: "COL-002", name: "VIT Vellore", type: "University", status: "Active", students: 25000, joined: "2023-11-01" },
  { id: "COL-003", name: "VIT Bhopal", type: "University", status: "Active", students: 8000, joined: "2025-06-20" },
  { id: "COL-004", name: "VIT AP", type: "University", status: "Suspended", students: 5000, joined: "2025-08-10" },
];

export default function CollegesModule() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Building2 size={36} className="text-blue-600" />
            Colleges <span className="text-blue-600">Directory</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Platform Tenants</p>
        </div>
        <Link href="/admin/super-admin/colleges/new">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} /> Onboard New College
          </motion.button>
        </Link>
      </div>

      {/* Controls */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search colleges by name or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-blue-600 outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold focus:border-blue-600 outline-none flex-1 md:flex-none">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Tenant ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Institution Name</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Students</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Onboarded</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockColleges.map((col, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={col.id} 
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="p-6 text-xs font-black text-slate-500">
                    <Link href={`/admin/super-admin/colleges/${col.id}`} className="hover:text-blue-600 hover:underline">
                      {col.id}
                    </Link>
                  </td>
                  <td className="p-6">
                    <p className="font-black text-slate-900 text-sm">{col.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{col.type}</p>
                  </td>
                  <td className="p-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                      col.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                    }`}>
                      {col.status === "Active" ? <CheckCircle size={10} /> : <Ban size={10} />}
                      {col.status}
                    </span>
                  </td>
                  <td className="p-6 text-sm font-bold text-slate-600">{col.students.toLocaleString()}</td>
                  <td className="p-6 text-xs font-bold text-slate-500">{new Date(col.joined).toLocaleDateString()}</td>
                  <td className="p-6 text-right">
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors bg-white rounded-lg border border-slate-100 shadow-sm opacity-0 group-hover:opacity-100 mr-2">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination mock */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Showing 1 to 4 of 4 entries</span>
           <div className="flex gap-2">
             <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-400 cursor-not-allowed">Prev</button>
             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-lg">1</button>
             <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-400 cursor-not-allowed">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}
