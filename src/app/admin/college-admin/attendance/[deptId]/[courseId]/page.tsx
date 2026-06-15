"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, AlertTriangle, Download, Search, Filter, UserX, ArrowLeft } from "lucide-react";
import { toast } from "@/components/Toast";

const mockDefaulters = [
  { id: "26BCE1042", name: "Rahul Verma", branch: "B.Tech CSE", attendance: "68%", classesMissed: 14, lastAbsent: "Yesterday" },
  { id: "27BEE0042", name: "Priya Nair", branch: "B.Tech EEE", attendance: "72%", classesMissed: 12, lastAbsent: "2 Days Ago" },
  { id: "25BME2011", name: "Aarav Sharma", branch: "B.Tech MECH", attendance: "74%", classesMissed: 11, lastAbsent: "Today" },
];

export default function AttendanceModule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const deptId = params.deptId as string;
  const courseId = params.courseId as string;

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href={`/admin/college-admin/attendance/${deptId}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-teal-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Programs
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <CalendarCheck size={36} className="text-teal-600" />
            <span className="uppercase">{courseId}</span> <span className="text-teal-600">Attendance</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Student Attendance & Defaulters</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             onClick={() => toast("Exporting global report... Check your downloads shortly.")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
           >
             <Download size={16} /> Export Global Report
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Live Metrics */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none" />
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Today's Pulse</h3>
               
               <div className="mb-8">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Campus Average</p>
                 <div className="flex items-end gap-3">
                   <p className="text-5xl font-black italic text-emerald-400 leading-none">92.4%</p>
                   <span className="text-emerald-500 text-xs font-black uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded mb-1">Healthy</span>
                 </div>
               </div>

               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Classes Logged</span>
                     <span className="text-[10px] font-bold text-white">412 / 480</span>
                   </div>
                   <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[85%]" />
                   </div>
                 </div>
               </div>
            </div>

            <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-start gap-4">
               <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
               <div>
                 <h4 className="text-xs font-black uppercase tracking-widest text-red-900 mb-1">Defaulter Alert</h4>
                 <p className="text-[10px] font-bold text-red-700 leading-relaxed">
                   142 students are currently below the 75% mandatory threshold. Automated warning emails have not been dispatched this week.
                 </p>
                 <button 
                   onClick={() => toast("Warning emails dispatched to 142 students.")}
                   className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg"
                 >
                   Dispatch Warnings
                 </button>
               </div>
            </div>
         </div>

         {/* Defaulter Table */}
         <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden h-full flex flex-col">
               <div className="bg-slate-50 p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                 <div>
                   <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Critical Defaulters List (<span className="text-red-600">{'<'} 75%</span>)</h3>
                 </div>
                 <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                      <input 
                        type="text" 
                        placeholder="Search student..." 
                        className="w-full md:w-64 pl-9 pr-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-emerald-500 transition-colors"
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

               <div className="flex-1 overflow-x-auto">
                 <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-white border-b border-slate-100">
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Student Info</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Attendance %</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Classes Missed</th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {mockDefaulters.map((student, idx) => (
                        <motion.tr 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          key={student.id}
                          className="hover:bg-red-50/30 transition-colors group"
                        >
                          <td className="p-6">
                             <div className="flex items-center gap-3">
                               <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                                 <UserX size={16} />
                               </div>
                               <div>
                                 <p className="text-sm font-black text-slate-900 group-hover:text-red-700 transition-colors">{student.name}</p>
                                 <p className="text-[10px] font-bold text-slate-500 mt-0.5">{student.id} • {student.branch}</p>
                               </div>
                             </div>
                          </td>
                          <td className="p-6">
                            <span className="text-xl font-black italic text-red-600">{student.attendance}</span>
                          </td>
                          <td className="p-6">
                            <p className="text-sm font-black text-slate-700">{student.classesMissed} Classes</p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Last absent: {student.lastAbsent}</p>
                          </td>
                          <td className="p-6 text-right">
                             <Link href={`/admin/college-admin/students/profile/${student.id}`}>
                               <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors underline">
                                 View History
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
      </div>
    </div>
  );
}
