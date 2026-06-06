"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Plus, Search, Filter, CalendarDays, CheckCircle2, AlertTriangle, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function TimetableModule() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"];

  // Mock schedule data for a single day (Monday) for visual representation
  const mockSchedule = [
    { time: "08:00 AM", subject: "CSE3001", type: "Theory", room: "SJT-412", faculty: "Dr. K. Sharma" },
    { time: "09:00 AM", subject: "MAT2001", type: "Theory", room: "SJT-412", faculty: "Dr. A. Gupta" },
    { time: "10:00 AM", subject: "MEE1005", type: "Lab", room: "SMV-101", faculty: "Mr. V. Singh" },
    { time: "11:00 AM", subject: "MEE1005", type: "Lab", room: "SMV-101", faculty: "Mr. V. Singh" },
    { time: "12:00 PM", subject: "LUNCH", type: "Break", room: "-", faculty: "-" },
    { time: "01:00 PM", subject: "CSE3002", type: "Theory", room: "TT-215", faculty: "Prof. A. Desai" },
    { time: "02:00 PM", subject: "FREE", type: "Empty", room: "-", faculty: "-" },
    { time: "03:00 PM", subject: "FREE", type: "Empty", room: "-", faculty: "-" },
  ];

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Clock size={36} className="text-orange-600" />
            Master <span className="text-orange-600">Timetable</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Class Schedules & Room Allocation</p>
        </div>
        <div className="flex gap-2">
           <Link href="/admin/college-admin/timetable/new">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-orange-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:bg-orange-700 transition-colors"
             >
               <Plus size={16} /> Draft New Schedule
             </motion.button>
           </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Filters & Navigation */}
         <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4">View Context</h3>
               
               <div className="space-y-4">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Semester</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 outline-none hover:border-orange-500 transition-colors">
                      <option>Fall 2026</option>
                      <option>Winter 2026</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Branch / Program</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 outline-none hover:border-orange-500 transition-colors">
                      <option>B.Tech Computer Science</option>
                      <option>B.Tech Mechanical</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Batch</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 outline-none hover:border-orange-500 transition-colors">
                      <option>Class of 2026</option>
                      <option>Class of 2027</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Section</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 outline-none hover:border-orange-500 transition-colors">
                      <option>Section A</option>
                      <option>Section B</option>
                      <option>Section C</option>
                    </select>
                  </div>
               </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex items-start gap-4">
               <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
               <div>
                 <h4 className="text-xs font-black uppercase tracking-widest text-emerald-900 mb-1">Schedule Validated</h4>
                 <p className="text-[10px] font-bold text-emerald-700 leading-relaxed">
                   No faculty or room clashes detected for this section. The timetable is published and active.
                 </p>
               </div>
            </div>
         </div>

         {/* Timetable Grid View (Monday selected by default) */}
         <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
               {/* Day Tabs */}
               <div className="flex border-b border-slate-100 bg-slate-50 overflow-x-auto custom-scrollbar">
                  {days.map((day, idx) => (
                    <button 
                      key={day}
                      className={`flex-1 py-4 px-6 text-xs font-black uppercase tracking-widest min-w-[120px] transition-colors border-b-2 ${
                        idx === 0 ? 'border-orange-600 text-orange-600 bg-white' : 'border-transparent text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
               </div>

               {/* Schedule List */}
               <div className="divide-y divide-slate-100 p-2">
                 {mockSchedule.map((slot, idx) => (
                   <motion.div 
                     initial={{ opacity: 0, x: 10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.05 }}
                     key={idx}
                     className={`flex items-center gap-6 p-4 rounded-xl transition-colors ${
                       slot.type === 'Break' ? 'bg-slate-50' : 
                       slot.type === 'Empty' ? 'bg-white opacity-50' : 'hover:bg-orange-50/30 group cursor-pointer'
                     }`}
                   >
                     <div className="w-24 shrink-0 border-r border-slate-100 py-2">
                       <p className="text-xs font-black text-slate-900">{slot.time}</p>
                       <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">1 Hour</p>
                     </div>
                     
                     {slot.type === 'Break' ? (
                       <div className="flex-1 flex items-center justify-center py-4">
                         <span className="text-sm font-black uppercase tracking-widest text-slate-400">Lunch Break</span>
                       </div>
                     ) : slot.type === 'Empty' ? (
                       <div className="flex-1 py-4">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Free Slot</span>
                       </div>
                     ) : (
                       <div className="flex-1 flex justify-between items-center">
                         <div>
                           <div className="flex items-center gap-3 mb-1">
                             <h4 className="text-sm font-black text-slate-900 group-hover:text-orange-700 transition-colors">{slot.subject}</h4>
                             <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                               slot.type === 'Theory' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                             }`}>
                               {slot.type}
                             </span>
                           </div>
                           <p className="text-[10px] font-bold text-slate-500 flex items-center gap-2">
                             <span>Room: <strong className="text-slate-700">{slot.room}</strong></span>
                             <span className="w-1 h-1 bg-slate-300 rounded-full" />
                             <span>Faculty: <strong className="text-slate-700">{slot.faculty}</strong></span>
                           </p>
                         </div>
                         <button className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-orange-600 transition-colors opacity-0 group-hover:opacity-100">
                           Edit Slot
                         </button>
                       </div>
                     )}
                   </motion.div>
                 ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
