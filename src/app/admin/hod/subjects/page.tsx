"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Plus, FileText, Download, Users, CheckCircle2, TrendingUp, AlertCircle, Layers, X
} from "lucide-react";
import { toast } from "@/components/Toast";

import { departmentMockData } from "@/lib/departmentMockData";

export default function HodSubjectsPage() {
  const [department, setDepartment] = useState("Department");
  const [subjectsData, setSubjectsData] = useState<any[]>([]);
  const [availableCourses, setAvailableCourses] = useState<string[]>([]);
  const [facultyList, setFacultyList] = useState<any[]>([]);
  
  // Selection States
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedBatch, setSelectedBatch] = useState("All");

  // Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const rawDept = localStorage.getItem("hodDepartment") || "Information Technology";
    const dept = Object.keys(departmentMockData).find(
      key => key.toLowerCase() === rawDept.toLowerCase().trim()
    ) || "Information Technology";
    
    setDepartment(dept);
    if (departmentMockData[dept]) {
      setSubjectsData(departmentMockData[dept].subjects);
      setAvailableCourses(departmentMockData[dept].courses);
      setFacultyList(departmentMockData[dept].faculty);
    }
  }, []);

  const filteredSubjects = subjectsData.filter(s => {
    if (selectedCourse !== "All" && s.course !== selectedCourse) return false;
    if (selectedBatch !== "All" && s.batch !== selectedBatch) return false;
    return true;
  });

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex flex-wrap items-center gap-3">
             <BookOpen size={36} className="text-indigo-600" />
             <span className="text-indigo-600">{department}</span> Curriculum
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Syllabi & Subject Offerings</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => toast("Exporting subject catalog to PDF...")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
           >
             <Download size={16} /> Export Catalog
           </motion.button>
           <motion.button 
             onClick={() => setIsAddModalOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg hover:bg-indigo-700 transition-colors"
           >
             <Plus size={16} /> Propose Subject
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
             <BookOpen size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">{subjectsData.length}</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Active Subjects</p>
           </div>
         </div>
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
             <TrendingUp size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">84</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Credits Offered</p>
           </div>
         </div>
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
             <AlertCircle size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">3</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Syllabi Updates Pending</p>
           </div>
         </div>
      </div>

      {/* --- SELECTION PANEL --- */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl mb-10 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Degree / Course</label>
          <div className="relative">
            <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <select 
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                setSelectedBatch("All"); // Reset batch when course changes
              }}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="All">All Courses</option>
              {availableCourses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Academic Year</label>
          <div className="relative">
            <Layers size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <select 
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              disabled={false}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="All">All Years</option>
              <option value="Year 1">Year 1</option>
              <option value="Year 2">Year 2</option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
            </select>
          </div>
        </div>
      </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-300 flex-1" />
            <h2 className="text-xl font-black italic uppercase tracking-tighter text-indigo-900 flex items-center gap-2">
              <Layers size={20} className="text-indigo-500" /> {selectedCourse === "All" ? "All Courses" : selectedCourse} • {selectedBatch === "All" ? "All Years" : selectedBatch} Subjects
            </h2>
            <div className="h-px bg-slate-300 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.length === 0 ? (
              <div className="col-span-full text-center py-10 bg-white rounded-3xl border border-slate-100">
                 <p className="text-xs font-bold text-slate-400">No subjects found matching the selected curriculum.</p>
              </div>
            ) : (
              filteredSubjects.map((subject, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={subject.id}
                  className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-8 relative overflow-hidden group hover:border-indigo-200 transition-colors"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      subject.type === "Core" ? "bg-indigo-100 text-indigo-700" : "bg-emerald-100 text-emerald-700"
                    }`}>
                      {subject.type}
                    </div>
                    <p className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{subject.credits} Credits</p>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mb-6">{subject.id}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                        <Users size={12} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Subject Lead</p>
                        <p className="text-xs font-bold text-slate-700">{subject.lead}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Syllabus Progress</p>
                        <span className="text-[10px] font-bold text-indigo-600">{subject.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: `${subject.progress}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                     <button 
                       onClick={() => toast(`Viewing syllabus for ${subject.name}`)}
                       className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 transition-colors"
                     >
                       <FileText size={14} /> Syllabus
                     </button>
                     <button 
                       onClick={() => toast(`Reassigning faculty for ${subject.id}`)}
                       className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center transition-colors"
                     >
                       Reassign
                     </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      {/* --- ADD SUBJECT MODAL --- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-black italic tracking-tighter text-slate-900 flex items-center gap-2">
                <BookOpen size={20} className="text-indigo-600" /> Propose New Subject
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
                   placeholder="e.g. Artificial Intelligence" 
                   className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                 />
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Target Course</label>
                   <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none">
                     <option value="">Select Course...</option>
                     {availableCourses.map(course => (
                       <option key={`modal-${course}`} value={course}>{course}</option>
                     ))}
                   </select>
                 </div>
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Academic Year</label>
                   <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none">
                     <option value="">Select Year...</option>
                     <option value="Year 1">Year 1</option>
                     <option value="Year 2">Year 2</option>
                     <option value="Year 3">Year 3</option>
                     <option value="Year 4">Year 4</option>
                   </select>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Subject Code</label>
                   <input 
                     type="text" 
                     placeholder="e.g. CSE4001" 
                     className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors uppercase"
                   />
                 </div>
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Credits</label>
                   <input 
                     type="number" 
                     min="1" max="6"
                     placeholder="e.g. 4" 
                     className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                   />
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Type</label>
                   <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none">
                     <option value="Core">Core</option>
                     <option value="Elective">Elective</option>
                     <option value="Lab">Lab</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Assign Lead</label>
                   <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none">
                     <option value="">Select Faculty...</option>
                     {facultyList.map(fac => (
                       <option key={fac.id} value={fac.name}>{fac.name}</option>
                     ))}
                   </select>
                 </div>
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
                   toast("Subject proposed successfully!");
                   setIsAddModalOpen(false);
                 }}
                 className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-colors shadow-lg"
               >
                 Propose Subject
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
