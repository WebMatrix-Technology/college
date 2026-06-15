"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Layers, Plus, Search, Filter, GraduationCap, ChevronRight, ArrowLeft, X, Save } from "lucide-react";

const mockBatches = [
  { id: "B24", name: "Class of 2024", enrolledYear: 2020, totalStudents: 1200, status: "Graduated", branches: 4 },
  { id: "B25", name: "Class of 2025", enrolledYear: 2021, totalStudents: 1350, status: "Active (Final Year)", branches: 5 },
  { id: "B26", name: "Class of 2026", enrolledYear: 2022, totalStudents: 1420, status: "Active (Third Year)", branches: 5 },
  { id: "B27", name: "Class of 2027", enrolledYear: 2023, totalStudents: 1550, status: "Active (Second Year)", branches: 6 },
  { id: "B28", name: "Class of 2028", enrolledYear: 2024, totalStudents: 1600, status: "Active (First Year)", branches: 6 },
];

export default function BatchesModule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const deptId = params.deptId as string;
  const courseId = params.courseId as string;

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href={`/admin/college-admin/batches/${deptId}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Programs
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Layers size={36} className="text-indigo-600" />
            <span className="uppercase">{courseId}</span> <span className="text-indigo-600">Batches</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Intake Cohorts & Graduating Classes</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             onClick={() => setIsModalOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:bg-indigo-700 transition-colors"
           >
             <Plus size={16} /> Declare New Batch
           </motion.button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search batches by name or year..." 
              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <select className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 outline-none hover:border-slate-300 transition-colors">
               <option>All Statuses</option>
               <option>Active</option>
               <option>Graduated</option>
             </select>
             <button className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors">
               <Filter size={16} />
             </button>
          </div>
        </div>

        {/* List View */}
        <div className="divide-y divide-slate-100">
           {mockBatches.map((batch, idx) => (
             <Link key={batch.id} href={`/admin/college-admin/batches/${deptId}/${courseId}/${batch.id}`}>
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.05 }}
                 className="p-6 hover:bg-indigo-50/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
               >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex flex-col items-center justify-center shrink-0">
                      <span className="text-xs font-black leading-none">'{batch.name.slice(-2)}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-black text-slate-900 group-hover:text-indigo-700 transition-colors">{batch.name}</h3>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                          batch.status.includes('Active') ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {batch.status}
                        </span>
                      </div>
                      <p className="text-[10px] font-bold text-slate-500">Enrolled: {batch.enrolledYear} • Expected Graduation: {batch.enrolledYear + 4}</p>
                    </div>
                  </div>

                  <div className="flex gap-8 items-center">
                     <div className="flex flex-col items-center">
                       <div className="flex items-center gap-1 text-slate-400 mb-1"><Layers size={14} /> <span className="text-[10px] font-black uppercase tracking-widest">Branches</span></div>
                       <span className="text-sm font-black italic text-slate-900">{batch.branches}</span>
                     </div>
                     <div className="flex flex-col items-center">
                       <div className="flex items-center gap-1 text-slate-400 mb-1"><GraduationCap size={14} /> <span className="text-[10px] font-black uppercase tracking-widest">Students</span></div>
                       <span className="text-sm font-black italic text-slate-900">{batch.totalStudents.toLocaleString()}</span>
                     </div>
                     
                     <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 group-hover:text-indigo-500 group-hover:bg-indigo-100 transition-colors ml-4">
                       <ChevronRight size={20} />
                     </div>
                  </div>
               </motion.div>
             </Link>
           ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Declare New Batch</h3>
                <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Graduation Year (Batch Name)</label>
                   <input type="number" defaultValue={2028} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Target Department & Degree</label>
                   <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors">
                     <option>B.Tech Computer Science</option>
                     <option>BCA</option>
                     <option>BBA</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Intake Capacity</label>
                   <input type="number" defaultValue={120} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 transition-colors" />
                 </div>
                 <button onClick={() => setIsModalOpen(false)} className="w-full bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-700 transition-colors mt-4">
                   <Save size={16} /> Save Batch
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
