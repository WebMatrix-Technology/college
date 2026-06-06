"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IndianRupee, Download, Search, Filter, AlertTriangle, UserMinus, Plus, TrendingUp, X, Save } from "lucide-react";

const mockDefaulters = [
  { id: "26BCE1042", name: "Rahul Verma", branch: "B.Tech CSE", amount: "₹45,000", dueDate: "Oct 15, 2026", status: "Overdue" },
  { id: "27BEE0042", name: "Priya Nair", branch: "B.Tech EEE", amount: "₹45,000", dueDate: "Oct 15, 2026", status: "Overdue" },
  { id: "25BME2011", name: "Aarav Sharma", branch: "B.Tech MECH", amount: "₹12,000", dueDate: "Oct 15, 2026", status: "Partial Default" },
];

export default function FeesModule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <IndianRupee size={36} className="text-emerald-600" />
            Fee <span className="text-emerald-600">Collection</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Dues, Defaulters & Receipts</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
           >
             <Download size={16} /> Export Ledger
           </motion.button>
           <motion.button 
             onClick={() => setIsModalOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-700 transition-colors"
           >
             <Plus size={16} /> Configure New Fee
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Live Financial Metrics */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none" />
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Term Collection</h3>
               
               <div className="mb-8">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Total Received (Fall 26)</p>
                 <div className="flex items-end gap-3">
                   <p className="text-4xl font-black italic text-emerald-400 leading-none">₹4.2 Cr</p>
                 </div>
               </div>

               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Target Completion</span>
                     <span className="text-[10px] font-bold text-white">82%</span>
                   </div>
                   <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 w-[82%]" />
                   </div>
                 </div>
               </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 flex items-start gap-4">
               <TrendingUp size={20} className="text-orange-600 shrink-0 mt-0.5" />
               <div>
                 <h4 className="text-xs font-black uppercase tracking-widest text-orange-900 mb-1">Outstanding Dues</h4>
                 <p className="text-xl font-black italic text-orange-600 leading-none mb-2">₹72.5 L</p>
                 <p className="text-[10px] font-bold text-orange-700 leading-relaxed">
                   Across 142 students. Late fee penalties have been automatically applied to 89 accounts.
                 </p>
               </div>
            </div>
         </div>

         {/* Defaulter Table */}
         <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden h-full flex flex-col">
               <div className="bg-slate-50 p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                 <div>
                   <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                     <AlertTriangle size={16} className="text-red-500" /> Defaulter Ledger
                   </h3>
                 </div>
                 <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                      <input 
                        type="text" 
                        placeholder="Search student or ID..." 
                        className="w-full md:w-64 pl-9 pr-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <button className="px-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors">
                      <Filter size={16} />
                    </button>
                 </div>
               </div>

               <div className="flex-1 overflow-x-auto">
                 <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-white border-b border-slate-100">
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Student Info</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Pending Amount</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Due Date</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {mockDefaulters.map((student, idx) => (
                        <motion.tr 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          key={student.id}
                          className="hover:bg-orange-50/30 transition-colors group"
                        >
                          <td className="p-6">
                             <div className="flex items-center gap-3">
                               <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                                 <UserMinus size={16} />
                               </div>
                               <div>
                                 <p className="text-sm font-black text-slate-900 group-hover:text-orange-700 transition-colors">{student.name}</p>
                                 <p className="text-[10px] font-bold text-slate-500 mt-0.5">{student.id} • {student.branch}</p>
                               </div>
                             </div>
                          </td>
                          <td className="p-6">
                            <span className="text-xl font-black italic text-slate-900">{student.amount}</span>
                            <span className={`block w-fit px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mt-1 ${
                              student.status === 'Overdue' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="p-6">
                            <p className="text-sm font-black text-slate-700">{student.dueDate}</p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mt-1">Penalty Active</p>
                          </td>
                          <td className="p-6 text-right">
                             <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors border border-slate-200 hover:border-emerald-200 px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md">
                               Send Reminder
                             </button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                 </table>
               </div>
            </div>
         </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Configure New Fee</h3>
                <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Fee Title</label>
                   <input type="text" placeholder="e.g. Fall 2026 Tuition Fee" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Amount (₹)</label>
                     <input type="number" placeholder="0" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Fee Type</label>
                     <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors">
                       <option>Tuition Fee</option>
                       <option>Examination Fee</option>
                       <option>Hostel / Transport</option>
                       <option>Miscellaneous</option>
                     </select>
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Due Date</label>
                     <input type="date" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Late Fine Amount (₹)</label>
                     <input type="number" defaultValue={500} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors" />
                   </div>
                 </div>
                 <button onClick={() => setIsModalOpen(false)} className="w-full bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-700 transition-colors mt-4">
                   <Save size={16} /> Save Fee Configuration
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
