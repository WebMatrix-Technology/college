"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileSpreadsheet, Plus, Search, Filter, AlertCircle, PlayCircle, Lock, X, Save } from "lucide-react";

const mockExams = [
  { id: "EXM-FA26-MID", name: "Fall 2026 Mid-Terms", type: "Mid-Term", semester: "Fall 2026", status: "Active", dates: "Oct 12 - Oct 20" },
  { id: "EXM-FA26-END", name: "Fall 2026 End-Terms", type: "End-Term", semester: "Fall 2026", status: "Upcoming", dates: "Dec 10 - Dec 22" },
  { id: "EXM-WI26-END", name: "Winter 2026 End-Terms", type: "End-Term", semester: "Winter 2026", status: "Results Declared", dates: "May 10 - May 22" },
];

export default function ExaminationsModule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <FileSpreadsheet size={36} className="text-blue-600" />
            Examinations <span className="text-blue-600">Control</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Schedules & Result Publications</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             onClick={() => setIsModalOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-blue-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-colors"
           >
             <Plus size={16} /> Schedule Examination
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
               {/* Filters */}
               <div className="bg-slate-50 p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                 <div className="relative w-full md:w-96">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                   <input 
                     type="text" 
                     placeholder="Search exams..." 
                     className="w-full pl-11 pr-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-blue-500 transition-colors"
                   />
                 </div>
                 <div className="flex gap-2 w-full md:w-auto">
                    <select className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 outline-none hover:border-slate-300 transition-colors">
                      <option>All Statuses</option>
                      <option>Active</option>
                      <option>Upcoming</option>
                      <option>Results Declared</option>
                    </select>
                    <button className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors">
                      <Filter size={16} />
                    </button>
                 </div>
               </div>

               {/* Exam List */}
               <div className="divide-y divide-slate-100">
                  {mockExams.map((exam, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={exam.id}
                      className="p-6 hover:bg-blue-50/30 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group cursor-pointer"
                    >
                       <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-base font-black text-slate-900">{exam.name}</h3>
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                              exam.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                              exam.status === 'Upcoming' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'
                            }`}>
                              {exam.status}
                            </span>
                          </div>
                          <p className="text-[10px] font-bold text-slate-500">{exam.semester} • {exam.type}</p>
                          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">Exam Code: {exam.id}</p>
                       </div>
                       
                       <div className="flex items-center gap-8">
                          <div className="text-center">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Schedule</p>
                            <p className="text-sm font-black text-slate-900">{exam.dates}</p>
                          </div>
                          {exam.status === 'Active' && (
                            <button className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                               <PlayCircle size={14} /> View Live Progress
                            </button>
                          )}
                          {exam.status === 'Results Declared' && (
                            <button className="px-4 py-2 rounded-lg bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                               <Lock size={14} /> Locked
                            </button>
                          )}
                          {exam.status === 'Upcoming' && (
                            <button className="px-4 py-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                               Manage Schedule
                            </button>
                          )}
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>

         {/* Alerts */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Active Cycle</h3>
               
               <div className="mb-6">
                  <p className="text-[10px] font-bold text-slate-500 mb-1">Ongoing Examination</p>
                  <p className="text-xl font-black italic text-blue-400 leading-tight">Fall 2026<br/>Mid-Terms</p>
               </div>
            </div>

            <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-start gap-4">
               <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
               <div>
                 <h4 className="text-xs font-black uppercase tracking-widest text-red-900 mb-1">Malpractice Report</h4>
                 <p className="text-[10px] font-bold text-red-700 leading-relaxed">
                   3 incidents reported during CSE3001 examination. Pending review by the disciplinary committee.
                 </p>
                 <button className="mt-3 text-[9px] font-black uppercase tracking-widest text-red-700 hover:text-red-800 underline">
                   Review Cases
                 </button>
               </div>
            </div>
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
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Schedule Examination</h3>
                <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Examination Name</label>
                   <input type="text" placeholder="e.g. Mid-Term Fall 2026" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Start Date</label>
                     <input type="date" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">End Date</label>
                     <input type="date" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Target Department & Batch</label>
                   <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors">
                     <option>B.Tech CSE - Semester 5</option>
                     <option>BCA - Semester 3</option>
                     <option>All University (General Exams)</option>
                   </select>
                 </div>
                 <button onClick={() => setIsModalOpen(false)} className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-indigo-700 transition-colors mt-4">
                   <Save size={16} /> Create Exam Block
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
