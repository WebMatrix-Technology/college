"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FileSpreadsheet, Download, Filter, 
  TrendingUp, Activity, PieChart, Banknote
} from "lucide-react";

export default function FinancialReportsPage() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <FileSpreadsheet size={36} className="text-emerald-600" />
            Financial <span className="text-emerald-600">Analytics</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Comprehensive Institution Auditing</p>
        </div>
        <div className="flex gap-2">
           <div className="flex gap-2">
             <button className="bg-white border border-slate-200 text-slate-600 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-colors">
               <Filter size={16} /> Filters
             </button>
           </div>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:bg-emerald-700 transition-colors"
           >
             <Download size={16} /> Export Master Report
           </motion.button>
        </div>
      </div>

      {/* Main Analytics View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
               <div className="flex justify-between items-center mb-8">
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                   <Activity size={18} className="text-emerald-600" /> Revenue vs Expenditure
                 </h3>
                 <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded text-[10px] font-black uppercase tracking-widest">+18.5% Net Margin</span>
               </div>
               
               {/* Simulated Chart Area */}
               <div className="h-64 flex items-end gap-2 md:gap-4 justify-between border-b border-slate-100 pb-4 relative">
                 {/* Background Grid Lines */}
                 <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                   {[1,2,3,4,5].map((_, i) => (
                     <div key={i} className="w-full border-t border-slate-50/50" />
                   ))}
                 </div>
                 
                 {/* Chart Bars */}
                 {[
                   { rev: 60, exp: 40, label: "Jan" },
                   { rev: 70, exp: 45, label: "Feb" },
                   { rev: 85, exp: 50, label: "Mar" },
                   { rev: 65, exp: 55, label: "Apr" },
                   { rev: 90, exp: 60, label: "May" },
                   { rev: 100, exp: 50, label: "Jun" },
                 ].map((data, idx) => (
                   <div key={idx} className="flex flex-col items-center gap-2 flex-1 z-10">
                     <div className="w-full flex justify-center gap-1 md:gap-2 items-end h-48">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${data.exp}%` }}
                          className="w-1/3 md:w-8 bg-red-400 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${data.rev}%` }}
                          className="w-1/3 md:w-8 bg-emerald-500 rounded-t-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-shadow cursor-pointer"
                        />
                     </div>
                     <span className="text-[10px] font-black text-slate-400 uppercase">{data.label}</span>
                   </div>
                 ))}
               </div>
               <div className="flex justify-center gap-8 mt-6">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Revenue</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-red-400 rounded-full" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Expenditure</span>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none" />
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                   <PieChart size={18} className="text-emerald-500" /> Revenue Distribution
                 </h3>
                 
                 <div className="space-y-4">
                   {[
                     { label: "Tuition Fees", value: "65%", color: "bg-emerald-500" },
                     { label: "Hostel & Mess", value: "20%", color: "bg-blue-500" },
                     { label: "Grants", value: "10%", color: "bg-purple-500" },
                     { label: "Other Incomes", value: "5%", color: "bg-orange-500" },
                   ].map((item, i) => (
                     <div key={i}>
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                         <span className="text-[10px] font-bold text-white">{item.value}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} animate={{ width: item.value }} className={`h-full ${item.color}`} />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/20 blur-[50px] rounded-full pointer-events-none" />
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                   <TrendingUp size={18} className="text-red-400" /> Expense Allocation
                 </h3>
                 
                 <div className="space-y-4">
                   {[
                     { label: "Payroll", value: "45%", color: "bg-red-500" },
                     { label: "Infrastructure", value: "25%", color: "bg-orange-500" },
                     { label: "R&D", value: "15%", color: "bg-blue-400" },
                     { label: "Miscellaneous", value: "15%", color: "bg-purple-400" },
                   ].map((item, i) => (
                     <div key={i}>
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                         <span className="text-[10px] font-bold text-white">{item.value}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} animate={{ width: item.value }} className={`h-full ${item.color}`} />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[30px] rounded-full pointer-events-none" />
               <Banknote size={32} className="text-emerald-200 mb-6" />
               <h3 className="text-xs font-black uppercase tracking-widest text-emerald-200 mb-2">Total Net Worth</h3>
               <p className="text-5xl font-black italic text-white leading-none mb-6">₹128 Cr</p>
               
               <div className="p-4 bg-emerald-700/50 rounded-2xl border border-emerald-500/30">
                 <p className="text-[10px] font-black uppercase tracking-widest text-emerald-200 mb-1">Liquid Assets</p>
                 <p className="text-xl font-black text-white">₹32.5 Cr</p>
               </div>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl space-y-4">
               <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Quick Reports</h3>
               {[
                 { name: "Annual Tax Ledger", date: "Generated: Oct 12" },
                 { name: "Q3 Audit Summary", date: "Generated: Oct 10" },
                 { name: "Payroll Discrepancies", date: "Generated: Oct 05" },
               ].map((doc, idx) => (
                 <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors cursor-pointer group">
                   <div className="flex items-center gap-3">
                     <FileSpreadsheet size={16} className="text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                     <div>
                       <p className="text-xs font-black text-slate-800">{doc.name}</p>
                       <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mt-0.5">{doc.date}</p>
                     </div>
                   </div>
                   <Download size={14} className="text-slate-300 group-hover:text-emerald-600" />
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
