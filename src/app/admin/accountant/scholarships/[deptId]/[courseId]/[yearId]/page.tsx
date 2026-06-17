"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpenCheck, Search, Filter, 
  CheckCircle2, XCircle, Award, 
  Banknote, AlertTriangle
} from "lucide-react";

const scholarshipData = [
  { id: "SCH-26-001", name: "Priya Nair", program: "B.Tech CSE", type: "Merit Based", amount: "₹1,00,000", cgpa: "9.8", status: "Approved" },
  { id: "SCH-26-002", name: "Rahul Verma", program: "B.Tech ME", type: "Need Based", amount: "₹50,000", cgpa: "8.5", status: "Pending" },
  { id: "SCH-26-003", name: "Aarav Sharma", program: "B.Tech ECE", type: "Sports Quota", amount: "₹75,000", cgpa: "7.9", status: "Approved" },
  { id: "SCH-26-004", name: "Neha Gupta", program: "BBA", type: "Merit Based", amount: "₹40,000", cgpa: "9.2", status: "Rejected" },
  { id: "SCH-26-005", name: "Aditya Singh", program: "M.Tech AI", type: "Research Grant", amount: "₹1,50,000", cgpa: "9.5", status: "Pending" },
];

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <BookOpenCheck size={36} className="text-emerald-600" />
            Financial <span className="text-emerald-600">Aid</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Scholarships & Grants Disbursement</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:bg-emerald-700 transition-colors"
           >
             <Award size={16} /> New Grant Program
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Allocated Fund</p>
          <h3 className="text-3xl font-black italic text-slate-900 mb-2">₹5.0 Cr</h3>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <Banknote size={14} /> Annual Budget 2026-27
          </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-emerald-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Disbursed Amount</p>
          <h3 className="text-3xl font-black italic text-emerald-600 mb-2">₹3.2 Cr</h3>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1 overflow-hidden">
            <div className="bg-emerald-500 h-1.5 rounded-full w-[64%]" />
          </div>
          <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest text-right">64% Utilized</p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-orange-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Pending Approvals</p>
          <h3 className="text-3xl font-black italic text-orange-600 mb-2">124 Apps</h3>
          <div className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest">
            <AlertTriangle size={14} /> ₹1.5 Cr Required
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50">
           <div className="relative w-full md:w-96">
             <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
             <input 
               type="text" 
               placeholder="SEARCH APPLICANT..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-white border border-slate-200 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl px-12 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
             />
           </div>
           <button className="w-full md:w-auto bg-white border border-slate-200 text-slate-600 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
             <Filter size={16} /> Filters
           </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Application ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Applicant Details</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Category</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">CGPA</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Grant Amount</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scholarshipData.map((item, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/30 transition-colors group">
                  <td className="p-6 text-[10px] font-black text-slate-500 tracking-widest">{item.id}</td>
                  <td className="p-6">
                    <p className="text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">{item.name}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{item.program}</p>
                  </td>
                  <td className="p-6 text-xs font-black text-slate-700 uppercase">{item.type}</td>
                  <td className="p-6">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-black">{item.cgpa}</span>
                  </td>
                  <td className="p-6">
                    <p className="text-lg font-black italic text-emerald-700">{item.amount}</p>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded text-[8px] font-black uppercase tracking-widest inline-flex items-center gap-1 ${
                      item.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-6">
                    {item.status === 'Pending' ? (
                      <div className="flex gap-2">
                        <button className="text-emerald-600 hover:text-white hover:bg-emerald-600 transition-colors p-2 bg-emerald-50 rounded-lg">
                          <CheckCircle2 size={16} />
                        </button>
                        <button className="text-red-600 hover:text-white hover:bg-red-600 transition-colors p-2 bg-red-50 rounded-lg">
                          <XCircle size={16} />
                        </button>
                      </div>
                    ) : (
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Processed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
