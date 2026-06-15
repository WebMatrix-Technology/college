"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CalendarDays, Clock, Users, BookOpen, Layers, X, Edit3
} from "lucide-react";
import { toast } from "@/components/Toast";
import { departmentMockData } from "@/lib/departmentMockData";

export default function BatchCoordinatorTimetablePage() {
  const [course, setCourse] = useState("Course");
  const [batch, setBatch] = useState("Batch");

  // Filtered Options
  const [facultyList, setFacultyList] = useState<any[]>([]);
  const [subjectsList, setSubjectsList] = useState<any[]>([]);

  // Modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState<{day: string, time: string} | null>(null);

  // Time Slots
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

  // Mock State for Timetable Grid
  const [timetable, setTimetable] = useState<Record<string, Record<string, any>>>({});

  useEffect(() => {
    const coordinatorCourse = localStorage.getItem("coordinatorCourse") || "B.Tech";
    const coordinatorBatch = localStorage.getItem("coordinatorBatch") || "Year 1";
    setCourse(coordinatorCourse);
    setBatch(coordinatorBatch);

    let batchSubjects: any[] = [];
    let deptFaculty: any[] = [];

    for (const [deptName, data] of Object.entries(departmentMockData)) {
      if (data.courses.includes(coordinatorCourse)) {
        batchSubjects = data.subjects.filter(s => s.course === coordinatorCourse && s.batch === coordinatorBatch);
        deptFaculty = data.faculty;
        break;
      }
    }

    setSubjectsList(batchSubjects);
    setFacultyList(deptFaculty);
    
    // Generate some mock slots for the timetable
    const newTimetable: Record<string, Record<string, any>> = {};
    days.forEach(day => {
      newTimetable[day] = {};
      times.forEach(time => {
        // Randomly assign a class or keep it free
        if (Math.random() > 0.4 && batchSubjects.length > 0) {
          const randomSub = batchSubjects[Math.floor(Math.random() * batchSubjects.length)];
          newTimetable[day][time] = {
            subject: randomSub.name,
            faculty: randomSub.faculty || "TBA",
            room: `Room ${Math.floor(Math.random() * 50) + 100}`,
            type: randomSub.type
          };
        } else {
          newTimetable[day][time] = null;
        }
      });
    });
    setTimetable(newTimetable);
  }, []); 

  const openEditModal = (day: string, time: string) => {
    setEditingSlot({ day, time });
    setIsEditModalOpen(true);
  };

  const handleSaveSlot = (e: React.FormEvent) => {
    e.preventDefault();
    toast(`Timetable updated for ${editingSlot?.day} ${editingSlot?.time}`);
    setIsEditModalOpen(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-3">
             <CalendarDays size={36} className="text-teal-600" />
             <span className="text-teal-600">{course} • {batch}</span> Schedule
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Weekly Schedules & Master Calendar</p>
        </div>
      </div>

      {/* --- SELECTION PANEL --- */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl mb-10 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Active Course</label>
          <div className="relative">
            <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500" />
            <div className="w-full bg-slate-100 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-500 cursor-not-allowed">
              {course} (Locked)
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Active Batch</label>
          <div className="relative">
            <Layers size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500" />
            <div className="w-full bg-slate-100 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-500 cursor-not-allowed">
              {batch} (Locked)
            </div>
          </div>
        </div>
      </div>

      {/* --- TIMETABLE GRID --- */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden mb-10">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 border-r border-slate-200 text-center w-32 shrink-0 sticky left-0 z-20 bg-slate-50 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  <Clock size={20} className="mx-auto text-slate-400" />
                </th>
                {times.map(time => (
                  <th key={time} className="p-4 border-r border-slate-200 min-w-[180px]">
                    <div className="text-xs font-black text-slate-700 text-center">{time}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((day, dIdx) => (
                <tr key={day} className="border-b border-slate-100">
                  <td className="p-4 border-r border-slate-200 font-black uppercase text-[10px] tracking-widest text-slate-500 text-center sticky left-0 z-10 bg-white shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                    {day}
                  </td>
                  {times.map((time, tIdx) => {
                    const slot = timetable[day]?.[time];
                    
                    return (
                      <td key={time} className="p-2 border-r border-slate-100 relative group h-[120px]">
                        {slot ? (
                          <div className={`w-full h-full p-3 rounded-xl border flex flex-col justify-between transition-colors ${
                            slot.type === "Core" ? "bg-teal-50 border-teal-100 hover:border-teal-300" :
                            slot.type === "Lab" ? "bg-orange-50 border-orange-100 hover:border-orange-300" :
                            "bg-blue-50 border-blue-100 hover:border-blue-300"
                          }`}>
                            <div>
                              <p className={`text-xs font-black line-clamp-2 ${
                                slot.type === "Core" ? "text-teal-900" :
                                slot.type === "Lab" ? "text-orange-900" : "text-blue-900"
                              }`}>
                                {slot.subject}
                              </p>
                              <p className={`text-[9px] font-bold mt-1 ${
                                slot.type === "Core" ? "text-teal-600" :
                                slot.type === "Lab" ? "text-orange-600" : "text-blue-600"
                              }`}>
                                {slot.faculty}
                              </p>
                            </div>
                            <div className="flex justify-between items-end">
                               <p className={`text-[9px] font-black uppercase tracking-widest ${
                                 slot.type === "Core" ? "text-teal-400" :
                                 slot.type === "Lab" ? "text-orange-400" : "text-blue-400"
                               }`}>
                                 {slot.room}
                               </p>
                               <button 
                                 onClick={() => openEditModal(day, time)}
                                 className={`p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 backdrop-blur-sm ${
                                   slot.type === "Core" ? "text-teal-600 hover:bg-white" :
                                   slot.type === "Lab" ? "text-orange-600 hover:bg-white" : "text-blue-600 hover:bg-white"
                                 }`}
                               >
                                 <Edit3 size={12} />
                               </button>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <button 
                              onClick={() => openEditModal(day, time)}
                              className="w-10 h-10 rounded-full border-2 border-dashed border-slate-200 text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-teal-300 hover:text-teal-500 hover:bg-teal-50 transition-all"
                            >
                              <Edit3 size={16} />
                            </button>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* --- EDIT SLOT MODAL --- */}
      <AnimatePresence>
        {isEditModalOpen && editingSlot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h2 className="text-lg font-black italic tracking-tighter text-slate-900 flex items-center gap-2">
                  <Edit3 size={18} className="text-teal-600" /> Manage Slot
                </h2>
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-300 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-6 border-b border-slate-100 bg-slate-100/50 text-center">
                 <p className="text-sm font-black text-slate-900">{editingSlot.day}</p>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{editingSlot.time}</p>
              </div>

              <form onSubmit={handleSaveSlot}>
                <div className="p-6 space-y-5">
                   <div>
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Assign Subject</label>
                     <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-teal-500 transition-colors appearance-none">
                       <option value="">-- Free Period --</option>
                       {subjectsList.map(sub => (
                         <option key={sub.id} value={sub.name}>{sub.name}</option>
                       ))}
                     </select>
                   </div>

                   <div>
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Assign Faculty</label>
                     <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-teal-500 transition-colors appearance-none">
                       <option value="">-- TBA --</option>
                       {facultyList.map(fac => (
                         <option key={fac.id} value={fac.name}>{fac.name}</option>
                       ))}
                     </select>
                   </div>

                   <div>
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Room / Lab</label>
                     <input 
                       type="text" 
                       placeholder="e.g. Room 101" 
                       className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-teal-500 transition-colors"
                     />
                   </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between gap-3">
                   <button 
                     type="button"
                     onClick={() => {
                        toast("Slot cleared successfully.");
                        setIsEditModalOpen(false);
                     }}
                     className="px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-red-500 hover:bg-red-50 transition-colors"
                   >
                     Clear Slot
                   </button>
                   <div className="flex gap-2">
                     <button 
                       type="button"
                       onClick={() => setIsEditModalOpen(false)}
                       className="px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-500 hover:bg-slate-200 transition-colors"
                     >
                       Cancel
                     </button>
                     <button 
                       type="submit"
                       className="bg-teal-600 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-teal-700 transition-colors shadow-lg"
                     >
                       Save
                     </button>
                   </div>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
