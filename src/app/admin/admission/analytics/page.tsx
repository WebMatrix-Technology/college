"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, TrendingUp, Users, Target, Activity, PieChartIcon, 
  ArrowUpRight, Globe
} from "lucide-react";
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import AdmissionSidebar from "@/components/admin/AdmissionSidebar";
import AdmissionBottomNav from "@/components/admin/AdmissionBottomNav";

const applicationData = [
  { month: 'Jan', Applications: 120, Admissions: 40 },
  { month: 'Feb', Applications: 250, Admissions: 80 },
  { month: 'Mar', Applications: 380, Admissions: 150 },
  { month: 'Apr', Applications: 500, Admissions: 200 },
  { month: 'May', Applications: 850, Admissions: 350 },
  { month: 'Jun', Applications: 1200, Admissions: 480 },
];

const sourceData = [
  { source: 'Organic Search', value: 450 },
  { source: 'Social Media', value: 320 },
  { source: 'Referrals', value: 150 },
  { source: 'Education Fairs', value: 280 },
];

export default function GlobalAnalytics() {
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    const savedRole = localStorage.getItem("adminRole") || "ADMISSION_HEAD";
    setRole(savedRole);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-x-hidden selection:bg-orange-500/30">
      <div className="hidden md:block z-50">
        {role && <AdmissionSidebar role={role} />}
      </div>
      <main className="flex-1 p-6 lg:p-12 relative overflow-hidden">
        
        {/* Ambient Gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 to-indigo-400/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-orange-400/10 to-rose-400/5 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl shadow-lg shadow-orange-500/30">
                <BarChart3 size={32} className="text-white" />
              </div>
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">Analytics</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4 flex items-center gap-2">
              <Globe size={12} className="text-orange-500" /> Admission Funnel Telemetry
            </p>
          </div>
        </motion.div>

        {/* Conversion Funnel KPIs */}
        <motion.div 
          variants={containerVariants} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 relative z-10"
        >
          {[
            { label: "Total Inquiries", value: "8,450", icon: Users, gradient: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/20" },
            { label: "Applications", value: "3,200", icon: FileTextIcon, gradient: "from-orange-500 to-rose-600", shadow: "shadow-orange-500/20" },
            { label: "Interviews", value: "1,150", icon: Activity, gradient: "from-purple-500 to-pink-600", shadow: "shadow-purple-500/20" },
            { label: "Final Admissions", value: "480", icon: Target, gradient: "from-emerald-400 to-teal-500", shadow: "shadow-emerald-500/20" },
          ].map((stat, idx) => (
            <motion.div 
              variants={itemVariants} key={idx} 
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative overflow-hidden group transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-8 shadow-lg ${stat.shadow} group-hover:-translate-y-1 transition-transform duration-300`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{stat.label}</p>
              <h3 className="text-4xl font-black italic text-slate-900 tracking-tighter">{stat.value}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10">
          
          {/* Growth Area Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="xl:col-span-2 bg-white/80 backdrop-blur-xl rounded-[3rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg"><TrendingUp size={16} className="text-orange-600" /></div>
                  Pipeline Trajectory
                </h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 ml-11">Applications vs Admissions (YTD)</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={applicationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAdm" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px', color: '#64748b' }} />
                  <Area type="monotone" dataKey="Applications" stroke="#f97316" strokeWidth={4} fillOpacity={1} fill="url(#colorApps)" activeDot={{ r: 8, strokeWidth: 0, fill: '#f97316' }} />
                  <Area type="monotone" dataKey="Admissions" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorAdm)" activeDot={{ r: 8, strokeWidth: 0, fill: '#3b82f6' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Source Bar Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-[3rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col"
          >
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg"><PieChartIcon size={16} className="text-blue-600" /></div>
              Lead Sources
            </h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8 ml-11">Acquisition Channels</p>
            
            <div className="flex-1 w-full min-h-[250px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sourceData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="source" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} width={100} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="value" fill="url(#barGradient)" radius={[0, 8, 8, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              Generate Report <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

        </div>
      </main>
      <AdmissionBottomNav />
    </div>
  );
}

// Inline Icon
function FileTextIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  );
}
