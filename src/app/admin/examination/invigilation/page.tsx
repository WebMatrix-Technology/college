"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, 
  MapPin, 
  CalendarDays, 
  Search,
  CheckCircle2,
  X,
  AlertCircle
} from "lucide-react";
import { departmentMockData } from "@/lib/departmentMockData";

export default function InvigilationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<any>(null);

  // Mock schedule needing invigilators
  const upcomingExams = [
    { id: 1, subject: "Quantum Computing (CS-401)", date: "2026-06-18", time: "10:00 AM", hall: "Hall A", invigilatorsNeeded: 3, assigned: ["Dr. Alan Turing"], pending: 2 },
    { id: 2, subject: "Neural Networks (AI-302)", date: "2026-06-19", time: "02:00 PM", hall: "Hall C", invigilatorsNeeded: 2, assigned: [], pending: 2 },
    { id: 3, subject: "Data Structures (DS-105)", date: "2026-06-20", time: "09:00 AM", hall: "Hall B", invigilatorsNeeded: 4, assigned: ["Dr. Grace Hopper", "Dr. Linus Torvalds"], pending: 2 },
  ];

  // Flatten faculty from departments
  const allFaculty = Object.entries(departmentMockData).flatMap(([deptName, dept]) => 
    dept.faculty.map(f => ({ ...f, department: deptName }))
  );

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 flex items-center gap-3">
          <UserCheck className="text-rose-600" size={32} />
          Invigilation Duty
        </h1>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
          Faculty Hall Assignments & Rosters
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* EXAM HALLS REQUIRING STAFF */}
        <div className="lg:col-span-2 space-y-4 min-w-0">
          <h2 className="text-xl font-black uppercase tracking-tighter mb-4 text-slate-900">Upcoming Assignments</h2>
          {upcomingExams.map((exam) => (
            <div key={exam.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-rose-200 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest ${exam.pending > 0 ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    {exam.pending > 0 ? `${exam.pending} Staff Required` : 'Fully Staffed'}
                  </span>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <MapPin size={12} /> {exam.hall}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">{exam.subject}</h3>
                  <p className="text-xs font-medium text-slate-500 flex items-center gap-2 mt-1">
                    <CalendarDays size={14} className="text-rose-500" /> {exam.date} • {exam.time}
                  </p>
                </div>
                {exam.assigned.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exam.assigned.map((staff, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold text-slate-600">
                        {staff}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <button 
                  onClick={() => {
                    setSelectedExam(exam);
                    setIsModalOpen(true);
                  }}
                  className="w-full md:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg shadow-slate-200"
                >
                  Assign Staff
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ALERTS & FACULTY STATS */}
        <div className="space-y-6">
           <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
             <div className="flex items-center gap-3 mb-4">
               <AlertCircle className="text-rose-600" />
               <h3 className="text-sm font-black uppercase tracking-widest text-rose-900">Duty Conflicts</h3>
             </div>
             <p className="text-xs font-medium text-rose-800 leading-relaxed mb-4">
               The system has detected that <strong>Dr. Alan Turing</strong> is scheduled for two different halls on June 18 at 10:00 AM.
             </p>
             <button className="text-[10px] font-black uppercase tracking-widest text-white bg-rose-600 px-4 py-2 rounded-lg hover:bg-rose-700 w-full transition-colors">
               Resolve Conflict
             </button>
           </div>
           
           <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4">Faculty Utilization</h3>
             <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                  <span>IT Department</span>
                  <span className="text-rose-600">85% Engaged</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[85%]" />
                </div>
                
                <div className="flex justify-between items-center text-xs font-bold text-slate-600 pt-2">
                  <span>Management</span>
                  <span className="text-orange-500">40% Engaged</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[40%]" />
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* ASSIGNMENT MODAL */}
      <AnimatePresence>
        {isModalOpen && selectedExam && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 flex flex-col max-h-[85vh]"
            >
              <div className="bg-slate-900 p-6 shrink-0 flex items-center justify-between">
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-tighter">Assign Invigilators</h2>
                  <p className="text-rose-400 text-[10px] font-black uppercase tracking-widest mt-1">
                    {selectedExam.subject} • {selectedExam.hall}
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 border-b border-slate-100 bg-slate-50 shrink-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search faculty by name or department..." 
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs font-bold focus:outline-none focus:border-rose-500 transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
                {allFaculty.map((faculty) => (
                   <div key={faculty.id} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors border-b border-transparent hover:border-slate-100 group">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-black text-xs">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{faculty.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{faculty.department}</p>
                        </div>
                     </div>
                     <button className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 px-4 py-2 bg-rose-50 text-rose-600 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all">
                       Assign
                     </button>
                   </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-slate-100 shrink-0 flex gap-4 bg-white">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30"
                >
                  <CheckCircle2 size={16} /> Save Assignments
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
