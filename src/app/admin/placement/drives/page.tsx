"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Plus, Calendar, MapPin, Users, CheckCircle2, AlertCircle
} from "lucide-react";

const mockDrives = [
  { id: "DRV-2026-01", company: "Microsoft", role: "SDE-1", type: "On-Campus", date: "2026-10-15", status: "Registration Open", eligible: 450, registered: 320, ctc: "45 LPA" },
  { id: "DRV-2026-02", company: "Deloitte", role: "Business Analyst", type: "On-Campus", date: "2026-10-22", status: "Upcoming", eligible: 600, registered: 0, ctc: "12 LPA" },
  { id: "DRV-2026-03", company: "Amazon", role: "Cloud Support", type: "Off-Campus", date: "2026-11-05", status: "Draft", eligible: 800, registered: 0, ctc: "22 LPA" },
  { id: "DRV-2026-04", company: "TCS", role: "Ninja Profile", type: "On-Campus", date: "2026-09-10", status: "Completed", eligible: 1200, registered: 1150, ctc: "4.5 LPA" },
];

export default function PlacementDrives() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredDrives = mockDrives.filter(d => activeTab === "All" || d.status === activeTab);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Briefcase size={36} className="text-violet-600" />
            Placement <span className="text-violet-600">Drives</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage on-campus and off-campus hiring events</p>
        </div>
        <button className="bg-violet-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-violet-700 transition-colors">
          <Plus size={16} /> Schedule Drive
        </button>
      </div>

      <div className="flex flex-wrap bg-white p-2 rounded-2xl mb-8 shadow-md border border-slate-100 max-w-fit">
        {["All", "Registration Open", "Upcoming", "Draft", "Completed"].map(tab => (
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
        {filteredDrives.map((drive, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={drive.id} 
            className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform"
          >
            {/* Status indicator bar */}
            <div className={`absolute top-0 left-0 w-full h-2 ${
              drive.status === 'Completed' ? 'bg-emerald-500' : 
              drive.status === 'Registration Open' ? 'bg-violet-500' : 
              drive.status === 'Draft' ? 'bg-slate-300' : 'bg-amber-500'
            }`} />

            <div className="flex justify-between items-start mb-6 mt-2">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black italic text-xl shadow-lg">
                {drive.company.charAt(0)}
              </div>
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                drive.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 
                drive.status === 'Registration Open' ? 'bg-violet-100 text-violet-700 animate-pulse' : 
                drive.status === 'Draft' ? 'bg-slate-100 text-slate-500' : 'bg-amber-100 text-amber-700'
              }`}>
                {drive.status}
              </span>
            </div>
            
            <h4 className="text-xl font-black text-slate-900 leading-tight mb-1">{drive.company}</h4>
            <p className="text-xs font-bold text-slate-500 mb-6">{drive.role} • {drive.ctc}</p>
            
            <div className="space-y-4 mb-6 flex-1">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                <Calendar size={14} className="text-slate-400" /> {drive.date}
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                <MapPin size={14} className="text-slate-400" /> {drive.type}
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                <Users size={14} className="text-slate-400" /> {drive.status === 'Registration Open' ? `${drive.registered} Registered` : `${drive.eligible} Eligible`}
              </div>
            </div>

            {drive.status === 'Draft' && (
              <button className="w-full bg-slate-900 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                <AlertCircle size={14} /> Review & Publish
              </button>
            )}
            
            {drive.status === 'Upcoming' && (
              <button className="w-full bg-violet-100 text-violet-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                Open Registration
              </button>
            )}

            {drive.status === 'Registration Open' && (
              <button className="w-full bg-amber-100 text-amber-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                Close Registration
              </button>
            )}

            {drive.status === 'Completed' && (
              <button className="w-full bg-emerald-100 text-emerald-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                <CheckCircle2 size={14} /> View Results
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
