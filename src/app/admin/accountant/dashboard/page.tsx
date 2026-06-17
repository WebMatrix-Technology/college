"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  IndianRupee, TrendingUp, AlertTriangle, 
  WalletCards, FileSpreadsheet, Plus, ArrowUpRight, CheckCircle2,
  Clock
} from "lucide-react";

const recentTransactions = [
  { id: "TRX-9901", name: "Rahul Verma", type: "Tuition Fee", amount: "₹1,25,000", status: "Completed", time: "10 mins ago" },
  { id: "TRX-9902", name: "Priya Nair", type: "Hostel Fee", amount: "₹45,000", status: "Pending", time: "1 hour ago" },
  { id: "TRX-9903", name: "Vendor - TechCorp", type: "Equipment", amount: "₹8,50,000", status: "Processed", time: "3 hours ago" },
  { id: "TRX-9904", name: "Aarav Sharma", type: "Library Fine", amount: "₹500", status: "Completed", time: "5 hours ago" },
];

export default function AccountantDashboard() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <IndianRupee size={36} className="text-emerald-600" />
            Finance <span className="text-emerald-600">Terminal</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Revenue & Expenditure Management</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-2">
           <select className="bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest outline-none focus:border-emerald-500 cursor-pointer">
             <option value="">Department</option>
             <option value="cse">Computer Science</option>
             <option value="ece">Electronics</option>
             <option value="me">Mechanical</option>
           </select>
           <select className="bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest outline-none focus:border-emerald-500 cursor-pointer">
             <option value="">Course</option>
             <option value="btech">B.Tech</option>
             <option value="mtech">M.Tech</option>
             <option value="bba">BBA</option>
           </select>
           <select className="bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest outline-none focus:border-emerald-500 cursor-pointer">
             <option value="">Year</option>
             <option value="1">1st Year</option>
             <option value="2">2nd Year</option>
             <option value="3">3rd Year</option>
             <option value="4">4th Year</option>
           </select>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:bg-emerald-700 transition-colors"
           >
             <Plus size={16} /> New Transaction
           </motion.button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Today's Collection", value: "₹4.2L", icon: IndianRupee, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Pending Dues", value: "₹18.5L", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
          { label: "Payroll Cleared", value: "92%", icon: WalletCards, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Monthly Growth", value: "+14%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
             <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Recent Transactions</h3>
               <button className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors">View All Ledger</button>
             </div>
             <div className="divide-y divide-slate-50">
               {recentTransactions.map((trx, idx) => (
                 <div key={idx} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-emerald-50/30 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                        <FileSpreadsheet size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">{trx.name}</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{trx.id} • {trx.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between w-full md:w-auto gap-8">
                      <div className="text-left md:text-right">
                        <p className="text-lg font-black italic text-slate-900">{trx.amount}</p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1 md:justify-end">
                          <Clock size={10} /> {trx.time}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded text-[8px] font-black uppercase tracking-widest ${
                        trx.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                        trx.status === 'Processed' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {trx.status}
                      </span>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none" />
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Fee Collection Pulse</h3>
             
             <div className="mb-8">
               <p className="text-[10px] font-bold text-slate-500 mb-1">Fall Semester Target</p>
               <p className="text-4xl font-black italic text-emerald-400 leading-none">84.5%</p>
             </div>

             <div className="space-y-4">
               <div>
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Collected</span>
                   <span className="text-[10px] font-bold text-white">₹12.4 Cr / ₹14.8 Cr</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: '84.5%' }} className="h-full bg-emerald-500" />
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl flex items-start gap-4">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-emerald-900 mb-1">Payroll Executed</h4>
                <p className="text-[10px] font-bold text-emerald-700 leading-relaxed">
                  Faculty and staff payroll for the month of September has been successfully disbursed to all target bank accounts.
                </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
