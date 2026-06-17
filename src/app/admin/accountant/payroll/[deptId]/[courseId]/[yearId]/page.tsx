"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  WalletCards, Search, Filter, Play, 
  CheckCircle2, Users, AlertTriangle
} from "lucide-react";

const payrollData = [
  { id: "EMP-1001", name: "Dr. Arvind Ramesh", role: "Principal", gross: "₹2,50,000", deductions: "₹45,000", net: "₹2,05,000", status: "Cleared" },
  { id: "EMP-1045", name: "Dr. Sunita Rao", role: "HOD - CSE", gross: "₹1,80,000", deductions: "₹30,000", net: "₹1,50,000", status: "Cleared" },
  { id: "EMP-2033", name: "Mr. Rajan Kumar", role: "Asst. Professor", gross: "₹85,000", deductions: "₹12,000", net: "₹73,000", status: "Processing" },
  { id: "EMP-3091", name: "Ms. Anjali Desai", role: "Lab Assistant", gross: "₹45,000", deductions: "₹5,000", net: "₹40,000", status: "Processing" },
  { id: "EMP-4012", name: "Vikram Singh", role: "Security Chief", gross: "₹55,000", deductions: "₹8,000", net: "₹47,000", status: "Hold" },
];

export default function PayrollPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <WalletCards size={36} className="text-emerald-600" />
            Payroll <span className="text-emerald-600">Operations</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Staff Salary Disbursement & Taxes</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:bg-emerald-700 transition-colors"
           >
             <Play size={16} /> Run Payroll
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Monthly Liability</p>
          <h3 className="text-3xl font-black italic text-slate-900 mb-2">₹1.8 Cr</h3>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <Users size={14} /> 482 Staff Members
          </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-emerald-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Disbursed (This Month)</p>
          <h3 className="text-3xl font-black italic text-emerald-600 mb-2">₹1.65 Cr</h3>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1 overflow-hidden">
            <div className="bg-emerald-500 h-1.5 rounded-full w-[92%]" />
          </div>
          <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest text-right">92% Cleared</p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-orange-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Pending/Hold</p>
          <h3 className="text-3xl font-black italic text-orange-600 mb-2">₹15 L</h3>
          <div className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest">
            <AlertTriangle size={14} /> 32 Staff Processing
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50">
           <div className="relative w-full md:w-96">
             <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
             <input 
               type="text" 
               placeholder="SEARCH EMPLOYEE..." 
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
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Employee ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Staff Info</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Gross Salary</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-red-500">Deductions</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Net Payable</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payrollData.map((item, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/30 transition-colors group">
                  <td className="p-6 text-[10px] font-black text-slate-500 tracking-widest">{item.id}</td>
                  <td className="p-6">
                    <p className="text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">{item.name}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{item.role}</p>
                  </td>
                  <td className="p-6 text-sm font-black text-slate-700">{item.gross}</td>
                  <td className="p-6 text-sm font-black text-red-500">-{item.deductions}</td>
                  <td className="p-6">
                    <p className="text-lg font-black italic text-emerald-700">{item.net}</p>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded text-[8px] font-black uppercase tracking-widest inline-flex items-center gap-1 ${
                      item.status === 'Cleared' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.status === 'Cleared' && <CheckCircle2 size={10} />}
                      {item.status}
                    </span>
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
