"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Search, Filter, Plus, Users, LayoutList, 
  MapPin, CheckCircle2, AlertTriangle, Layers, X
} from "lucide-react";
import { toast } from "@/components/Toast";
import { departmentMockData } from "@/lib/departmentMockData";

export default function BatchCoordinatorSubjectsPage() {
  const [course, setCourse] = useState("Course");
  const [batch, setBatch] = useState("Batch");
  const [subjectsData, setSubjectsData] = useState<any[]>([]);
  const [facultyList, setFacultyList] = useState<any[]>([]);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const coordinatorCourse = localStorage.getItem("coordinatorCourse") || "B.Tech";
    const coordinatorBatch = localStorage.getItem("coordinatorBatch") || "Year 1";
    setCourse(coordinatorCourse);
    setBatch(coordinatorBatch);

    let batchSubjects: any[] = [];
    let deptFaculty: any[] = [];
    for (const [deptName, data] of Object.entries(departmentMockData)) {
      if (data.courses.includes(coordinatorCourse)) {
        batchSubjects = data.subjects.filter(s => s.course === coordinatorCourse && s.batch === coordinatorBatch);
        deptFaculty = data.faculty;
        break;
      }
    }
    setSubjectsData(batchSubjects);
    setFacultyList(deptFaculty);
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-3">
             <BookOpen size={36} className="text-teal-600" />
             <span className="text-teal-600">{course} • {batch}</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Syllabi, Credits & Faculty Assignments for your Batch</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => setIsAddModalOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-teal-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg hover:bg-teal-700 transition-colors"
           >
             <Plus size={16} /> Add Subject
           </motion.button>
        </div>
      </div>

      {/* --- SELECTION PANEL --- */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl mb-10 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Active Course</label>
          <div className="relative">
            <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500" />
            <div className="w-full bg-slate-100 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-500 cursor-not-allowed">
              {course} (Locked)
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Active Batch</label>
          <div className="relative">
            <Layers size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500" />
            <div className="w-full bg-slate-100 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-500 cursor-not-allowed">
              {batch} (Locked)
            </div>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px bg-slate-300 flex-1" />
            <h2 className="text-xl font-black italic uppercase tracking-tighter text-slate-900 flex items-center gap-2">
              <LayoutList size={20} className="text-teal-500" /> Batch Curriculum
            </h2>
            <div className="h-px bg-slate-300 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectsData.length === 0 ? (
              <div className="col-span-full text-center py-10 bg-white rounded-3xl border border-slate-100 shadow-xl">
                <p className="text-xs font-bold text-slate-400">No curriculum assigned for this batch yet.</p>
              </div>
            ) : (
              subjectsData.map((sub, idx) => (
                <motion.div 
                  key={sub.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden group hover:border-teal-200 transition-colors"
                >
                  <div className="p-6 border-b border-slate-100 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-600/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-teal-600/10 transition-colors" />
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-100 px-2 py-1 rounded-md mb-2 inline-block">
                          {sub.code}
                        </span>
                        <h3 className="text-sm font-black text-slate-900">{sub.name}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                        <BookOpen size={16} />
                      </div>
                    </div>
                    <div className="flex gap-2 relative z-10">
                      <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">{sub.credits} Credits</span>
                      <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">{sub.type}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1"><Users size={12}/> Assigned Faculty</p>
                      <p className="text-xs font-bold text-slate-900">{sub.faculty}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                       <div>
                         <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Syllabus Completion</p>
                         <p className="text-sm font-black text-emerald-600 flex items-center gap-1">
                           <CheckCircle2 size={14} /> {sub.completion}
                         </p>
                       </div>
                       <button 
                         onClick={() => toast(`Opening details for ${sub.name}...`)}
                         className="text-[10px] font-black uppercase tracking-widest text-teal-600 hover:text-teal-800 transition-colors"
                       >
                         Manage &rarr;
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </motion.div>

      {/* --- ADD SUBJECT MODAL --- */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h2 className="text-xl font-black italic tracking-tighter text-slate-900 flex items-center gap-2">
                  <BookOpen size={20} className="text-teal-600" /> Add New Subject to {batch}
                </h2>
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-300 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Subject Name</label>
                   <input 
                     type="text" 
                     placeholder="e.g. Data Structures" 
                     className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-teal-500 transition-colors"
                   />
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Subject Code</label>
                     <input 
                       type="text" 
                       placeholder="e.g. CS201" 
                       className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-teal-500 transition-colors"
                     />
                   </div>
                   <div>
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Credits</label>
                     <input 
                       type="number" 
                       placeholder="e.g. 4" 
                       className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-teal-500 transition-colors"
                     />
                   </div>
                 </div>

                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Assign Faculty</label>
                   <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-teal-500 transition-colors appearance-none">
                     <option value="">Select Primary Faculty</option>
                     {facultyList.map(fac => (
                       <option key={fac.id} value={fac.name}>{fac.name}</option>
                     ))}
                   </select>
                 </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                 <button 
                   onClick={() => setIsAddModalOpen(false)}
                   className="px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-500 hover:bg-slate-200 transition-colors"
                 >
                   Cancel
                 </button>
                 <button 
                   onClick={() => {
                     toast(`Subject added to ${batch} curriculum successfully!`);
                     setIsAddModalOpen(false);
                   }}
                   className="bg-teal-600 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-teal-700 transition-colors shadow-lg"
                 >
                   Confirm Add
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
