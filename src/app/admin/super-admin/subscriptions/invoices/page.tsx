"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Download, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const mockInvoices = [
  { id: "INV-2026-001", college: "VIT Chennai", amount: "$2,499.00", date: "Jul 01, 2026", status: "Paid" },
  { id: "INV-2026-002", college: "VIT Vellore", amount: "$2,499.00", date: "Jul 01, 2026", status: "Paid" },
  { id: "INV-2026-003", college: "VIT Bhopal", amount: "$999.00", date: "Jul 05, 2026", status: "Pending" },
  { id: "INV-2026-004", college: "VIT AP", amount: "$999.00", date: "Jun 15, 2026", status: "Overdue" },
];

export default function InvoicesPage() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      {/* Header Context */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <Link href="/admin/super-admin/subscriptions" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors flex items-center gap-2 mb-4 w-fit">
            <ArrowLeft size={12} /> Back to Subscriptions
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <FileText size={36} className="text-emerald-600" />
            Billing <span className="text-emerald-600">Invoices</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Global Transaction Ledger</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
         <div className="bg-slate-50 p-4 border-b border-slate-100 flex gap-4">
            <input type="text" placeholder="Search Invoice ID or Tenant..." className="w-64 p-3 border-2 border-slate-200 rounded-lg text-xs font-bold text-slate-600 outline-none focus:border-emerald-500 transition-colors" />
            <select className="p-3 border-2 border-slate-200 rounded-lg text-xs font-bold text-slate-500 outline-none">
              <option>All Statuses</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
         </div>

         <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white border-b border-slate-100">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Invoice ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Tenant</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Amount</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Issue Date</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockInvoices.map((inv, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={inv.id} 
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="p-6 text-xs font-black text-slate-900">{inv.id}</td>
                  <td className="p-6 text-sm font-bold text-slate-600">{inv.college}</td>
                  <td className="p-6 text-sm font-black text-slate-900">{inv.amount}</td>
                  <td className="p-6 text-xs font-bold text-slate-500">{inv.date}</td>
                  <td className="p-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                      inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                      inv.status === 'Pending' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                       {inv.status === 'Paid' ? <CheckCircle size={10}/> : <Clock size={10}/>} {inv.status}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-800 flex items-center gap-1 justify-end w-full">
                      <Download size={14} /> PDF
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
         </table>
      </div>
    </div>
  );
}
