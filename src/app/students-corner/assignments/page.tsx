"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, ClipboardList, Clock, CheckCircle2, 
  AlertCircle, Upload, FileText, Loader2
} from "lucide-react";

// Mock Data
const INITIAL_DATA = [
  { id: 1, subject: "Quantum Computing", title: "Qubit Entanglement Research", deadline: "May 05, 2026", status: "pending", priority: "high" },
  { id: 2, subject: "Neural Networks", title: "Backpropagation Algorithm Implementation", deadline: "May 12, 2026", status: "pending", priority: "medium" },
  { id: 3, subject: "Web Architecture", title: "Microservices Design Patterns", deadline: "April 28, 2026", status: "completed", priority: "low" },
  { id: 4, subject: "Ethical Hacking", title: "Penetration Testing Report", deadline: "May 10, 2026", status: "pending", priority: "high" },
];

export default function StudentAssignments() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [assignments, setAssignments] = useState(INITIAL_DATA);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // --- BUTTON LOGIC: Upload Action ---
  const handleUpload = (id: number) => {
    // Simulating file upload and status update
    setAssignments(prev => prev.map(task => 
      task.id === id ? { ...task, status: "completed" } : task
    ));
    alert("VANGUARD_PROTOCOL: File encrypted and submitted successfully.");
  };

  const filteredData = assignments.filter(item => 
    filter === "all" ? true : item.status === filter
  );

  const completedCount = assignments.filter(a => a.status === "completed").length;
  const progressPerc = (completedCount / assignments.length) * 100;

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-orange-600" size={40} />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FDFDFD] p-6 pt-24 selection:bg-orange-600 selection:text-white font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <Link href="/students-corner" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-4 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Command Center
            </Link>
            <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Project <span className="text-orange-600">Vault.</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Node: Assignments_Queue // Session 2026</p>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm w-full md:w-72">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[9px] font-black uppercase text-slate-400">Total Completion</span>
              <span className="text-xl font-black italic text-orange-600">{progressPerc.toFixed(0)}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPerc}%` }}
                className="h-full bg-orange-600 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* --- WORKING FILTERS --- */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {["all", "pending", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                filter === f 
                ? "bg-slate-950 text-white border-slate-950 shadow-lg scale-105" 
                : "bg-white text-slate-400 border-slate-50 hover:border-orange-500 hover:text-slate-900"
              }`}
            >
              {f} Tasks
            </button>
          ))}
        </div>

        {/* --- ASSIGNMENT LIST --- */}
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex gap-6 items-center">
                    <div className={`p-4 rounded-2xl ${task.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                      {task.status === 'completed' ? <CheckCircle2 size={24} /> : <ClipboardList size={24} />}
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase text-orange-600 tracking-widest">{task.subject}</span>
                      <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mt-1">{task.title}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                          <Clock size={12} /> Deadline: {task.deadline}
                        </span>
                        {task.priority === "high" && task.status === "pending" && (
                          <span className="text-[9px] font-black text-red-500 uppercase flex items-center gap-1 animate-pulse">
                            <AlertCircle size={10} /> Urgent
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 w-full md:w-auto">
                    {task.status === "pending" ? (
                      <button 
                        onClick={() => handleUpload(task.id)}
                        className="flex-1 md:flex-none px-8 py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95"
                      >
                        <Upload size={14} /> Upload Work
                      </button>
                    ) : (
                      <button className="flex-1 md:flex-none px-8 py-4 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl text-[10px] font-black uppercase tracking-widest cursor-default flex items-center justify-center gap-2">
                        <FileText size={14} /> Submitted
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredData.length === 0 && (
            <div className="py-20 text-center">
               <p className="text-slate-300 font-black uppercase tracking-[0.5em] text-xs italic">No active assignment nodes in this category.</p>
            </div>
          )}
        </div>

        {/* --- FOOTER --- */}
        <footer className="mt-20 py-10 border-t border-slate-100 text-center opacity-30">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">Vanguard Submission Protocol // 2026</p>
        </footer>
      </div>
    </main>
  );
}