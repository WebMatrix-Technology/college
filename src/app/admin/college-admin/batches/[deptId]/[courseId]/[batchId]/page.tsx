"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Layers, ArrowLeft, Users, GraduationCap, BarChart3, Settings, BookOpen, Clock, Download, X, Save } from "lucide-react";
import { toast } from "@/components/Toast";

export default function BatchDetailsPage() {
  const params = useParams();
  const deptId = params.deptId as string;
  const courseId = params.courseId as string;
  const batchId = params.batchId as string;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href={`/admin/college-admin/batches/${deptId}/${courseId}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Batches
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Layers size={36} className="text-indigo-600" />
            Batch <span className="text-indigo-600">{batchId}</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{courseId} • Department of {deptId}</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             onClick={() => toast("Exporting batch report... Check your downloads shortly.")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
           >
             <Download size={16} /> Export Batch Report
           </motion.button>
           <motion.button 
             onClick={() => setIsSettingsOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-slate-900 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg hover:bg-slate-800 transition-colors"
           >
             <Settings size={16} /> Batch Settings
           </motion.button>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(79,70,229,0.3)] relative overflow-hidden">
           <div className="absolute -right-4 -top-4 w-32 h-32 bg-indigo-500/50 rounded-full blur-2xl" />
           <div className="relative z-10">
             <div className="w-10 h-10 bg-indigo-500/50 rounded-xl flex items-center justify-center mb-4">
               <Users size={20} className="text-indigo-50" />
             </div>
             <p className="text-3xl font-black italic">1,420</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mt-1">Total Enrolled</p>
           </div>
         </div>
         
         <div className="bg-white border-2 border-slate-50 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
           <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4">
             <GraduationCap size={20} />
           </div>
           <div>
             <p className="text-3xl font-black italic text-slate-900">2026</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Graduation Year</p>
           </div>
         </div>

         <div className="bg-white border-2 border-slate-50 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
           <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center mb-4">
             <BarChart3 size={20} />
           </div>
           <div>
             <p className="text-3xl font-black italic text-slate-900">8.4</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Average CGPA</p>
           </div>
         </div>

         <div className="bg-white border-2 border-slate-50 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
           <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-4">
             <BookOpen size={20} />
           </div>
           <div>
             <p className="text-3xl font-black italic text-slate-900">5</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Active Branches/Sections</p>
           </div>
         </div>
      </div>

      {/* Sections List */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Batch Sections / Branches</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {["Section A", "Section B", "Section C", "Section D", "Section E"].map((section, idx) => (
            <div key={idx} className="p-6 hover:bg-slate-50/50 transition-colors flex items-center justify-between">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center font-black">
                   {String.fromCharCode(65 + idx)}
                 </div>
                 <div>
                   <h3 className="text-sm font-black text-slate-900">{section}</h3>
                   <p className="text-[10px] font-bold text-slate-500 mt-0.5">~280 Students • Core Curriculum</p>
                 </div>
               </div>
                <div className="flex gap-4">
                  <Link href={`/admin/college-admin/students/${deptId}/${courseId}/${batchId}`}>
                    <button 
                      className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      View Students
                    </button>
                  </Link>
                  <Link href={`/admin/college-admin/timetable/${deptId}/${courseId}`}>
                    <button 
                      className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      Schedule
                    </button>
                  </Link>
                </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Batch Settings ({batchId})</h3>
                <button onClick={() => setIsSettingsOpen(false)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Batch Alias/Name</label>
                   <input type="text" defaultValue={batchId} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Total Capacity</label>
                   <input type="number" defaultValue={1500} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Status</label>
                   <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors">
                     <option>Active</option>
                     <option>Graduated</option>
                     <option>On Hold</option>
                   </select>
                 </div>
                 <button onClick={() => {
                   setIsSettingsOpen(false);
                   toast("Batch settings updated successfully!");
                 }} className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-indigo-700 transition-colors mt-4">
                   <Save size={16} /> Save Settings
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
