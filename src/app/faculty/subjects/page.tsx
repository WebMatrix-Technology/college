"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, BookOpen, Clock, Users,
  CheckCircle2, Loader2, BookMarked
} from "lucide-react";

const ASSIGNED_SUBJECTS = [
  { code: "CS-401", name: "Quantum Computing", type: "Core", semester: "Sem 8", credits: 4, students: 120 },
  { code: "AI-302", name: "Neural Networks", type: "Core", semester: "Sem 6", credits: 4, students: 85 },
  { code: "DS-105", name: "Data Structures", type: "Elective", semester: "Sem 2", credits: 3, students: 150 },
];

export default function FacultySubjects() {
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
              Assigned <span className="text-orange-600">Subjects.</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Node: Course_Allocation // Session 2026</p>
          </div>

          <div className="bg-slate-950 p-6 rounded-3xl shadow-xl flex items-center gap-4 text-white">
            <div className="p-3 bg-orange-600 rounded-2xl">
              <BookMarked size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Credits</p>
              <h3 className="text-xl font-black italic mt-1">11 Credits</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSIGNED_SUBJECTS.map((sub, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-lg">
                  {sub.code}
                </span>
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {sub.semester}
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 leading-none mb-4">
                {sub.name}
              </h3>
              
              <div className="space-y-3 mt-6 pt-6 border-t border-slate-50">
                <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                  <span className="flex items-center gap-2"><BookOpen size={14} className="text-orange-500"/> Type</span>
                  <span>{sub.type}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                  <span className="flex items-center gap-2"><Users size={14} className="text-orange-500"/> Enrolled</span>
                  <span>{sub.students}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
