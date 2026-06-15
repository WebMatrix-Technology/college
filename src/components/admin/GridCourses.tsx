"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Mock courses for each department
export const departmentCourses: Record<string, { id: string; name: string; type: string }[]> = {
  "it": [
    { id: "bca", name: "BCA", type: "Undergraduate" },
    { id: "btech-cse", name: "B.Tech CSE", type: "Undergraduate" },
    { id: "mca", name: "MCA", type: "Postgraduate" }
  ],
  "commerce": [
    { id: "bcom", name: "B.Com", type: "Undergraduate" },
    { id: "mcom", name: "M.Com", type: "Postgraduate" }
  ],
  "management": [
    { id: "bba", name: "BBA", type: "Undergraduate" },
    { id: "mba", name: "MBA", type: "Postgraduate" }
  ],
  "law": [
    { id: "llb", name: "LLB", type: "Undergraduate" },
    { id: "llm", name: "LLM", type: "Postgraduate" }
  ],
  "sciences": [
    { id: "bsc-physics", name: "B.Sc Physics", type: "Undergraduate" },
    { id: "bsc-maths", name: "B.Sc Mathematics", type: "Undergraduate" }
  ],
  "social": [
    { id: "ba-english", name: "B.A English", type: "Undergraduate" },
    { id: "ma-history", name: "M.A History", type: "Postgraduate" }
  ]
};

interface GridCoursesProps {
  basePath: string;
  deptId: string;
  icon: React.ElementType;
}

export default function GridCourses({ basePath, deptId, icon: Icon }: GridCoursesProps) {
  const courses = departmentCourses[deptId] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, idx) => (
        <Link key={course.id} href={`${basePath}/${course.id}`}>
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: idx * 0.1 }}
             className="bg-white p-8 rounded-3xl border-2 border-slate-50 shadow-xl group cursor-pointer transition-colors hover:border-slate-200 flex flex-col h-full"
           >
              <div className="flex justify-between items-start mb-6">
                 <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center">
                   <Icon size={32} />
                 </div>
                 <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-600 transition-colors">
                   <ChevronRight size={20} />
                 </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-700 transition-colors">
                  {course.name}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {course.type} Program
                </p>
              </div>
           </motion.div>
        </Link>
      ))}
      {courses.length === 0 && (
        <div className="col-span-full p-8 text-center text-slate-400 text-sm font-bold">
          No courses found for this department.
        </div>
      )}
    </div>
  );
}
