"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Search, Filter, Plus, FileCode2, Clock, CheckCircle2, ChevronDown, BookOpen } from "lucide-react";

const mockCourses = [
  { code: "CSE3001", name: "Software Engineering", credits: 4, type: "Theory", status: "Active" },
  { code: "CSE3002", name: "Web Programming Lab", credits: 2, type: "Lab", status: "Active" },
  { code: "CSE4011", name: "Artificial Intelligence", credits: 3, type: "Theory + Lab", status: "Active" },
  { code: "CSE4099", name: "Capstone Project", credits: 6, type: "Project", status: "Draft" },
];

const departmentNames: Record<string, string> = {
  "it": "Information Technology",
  "commerce": "Commerce",
  "management": "Management",
  "law": "Law",
  "sciences": "Sciences & Technology",
  "social": "Social Sciences"
};

export default function DepartmentCoursesPage() {
  const params = useParams();
  const deptId = params.deptId as string;
  const deptName = departmentNames[deptId] || "Department";

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href="/admin/college-admin/departments" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-purple-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Departments
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <FileCode2 size={36} className="text-purple-600" />
            {deptName} <span className="text-purple-600">Courses</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Curriculum, Subjects & Credits</p>
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

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by course code or title..." 
              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <button className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 hover:border-slate-300 transition-colors">
               Type: All <ChevronDown size={14} />
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
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Course Identifier</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Structure & Credits</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockCourses.map((course, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={course.code}
                    className="hover:bg-purple-50/30 transition-colors group"
                  >
                    <td className="p-6">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                            <BookOpen size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-900 group-hover:text-purple-700 transition-colors">{course.name}</p>
                            <p className="text-[10px] font-bold text-slate-500 mt-0.5">{course.code}</p>
                          </div>
                       </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-sm font-bold text-slate-800">{course.credits} Credits</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{course.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={`px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest flex items-center w-fit gap-1 ${
                        course.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {course.status === 'Active' ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                        {course.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                       <button className="text-[10px] font-black uppercase tracking-widest text-purple-600 hover:text-purple-800 transition-colors border border-purple-200 hover:border-purple-400 px-4 py-2 rounded-lg bg-white">
                         Edit Syllabus
                       </button>
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
// force reload
