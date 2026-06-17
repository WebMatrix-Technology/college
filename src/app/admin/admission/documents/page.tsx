"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, Search, Check, X, FileSearch, AlertCircle, CheckCircle2, ShieldAlert
} from "lucide-react";
import AdmissionSidebar from "@/components/admin/AdmissionSidebar";
import AdmissionBottomNav from "@/components/admin/AdmissionBottomNav";

const mockDocuments = [
  { id: "DOC-2026-901", applicant: "Rahul S.", type: "High School Transcript", status: "Pending Verification", date: "Oct 15", urgency: "High" },
  { id: "DOC-2026-902", applicant: "Meera K.", type: "Graduation Degree", status: "Pending Verification", date: "Oct 16", urgency: "Medium" },
  { id: "DOC-2026-903", applicant: "Sahil V.", type: "Transfer Certificate", status: "Rejected", date: "Oct 14", urgency: "High", reason: "Illegible Scan" },
  { id: "DOC-2026-904", applicant: "Priya M.", type: "Identity Proof (Aadhar)", status: "Verified", date: "Oct 12", urgency: "Low" },
];

export default function DocumentSync() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Pending Verification");
  const [role, setRole] = React.useState<string>("");

  React.useEffect(() => {
    const savedRole = localStorage.getItem("adminRole") || "ADMISSION_HEAD";
    setRole(savedRole);
  }, []);

  const filteredDocs = mockDocuments.filter(d => 
    (activeTab === "All" || d.status === activeTab) &&
    (d.applicant.toLowerCase().includes(search.toLowerCase()) || d.id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-orange-500/30">
      <div className="hidden md:block z-50 h-full">
        {role && <AdmissionSidebar role={role} />}
      </div>
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        
        {/* Ambient Gradients */}
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/10 to-orange-400/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl shadow-lg shadow-orange-500/30">
                <FileText size={32} className="text-white" />
              </div>
              Document <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">Sync</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">Verification Queue & Repository</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="flex flex-wrap bg-white/80 backdrop-blur-xl p-2 rounded-2xl mb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white max-w-fit relative z-10"
        >
          {["Pending Verification", "Verified", "Rejected", "All"].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
                activeTab === tab ? "text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {activeTab === tab && (
                <motion.div layoutId="activeTabDoc" className="absolute inset-0 bg-slate-900 rounded-xl shadow-lg shadow-slate-900/20 -z-10" />
              )}
              {tab}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <AnimatePresence>
            {filteredDocs.map((doc, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={doc.id} 
                className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 ${
                  doc.status === 'Verified' ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 
                  doc.status === 'Rejected' ? 'bg-gradient-to-r from-red-500 to-rose-600' : 'bg-gradient-to-r from-orange-400 to-amber-500'
                }`} />

                <div className="flex justify-between items-start mb-6 mt-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                    {doc.id}
                  </span>
                  {doc.urgency === 'High' && doc.status === 'Pending Verification' && (
                    <motion.span 
                      animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                      className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600 flex items-center gap-1.5 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 shadow-sm shadow-red-500/10"
                    >
                      <AlertCircle size={12} className="text-red-500" /> Urgent
                    </motion.span>
                  )}
                </div>
                
                <h4 className="text-2xl font-black text-slate-900 leading-tight mb-2 tracking-tighter">{doc.type}</h4>
                <p className="text-xs font-bold text-slate-500 tracking-widest uppercase flex items-center gap-2 mb-8">
                   Applicant: <span className="text-orange-600">{doc.applicant}</span>
                </p>
                
                <div className="bg-slate-50/80 rounded-2xl p-5 mb-8 space-y-4 flex-1 border border-slate-100/50 shadow-inner">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Uploaded</span>
                    <span className="text-xs font-black text-slate-700">{doc.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Status</span>
                    <div className={`px-2 py-1 rounded-md flex items-center gap-1.5 ${
                      doc.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 
                      doc.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        doc.status === 'Verified' ? 'bg-emerald-500' : 
                        doc.status === 'Rejected' ? 'bg-red-500' : 'bg-orange-500 animate-pulse'
                      }`} />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                        {doc.status}
                      </span>
                    </div>
                  </div>
                  {doc.reason && (
                    <div className="pt-4 border-t border-slate-200 mt-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-500">Rejection Reason</span>
                      <p className="text-xs font-bold text-slate-700 mt-1.5">{doc.reason}</p>
                    </div>
                  )}
                </div>

                {doc.status === 'Pending Verification' ? (
                  <div className="flex gap-3 relative overflow-hidden rounded-2xl">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-14 bg-white border border-slate-200 text-slate-600 rounded-2xl flex items-center justify-center hover:bg-slate-50 hover:text-orange-600 transition-colors shadow-sm z-10" title="View Document">
                      <FileSearch size={18} />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 relative overflow-hidden group/btn bg-emerald-50 border border-emerald-100 text-emerald-600 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest z-10 shadow-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out -z-10" />
                      <span className="flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                        <Check size={16} /> Verify
                      </span>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 relative overflow-hidden group/btn bg-red-50 border border-red-100 text-red-600 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest z-10 shadow-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out -z-10" />
                      <span className="flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                        <X size={16} /> Reject
                      </span>
                    </motion.button>
                  </div>
                ) : (
                  <div className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 border shadow-sm ${
                    doc.status === 'Verified' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-red-50 border-red-100 text-red-600'
                  }`}>
                     {doc.status === 'Verified' ? <CheckCircle2 size={16} /> : <ShieldAlert size={16} />}
                     {doc.status} Record
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
      <AdmissionBottomNav />
    </div>
  );
}
