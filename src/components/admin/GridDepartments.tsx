"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const departments = [
  { id: "it", name: "Information Technology", color: "text-blue-600", bg: "bg-blue-100", hover: "hover:border-blue-200" },
  { id: "commerce", name: "Commerce", color: "text-emerald-600", bg: "bg-emerald-100", hover: "hover:border-emerald-200" },
  { id: "management", name: "Management", color: "text-purple-600", bg: "bg-purple-100", hover: "hover:border-purple-200" },
  { id: "law", name: "Law", color: "text-orange-600", bg: "bg-orange-100", hover: "hover:border-orange-200" },
  { id: "sciences", name: "Sciences & Technology", color: "text-pink-600", bg: "bg-pink-100", hover: "hover:border-pink-200" },
  { id: "social", name: "Social Sciences", color: "text-yellow-600", bg: "bg-yellow-100", hover: "hover:border-yellow-200" },
];

export const departmentNames = departments.reduce((acc, dept) => {
  acc[dept.id] = dept.name;
  return acc;
}, {} as Record<string, string>);

interface GridDepartmentsProps {
  basePath: string;
  icon: React.ElementType;
}

export default function GridDepartments({ basePath, icon: Icon }: GridDepartmentsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {departments.map((dept, idx) => (
        <Link key={dept.id} href={`${basePath}/${dept.id}`}>
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: idx * 0.1 }}
             className={`bg-white p-8 rounded-3xl border-2 border-slate-50 shadow-xl group cursor-pointer transition-colors ${dept.hover} flex flex-col h-full`}
           >
              <div className="flex justify-between items-start mb-6">
                 <div className={`w-16 h-16 rounded-2xl ${dept.bg} ${dept.color} flex items-center justify-center`}>
                   <Icon size={32} />
                 </div>
                 <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-600 transition-colors">
                   <ChevronRight size={20} />
                 </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-700 transition-colors">
                  {dept.name}
                </h3>
              </div>
           </motion.div>
        </Link>
      ))}
    </div>
  );
}
