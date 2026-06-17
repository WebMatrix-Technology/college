"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Receipt, Search, Filter, Download, 
  FileText, Clock, FileCheck, CheckCircle2
} from "lucide-react";

const invoiceData = [
  { id: "INV-2026-401", recipient: "Aarav Sharma", type: "Semester Tuition", amount: "₹1,25,000", date: "Oct 15, 2026", status: "Paid" },
  { id: "INV-2026-402", recipient: "TechCorp Vendor", type: "Lab Equipment", amount: "₹8,50,000", date: "Oct 14, 2026", status: "Processed" },
  { id: "INV-2026-403", recipient: "Priya Nair", type: "Hostel Accommodation", amount: "₹45,000", date: "Oct 12, 2026", status: "Unpaid" },
  { id: "INV-2026-404", recipient: "EduSupply Co.", type: "Library Books", amount: "₹1,20,000", date: "Oct 10, 2026", status: "Draft" },
  { id: "INV-2026-405", recipient: "Neha Gupta", type: "Mess Subscription", amount: "₹25,000", date: "Oct 09, 2026", status: "Paid" },
];

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Receipt size={36} className="text-emerald-600" />
            Invoices & <span className="text-emerald-600">Receipts</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Billing and Document Generation</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-slate-900 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-colors"
           >
             <FileText size={16} /> Create Invoice
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Generated", value: "1,245", icon: FileText, color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-200" },
          { label: "Paid Invoices", value: "840", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Pending Payment", value: "385", icon: Clock, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
          { label: "Drafts", value: "20", icon: FileCheck, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
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

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50">
           <div className="relative w-full md:w-96">
             <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
             <input 
               type="text" 
               placeholder="SEARCH INVOICE ID..." 
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
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Invoice ID</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Recipient</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Type / Description</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Amount</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoiceData.map((item, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/30 transition-colors group">
                  <td className="p-6 text-[10px] font-black text-slate-500 tracking-widest">{item.id}</td>
                  <td className="p-6">
                    <p className="text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">{item.recipient}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{item.date}</p>
                  </td>
                  <td className="p-6 text-xs font-black text-slate-700 uppercase">{item.type}</td>
                  <td className="p-6">
                    <p className="text-lg font-black italic text-slate-900">{item.amount}</p>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded text-[8px] font-black uppercase tracking-widest inline-flex items-center gap-1 ${
                      item.status === 'Paid' || item.status === 'Processed' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Unpaid' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <button className="text-slate-400 hover:text-emerald-600 transition-colors p-2 bg-slate-50 hover:bg-emerald-50 rounded-lg">
                      <Download size={16} />
                    </button>
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
