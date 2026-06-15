"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileSpreadsheet, 
  Search,
  CheckCircle2,
  X,
  AlertCircle,
  FileCheck,
  Send,
  Award
} from "lucide-react";

export default function ResultsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<any>(null);

  // Mock Grading Progress Data
  const gradingProgress = [
    { id: 1, subject: "Software Engineering (SE-204)", course: "B.Tech", evaluator: "Dr. Grace Hopper", totalPapers: 120, graded: 120, status: "Ready to Publish", color: "text-emerald-500 bg-emerald-50" },
    { id: 2, subject: "Quantum Computing (CS-401)", course: "B.Tech", evaluator: "Dr. Alan Turing", totalPapers: 85, graded: 40, status: "Grading in Progress", color: "text-orange-500 bg-orange-50" },
    { id: 3, subject: "Financial Management (FIN-201)", course: "MBA", evaluator: "Dr. Warren Buffett", totalPapers: 60, graded: 60, status: "Ready to Publish", color: "text-emerald-500 bg-emerald-50" },
    { id: 4, subject: "Constitutional Law (LAW-101)", course: "LLB", evaluator: "Dr. Ruth Bader", totalPapers: 90, graded: 0, status: "Awaiting Grades", color: "text-rose-500 bg-rose-50" },
  ];

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 flex items-center gap-3">
            <FileSpreadsheet className="text-rose-600" size={32} />
            Grades & Results
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
            Result Declaration & Transcript Generation
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* GRADING PROGRESS */}
        <div className="lg:col-span-3 space-y-4 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6">
             <div className="relative w-full max-w-md">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input 
                 type="text" 
                 placeholder="Search subject or course..." 
                 className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-xs font-bold focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
               />
             </div>
             <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Ready</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500" /> In Progress</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500" /> Awaiting</span>
             </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                 <div className="grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
                   <div className="col-span-4">Subject & Evaluator</div>
                   <div className="col-span-1">Course</div>
                   <div className="col-span-3">Progress</div>
                   <div className="col-span-3">Status</div>
                   <div className="col-span-1 text-right">Action</div>
                 </div>

                 <div className="divide-y divide-slate-100">
                {gradingProgress.map((item) => {
                  const percent = Math.round((item.graded / item.totalPapers) * 100);
                  
                  return (
                  <motion.div 
                    key={item.id}
                    className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="col-span-4">
                      <h4 className="text-sm font-bold text-slate-900 truncate">{item.subject}</h4>
                      <p className="text-[10px] font-bold text-slate-500 mt-1">{item.evaluator}</p>
                    </div>
                    <div className="col-span-1">
                       <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[9px] font-black uppercase tracking-widest">
                         {item.course}
                       </span>
                    </div>
                    <div className="col-span-3">
                       <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1">
                         <span>{item.graded} / {item.totalPapers} Graded</span>
                         <span>{percent}%</span>
                       </div>
                       <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                         <div 
                           className={`h-full rounded-full transition-all duration-1000 ${percent === 100 ? 'bg-emerald-500' : 'bg-orange-500'}`} 
                           style={{ width: `${percent}%` }}
                         />
                       </div>
                    </div>
                    <div className="col-span-3">
                       <span className={`inline-block px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest whitespace-nowrap ${item.color}`}>
                         {item.status}
                       </span>
                    </div>
                    <div className="col-span-1 text-right">
                      {percent === 100 ? (
                        <button 
                          onClick={() => {
                            setSelectedSubject(item);
                            setIsModalOpen(true);
                          }}
                          className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-rose-600 transition-colors"
                        >
                          Publish
                        </button>
                      ) : (
                        <button className="px-4 py-2 bg-slate-100 text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-slate-200 hover:text-slate-600 transition-colors">
                          Remind
                        </button>
                      )}
                    </div>
                  </motion.div>
                )})}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* RECENTLY PUBLISHED & REPORTS */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden border border-slate-800">
             <div className="absolute top-0 right-0 p-6 opacity-10">
               <Award size={100} />
             </div>
             <h3 className="text-lg font-black uppercase tracking-tighter mb-4 flex items-center gap-2 relative z-10">
               <FileCheck className="text-emerald-500" /> Recently Published
             </h3>
             <div className="space-y-4 relative z-10">
               <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                 <h4 className="text-xs font-bold text-white">Data Structures (DS-105)</h4>
                 <p className="text-[10px] text-slate-400 mt-1">Published today at 09:30 AM</p>
               </div>
               <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                 <h4 className="text-xs font-bold text-white">Macroeconomics (ECO-201)</h4>
                 <p className="text-[10px] text-slate-400 mt-1">Published yesterday</p>
               </div>
             </div>
             
             <button className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                Generate Full Transcript Report
             </button>
           </div>
        </div>
      </div>

      {/* PUBLISH MODAL */}
      <AnimatePresence>
        {isModalOpen && selectedSubject && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full overflow-hidden border border-slate-100"
            >
              <div className="bg-slate-900 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-tighter">Confirm Publication</h2>
                  <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mt-1">Lock Grades & Notify Students</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                   <AlertCircle className="text-orange-500 shrink-0" />
                   <div>
                     <h4 className="text-sm font-bold text-slate-900">Irreversible Action</h4>
                     <p className="text-xs text-slate-600 leading-relaxed mt-1">
                       Publishing the results for <strong>{selectedSubject.subject}</strong> will lock all grades. Faculty will no longer be able to modify marks. Results will be immediately visible on the Student Portal.
                     </p>
                   </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-100 flex gap-4 bg-slate-50">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <Send size={16} /> Publish Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
