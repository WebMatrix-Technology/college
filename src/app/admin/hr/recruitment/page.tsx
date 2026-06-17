"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Plus, UserPlus, CheckCircle2, Search, Calendar, FileText
} from "lucide-react";

const mockCandidates = [
  { id: "CAN-001", name: "Dr. Sunita Rao", role: "Associate Professor (CS)", status: "Interviewing", date: "Oct 15", rating: 4.5 },
  { id: "CAN-002", name: "Prakash Iyer", role: "System Admin", status: "Applied", date: "Oct 18", rating: null },
  { id: "CAN-003", name: "Neha Sharma", role: "HR Executive", status: "Offered", date: "Oct 10", rating: 4.8 },
  { id: "CAN-004", name: "Vikram Bose", role: "Lab Assistant (Mech)", status: "Applied", date: "Oct 19", rating: null },
  { id: "CAN-005", name: "Dr. Anil Gupta", role: "HOD (Civil)", status: "Interviewing", date: "Oct 12", rating: 4.2 },
];

export default function RecruitmentTracker() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCandidates = mockCandidates.filter(c => activeTab === "All" || c.status === activeTab);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <UserPlus size={36} className="text-rose-600" />
            Recruitment <span className="text-rose-600">ATS</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Applicant Tracking System for hiring new faculty and staff</p>
        </div>
        <button className="bg-rose-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:bg-rose-700 transition-colors">
          <Plus size={16} /> Post New Job
        </button>
      </div>

      <div className="flex flex-wrap bg-white p-2 rounded-2xl mb-8 shadow-md border border-slate-100 max-w-fit">
        {["All", "Applied", "Interviewing", "Offered"].map(tab => (
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
        {filteredCandidates.map((candidate, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={candidate.id} 
            className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform"
          >
            <div className={`absolute top-0 left-0 w-full h-2 ${
              candidate.status === 'Offered' ? 'bg-emerald-500' : 
              candidate.status === 'Interviewing' ? 'bg-blue-500' : 'bg-amber-500'
            }`} />

            <div className="flex justify-between items-start mb-6 mt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">
                {candidate.id}
              </span>
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                candidate.status === 'Offered' ? 'bg-emerald-100 text-emerald-700' : 
                candidate.status === 'Interviewing' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {candidate.status}
              </span>
            </div>
            
            <h4 className="text-xl font-black text-slate-900 leading-tight mb-1">{candidate.name}</h4>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
              <Briefcase size={14} className="text-rose-500" /> {candidate.role}
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1"><Calendar size={12} /> Applied On</span>
                <span className="text-xs font-bold text-slate-700">{candidate.date}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Interview Rating</span>
                <span className={`text-xs font-black italic ${candidate.rating ? 'text-amber-600' : 'text-slate-400'}`}>
                  {candidate.rating ? `${candidate.rating} / 5.0` : 'Pending'}
                </span>
              </div>
            </div>

            {candidate.status === 'Applied' && (
              <div className="flex gap-2">
                 <button className="flex-1 bg-blue-100 text-blue-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                   Schedule Interview
                 </button>
              </div>
            )}
            
            {candidate.status === 'Interviewing' && (
              <div className="flex gap-2">
                 <button className="flex-1 bg-emerald-100 text-emerald-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                   Extend Offer
                 </button>
                 <button className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors">
                   <FileText size={16} />
                 </button>
              </div>
            )}

            {candidate.status === 'Offered' && (
              <button className="w-full bg-slate-900 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" /> Awaiting Acceptance
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}