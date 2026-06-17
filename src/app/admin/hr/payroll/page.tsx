"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Wallet, Search, Download, CheckCircle2, AlertCircle, RefreshCw
} from "lucide-react";

const mockPayroll = [
  { id: "PAY-1001", name: "Dr. Arvind Mehta", role: "Faculty", basic: "₹1,20,000", allowances: "₹45,000", deductions: "₹15,000", net: "₹1,50,000", status: "Processed" },
  { id: "PAY-1002", name: "Prof. Anjali Desai", role: "Faculty", basic: "₹95,000", allowances: "₹30,000", deductions: "₹12,000", net: "₹1,13,000", status: "Processed" },
  { id: "PAY-2005", name: "Ramesh Kumar", role: "Staff", basic: "₹45,000", allowances: "₹15,000", deductions: "₹5,000", net: "₹55,000", status: "Pending" },
  { id: "PAY-2010", name: "Suresh Pillai", role: "Staff", basic: "₹30,000", allowances: "₹10,000", deductions: "₹3,000", net: "₹37,000", status: "Pending" },
];

export default function PayrollLedger() {
  const [search, setSearch] = useState("");

  const filteredPayroll = mockPayroll.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Wallet size={36} className="text-rose-600" />
            Payroll <span className="text-rose-600">Ledger</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage monthly salary disbursements</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-white border border-slate-200 text-slate-600 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
            <Download size={16} /> Export
          </button>
          <button className="flex-1 md:flex-none bg-rose-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:bg-rose-700 transition-colors">
            <RefreshCw size={16} /> Run Payroll
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col xl:flex-row items-center gap-4 justify-between">
          <div className="relative w-full xl:w-96 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Employee Name or ID..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs outline-none focus:border-rose-500 transition-colors"
            />
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="text-right">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Total Disbursement (Oct 2026)</p>
              <p className="text-xl font-black italic text-rose-600">₹3,55,000</p>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Employee</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Basic Pay</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Allowances</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Deductions</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Net Pay</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredPayroll.map((pay, idx) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={pay.id} 
                  className="bg-white hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-slate-900">{pay.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-0.5">{pay.id} • {pay.role}</p>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-slate-700 text-sm">{pay.basic}</td>
                  <td className="px-6 py-4 text-right font-medium text-emerald-600 text-sm">+{pay.allowances}</td>
                  <td className="px-6 py-4 text-right font-medium text-red-600 text-sm">-{pay.deductions}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-base font-black italic text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg">{pay.net}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                        pay.status === 'Processed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {pay.status === 'Processed' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                        {pay.status}
                      </span>
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