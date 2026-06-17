"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Plus, ClipboardList, CheckCircle2, Loader2, Edit3 
} from "lucide-react";

export default function FacultyAssignments() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-orange-600" size={40} />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FDFDFD] p-6 pt-24 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-4 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Faculty Dashboard
            </Link>
            <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Manage <span className="text-orange-600">Assignments.</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Node: Evaluation_Matrix // Active</p>
          </div>

          <button className="flex items-center gap-2 px-6 py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
            <Plus size={16} /> Create Assignment
          </button>
        </div>

        <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-sm">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-slate-900 flex items-center gap-3">
            <ClipboardList className="text-orange-600" /> Active Tasks & Submissions
          </h2>
          
          <div className="grid gap-6">
            {[
              { title: "Qubit Entanglement Research", course: "Quantum Computing", submitted: 110, total: 120, deadline: "May 05, 2026" },
              { title: "Backpropagation Algorithm", course: "Neural Networks", submitted: 85, total: 85, deadline: "May 12, 2026" },
            ].map((task, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-orange-500 transition-all gap-6">
                <div>
                  <h4 className="font-black text-slate-900 text-lg">{task.title}</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      {task.course}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-slate-400">
                      Due: {task.deadline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="text-center">
                    <p className="text-2xl font-black italic text-slate-900">{task.submitted}<span className="text-sm text-slate-400">/{task.total}</span></p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Submitted</p>
                  </div>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100 hover:border-emerald-500">
                    <Edit3 size={14} /> Evaluate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
