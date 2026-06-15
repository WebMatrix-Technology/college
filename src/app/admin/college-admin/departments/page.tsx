"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Search, Plus, Network, ChevronRight, FileCode2, UserCog, X } from "lucide-react";
import Link from "next/link";
import { toast } from "@/components/Toast";
import { departmentMockData } from "@/lib/departmentMockData";

const departments = [
  { id: "it", key: "Information Technology", name: "Information Technology", coursesCount: 42, color: "text-blue-600", bg: "bg-blue-100", hover: "hover:border-blue-200" },
  { id: "commerce", key: "Commerce", name: "Commerce", coursesCount: 28, color: "text-emerald-600", bg: "bg-emerald-100", hover: "hover:border-emerald-200" },
  { id: "management", key: "Management", name: "Management", coursesCount: 35, color: "text-purple-600", bg: "bg-purple-100", hover: "hover:border-purple-200" },
  { id: "law", key: "Law", name: "Law", coursesCount: 18, color: "text-orange-600", bg: "bg-orange-100", hover: "hover:border-orange-200" },
  { id: "sciences", key: "Science", name: "Sciences & Technology", coursesCount: 65, color: "text-pink-600", bg: "bg-pink-100", hover: "hover:border-pink-200" },
  { id: "social", key: "Social Science", name: "Social Sciences", coursesCount: 22, color: "text-yellow-600", bg: "bg-yellow-100", hover: "hover:border-yellow-200" },
];

export default function CoursesDepartmentHub() {
  const [isHodModalOpen, setIsHodModalOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<any>(null);

  const openHodModal = (e: React.MouseEvent, dept: any) => {
    e.preventDefault();
    setSelectedDept(dept);
    setIsHodModalOpen(true);
  };

  const handleAssignHod = (e: React.FormEvent) => {
    e.preventDefault();
    toast(`HOD role successfully assigned for ${selectedDept?.name}!`);
    setIsHodModalOpen(false);
  };

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen relative">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Network size={36} className="text-purple-600" />
            Departments <span className="text-purple-600">& Courses</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Departments and Assign Leadership</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/college-admin/departments/new">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:bg-purple-700 transition-colors"
            >
              <Plus size={16} /> Add New Course
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, idx) => (
          <Link key={dept.id} href={`/admin/college-admin/departments/${dept.id}`}>
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className={`bg-white p-8 rounded-3xl border-2 border-slate-50 shadow-xl group cursor-pointer transition-colors ${dept.hover} flex flex-col h-full`}
             >
                <div className="flex justify-between items-start mb-6">
                   <div className={`w-16 h-16 rounded-2xl ${dept.bg} ${dept.color} flex items-center justify-center`}>
                     <FileCode2 size={32} />
                   </div>
                   <div className="flex gap-2">
                     <button 
                       onClick={(e) => openHodModal(e, dept)}
                       className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-purple-100 hover:text-purple-600 transition-colors border border-transparent hover:border-purple-200 z-10"
                       title="Assign HOD"
                     >
                       <UserCog size={18} />
                     </button>
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-600 transition-colors">
                       <ChevronRight size={20} />
                     </div>
                   </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-purple-700 transition-colors">
                    {dept.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-4">
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Courses</p>
                       <p className="text-sm font-bold text-slate-700">{dept.coursesCount}</p>
                     </div>
                  </div>
                </div>
             </motion.div>
          </Link>
        ))}
      </div>

      {/* ASSIGN HOD MODAL */}
      <AnimatePresence>
        {isHodModalOpen && selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h2 className="text-xl font-black italic tracking-tighter text-slate-900 flex items-center gap-2">
                  <UserCog size={20} className="text-purple-600" /> Assign HOD
                </h2>
                <button 
                  onClick={() => setIsHodModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-300 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              
              <form onSubmit={handleAssignHod}>
                <div className="p-6 space-y-5">
                   <div>
                     <p className="text-sm font-bold text-slate-700 mb-4">
                       Select a faculty member to lead the <span className="text-purple-600 font-black">{selectedDept.name}</span> department.
                     </p>
                     
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Faculty</label>
                     <select required className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-purple-500 transition-colors appearance-none">
                       <option value="">-- Select Faculty --</option>
                       {departmentMockData[selectedDept.key]?.faculty.map(fac => (
                         <option key={fac.id} value={fac.id}>{fac.name} ({fac.specialization})</option>
                       ))}
                     </select>
                   </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                   <button 
                     type="button"
                     onClick={() => setIsHodModalOpen(false)}
                     className="px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-500 hover:bg-slate-200 transition-colors"
                   >
                     Cancel
                   </button>
                   <button 
                     type="submit"
                     className="bg-purple-600 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-purple-700 transition-colors shadow-lg"
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
