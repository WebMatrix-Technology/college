"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, ArrowLeft, Save, FileCode2 } from "lucide-react";

export default function AddCoursePage() {
  const router = useRouter();

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-purple-600 transition-colors mb-6 cursor-pointer bg-transparent border-none">
          <ArrowLeft size={14} /> Back
        </button>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <BookOpen size={36} className="text-purple-600" />
          Add <span className="text-purple-600">Course</span>
        </h1>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden max-w-4xl">
        <div className="p-8 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <div>
             <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest">Syllabus Configuration</h2>
             <p className="text-[10px] font-bold text-slate-500 mt-1">Define course structure, credits, and owning department.</p>
           </div>
           <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
             <FileCode2 size={24} />
           </div>
        </div>

        <form className="p-8 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Course Code</label>
                <input 
                  type="text" 
                  placeholder="e.g. CSE3001"
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-purple-500 transition-colors uppercase"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Course Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Software Engineering"
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-purple-500 transition-colors"
                />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Total Credits</label>
                <input 
                  type="number" 
                  defaultValue={4}
                  min={1}
                  max={8}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Course Type Structure</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-purple-500 transition-colors">
                  <option value="Theory">Theory Only</option>
                  <option value="Lab">Lab Only</option>
                  <option value="Theory + Lab">Theory + Lab</option>
                  <option value="Project">Project / Seminar</option>
                </select>
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Owning Department</label>
              <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-purple-500 transition-colors">
                <option value="">-- Select Department --</option>
                <option>Computer Science</option>
                <option>Mechanical Engineering</option>
                <option>Mathematics</option>
                <option>Physics</option>
              </select>
           </div>
           
           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Syllabus / Prerequisites Notes</label>
              <textarea 
                rows={4}
                placeholder="Enter prerequisite course codes or brief description..."
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>
           </div>

           <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
              <button onClick={() => router.back()} type="button" className="px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-colors">
                Cancel
              </button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:bg-purple-700 transition-colors"
              >
                <Save size={16} /> Save Curriculum
              </motion.button>
           </div>
        </form>
      </div>
    </div>
  );
}
