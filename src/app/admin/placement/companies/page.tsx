"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, Search, Plus, Filter, Mail, Star, ExternalLink, MoreVertical
} from "lucide-react";

const mockCompanies = [
  { id: "COMP-01", name: "Google", type: "Tech / IT", tier: "Tier 1", hrContact: "hr-india@google.com", lastDrive: "Oct 2025", hires: 45 },
  { id: "COMP-02", name: "Amazon", type: "E-Commerce", tier: "Tier 1", hrContact: "campus@amazon.in", lastDrive: "Nov 2025", hires: 120 },
  { id: "COMP-03", name: "Deloitte", type: "Consulting", tier: "Tier 2", hrContact: "talent@deloitte.com", lastDrive: "Dec 2025", hires: 85 },
  { id: "COMP-04", name: "Tata Motors", type: "Core / Auto", tier: "Tier 2", hrContact: "careers@tatamotors.com", lastDrive: "Jan 2026", hires: 32 },
  { id: "COMP-05", name: "Goldman Sachs", type: "Finance", tier: "Tier 1", hrContact: "univ-rel@gs.com", lastDrive: "Aug 2025", hires: 15 },
];

export default function CompanyDirectory() {
  const [search, setSearch] = useState("");

  const filteredCompanies = mockCompanies.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Building2 size={36} className="text-violet-600" />
            Company <span className="text-violet-600">Directory</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage corporate partnerships and recruiters</p>
        </div>
        <button className="bg-violet-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-violet-700 transition-colors">
          <Plus size={16} /> Add Partner
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-96 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Company Name or Industry..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <button className="w-full md:w-auto bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <Filter size={14} /> Filter Tiers
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Company Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Industry / Tier</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">HR Contact</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Recruitment Stats</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredCompanies.map((comp) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={comp.id} 
                  className="bg-white hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 font-black italic text-xl">
                        {comp.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900">{comp.name}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{comp.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-700">{comp.type}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest mt-1 flex items-center gap-1 text-amber-500">
                      <Star size={10} /> {comp.tier}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${comp.hrContact}`} className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-violet-600 transition-colors">
                      <Mail size={14} /> {comp.hrContact}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-black italic text-slate-900">{comp.hires} Hired</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Last Drive: {comp.lastDrive}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors" title="View Past Drives">
                        <ExternalLink size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical size={16} />
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
