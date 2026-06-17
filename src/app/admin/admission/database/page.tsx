"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, Search, Filter, Download, UserCheck, ShieldAlert, BadgeCheck, MoreVertical
} from "lucide-react";
import AdmissionSidebar from "@/components/admin/AdmissionSidebar";
import AdmissionBottomNav from "@/components/admin/AdmissionBottomNav";

const mockDatabase = [
  { id: "VNG-101", name: "Rahul Sharma", course: "B.Tech CSE", status: "Verified", date: "Oct 15", score: 85, phone: "+91 9876543210" },
  { id: "VNG-102", name: "Meera Kumar", course: "MBA Finance", status: "Interviewing", date: "Oct 12", score: 92, phone: "+91 9876543211" },
  { id: "VNG-103", name: "Sahil Verma", course: "BCA Cloud", status: "Offered", date: "Oct 10", score: 88, phone: "+91 9876543212" },
  { id: "VNG-104", name: "Priya Nair", course: "M.Tech Data", status: "Rejected", date: "Oct 16", score: 45, phone: "+91 9876543213" },
  { id: "VNG-105", name: "Amit Bose", course: "B.Tech Mech", status: "Pending Fee", date: "Oct 13", score: 75, phone: "+91 9876543214" },
];

export default function NodeDatabase() {
  const [search, setSearch] = useState("");
  const [role, setRole] = React.useState<string>("");

  React.useEffect(() => {
    const savedRole = localStorage.getItem("adminRole") || "ADMISSION_HEAD";
    setRole(savedRole);
  }, []);

  const filteredDB = mockDatabase.filter(r => 
    r.name.toLowerCase().includes(search.toLowerCase()) || 
    r.id.toLowerCase().includes(search.toLowerCase()) ||
    r.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-x-hidden selection:bg-orange-500/30">
      <div className="hidden md:block z-50">
        {role && <AdmissionSidebar role={role} />}
      </div>
      <main className="flex-1 p-6 lg:p-12 relative overflow-hidden">
        
        {/* Ambient Gradients */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 to-indigo-400/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-orange-400/10 to-rose-400/5 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl shadow-lg shadow-orange-500/30">
                <Database size={32} className="text-white" />
              </div>
              Node <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">Database</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">Master Applicant Records</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-2xl rounded-[3rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative z-10"
        >
          {/* Toolbar */}
          <div className="p-6 border-b border-slate-100/50 bg-white/40 flex flex-col xl:flex-row items-center gap-4 relative z-20">
            <div className="relative w-full xl:w-96 shrink-0 group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300" />
              <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors z-10" />
              <input 
                type="text" 
                placeholder="SEARCH REGISTRY..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-md border border-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-900 outline-none focus:border-orange-500 transition-colors shadow-sm relative z-10"
              />
            </div>
            <div className="flex w-full xl:w-auto gap-3">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 xl:flex-none bg-white border border-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <Filter size={16} /> Filters
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 xl:flex-none bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2">
                <Download size={16} /> Export CSV
              </motion.button>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 backdrop-blur-xl border-b border-slate-100">
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">Identifier</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">Program</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">Status Code</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">Contact</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/50">
                <AnimatePresence>
                  {filteredDB.map((record, idx) => (
                    <motion.tr 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: idx * 0.05 }}
                      key={record.id} 
                      className="hover:bg-slate-50/50 transition-colors group bg-white/40"
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
                            <UserCheck size={18} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-900 leading-tight">{record.name}</p>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mt-1">{record.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <p className="text-xs font-bold text-slate-700">{record.course}</p>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Score:</span>
                          <span className={`text-[10px] font-black italic px-2 py-0.5 rounded-md ${
                            record.score >= 80 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                          }`}>{record.score}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className={`px-3 py-1.5 rounded-lg border inline-flex items-center gap-2 ${
                          record.status === 'Offered' || record.status === 'Verified' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
                          record.status === 'Rejected' ? 'bg-red-50 border-red-100 text-red-600' : 
                          record.status === 'Interviewing' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                          'bg-orange-50 border-orange-100 text-orange-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            record.status === 'Offered' || record.status === 'Verified' ? 'bg-emerald-500' :
                            record.status === 'Rejected' ? 'bg-red-500' : 
                            record.status === 'Interviewing' ? 'bg-blue-500' :
                            'bg-orange-500 animate-pulse'
                          }`} />
                          <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                            {record.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <p className="text-xs font-bold text-slate-600">{record.phone}</p>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Logged: {record.date}</p>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:border-orange-500 hover:text-orange-600 transition-all shadow-sm">
                          Access
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
      <AdmissionBottomNav />
    </div>
  );
}
