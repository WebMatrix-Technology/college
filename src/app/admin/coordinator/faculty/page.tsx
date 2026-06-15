"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Search, Filter, Mail, Phone, CalendarDays, CheckCircle2, ShieldAlert,
  Building2, MapPin, MoreVertical, Plus, X, UserCog
} from "lucide-react";
import { toast } from "@/components/Toast";

import { departmentMockData } from "@/lib/departmentMockData";

export default function CoordinatorFacultyPage() {
  const [course, setCourse] = useState("Course");
  const [facultyData, setFacultyData] = useState<any[]>([]);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

  // Available batches for this course based on existing students/subjects (simplified for demo)
  const batchesData = ["Year 1", "Year 2", "Year 3", "Year 4"];

  useEffect(() => {
    const coordinatorCourse = localStorage.getItem("coordinatorCourse") || "B.Tech";
    setCourse(coordinatorCourse);

    let deptFaculty: any[] = [];
    for (const [deptName, data] of Object.entries(departmentMockData)) {
      if (data.courses.includes(coordinatorCourse)) {
        // Course coordinator sees faculty from their department
        deptFaculty = data.faculty; 
        break;
      }
    }
    setFacultyData(deptFaculty);
  }, []);

  const openAssignModal = (faculty: any) => {
    setSelectedFaculty(faculty);
    setIsAssignModalOpen(true);
  };

  const handleAssignRole = (e: React.FormEvent) => {
    e.preventDefault();
    toast(`Batch Coordinator role successfully assigned to ${selectedFaculty?.name}.`);
    setIsAssignModalOpen(false);
  };

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-3">
             <Users size={36} className="text-fuchsia-600" />
             <span className="text-fuchsia-600">{course}</span> Faculty
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Academic Staff & Assign Batch Coordinators</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Faculty Roster</h2>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search faculty..." 
                className="w-full md:w-64 pl-9 pr-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-fuchsia-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Profile</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Specialization</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {facultyData.map((fac, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={fac.id}
                  className="hover:bg-fuchsia-50/30 transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                        <Users size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900 group-hover:text-fuchsia-700 transition-colors">{fac.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] font-bold text-slate-500">{fac.role}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="text-xs font-bold text-slate-700">{fac.specialization}</p>
                  </td>
                  <td className="p-6 text-right space-x-2">
                     <button 
                       onClick={() => openAssignModal(fac)}
                       className="text-[10px] font-black uppercase tracking-widest text-fuchsia-500 hover:text-fuchsia-700 transition-colors border border-fuchsia-200 hover:border-fuchsia-400 px-3 py-2 rounded-lg bg-fuchsia-50 shadow-sm inline-flex items-center gap-1"
                       title="Assign Batch Coordinator"
                     >
                       <UserCog size={12} /> Assign Batch Lead
                     </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- ASSIGN ROLE MODAL --- */}
      <AnimatePresence>
        {isAssignModalOpen && selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h2 className="text-xl font-black italic tracking-tighter text-slate-900 flex items-center gap-2">
                  <UserCog size={20} className="text-fuchsia-600" /> Assign Batch Coordinator
                </h2>
                <button 
                  onClick={() => setIsAssignModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-300 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              
              <form onSubmit={handleAssignRole}>
                <div className="p-6 space-y-5">
                   <div>
                     <p className="text-sm font-bold text-slate-700 mb-4">
                       Assign <span className="text-fuchsia-600 font-black">{selectedFaculty.name}</span> as Batch Coordinator for <span className="font-black">{course}</span>.
                     </p>
                     
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Batch</label>
                     <select required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-fuchsia-500 transition-colors appearance-none">
                       <option value="">-- Select Batch --</option>
                       {batchesData.map(batch => (
                         <option key={batch} value={batch}>{batch}</option>
                       ))}
                     </select>
                   </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                   <button 
                     type="button"
                     onClick={() => setIsAssignModalOpen(false)}
                     className="px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-500 hover:bg-slate-200 transition-colors"
                   >
                     Cancel
                   </button>
                   <button 
                     type="submit"
                     className="bg-fuchsia-600 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-fuchsia-700 transition-colors shadow-lg"
                   >
                     Assign Role
                   </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
