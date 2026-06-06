"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Search, Filter, Plus, FileText, ChevronDown, Network } from "lucide-react";

const mockFaculty = [
  { id: "FAC-1021", name: "Dr. K. Sharma", designation: "Professor & HOD", subjects: 2, status: "Active" },
  { id: "FAC-1033", name: "Prof. M. Reddy", designation: "Associate Professor", subjects: 3, status: "Active" },
  { id: "FAC-1045", name: "Dr. A. Gupta", designation: "Assistant Professor", subjects: 2, status: "On Leave" },
  { id: "FAC-1088", name: "P. Patel", designation: "Lab Assistant", subjects: 4, status: "Active" },
];

const departmentNames: Record<string, string> = {
  "it": "Information Technology",
  "commerce": "Commerce",
  "management": "Management",
  "law": "Law",
  "sciences": "Sciences & Technology",
  "social": "Social Sciences"
};

export default function DepartmentFacultyPage() {
  const params = useParams();
  const deptId = params.deptId as string;
  const deptName = departmentNames[deptId] || "Department";

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href="/admin/college-admin/faculty" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Departments
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Network size={36} className="text-indigo-600" />
            {deptName} <span className="text-indigo-600">Faculty</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage academic and support staff</p>
        </div>
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
          >
            <FileText size={16} /> Export List
          </motion.button>
          <Link href="/admin/college-admin/faculty/new">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:bg-indigo-700 transition-colors"
            >
              <Plus size={16} /> Add Faculty
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
              placeholder="Search by name or ID..." 
              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <button className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 hover:border-slate-300 transition-colors">
               Role: All <ChevronDown size={14} />
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
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Staff Info</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Role / Workload</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockFaculty.map((staff, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={staff.id}
                    className="hover:bg-indigo-50/30 transition-colors group"
                  >
                    <td className="p-6">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 font-black flex items-center justify-center text-xs">
                            {staff.name.split(' ').map(n=>n[0]).join('').replace('.','').substring(0,2)}
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-900 group-hover:text-indigo-700 transition-colors">{staff.name}</p>
                            <p className="text-[10px] font-bold text-slate-500 mt-0.5">{staff.id}</p>
                          </div>
                       </div>
                    </td>
                    <td className="p-6">
                      <p className="text-sm font-bold text-slate-800">{staff.designation}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{staff.subjects} Subjects Assigned</p>
                    </td>
                    <td className="p-6">
                      <span className={`px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest ${
                        staff.status === 'Active' ? 'bg-indigo-100 text-indigo-700' :
                        staff.status === 'On Leave' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {staff.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                       <Link href={`/admin/college-admin/faculty/profile/${staff.id}`}>
                         <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors border border-indigo-200 hover:border-indigo-400 px-4 py-2 rounded-lg bg-white">
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
