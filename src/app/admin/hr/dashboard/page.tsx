"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, Wallet, Briefcase, BookOpen, 
  Settings, ShieldCheck, Zap, ArrowRight,
  Activity, BarChart3
} from "lucide-react";

const NODES = [
  { title: "HR Management", icon: Users, path: "/admin/hr", color: "bg-blue-600" },
  { title: "Payroll Ledger", icon: Wallet, path: "/admin/hr/payroll", color: "bg-emerald-600" },
  { title: "Recruitment Hub", icon: Briefcase, path: "/admin/hr/recruitment", color: "bg-orange-600" },
  { title: "Library Archives", icon: BookOpen, path: "/students-corner/library", color: "bg-purple-600" },
  { title: "System Config", icon: Settings, path: "/admin/settings", color: "bg-slate-900" },
];

export default function VanguardDashboard() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-12 font-sans">
      
      {/* --- HEADER --- */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-2 bg-orange-600 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.4)]" />
          <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-950">Vanguard <span className="text-orange-600">Core.</span></h1>
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Welcome back, Administrator. System Status: <span className="text-emerald-600">Synchronized</span></p>
      </header>

      {/* --- QUICK STATS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
         {[
           { label: "Active Nodes", val: "24", icon: Activity },
           { label: "System Uptime", val: "99.9%", icon: Zap },
           { label: "Pending Alerts", val: "03", icon: ShieldCheck },
           { label: "Total Traffic", val: "1.2k", icon: BarChart3 }
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
             <div className="flex items-center gap-4 mb-4 text-slate-400">
               <stat.icon size={20} />
               <p className="text-[9px] font-black uppercase tracking-widest">{stat.label}</p>
             </div>
             <p className="text-4xl font-black italic">{stat.val}</p>
           </div>
         ))}
      </div>

      {/* --- NAVIGATION GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NODES.map((node, i) => (
          <Link href={node.path} key={i}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl hover:border-orange-600 transition-all group cursor-pointer"
            >
               <div className={`w-16 h-16 ${node.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                 <node.icon size={28} />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-tighter italic text-slate-900 group-hover:text-orange-600 transition-colors">
                 {node.title}
               </h3>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2 mb-8">Access Node Interface</p>
               
               <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 group-hover:underline">Open Portal</span>
                  <ArrowRight size={18} className="text-slate-300 group-hover:text-orange-600 transition-transform group-hover:translate-x-2" />
               </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-24 text-center opacity-30 italic">
        <p className="text-[9px] font-black uppercase tracking-[1em]">Vanguard_Central_Authority // System_2026</p>
      </footer>
    </main>
  );
}