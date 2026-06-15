"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  FileSpreadsheet, ArrowLeft, Download, Settings, Users, 
  AlertTriangle, CheckCircle2, ShieldCheck, Search, Filter, 
  CalendarDays, Send, Share, BookOpen
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/components/Toast";

const mockSubjects = [
  { id: "CSE3001", name: "Advanced Data Structures", date: "Oct 12, 2026", time: "09:00 AM - 12:00 PM", rooms: "Block A (101, 102, 103)", status: "Completed", invigilators: 6 },
  { id: "CSE3002", name: "Operating Systems", date: "Oct 14, 2026", time: "09:00 AM - 12:00 PM", rooms: "Block B (201, 202)", status: "In Progress", invigilators: 4 },
  { id: "CSE3005", name: "Machine Learning Foundations", date: "Oct 16, 2026", time: "02:00 PM - 05:00 PM", rooms: "Block A (104, 105, 106)", status: "Upcoming", invigilators: 8 },
  { id: "MAT2002", name: "Discrete Mathematics", date: "Oct 18, 2026", time: "09:00 AM - 12:00 PM", rooms: "Block C (301, 302)", status: "Upcoming", invigilators: 4 },
  { id: "CSE3008", name: "Computer Networks", date: "Oct 20, 2026", time: "09:00 AM - 12:00 PM", rooms: "Block B (203, 204)", status: "Upcoming", invigilators: 5 }
];

export default function ExamDetailsPage() {
  const params = useParams();
  const deptId = params.deptId as string;
  const courseId = params.courseId as string;
  const examId = params.examId as string;

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href={`/admin/college-admin/examinations/${deptId}/${courseId}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Exams
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <FileSpreadsheet size={36} className="text-blue-600" />
            Exam <span className="text-blue-600 uppercase">{examId}</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{courseId} • Department of {deptId}</p>
        </div>
        <div className="flex flex-wrap gap-2">
           <motion.button 
             onClick={() => toast("Exporting exam results... Check your downloads shortly.")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
           >
             <Download size={16} /> Export Results
           </motion.button>
           <motion.button 
             onClick={() => toast("Results Published globally.")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-700 transition-colors"
           >
             <Share size={16} /> Publish Results
           </motion.button>
           <motion.button 
             onClick={() => toast("Edit Settings modal opened (coming soon).")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-slate-900 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg hover:bg-slate-800 transition-colors"
           >
             <Settings size={16} /> Edit Settings
           </motion.button>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] relative overflow-hidden">
           <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-500/50 rounded-full blur-2xl" />
           <div className="relative z-10">
             <div className="w-10 h-10 bg-blue-500/50 rounded-xl flex items-center justify-center mb-4">
               <Users size={20} className="text-blue-50" />
             </div>
             <p className="text-3xl font-black italic">1,420</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mt-1">Total Candidates</p>
           </div>
         </div>
         
         <div className="bg-white border-2 border-red-50 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
           <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4">
             <AlertTriangle size={20} />
           </div>
           <div>
             <p className="text-3xl font-black italic text-red-600">3</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Malpractice Incidents</p>
           </div>
         </div>

         <div className="bg-white border-2 border-slate-50 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
           <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center mb-4">
             <CheckCircle2 size={20} />
           </div>
           <div>
             <div className="flex items-end gap-2">
                <p className="text-3xl font-black italic text-slate-900">65%</p>
                <p className="text-xs font-bold text-slate-400 mb-1">Graded</p>
             </div>
             <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[65%]" />
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Grading Status</p>
           </div>
         </div>

         <div className="bg-white border-2 border-slate-50 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
           <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mb-4">
             <ShieldCheck size={20} />
           </div>
           <div>
             <p className="text-3xl font-black italic text-slate-900">100%</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Invigilator Coverage</p>
           </div>
         </div>
      </div>

      {/* Subjects Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
            <CalendarDays size={16} className="text-blue-500" /> Subject Schedule
          </h2>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search subject..." 
                className="w-full md:w-64 pl-9 pr-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button 
              onClick={() => toast("Filter panel opened (coming soon).")}
              className="px-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors"
            >
              <Filter size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Subject Info</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Date & Time</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Seating & Invigilation</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockSubjects.map((subject, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={subject.id}
                  className="hover:bg-blue-50/30 transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                        <BookOpen size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900 group-hover:text-blue-700 transition-colors">{subject.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] font-bold text-slate-500">{subject.id}</span>
                          <span className={`px-1.5 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-widest ${
                            subject.status === "Completed" ? "bg-emerald-100 text-emerald-700" :
                            subject.status === "In Progress" ? "bg-blue-100 text-blue-700 animate-pulse" :
                            "bg-slate-100 text-slate-500"
                          }`}>
                            {subject.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="text-sm font-black text-slate-700">{subject.date}</p>
                    <p className="text-[10px] font-bold text-slate-500 mt-0.5">{subject.time}</p>
                  </td>
                  <td className="p-6">
                    <p className="text-xs font-bold text-slate-700">{subject.rooms}</p>
                    <p className="text-[10px] font-bold text-slate-500 mt-0.5">{subject.invigilators} Invigilators Assigned</p>
                  </td>
                  <td className="p-6 text-right space-x-2">
                     <button 
                       onClick={() => toast(`Dispatching duty roster for ${subject.id}...`)}
                       className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors border border-slate-200 hover:border-blue-200 px-3 py-2 rounded-lg bg-white shadow-sm hover:shadow-md inline-flex items-center gap-1"
                     >
                       <Send size={12} /> Dispatch
                     </button>
                     <button 
                       onClick={() => toast(`Manage seating for ${subject.id} opened.`)}
                       className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors border border-slate-200 hover:border-slate-300 px-3 py-2 rounded-lg bg-white shadow-sm hover:shadow-md"
                     >
                       Manage
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
