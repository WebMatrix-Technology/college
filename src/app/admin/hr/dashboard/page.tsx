"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Wallet, Briefcase, CalendarClock, 
  TrendingUp, Activity, UserPlus, CheckCircle2, AlertCircle
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const headcountData = [
  { month: 'Jan', Staff: 180, Faculty: 120 },
  { month: 'Feb', Staff: 182, Faculty: 120 },
  { month: 'Mar', Staff: 185, Faculty: 122 },
  { month: 'Apr', Staff: 184, Faculty: 125 },
  { month: 'May', Staff: 188, Faculty: 128 },
  { month: 'Jun', Staff: 192, Faculty: 130 },
];

export default function HRDashboard() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Users size={36} className="text-rose-600" />
            Human <span className="text-rose-600">Resources</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Staff, Payroll, and Recruitment Dashboard</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-rose-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:bg-rose-700 transition-colors">
             <UserPlus size={16} /> Onboard Employee
           </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Headcount", value: "322", icon: Users, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
          { label: "Open Roles", value: "14", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "On Leave Today", value: "8", icon: CalendarClock, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
          { label: "Payroll Status", value: "Processed", icon: Wallet, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Headcount Chart Area */}
        <div className="xl:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <TrendingUp size={16} className="text-rose-600" /> Headcount Growth
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1">6-month trend for Faculty and Staff</p>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={headcountData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFaculty" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e11d48" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#e11d48" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorStaff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="Faculty" stroke="#e11d48" strokeWidth={3} fillOpacity={1} fill="url(#colorFaculty)" />
                <Area type="monotone" dataKey="Staff" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorStaff)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Items Sidebar */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 blur-[50px] rounded-full pointer-events-none" />
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
               <Activity size={16} /> HR Action Items
             </h3>
             
             <div className="space-y-4">
               <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                 <div className="flex justify-between items-start mb-2">
                   <span className="text-xs font-black text-rose-400">12 Pending Leaves</span>
                   <AlertCircle size={14} className="text-amber-500" />
                 </div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Requires immediate review</p>
               </div>
               
               <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                 <div className="flex justify-between items-start mb-2">
                   <span className="text-xs font-black text-blue-400">3 Offers Extended</span>
                   <CheckCircle2 size={14} className="text-emerald-500" />
                 </div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Awaiting candidate signatures</p>
               </div>
             </div>
           </div>

           <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xl space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Recent Onboardings</h3>
              {[
                { name: "Dr. Arvind Mehta", role: "Professor", dept: "Physics" },
                { name: "Suresh Pillai", role: "Lab Assistant", dept: "Chemistry" },
                { name: "Meera Reddy", role: "Admissions Counselor", dept: "Admin" },
              ].map((staff, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div>
                    <p className="text-xs font-black text-slate-800">{staff.name}</p>
                    <p className="text-[9px] font-bold text-slate-500 mt-0.5">{staff.role} • {staff.dept}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}