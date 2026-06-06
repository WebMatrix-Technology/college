"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, Download, Network } from "lucide-react";

// Mock database to map department ID to its corresponding degrees/programs
const degreeMap: Record<string, { id: string, name: string, students: number, duration: string }[]> = {
  "it": [
    { id: "btech-it", name: "B.Tech Information Technology", students: 1200, duration: "4 Years" },
    { id: "btech-cs", name: "B.Tech Computer Science", students: 1500, duration: "4 Years" },
    { id: "bca", name: "BCA (Bachelor of Computer Applications)", students: 350, duration: "3 Years" },
    { id: "bsc-it", name: "B.Sc IT & CS", students: 150, duration: "3 Years" },
  ],
  "management": [
    { id: "bba", name: "BBA (Bachelor of Business Admin)", students: 800, duration: "3 Years" },
    { id: "mba", name: "MBA (Master of Business Admin)", students: 1200, duration: "2 Years" },
    { id: "bms", name: "BMS (Bachelor of Management Studies)", students: 100, duration: "3 Years" }
  ],
  "commerce": [
    { id: "bcom", name: "B.Com (General)", students: 1000, duration: "3 Years" },
    { id: "bcom-hons", name: "B.Com (Honors)", students: 500, duration: "3 Years" }
  ],
  "law": [
    { id: "llb", name: "LLB (Bachelor of Laws)", students: 600, duration: "3 Years" },
    { id: "ballb", name: "BA LLB (Integrated)", students: 200, duration: "5 Years" }
  ],
  "sciences": [
    { id: "bsc-phy", name: "B.Sc Physics", students: 400, duration: "3 Years" },
    { id: "bsc-chem", name: "B.Sc Chemistry", students: 450, duration: "3 Years" }
  ],
  "social": [
    { id: "ba-eng", name: "BA English Literature", students: 300, duration: "3 Years" },
    { id: "ba-psych", name: "BA Psychology", students: 400, duration: "3 Years" }
  ]
};

const departmentNames: Record<string, string> = {
  "it": "Information Technology",
  "commerce": "Commerce",
  "management": "Management",
  "law": "Law",
  "sciences": "Sciences & Technology",
  "social": "Social Sciences"
};

export default function DegreesListingPage() {
  const params = useParams();
  const deptId = params.deptId as string;
  const degrees = degreeMap[deptId] || [];
  const deptName = departmentNames[deptId] || "Department";

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href="/admin/college-admin/students" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Departments
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Network size={36} className="text-emerald-600" />
            {deptName} <span className="text-emerald-600">Degrees</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a degree program to view enrolled students</p>
        </div>
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
          >
            <Download size={16} /> Export Dept Report
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {degrees.length === 0 ? (
           <div className="col-span-2 p-12 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-center">
              <p className="text-slate-500 font-bold">No degrees configured for this department yet.</p>
           </div>
         ) : (
           degrees.map((degree, idx) => (
             <Link key={degree.id} href={`/admin/college-admin/students/${deptId}/${degree.id}`}>
               <motion.div 
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all group cursor-pointer hover:border-emerald-200"
               >
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <BookOpen size={24} />
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                      <ChevronRight size={16} />
                    </div>
                 </div>
                 
                 <h3 className="text-lg font-black text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">{degree.name}</h3>
                 
                 <div className="flex items-center gap-4">
                    <div className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-black uppercase tracking-widest">
                       {degree.duration}
                    </div>
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[10px] font-black uppercase tracking-widest">
                       {degree.students.toLocaleString()} Students
                    </div>
                 </div>
               </motion.div>
             </Link>
           ))
         )}
      </div>
    </div>
  );
}
