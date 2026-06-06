"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Search, Plus, Network, ChevronRight, FileText } from "lucide-react";
import Link from "next/link";

const departments = [
  { id: "it", name: "Information Technology", degrees: 4, students: 3200, color: "text-blue-600", bg: "bg-blue-100", hover: "hover:border-blue-200" },
  { id: "commerce", name: "Commerce", degrees: 2, students: 1500, color: "text-emerald-600", bg: "bg-emerald-100", hover: "hover:border-emerald-200" },
  { id: "management", name: "Management", degrees: 3, students: 2100, color: "text-purple-600", bg: "bg-purple-100", hover: "hover:border-purple-200" },
  { id: "law", name: "Law", degrees: 2, students: 800, color: "text-orange-600", bg: "bg-orange-100", hover: "hover:border-orange-200" },
  { id: "sciences", name: "Sciences & Technology", degrees: 5, students: 4500, color: "text-pink-600", bg: "bg-pink-100", hover: "hover:border-pink-200" },
  { id: "social", name: "Social Sciences", degrees: 3, students: 1200, color: "text-yellow-600", bg: "bg-yellow-100", hover: "hover:border-yellow-200" },
];

export default function StudentsDepartmentHub() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <GraduationCap size={36} className="text-emerald-600" />
            Student <span className="text-emerald-600">Database</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a department to view enrolled students</p>
        </div>
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
          >
            <FileText size={16} /> Bulk Import
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, idx) => (
          <Link key={dept.id} href={`/admin/college-admin/students/${dept.id}`}>
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className={`bg-white p-8 rounded-3xl border-2 border-slate-50 shadow-xl group cursor-pointer transition-colors ${dept.hover} flex flex-col h-full`}
             >
                <div className="flex justify-between items-start mb-6">
                   <div className={`w-16 h-16 rounded-2xl ${dept.bg} ${dept.color} flex items-center justify-center`}>
                     <Network size={32} />
                   </div>
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-600 transition-colors">
                     <ChevronRight size={20} />
                   </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-emerald-700 transition-colors">
                    {dept.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-4">
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Degrees</p>
                       <p className="text-sm font-bold text-slate-700">{dept.degrees}</p>
                     </div>
                     <div className="w-px h-8 bg-slate-100" />
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Students</p>
                       <p className="text-sm font-bold text-slate-700">{dept.students.toLocaleString()}</p>
                     </div>
                  </div>
                </div>
             </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
