"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Search, Filter, Plus, FileText, ChevronDown } from "lucide-react";

// In a real app, you would fetch students based on deptId and degreeId.
const mockStudents = [
  { id: "26BCE1042", name: "Rahul Verma", batch: "2026", semester: "Semester 5", status: "Active" },
  { id: "27BEE0042", name: "Priya Nair", batch: "2027", semester: "Semester 3", status: "Active" },
  { id: "25BME2011", name: "Aarav Sharma", batch: "2025", semester: "Semester 7", status: "Alumni" },
  { id: "26BCE1099", name: "Kavya Patel", batch: "2026", semester: "Semester 5", status: "Suspended" },
];

export default function StudentsTablePage() {
  const params = useParams();
  const deptId = params.deptId as string;
  const degreeId = params.degreeId as string;
  const yearId = params.yearId as string;

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href={`/admin/college-admin/students/${deptId}/${degreeId}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Years
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <GraduationCap size={36} className="text-emerald-600" />
            <span className="uppercase text-slate-400">{degreeId} • {yearId.replace('-', ' ')}</span> <span className="text-emerald-600">Students</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage enrolled students for this batch</p>
        </div>
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
          >
            <FileText size={16} /> Export List
          </motion.button>
          <Link href="/admin/college-admin/students/new">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-700 transition-colors"
            >
              <Plus size={16} /> Enroll Student
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by name or registration number..." 
              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <button className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 hover:border-slate-300 transition-colors">
               Batch: All <ChevronDown size={14} />
             </button>
             <button className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors">
               <Filter size={16} />
             </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
           <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-slate-100">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Student Info</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Batch & Term</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockStudents.map((student, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={student.id}
                    className="hover:bg-emerald-50/30 transition-colors group"
                  >
                    <td className="p-6">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 font-black flex items-center justify-center text-xs">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">{student.name}</p>
                            <p className="text-[10px] font-bold text-slate-500 mt-0.5">{student.id}</p>
                          </div>
                       </div>
                    </td>
                    <td className="p-6">
                      <p className="text-sm font-bold text-slate-800">Class of {student.batch}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{student.semester}</p>
                    </td>
                    <td className="p-6">
                      <span className={`px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest ${
                        student.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                        student.status === 'Suspended' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                       <Link href={`/admin/college-admin/students/profile/${student.id}`}>
                         <button className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-800 transition-colors border border-emerald-200 hover:border-emerald-400 px-4 py-2 rounded-lg bg-white">
                           View Profile
                         </button>
                       </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
