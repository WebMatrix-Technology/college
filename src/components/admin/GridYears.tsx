"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";

interface GridYearsProps {
  basePath: string;
  deptId: string;
  courseId: string;
  icon?: React.ElementType;
}

export default function GridYears({ basePath, deptId, courseId, icon: Icon = Calendar }: GridYearsProps) {
  const years = [
    { id: "1", name: "1st Year", description: "Freshman Batch" },
    { id: "2", name: "2nd Year", description: "Sophomore Batch" },
    { id: "3", name: "3rd Year", description: "Junior Batch" },
    { id: "4", name: "4th Year", description: "Senior Batch" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {years.map((year, idx) => (
        <Link key={year.id} href={`${basePath}/${year.id}`}>
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
                <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-emerald-700 transition-colors">
                  {year.name}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {year.description}
                </p>
              </div>
           </motion.div>
        </Link>
      ))}
    </div>
  );
}
