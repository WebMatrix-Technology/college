"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, ChevronRight, Users, GraduationCap } from "lucide-react";

const mockYears = [
  { id: "year-1", name: "First Year", students: 350, batches: "Class of 2029", color: "text-blue-600", bg: "bg-blue-100", hover: "hover:border-blue-200" },
  { id: "year-2", name: "Second Year", students: 320, batches: "Class of 2028", color: "text-emerald-600", bg: "bg-emerald-100", hover: "hover:border-emerald-200" },
  { id: "year-3", name: "Third Year", students: 310, batches: "Class of 2027", color: "text-purple-600", bg: "bg-purple-100", hover: "hover:border-purple-200" },
  { id: "year-4", name: "Fourth Year", students: 290, batches: "Class of 2026", color: "text-orange-600", bg: "bg-orange-100", hover: "hover:border-orange-200" },
];

export default function YearsListingPage() {
  const params = useParams();
  const deptId = params.deptId as string;
  const degreeId = params.degreeId as string;

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href={`/admin/college-admin/students/${deptId}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Degrees
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Calendar size={36} className="text-emerald-600" />
            <span className="uppercase text-slate-400">{degreeId}</span> <span className="text-emerald-600">Batches</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select an academic year to view students</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {mockYears.map((year, idx) => (
           <Link key={year.id} href={`/admin/college-admin/students/${deptId}/${degreeId}/${year.id}`}>
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: idx * 0.1 }}
               className={`p-8 bg-white border-2 border-slate-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all group cursor-pointer ${year.hover}`}
             >
               <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl ${year.bg} ${year.color} flex items-center justify-center transition-colors`}>
                    <GraduationCap size={24} />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-700 transition-colors">
                    <ChevronRight size={16} />
                  </div>
               </div>
               
               <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">{year.name}</h3>
               
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                     <Users size={14} /> {year.students} Enrolled
                  </div>
                  <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[10px] font-black uppercase tracking-widest">
                     {year.batches}
                  </div>
               </div>
             </motion.div>
           </Link>
         ))}
      </div>
    </div>
  );
}
