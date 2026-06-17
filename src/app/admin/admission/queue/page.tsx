"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardList, Search, Check, Clock, AlertCircle, ChevronRight, CheckCircle2, X
} from "lucide-react";
import AdmissionSidebar from "@/components/admin/AdmissionSidebar";
import AdmissionBottomNav from "@/components/admin/AdmissionBottomNav";

const mockQueue = [
  { id: "Q-1001", applicant: "Ananya R.", type: "Interview Scheduling", status: "Pending", time: "10:30 AM", priority: "High" },
  { id: "Q-1002", applicant: "Vikram S.", type: "Document Verification", status: "In Progress", time: "11:15 AM", priority: "Medium" },
  { id: "Q-1003", applicant: "Neha M.", type: "Fee Confirmation", status: "Pending", time: "12:00 PM", priority: "High" },
  { id: "Q-1004", applicant: "Rohan D.", type: "Counseling Session", status: "Completed", time: "09:00 AM", priority: "Low" },
  { id: "Q-1005", applicant: "Aditi K.", type: "Waitlist Update", status: "Pending", time: "01:45 PM", priority: "Medium" },
];

export default function VerifyQueue() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Pending");
  const [role, setRole] = React.useState<string>("");

  React.useEffect(() => {
    const savedRole = localStorage.getItem("adminRole") || "COUNSELOR";
    setRole(savedRole);
  }, []);

  const filteredQueue = mockQueue.filter(q => 
    (activeTab === "All" || q.status === activeTab) &&
    (q.applicant.toLowerCase().includes(search.toLowerCase()) || q.type.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-orange-500/30">
      <div className="hidden md:block z-50 h-full">
        {role && <AdmissionSidebar role={role} />}
      </div>
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        
        {/* Ambient Gradients */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/10 to-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-rose-400/10 to-pink-500/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl shadow-lg shadow-orange-500/30">
                <ClipboardList size={32} className="text-white" />
              </div>
              Verify <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">Queue</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">Operational Action Items</p>
          </div>

          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300" />
            <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors z-10" />
            <input 
              type="text" 
              placeholder="SEARCH QUEUE..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-md border border-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-900 outline-none focus:border-orange-500 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="flex flex-wrap bg-white/80 backdrop-blur-xl p-2 rounded-2xl mb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white max-w-fit relative z-10"
        >
          {["Pending", "In Progress", "Completed", "All"].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
                activeTab === tab ? "text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {activeTab === tab && (
                <motion.div layoutId="activeTabQueue" className="absolute inset-0 bg-slate-900 rounded-xl shadow-lg shadow-slate-900/20 -z-10" />
              )}
              {tab}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 relative z-10">
          <AnimatePresence>
            {filteredQueue.map((item, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={item.id} 
                className="bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Left Edge Color Indicator */}
                <div className={`absolute top-0 left-0 w-1.5 h-full ${
                  item.status === 'Completed' ? 'bg-gradient-to-b from-emerald-400 to-teal-500' : 
                  item.status === 'In Progress' ? 'bg-gradient-to-b from-blue-400 to-indigo-500' : 
                  'bg-gradient-to-b from-orange-400 to-rose-500'
                }`} />

                <div className="flex items-center gap-6 pl-4">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 font-black text-xl italic group-hover:text-orange-600 group-hover:bg-orange-50 transition-colors shadow-inner">
                    {item.applicant.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-xl font-black text-slate-900 leading-tight">{item.type}</h4>
                      {item.priority === 'High' && item.status !== 'Completed' && (
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600 flex items-center gap-1 bg-red-50 px-2 py-1 rounded-md border border-red-100">
                          <AlertCircle size={10} /> Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-bold text-slate-500 tracking-widest uppercase flex items-center gap-2">
                       Applicant: <span className="text-orange-600">{item.applicant}</span>
                       <span className="opacity-30">•</span>
                       <span className="flex items-center gap-1"><Clock size={12}/> {item.time}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto pl-4 md:pl-0">
                   <div className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 border ${
                      item.status === 'Completed' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 
                      item.status === 'In Progress' ? 'bg-blue-50 border-blue-100 text-blue-600' : 
                      'bg-orange-50 border-orange-100 text-orange-600'
                    }`}>
                      {item.status === 'Completed' && <CheckCircle2 size={12} />}
                      {item.status === 'In Progress' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}
                      {item.status === 'Pending' && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                      {item.status}
                    </div>

                    {item.status !== 'Completed' ? (
                      <div className="flex gap-2 w-full md:w-auto">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 md:flex-none bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-colors flex items-center justify-center gap-2">
                          <Check size={14} /> Resolve
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 bg-white border border-slate-200 text-slate-400 hover:text-orange-600 hover:border-orange-200 rounded-xl flex items-center justify-center transition-all shadow-sm">
                           <ChevronRight size={16} />
                        </motion.button>
                      </div>
                    ) : (
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-auto bg-slate-50 text-slate-500 hover:bg-slate-900 hover:text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-colors flex items-center justify-center shadow-sm border border-slate-200">
                        View Details
                      </motion.button>
                    )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
      <AdmissionBottomNav />
    </div>
  );
}
