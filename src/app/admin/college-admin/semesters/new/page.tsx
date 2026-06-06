"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Save, LayoutTemplate, Clock } from "lucide-react";

export default function DeclareSemesterPage() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <Link href="/admin/college-admin/semesters" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Semesters
        </Link>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <LayoutTemplate size={36} className="text-blue-600" />
          Declare <span className="text-blue-600">Semester</span>
        </h1>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden max-w-4xl">
        <div className="p-8 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <div>
             <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest">Term Configuration</h2>
             <p className="text-[10px] font-bold text-slate-500 mt-1">Define dates, working days, and registration windows.</p>
           </div>
           <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
             <Clock size={24} />
           </div>
        </div>

        <form className="p-8 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Term Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Fall 2026"
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Academic Year</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-500 transition-colors">
                  <option>2026-2027</option>
                  <option>2027-2028</option>
                </select>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Commencement Date (Start)</label>
                <input 
                  type="date" 
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Conclusion Date (End)</label>
                <input 
                  type="date" 
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Total Working Days</label>
                <input 
                  type="number" 
                  defaultValue={90}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Registration Deadline</label>
                <input 
                  type="date" 
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
           </div>

           <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
              <Link href="/admin/college-admin/semesters">
                <button type="button" className="px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-colors">
                  Cancel
                </button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-colors"
              >
                <Save size={16} /> Publish Semester
              </motion.button>
           </div>
        </form>
      </div>
    </div>
  );
}
