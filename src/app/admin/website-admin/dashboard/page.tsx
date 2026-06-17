"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, Users, Globe, Eye, ArrowUpRight, 
  FileText, LayoutTemplate, ShieldCheck
} from "lucide-react";
import WebsiteAdminSidebar from "@/components/admin/WebsiteAdminSidebar";
import WebsiteAdminBottomNav from "@/components/admin/WebsiteAdminBottomNav";

export default function WebsiteAdminDashboard() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-blue-500/30 selection:text-blue-900">
      
      {/* SIDEBAR */}
      <div className="hidden md:block z-50 h-full">
        <WebsiteAdminSidebar />
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        
        {/* Ambient Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-indigo-400/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/10 to-blue-400/5 blur-[100px] rounded-full pointer-events-none" />

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30">
                <Globe size={32} className="text-white" />
              </div>
              CMS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Overview</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4 flex items-center gap-2">
              System Status: <span className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"/> Live</span> 
              <span className="opacity-50">|</span> Role: Website Admin
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 shadow-xl shadow-slate-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2">
              <Eye size={16} /> View Live Site
            </span>
          </motion.button>
        </motion.div>

        {/* METRICS GRID */}
        <motion.div 
          variants={containerVariants} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10"
        >
          {[
            { label: "Daily Visitors", val: "12,482", icon: Users, gradient: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/20", trend: "+14%" },
            { label: "Active Pages", val: "48", icon: LayoutTemplate, gradient: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-500/20", trend: "0%" },
            { label: "Published News", val: "156", icon: FileText, gradient: "from-emerald-400 to-teal-500", shadow: "shadow-emerald-500/20", trend: "+2 this week" },
            { label: "Server Status", val: "99.9%", icon: Activity, gradient: "from-purple-500 to-pink-600", shadow: "shadow-purple-500/20", trend: "Optimal" }
          ].map((stat, i) => (
            <motion.div 
              variants={itemVariants} key={i} 
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative overflow-hidden group cursor-default transition-shadow duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-8 shadow-lg ${stat.shadow} group-hover:-translate-y-1 transition-transform duration-300`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{stat.label}</p>
              <h3 className="text-4xl font-black italic text-slate-900 tracking-tighter mb-2">{stat.val}</h3>
              <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                 <ArrowUpRight size={12} className="text-emerald-500" /> {stat.trend}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* RECENT EDITS */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/50">
                <h2 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Recent Activity
                </h2>
              </div>
              
              <div className="p-4 space-y-2">
                {[
                  { page: "Home Page", action: "Updated Hero Image", time: "10 mins ago", status: "Published" },
                  { page: "B.Tech Programs", action: "Modified Syllabus Text", time: "2 hours ago", status: "Published" },
                  { page: "Campus Life", action: "Added new gallery section", time: "Yesterday", status: "Draft" },
                  { page: "Admissions 2026", action: "Updated deadline dates", time: "Yesterday", status: "Published" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:border-blue-200"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-base leading-tight mb-1">{item.page}</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.action} • {item.time}</p>
                      </div>
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      item.status === 'Published' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ACTION SIDEBAR */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 space-y-6"
          >
             <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
               <motion.div 
                 animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-[40px] rounded-full pointer-events-none" 
               />
               
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-3">
                 <div className="p-2 bg-white/10 rounded-lg"><ShieldCheck size={14} className="text-white" /></div>
                 System Health
               </h3>
               
               <div className="space-y-4 relative z-10">
                 <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-black text-white">Cache Status</span>
                     <span className="text-[10px] font-bold text-emerald-400">HIT 98%</span>
                   </div>
                   <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                     <div className="w-[98%] h-full bg-emerald-500" />
                   </div>
                 </div>
                 
                 <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-black text-white">CDN Edge Load</span>
                     <span className="text-[10px] font-bold text-blue-400">24%</span>
                   </div>
                   <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                     <div className="w-[24%] h-full bg-blue-500" />
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>

        </div>
      </main>

      <WebsiteAdminBottomNav />
    </div>
  );
}
