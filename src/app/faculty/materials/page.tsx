"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, UploadCloud, FileText, 
  Trash2, Plus, Loader2
} from "lucide-react";

export default function FacultyMaterials() {
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
              Course <span className="text-orange-600">Materials.</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Node: Content_Delivery // Active</p>
          </div>

          <button className="flex items-center gap-2 px-6 py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
            <UploadCloud size={16} /> Upload New Material
          </button>
        </div>

        <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-sm">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-slate-900 flex items-center gap-3">
            <FileText className="text-orange-600" /> Uploaded Resources
          </h2>
          
          <div className="space-y-4">
            {[
              { name: "Lecture 1: Intro to Qubits.pdf", course: "Quantum Computing", date: "Feb 10, 2026", size: "2.4 MB" },
              { name: "Backprop_Algorithm_Notes.docx", course: "Neural Networks", date: "Feb 14, 2026", size: "1.1 MB" },
            ].map((file, i) => (
              <div key={i} className="flex justify-between items-center p-6 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-orange-500 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{file.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                      {file.course} • {file.size}
                    </p>
                  </div>
                </div>
                <button className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
