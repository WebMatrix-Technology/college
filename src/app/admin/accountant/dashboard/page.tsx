"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  IndianRupee, TrendingUp, AlertTriangle, 
  WalletCards, FileSpreadsheet, Plus, ArrowUpRight, CheckCircle2,
  Clock, BarChart3, Activity
} from "lucide-react";
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';

const recentTransactions = [
  { id: "TRX-9901", name: "Rahul Verma", type: "Tuition Fee", amount: "₹1,25,000", status: "Completed", time: "10 mins ago" },
  { id: "TRX-9902", name: "Priya Nair", type: "Hostel Fee", amount: "₹45,000", status: "Pending", time: "1 hour ago" },
  { id: "TRX-9903", name: "Vendor - TechCorp", type: "Equipment", amount: "₹8,50,000", status: "Processed", time: "3 hours ago" },
  { id: "TRX-9904", name: "Aarav Sharma", type: "Library Fine", amount: "₹500", status: "Completed", time: "5 hours ago" },
];

const cashflowData = [
  { name: 'Jan', Revenue: 4.2, Expenses: 2.4 },
  { name: 'Feb', Revenue: 3.8, Expenses: 2.1 },
  { name: 'Mar', Revenue: 5.1, Expenses: 2.8 },
  { name: 'Apr', Revenue: 4.8, Expenses: 2.2 },
  { name: 'May', Revenue: 7.2, Expenses: 3.1 },
  { name: 'Jun', Revenue: 8.5, Expenses: 3.4 },
];

const deptRevenueData = [
  { name: 'Eng & Tech', Revenue: 14.5 },
  { name: 'Business', Revenue: 8.2 },
  { name: 'Design', Revenue: 5.1 },
  { name: 'Law', Revenue: 4.8 },
  { name: 'Health', Revenue: 6.3 },
];

export default function AccountantDashboard() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <IndianRupee size={36} className="text-emerald-600" />
            Finance <span className="text-emerald-600">Overview</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Institution-Wide Revenue & Expenditure</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-2">
           <select className="bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest outline-none focus:border-emerald-500 cursor-pointer shadow-sm">
             <option value="2026-2027">FY 2026-2027</option>
             <option value="2025-2026">FY 2025-2026</option>
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
          { label: "Total Revenue (YTD)", value: "₹42.5 Cr", icon: IndianRupee, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Outstanding Dues", value: "₹3.2 Cr", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
          { label: "Operational Expenses", value: "₹18.4 Cr", icon: WalletCards, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
          { label: "Net Balance", value: "₹24.1 Cr", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
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

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        
        {/* Cashflow Area Chart */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <Activity size={16} className="text-emerald-600" /> Cashflow Analytics
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1">Monthly Revenue vs Expenses (in Cr)</p>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashflowData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ea580c" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ea580c" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dx={-10} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px' }} />
                <Area type="monotone" dataKey="Revenue" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="Expenses" stroke="#ea580c" strokeWidth={3} fillOpacity={1} fill="url(#colorExpenses)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dept Revenue Bar Chart */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 mb-1">
            <BarChart3 size={16} className="text-blue-600" /> Dept Revenue
          </h3>
          <p className="text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">Top Performers (in Cr)</p>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptRevenueData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#64748b' }} width={80} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                />
                <Bar dataKey="Revenue" fill="#3b82f6" radius={[0, 8, 8, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

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
