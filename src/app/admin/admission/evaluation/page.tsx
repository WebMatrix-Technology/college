"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, Search, ChevronRight, MessageSquare, Phone, Mail, Filter
} from "lucide-react";
import AdmissionSidebar from "@/components/admin/AdmissionSidebar";
import AdmissionBottomNav from "@/components/admin/AdmissionBottomNav";

const mockLeads = [
  { id: "VNG-101", name: "Rahul S.", course: "B.Tech CSE", status: "New Lead", date: "Oct 15", score: 85 },
  { id: "VNG-102", name: "Meera K.", course: "MBA Finance", status: "Interviewing", date: "Oct 12", score: 92 },
  { id: "VNG-103", name: "Sahil V.", course: "BCA Cloud", status: "Offered", date: "Oct 10", score: 88 },
  { id: "VNG-104", name: "Priya M.", course: "M.Tech Data", status: "New Lead", date: "Oct 16", score: 75 },
  { id: "VNG-105", name: "Amit B.", course: "B.Tech Mech", status: "Interviewing", date: "Oct 13", score: 65 },
];

export default function LeadEvaluation() {
  const [search, setSearch] = useState("");
  const [role, setRole] = React.useState<string>("");

  React.useEffect(() => {
    const savedRole = localStorage.getItem("adminRole") || "ADMISSION_HEAD";
    setRole(savedRole);
  }, []);

  const columns = ["New Lead", "Interviewing", "Offered"];

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-orange-500/30">
      <div className="hidden md:block z-50 h-full">
        {role && <AdmissionSidebar role={role} />}
      </div>
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        
        {/* Ambient Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 to-rose-400/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl shadow-lg shadow-orange-500/30">
                <UserCheck size={32} className="text-white" />
              </div>
              Lead <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">Evaluation</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">Applicant Pipeline Management</p>
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="relative w-full md:w-80 group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300" />
              <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors z-10" />
              <input 
                type="text" 
                placeholder="SEARCH PIPELINE..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-md border border-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-900 outline-none focus:border-orange-500 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-md border border-white text-slate-600 w-14 h-14 rounded-2xl font-black flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all"
            >
              <Filter size={18} />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {columns.map((status, colIdx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: colIdx * 0.1 }}
              key={status} 
              className="bg-white/60 backdrop-blur-2xl rounded-[3rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-[calc(100vh-250px)] overflow-hidden"
            >
              <div className="p-8 border-b border-white/50 flex justify-between items-center bg-white/40">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full shadow-lg ${
                    status === 'Offered' ? 'bg-emerald-500 shadow-emerald-500/50' : 
                    status === 'Interviewing' ? 'bg-blue-500 shadow-blue-500/50' : 'bg-orange-500 shadow-orange-500/50'
                  }`} />
                  {status}
                </h3>
                <span className="w-8 h-8 rounded-xl bg-white text-xs font-black text-slate-700 flex items-center justify-center shadow-sm">
                  {mockLeads.filter(l => l.status === status).length}
                </span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
                <AnimatePresence>
                  {mockLeads.filter(l => l.status === status && l.name.toLowerCase().includes(search.toLowerCase())).map((lead, idx) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                      key={lead.id} 
                      className="bg-white border border-white rounded-[2rem] p-6 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group hover:border-orange-200 transition-all cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          {lead.id}
                        </span>
                        <div className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 ${
                          lead.score >= 80 
                            ? 'bg-emerald-50 border-emerald-100 text-emerald-600' 
                            : 'bg-amber-50 border-amber-100 text-amber-600'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${lead.score >= 80 ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                          <span className="text-[10px] font-black italic tracking-widest">
                            {lead.score} PTS
                          </span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-black text-slate-900 leading-tight mb-1">{lead.name}</h4>
                      <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">{lead.course}</p>
                      
                      <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-100">
                        <div className="flex gap-2">
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-orange-50 hover:text-orange-600 transition-colors">
                            <Phone size={14} />
                          </motion.button>
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <Mail size={14} />
                          </motion.button>
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                            <MessageSquare size={14} />
                          </motion.button>
                        </div>
                        
                        <button className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 shadow-lg shadow-slate-900/20 group-hover:shadow-orange-500/30 transition-all duration-300">
                          <ChevronRight size={18} className="translate-x-0 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <AdmissionBottomNav />

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </div>
  );
}
