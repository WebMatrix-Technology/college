"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Search, Filter, Mail, Phone, CalendarDays, CheckCircle2, ShieldAlert,
  Building2, MapPin, MoreVertical, Plus, X, UserCog
} from "lucide-react";
import { toast } from "@/components/Toast";

import { departmentMockData } from "@/lib/departmentMockData";

export default function HodFacultyPage() {
  const [department, setDepartment] = useState("Department");
  const [facultyData, setFacultyData] = useState<any[]>([]);
  const [coursesData, setCoursesData] = useState<string[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

  useEffect(() => {
    const rawDept = localStorage.getItem("hodDepartment") || "Information Technology";
    const dept = Object.keys(departmentMockData).find(
      key => key.toLowerCase() === rawDept.toLowerCase().trim()
    ) || "Information Technology";
    
    setDepartment(dept);
    if (departmentMockData[dept]) {
      setFacultyData(departmentMockData[dept].faculty);
      setCoursesData(departmentMockData[dept].courses);
    }
  }, []);

  const openAssignModal = (faculty: any) => {
    setSelectedFaculty(faculty);
    setIsAssignModalOpen(true);
  };

  const handleAssignRole = (e: React.FormEvent) => {
    e.preventDefault();
    toast(`Course Coordinator role successfully assigned to ${selectedFaculty?.name}.`);
    setIsAssignModalOpen(false);
  };

  const toggleFacultyStatus = (id: string) => {
    const facultyMember = facultyData.find(f => f.id === id);
    if (!facultyMember) return;
    
    const newStatus = facultyMember.status === "Deactivated" ? "Available" : "Deactivated";
    toast(`${facultyMember.name}'s account has been ${newStatus.toLowerCase()}.`);
    
    setFacultyData(prev => prev.map(f => 
      f.id === id ? { ...f, status: newStatus } : f
    ));
  };

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex flex-wrap items-center gap-3">
             <Users size={36} className="text-indigo-600" />
             <span className="text-indigo-600">{department}</span> Faculty
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Academic Staff & Leaves</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => toast("Exporting faculty directory...")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
           >
             Export Roster
           </motion.button>
           <motion.button 
             onClick={() => setIsAddModalOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg hover:bg-indigo-700 transition-colors"
           >
             <Plus size={16} /> Add Faculty
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
             <Users size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">{facultyData.length}</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Faculty</p>
           </div>
         </div>
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
             <ShieldAlert size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">3</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">On Leave Today</p>
           </div>
         </div>
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
             <CalendarDays size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">18.5</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Avg Weekly Hours</p>
           </div>
         </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Faculty Directory</h2>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search faculty..." 
                className="w-full md:w-64 pl-9 pr-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <button 
              onClick={() => toast("Filter panel opened (coming soon).")}
              className="px-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors"
            >
              <Filter size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Profile</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Specialization</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Location</th>
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
                  className="hover:bg-indigo-50/30 transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                        <Users size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900 group-hover:text-indigo-700 transition-colors">{fac.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] font-bold text-slate-500">{fac.role}</span>
                          <span className={`px-1.5 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-widest ${
                            fac.status === "Available" || fac.status === "Active" ? "bg-emerald-100 text-emerald-700" :
                            fac.status === "In Class" ? "bg-blue-100 text-blue-700" :
                            fac.status === "Deactivated" ? "bg-red-100 text-red-700 animate-pulse" :
                            "bg-orange-100 text-orange-700"
                          }`}>
                            {fac.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="text-xs font-bold text-slate-700">{fac.specialization}</p>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-600">
                      <MapPin size={12} className="text-slate-400" /> Dept Block
                    </div>
                  </td>
                  <td className="p-6 text-right space-x-2">
                     <button 
                       onClick={() => openAssignModal(fac)}
                       className="text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-700 transition-colors border border-indigo-200 hover:border-indigo-400 px-3 py-2 rounded-lg bg-indigo-50 shadow-sm inline-flex items-center gap-1"
                       title="Assign Coordinator Role"
                     >
                       <UserCog size={12} /> Assign Role
                     </button>
                     <button 
                       onClick={() => toast(`Viewing schedule for ${fac.name}...`)}
                       className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors border border-slate-200 hover:border-indigo-200 px-3 py-2 rounded-lg bg-white shadow-sm inline-flex items-center gap-1"
                     >
                       Schedule
                     </button>
                     <button 
                       onClick={() => toggleFacultyStatus(fac.id)}
                       className={`text-[10px] font-black uppercase tracking-widest transition-colors border px-3 py-2 rounded-lg bg-white shadow-sm inline-flex items-center gap-1 ${
                         fac.status === "Deactivated" 
                           ? "text-emerald-500 hover:text-emerald-700 border-emerald-200 hover:border-emerald-300"
                           : "text-red-500 hover:text-red-700 border-red-200 hover:border-red-300"
                       }`}
                     >
                       {fac.status === "Deactivated" ? "Activate" : "Deactivate"}
                     </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- ADD FACULTY MODAL --- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-black italic tracking-tighter text-slate-900 flex items-center gap-2">
                <Users size={20} className="text-indigo-600" /> Add New Faculty
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
                 <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                 <input 
                   type="text" 
                   placeholder="e.g. Dr. John Doe" 
                   className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                 />
               </div>

               <div>
                 <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
                 <input 
                   type="email" 
                   placeholder="john.doe@vanguard.com" 
                   className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                 />
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Role</label>
                   <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none">
                     <option value="Professor">Professor</option>
                     <option value="Associate Prof">Associate Prof</option>
                     <option value="Asst. Professor">Asst. Professor</option>
                     <option value="Lecturer">Lecturer</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Specialization</label>
                   <input 
                     type="text" 
                     placeholder="e.g. Quantum Physics" 
                     className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                   />
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
                   toast("Faculty member added successfully!");
                   setIsAddModalOpen(false);
                 }}
                 className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-colors shadow-lg"
               >
                 Confirm Add
               </button>
            </div>
          </motion.div>
        </div>
      )}

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
                  <UserCog size={20} className="text-indigo-600" /> Assign Coordinator
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
                       Assign <span className="text-indigo-600 font-black">{selectedFaculty.name}</span> as Course Coordinator.
                     </p>
                     
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Course</label>
                     <select required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none">
                       <option value="">-- Select Course --</option>
                       {coursesData.map(course => (
                         <option key={course} value={course}>{course}</option>
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
                     className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-colors shadow-lg"
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
