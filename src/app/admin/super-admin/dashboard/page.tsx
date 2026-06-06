"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building2, CreditCard, Users, LineChart, 
  Settings, ShieldAlert, Database, LifeBuoy,
  ArrowRight, Activity, Server, Globe
} from "lucide-react";

const NODES = [
  { title: "Colleges Directory", icon: Building2, path: "/admin/super-admin/colleges", color: "bg-blue-600" },
  { title: "Subscription Plans", icon: CreditCard, path: "/admin/super-admin/subscriptions", color: "bg-emerald-600" },
  { title: "Global Users", icon: Users, path: "/admin/super-admin/users", color: "bg-purple-600" },
  { title: "Platform Analytics", icon: LineChart, path: "/admin/super-admin/analytics", color: "bg-orange-600" },
  { title: "System Settings", icon: Settings, path: "/admin/super-admin/settings", color: "bg-slate-900" },
  { title: "Audit Logs", icon: ShieldAlert, path: "/admin/super-admin/audit-logs", color: "bg-red-600" },
  { title: "Data Backups", icon: Database, path: "/admin/super-admin/backups", color: "bg-teal-600" },
  { title: "Support Center", icon: LifeBuoy, path: "/admin/super-admin/support", color: "bg-indigo-600" },
];

export default function SuperAdminDashboard() {
  return (
    <main className="min-h-screen p-6 lg:p-12 font-sans">
      
      {/* --- HEADER --- */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-2 bg-orange-600 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.4)]" />
          <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-950">Vanguard <span className="text-orange-600">Core.</span></h1>
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Welcome back, SaaS Owner. Platform Status: <span className="text-emerald-600">Operational</span></p>
      </header>

      {/* --- QUICK STATS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
         {[
           { label: "Active Tenants", val: "142", icon: Globe },
           { label: "Total MRR", val: "$124k", icon: Activity },
           { label: "Server Load", val: "34%", icon: Server },
           { label: "Total Users", val: "45.2k", icon: Users }
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
             <div className="flex items-center gap-4 mb-4 text-slate-400">
               <stat.icon size={20} className="group-hover:text-orange-500 transition-colors" />
               <p className="text-[9px] font-black uppercase tracking-widest">{stat.label}</p>
             </div>
             <p className="text-4xl font-black italic text-slate-900">{stat.val}</p>
           </div>
         ))}
      </div>

      {/* --- NAVIGATION GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {NODES.map((node, i) => (
          <Link href={node.path} key={i}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-orange-600 transition-all group cursor-pointer h-full flex flex-col"
            >
               <div className={`w-14 h-14 ${node.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                 <node.icon size={24} />
               </div>
               <h3 className="text-xl font-black uppercase tracking-tighter italic text-slate-900 group-hover:text-orange-600 transition-colors">
                 {node.title}
               </h3>
               <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2 mb-6 flex-1">Access Module</p>
               
               <div className="flex items-center justify-between mt-auto">
                  <span className="text-[9px] font-black uppercase tracking-widest text-orange-600 group-hover:underline">Open Portal</span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-orange-600 transition-transform group-hover:translate-x-2" />
               </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-24 text-center opacity-30 italic">
        <p className="text-[9px] font-black uppercase tracking-[1em]">Vanguard_Super_Admin_Authority // System_2026</p>
      </footer>
    </main>
  );
}
