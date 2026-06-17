"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileSignature, Search, Building2, Calendar, FileText, CheckCircle2, Clock
} from "lucide-react";

const mockInternships = [
  { id: "INT-26-01", student: "Aarav Sharma", company: "Google", duration: "6 Months", stipend: "₹80,000/mo", status: "Ongoing", ppo: "Expected" },
  { id: "INT-26-02", student: "Priya Nair", company: "Amazon", duration: "2 Months", stipend: "₹60,000/mo", status: "Completed", ppo: "Offered" },
  { id: "INT-26-03", student: "Rahul Verma", company: "Tata Motors", duration: "6 Months", stipend: "₹25,000/mo", status: "Ongoing", ppo: "Pending" },
  { id: "INT-26-04", student: "Sneha Patel", company: "Microsoft", duration: "6 Months", stipend: "₹1,00,000/mo", status: "NOC Requested", ppo: "-" },
];

export default function Internships() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredInternships = mockInternships.filter(i => activeTab === "All" || i.status === activeTab);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <FileSignature size={36} className="text-violet-600" />
            Internships & <span className="text-violet-600">PPOs</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage pre-final year NOCs and track Pre-Placement Offers</p>
        </div>
      </div>

      <div className="flex flex-wrap bg-white p-2 rounded-2xl mb-8 shadow-md border border-slate-100 max-w-fit">
        {["All", "NOC Requested", "Ongoing", "Completed"].map(tab => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredInternships.map((intern, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={intern.id} 
            className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 flex flex-col relative overflow-hidden group"
          >
            <div className={`absolute top-0 left-0 w-full h-2 ${
              intern.status === 'Completed' ? 'bg-emerald-500' : 
              intern.status === 'Ongoing' ? 'bg-blue-500' : 'bg-amber-500'
            }`} />

            <div className="flex justify-between items-start mb-6 mt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                {intern.id}
              </span>
              <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                intern.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 
                intern.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {intern.status}
              </span>
            </div>
            
            <h4 className="text-xl font-black text-slate-900 leading-tight mb-1">{intern.student}</h4>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
              <Building2 size={14} className="text-violet-500" /> {intern.company}
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1"><Calendar size={12} /> Duration</span>
                <span className="text-xs font-bold text-slate-700">{intern.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1"><FileText size={12} /> Stipend</span>
                <span className="text-xs font-bold text-slate-700">{intern.stipend}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">PPO Status</span>
                <span className={`text-xs font-black italic ${
                  intern.ppo === 'Offered' ? 'text-emerald-600' : 
                  intern.ppo === 'Expected' ? 'text-blue-600' : 'text-slate-500'
                }`}>
                  {intern.ppo}
                </span>
              </div>
            </div>

            {intern.status === 'NOC Requested' && (
              <button className="w-full bg-amber-100 text-amber-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                <FileSignature size={14} /> Approve NOC
              </button>
            )}
            
            {intern.status === 'Ongoing' && (
              <button className="w-full bg-slate-100 text-slate-600 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                <Clock size={14} /> Request Progress Report
              </button>
            )}

            {intern.status === 'Completed' && intern.ppo !== 'Offered' && (
              <button className="w-full bg-violet-100 text-violet-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                <CheckCircle2 size={14} /> Update PPO Status
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
