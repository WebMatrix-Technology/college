"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Laptop, Globe, ExternalLink, ShieldCheck, Clock, DownloadCloud
} from "lucide-react";

export default function DigitalResources() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Laptop size={36} className="text-amber-600" />
          Digital <span className="text-amber-600">Assets</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage E-Journals and Database Subscriptions</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Active Subscriptions", value: "24", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Digital Textbooks", value: "8,450", icon: DownloadCloud, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Expiring Soon", value: "3", icon: Clock, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
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

      <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
        <Globe size={16} className="text-amber-600" /> Research Databases
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "IEEE Xplore", type: "Engineering & Tech", access: "Campus Wide", status: "Active", expires: "2027-01-15", logo: "IEEE" },
          { name: "JSTOR", type: "Humanities & Sciences", access: "Campus + VPN", status: "Active", expires: "2026-11-30", logo: "JSTOR" },
          { name: "ScienceDirect", type: "Multidisciplinary", access: "Campus Wide", status: "Expiring Soon", expires: "2026-07-01", logo: "ELSEVIER" },
          { name: "ACM Digital Library", type: "Computer Science", access: "Campus Wide", status: "Active", expires: "2026-12-31", logo: "ACM" },
          { name: "ProQuest", type: "Business & Management", access: "Campus + VPN", status: "Active", expires: "2027-03-20", logo: "ProQuest" },
        ].map((db, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={idx} 
            className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 flex flex-col group hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black italic text-xs tracking-tighter shadow-lg group-hover:bg-amber-600 transition-colors">
                {db.logo}
              </div>
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                db.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700 animate-pulse'
              }`}>
                {db.status}
              </span>
            </div>
            
            <h4 className="text-lg font-black text-slate-900">{db.name}</h4>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 mb-6">{db.type}</p>
            
            <div className="space-y-3 mt-auto border-t border-slate-100 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400">Access Level</span>
                <span className="text-xs font-bold text-slate-700">{db.access}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400">Valid Until</span>
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Clock size={12} className={db.status === 'Expiring Soon' ? 'text-red-500' : 'text-slate-400'} /> {db.expires}
                </span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl border border-slate-200 text-xs font-black uppercase tracking-widest text-slate-600 hover:border-amber-600 hover:text-amber-600 transition-colors flex items-center justify-center gap-2">
              Manage License <ExternalLink size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
