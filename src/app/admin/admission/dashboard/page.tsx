"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, GraduationCap, ShieldCheck, Clock, BarChart3, 
  Search, ArrowUpRight, Bell, Activity, UserCheck, 
  Briefcase, ClipboardList, Plus, ChevronRight
} from "lucide-react";
import AdmissionSidebar from "@/components/admin/AdmissionSidebar";
import AdmissionBottomNav from "@/components/admin/AdmissionBottomNav";

const enquiries = [
  { id: "VNG-101", name: "Rahul S.", course: "B.Tech CSE", status: "Doc Verification", time: "10m ago", priority: "High" },
  { id: "VNG-102", name: "Meera K.", course: "MBA Finance", status: "Interview", time: "1h ago", priority: "Medium" },
  { id: "VNG-103", name: "Sahil V.", course: "BCA Cloud", status: "Pending Fee", time: "3h ago", priority: "Low" },
  { id: "VNG-104", name: "Priya M.", course: "M.Tech Data", status: "Verified", time: "5h ago", priority: "High" },
];

export default function AdmissionDashboard() {
  const [role, setRole] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("adminRole") || "ADMISSION_HEAD";
    setRole(savedRole);
  }, []);

  const filteredEnquiries = enquiries.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-900">
      
      {/* 1. SIDEBAR */}
      <div className="hidden md:block z-50">
        {role && <AdmissionSidebar role={role} />}
      </div>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 p-6 lg:p-12 relative overflow-hidden">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 to-rose-400/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/10 to-indigo-400/5 blur-[100px] rounded-full pointer-events-none" />

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl shadow-lg shadow-orange-500/30">
                <ShieldCheck size={32} className="text-white" />
              </div>
              Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">Portal</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4 flex items-center gap-2">
              System Status: <span className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"/> Sync Active</span> 
              <span className="opacity-50">|</span> Role: {role.replace("_", " ")}
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 shadow-xl shadow-slate-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-rose-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2">
              <Plus size={16} /> New Application
            </span>
          </motion.button>
        </motion.div>

        {/* METRICS GRID */}
        <motion.div 
          variants={containerVariants} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10"
        >
          {[
            { label: "Total Pipeline", val: "482", icon: Users, gradient: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/20" },
            { label: "Open Tickets", val: "24", icon: ClipboardList, gradient: "from-orange-500 to-rose-600", shadow: "shadow-orange-500/20" },
            { label: "Verified Unit", val: "156", icon: UserCheck, gradient: "from-emerald-400 to-teal-500", shadow: "shadow-emerald-500/20" },
            { label: "Sync Status", val: "94.2%", icon: Activity, gradient: "from-purple-500 to-pink-600", shadow: "shadow-purple-500/20" }
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
              <h3 className="text-4xl font-black italic text-slate-900 tracking-tighter">{stat.val}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* RECENT INQUIRIES LIST */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/50">
                <h2 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Recent Inquiries
                </h2>
                <div className="relative w-full md:w-80 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300" />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={16} />
                  <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by ID or Name..." 
                    className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 outline-none focus:border-orange-500 relative z-10 transition-colors" 
                  />
                </div>
              </div>
              
              <div className="p-4 space-y-2 min-h-[300px]">
                <AnimatePresence>
                  {filteredEnquiries.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onHoverStart={() => setHoveredRow(item.id)}
                      onHoverEnd={() => setHoveredRow(null)}
                      className="relative bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-orange-200 z-10"
                    >
                      {hoveredRow === item.id && (
                        <motion.div layoutId="rowHighlight" className="absolute inset-0 bg-orange-50/50 rounded-2xl -z-10" />
                      )}
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 font-black text-xl italic group-hover:text-orange-600 transition-colors">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-base leading-tight mb-1 flex items-center gap-2">
                            {item.name} 
                            <span className="text-[9px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md tracking-widest">{item.id}</span>
                          </h4>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <GraduationCap size={12} className="text-orange-500" /> {item.course} 
                            <span className="opacity-30">•</span> 
                            <span className={item.status === 'Verified' ? 'text-emerald-500' : 'text-blue-500'}>
                              {item.status}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-300">
                        <ChevronRight size={16} />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ACTION SIDEBAR */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 space-y-6"
          >
             <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
               {/* Animated background element */}
               <motion.div 
                 animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-rose-500/20 blur-[40px] rounded-full pointer-events-none" 
               />
               
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-3">
                 <div className="p-2 bg-white/10 rounded-lg"><Activity size={14} className="text-white" /></div>
                 Admission Actions
               </h3>
               
               <div className="space-y-4 relative z-10">
                 <motion.div whileHover={{ scale: 1.02 }} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 cursor-pointer hover:bg-white/20 transition-colors">
                   <div className="flex justify-between items-start mb-3">
                     <span className="text-xs font-black text-white">14 Unsynced Records</span>
                     <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                       <Clock size={14} className="text-amber-400" />
                     </div>
                   </div>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Requires document sync</p>
                 </motion.div>
                 
                 <motion.div whileHover={{ scale: 1.02 }} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 cursor-pointer hover:bg-white/20 transition-colors">
                   <div className="flex justify-between items-start mb-3">
                     <span className="text-xs font-black text-white">12 High Priority Leads</span>
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                       <Briefcase size={14} className="text-blue-400" />
                     </div>
                   </div>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Awaiting evaluation</p>
                 </motion.div>
               </div>
             </div>
          </motion.div>

        </div>
      </main>

      <AdmissionBottomNav />
    </div>
  );
}