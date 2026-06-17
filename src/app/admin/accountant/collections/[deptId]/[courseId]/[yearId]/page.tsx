"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  IndianRupee, Search, Filter, AlertTriangle, 
  CheckCircle2, Clock, ArrowRight, Download, Plus
} from "lucide-react";

const collectionsData = [
  { id: "FEE-2026-891", student: "Aarav Sharma", id_no: "24BCE1001", type: "Tuition Fee", amount: "₹1,25,000", date: "Oct 15, 2026", status: "Paid", method: "Net Banking" },
  { id: "FEE-2026-892", student: "Priya Nair", id_no: "24BCE1042", type: "Hostel Fee", amount: "₹45,000", date: "Oct 14, 2026", status: "Pending", method: "-" },
  { id: "FEE-2026-893", student: "Rahul Verma", id_no: "23MEE2011", type: "Tuition Fee", amount: "₹1,25,000", date: "Oct 12, 2026", status: "Overdue", method: "-" },
  { id: "FEE-2026-894", student: "Neha Gupta", id_no: "25CSE3099", type: "Mess Fee", amount: "₹25,000", date: "Oct 10, 2026", status: "Paid", method: "UPI" },
  { id: "FEE-2026-895", student: "Aditya Singh", id_no: "24ECE1105", type: "Tuition Fee", amount: "₹1,25,000", date: "Oct 09, 2026", status: "Paid", method: "Credit Card" },
];

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <IndianRupee size={36} className="text-emerald-600" />
            Fee <span className="text-emerald-600">Collections</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Student Payments & Dues</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:bg-emerald-700 transition-colors"
           >
             <Plus size={16} /> Record Payment
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Target Collection</p>
          <h3 className="text-3xl font-black italic text-slate-900 mb-2">₹14.8 Cr</h3>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <Clock size={14} /> Fall Semester 2026
          </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-emerald-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Collected</p>
          <h3 className="text-3xl font-black italic text-emerald-600 mb-2">₹12.4 Cr</h3>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1 overflow-hidden">
            <div className="bg-emerald-500 h-1.5 rounded-full w-[84%]" />
          </div>
          <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest text-right">84% Achieved</p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-red-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Pending Dues</p>
          <h3 className="text-3xl font-black italic text-red-600 mb-2">₹2.4 Cr</h3>
          <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest">
            <AlertTriangle size={14} /> 450 Students Pending
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50">
           <div className="relative w-full md:w-96">
             <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
             <input 
               type="text" 
               placeholder="SEARCH STUDENT OR ID..." 
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
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Transaction ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Student Info</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Fee Type</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Amount</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {collectionsData.map((item, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/30 transition-colors group">
                  <td className="p-6 text-[10px] font-black text-slate-500 tracking-widest">{item.id}</td>
                  <td className="p-6">
                    <p className="text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">{item.student}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{item.id_no}</p>
                  </td>
                  <td className="p-6 text-xs font-black text-slate-700 uppercase">{item.type}</td>
                  <td className="p-6">
                    <p className="text-lg font-black italic text-slate-900">{item.amount}</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{item.method}</p>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded text-[8px] font-black uppercase tracking-widest inline-flex items-center gap-1 ${
                      item.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.status === 'Paid' && <CheckCircle2 size={10} />}
                      {item.status === 'Overdue' && <AlertTriangle size={10} />}
                      {item.status}
                    </span>
                  </td>
                  <td className="p-6">
                    {item.status === 'Paid' ? (
                      <button className="text-slate-400 hover:text-emerald-600 transition-colors p-2 bg-slate-50 hover:bg-emerald-50 rounded-lg">
                        <Download size={16} />
                      </button>
                    ) : (
                      <button className="text-slate-400 hover:text-orange-600 transition-colors p-2 bg-slate-50 hover:bg-orange-50 rounded-lg">
                        <ArrowRight size={16} />
                      </button>
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
