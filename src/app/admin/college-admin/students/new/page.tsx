"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, ArrowLeft, Save, Plus, UploadCloud } from "lucide-react";

export default function EnrollStudentPage() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <Link href="/admin/college-admin/students" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Student Database
        </Link>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <GraduationCap size={36} className="text-emerald-600" />
          Enroll <span className="text-emerald-600">Student</span>
        </h1>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden max-w-4xl">
        <div className="p-8 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <div>
             <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest">Student Enrollment Form</h2>
             <p className="text-[10px] font-bold text-slate-500 mt-1">Register a new student and allocate batch/branch.</p>
           </div>
           <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
             <Plus size={24} />
           </div>
        </div>

        <form className="p-8 space-y-8">
           {/* Photo Upload Placeholder */}
           <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 text-slate-400">
                 <UploadCloud size={32} />
              </div>
              <div>
                 <p className="text-sm font-bold text-slate-800">Passport Photo</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1 mb-3">Max size: 2MB (JPG/PNG)</p>
                 <button type="button" className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors">
                   Upload Image
                 </button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Registration Number / ID</label>
                <input 
                  type="text" 
                  placeholder="e.g. 26BCE1042"
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Rahul Verma"
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Program & Branch</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors">
                  <option value="">-- Select Branch --</option>
                  <option>B.Tech Computer Science</option>
                  <option>B.Tech Mechanical</option>
                  <option>B.Tech Electrical</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Batch / Class Of</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors">
                  <option value="">-- Select Batch --</option>
                  <option>Class of 2026</option>
                  <option>Class of 2027</option>
                  <option>Class of 2028</option>
                </select>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Email</label>
                <input 
                  type="email" 
                  placeholder="e.g. rahul@example.com"
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
           </div>

           <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
              <Link href="/admin/college-admin/students">
                <button type="button" className="px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-colors">
                  Cancel
                </button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-700 transition-colors"
              >
                <Save size={16} /> Enroll Student
              </motion.button>
           </div>
        </form>
      </div>
    </div>
  );
}
