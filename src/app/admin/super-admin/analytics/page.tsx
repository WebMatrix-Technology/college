"use client";
import React from "react";
import { motion } from "framer-motion";
import { LineChart, BarChart2, Activity, Server, Users, ArrowUpRight } from "lucide-react";

export default function AnalyticsModule() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <LineChart size={36} className="text-orange-600" />
          Platform <span className="text-orange-600">Analytics</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">System Telemetry & Usage Metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* API Traffic Mock Graph */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <Activity size={20} className="text-orange-600" /> API Requests
              </h3>
              <p className="text-xs font-bold text-slate-400">Requests over the last 7 days</p>
            </div>
            <span className="flex items-center gap-1 text-emerald-500 text-xs font-black bg-emerald-50 px-2 py-1 rounded-md">
              <ArrowUpRight size={14} /> +24%
            </span>
          </div>
          
          <div className="h-64 w-full flex items-end justify-between gap-2 border-b border-l border-slate-100 pb-2 pl-2">
             {/* Mock Bars */}
             {[40, 60, 45, 80, 50, 90, 75].map((height, i) => (
               <motion.div 
                 key={i}
                 initial={{ height: 0 }}
                 animate={{ height: `${height}%` }}
                 transition={{ duration: 1, delay: i * 0.1 }}
                 className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-md relative group"
               >
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                   {height}k
                 </div>
               </motion.div>
             ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
             <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Server Load Ring Mock */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl flex flex-col items-center justify-center text-center">
           <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 mb-8">
             <Server size={20} className="text-blue-600" /> Server Load
           </h3>
           <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Outer Ring */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stroke-slate-100" strokeWidth="8" fill="none" />
                <motion.circle 
                  cx="50" cy="50" r="40" 
                  className="stroke-blue-600 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 * (1 - 0.65) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-4xl font-black italic text-slate-900">65%</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Average Load</p>
              </div>
           </div>
           <p className="text-xs font-bold text-slate-500 mt-8">Cluster 01 is running optimally. 3 nodes available.</p>
        </div>
      </div>

      {/* Minor Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Concurrent Users", val: "8,432", icon: Users },
          { label: "Database Latency", val: "12ms", icon: () => <div className="font-bold">DB</div> },
          { label: "Storage Used", val: "14.2 TB", icon: BarChart2 }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
             <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300">
                {/* @ts-ignore */}
                {typeof stat.icon === 'function' ? <stat.icon /> : React.createElement(stat.icon, { size: 24 })}
             </div>
             <div>
               <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
               <p className="text-2xl font-black italic text-white">{stat.val}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
