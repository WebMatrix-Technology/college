"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Clock, Calendar, Filter, Search, Edit3, CheckCircle2, AlertTriangle, PlayCircle, BookOpen, Layers, X
} from "lucide-react";
import { toast } from "@/components/Toast";
import { departmentMockData } from "@/lib/departmentMockData";

export default function HodTimetablePage() {
  const [department, setDepartment] = useState("Department");
  const [availableCourses, setAvailableCourses] = useState<string[]>([]);
  const [facultyList, setFacultyList] = useState<any[]>([]);
  const [subjectList, setSubjectList] = useState<any[]>([]);

  // Selection States
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");

  // Modal States
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState<{day: string, time: string, isNew: boolean} | null>(null);

  // Timetable State
  const [timetable, setTimetable] = useState<Record<string, Record<string, any>>>({});

  useEffect(() => {
    const rawDept = localStorage.getItem("hodDepartment") || "Information Technology";
    const dept = Object.keys(departmentMockData).find(
      key => key.toLowerCase() === rawDept.toLowerCase().trim()
    ) || "Information Technology";
    
    setDepartment(dept);
    if (departmentMockData[dept]) {
      setAvailableCourses(departmentMockData[dept].courses);
      setFacultyList(departmentMockData[dept].faculty);
      setSubjectList(departmentMockData[dept].subjects);
    }
  }, []);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"];

  const isSelectionMade = selectedCourse !== "" && selectedBatch !== "";

  // Generate mock timetable when selection changes
  useEffect(() => {
    if (isSelectionMade) {
      const newTimetable: Record<string, Record<string, any>> = {};
      const batchSubjects = subjectList.filter(s => s.course === selectedCourse && s.batch === selectedBatch);
      
      days.forEach(day => {
        newTimetable[day] = {};
        timeSlots.forEach(time => {
          if (Math.random() > 0.4 && batchSubjects.length > 0) {
            const randomSub = batchSubjects[Math.floor(Math.random() * batchSubjects.length)];
            newTimetable[day][time] = {
              subject: randomSub.name,
              subjectId: randomSub.id,
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
    }
  }, [selectedCourse, selectedBatch, subjectList]);

  const handleSaveSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSlot) {
      toast(`Timetable updated for ${editingSlot.day} ${editingSlot.time}`);
      setEditingSlot(null);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex flex-wrap items-center gap-3">
             <Clock size={36} className="text-indigo-600" />
             <span className="text-indigo-600">{department}</span> Timetable
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Master Departmental Schedule & Clash Detection</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => toast("Running clash detection algorithm...")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
           >
             <AlertTriangle size={16} className="text-orange-500" /> Run Clash Check
           </motion.button>
           <motion.button 
             onClick={() => setIsPublishModalOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg hover:bg-indigo-700 transition-colors"
           >
             <PlayCircle size={16} /> Publish Schedule
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
             <Calendar size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">480</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Weekly Classes</p>
           </div>
         </div>
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
             <CheckCircle2 size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">100%</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Faculty Assigned</p>
           </div>
         </div>
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
             <AlertTriangle size={24} />
           </div>
           <div>
             <h3 className="text-3xl font-black italic text-slate-900">0</h3>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Detected Clashes</p>
           </div>
         </div>
      </div>

      {/* --- SELECTION PANEL --- */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl mb-10 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Degree / Course</label>
          <div className="relative">
            <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" />
            <select 
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                setSelectedBatch(""); // Reset batch when course changes
              }}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="" disabled>Choose a Course</option>
              {availableCourses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Academic Year</label>
          <div className="relative">
            <Layers size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 pointer-events-none" />
            <select 
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              disabled={!selectedCourse}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none disabled:opacity-50"
            >
              <option value="" disabled>Choose a Year</option>
              <option value="Year 1">Year 1</option>
              <option value="Year 2">Year 2</option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
            </select>
          </div>
        </div>
      </div>

      {!isSelectionMade ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
           <Clock size={48} className="text-slate-300 mb-4" />
           <h3 className="text-xl font-black italic tracking-tighter text-slate-400">No Timetable Selected</h3>
           <p className="text-xs font-bold text-slate-400 mt-2 max-w-sm">Please use the dropdowns above to select a specific Degree and Academic Year to load its timetable.</p>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden"
        >
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">
              {selectedCourse} • {selectedBatch} Timetable
            </h2>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input 
                  type="text" 
                  placeholder="Search faculty or batch..." 
                  className="w-full md:w-64 pl-9 pr-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button 
                onClick={() => toast("Filter panel opened.")}
                className="px-4 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors"
              >
                <Filter size={16} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto p-6">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-r-2 border-slate-100 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 w-32">Time / Day</th>
                  {timeSlots.map(time => (
                    <th key={time} className="p-4 border-b-2 border-slate-100 text-center bg-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">{time}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {days.map((day, dayIdx) => (
                  <tr key={day}>
                    <td className="p-4 border-r-2 border-b-2 border-slate-100 bg-slate-50 text-xs font-black uppercase tracking-widest text-slate-700">
                      {day}
                    </td>
                    {timeSlots.map((time, timeIdx) => {
                      const slot = timetable[day]?.[time];
                      
                      return (
                        <td key={`${day}-${time}`} className="p-2 border-b-2 border-r-2 border-slate-100 relative group h-[120px]">
                          {!slot ? (
                            <div className="w-full h-full border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => setEditingSlot({day, time, isNew: true})}
                                className="text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
                              >
                                Assign
                              </button>
                            </div>
                          ) : (
                            <motion.div 
                              whileHover={{ scale: 1.02 }}
                              className={`w-full h-full rounded-xl p-3 flex flex-col justify-between cursor-pointer ${
                                slot.type === "Lab" ? "bg-purple-50 border border-purple-100" : "bg-indigo-50 border border-indigo-100"
                              }`}
                              onClick={() => setEditingSlot({day, time, isNew: false})}
                            >
                              <div className="flex justify-between items-start">
                                <span className={`text-[9px] font-black uppercase tracking-widest ${slot.type === "Lab" ? "text-purple-600" : "text-indigo-600"}`}>
                                  {slot.subjectId || "SUB"}
                                </span>
                                <Edit3 size={12} className={`opacity-0 group-hover:opacity-100 transition-opacity ${slot.type === "Lab" ? "text-purple-400" : "text-indigo-400"}`} />
                              </div>
                              <div>
                                <p className={`text-xs font-bold line-clamp-2 ${slot.type === "Lab" ? "text-purple-900" : "text-indigo-900"}`}>{slot.subject}</p>
                                <div className="flex justify-between items-end mt-1">
                                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{slot.faculty}</p>
                                  <p className={`text-[9px] font-black uppercase tracking-widest ${slot.type === "Lab" ? "text-purple-400" : "text-indigo-400"}`}>{slot.room}</p>
                                </div>
                              </div>
                            </motion.div>
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
      )}
      {/* --- PUBLISH MODAL --- */}
      {isPublishModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden p-8 text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <PlayCircle size={32} />
            </div>
            <h2 className="text-2xl font-black italic tracking-tighter text-slate-900 mb-2">Publish Timetable?</h2>
            <p className="text-xs font-bold text-slate-500 mb-8">
              You are about to publish the <strong>{selectedCourse} {selectedBatch}</strong> timetable. This will notify all assigned faculty and students immediately. 
            </p>
            <div className="flex gap-3">
               <button 
                 onClick={() => setIsPublishModalOpen(false)}
                 className="flex-1 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-500 hover:bg-slate-100 border-2 border-slate-100 transition-colors"
               >
                 Cancel
               </button>
               <button 
                 onClick={() => {
                   toast("Timetable Published Successfully!");
                   setIsPublishModalOpen(false);
                 }}
                 className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-colors shadow-lg"
               >
                 Confirm Publish
               </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* --- EDIT / ASSIGN SLOT MODAL --- */}
      {editingSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-black italic tracking-tighter text-slate-900 flex items-center gap-2">
                <Edit3 size={20} className="text-indigo-600" /> {editingSlot.isNew ? "Assign Class" : "Edit Class"}
              </h2>
              <button 
                onClick={() => setEditingSlot(null)}
                className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-300 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveSlot}>
              <div className="p-8 space-y-6">
                 <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex justify-between items-center text-indigo-900 font-bold text-xs uppercase tracking-widest">
                    <span>{editingSlot.day}</span>
                    <span>{editingSlot.time}</span>
                 </div>

                 <div>
                   <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Subject</label>
                     <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none">
                       <option value="">Select Subject...</option>
                       {subjectList.filter(s => s.course === selectedCourse && s.batch === selectedBatch).map(sub => (
                         <option key={sub.id} value={sub.id}>{sub.name}</option>
                       ))}
                     </select>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Faculty</label>
                     <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none">
                       <option value="">Faculty...</option>
                       {facultyList.map(fac => (
                         <option key={fac.id} value={fac.name}>{fac.name}</option>
                       ))}
                     </select>
                   </div>
                   <div>
                     <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Room</label>
                     <input 
                       type="text" 
                       placeholder="e.g. CSE-101" 
                       className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors uppercase"
                     />
                   </div>
                 </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between gap-3">
                 {!editingSlot.isNew ? (
                   <button 
                     type="button"
                     onClick={() => {
                        toast("Slot cleared successfully.");
                        setEditingSlot(null);
                     }}
                     className="px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-red-500 hover:bg-red-50 transition-colors"
                   >
                     Clear Slot
                   </button>
                 ) : <div/>}
                 <div className="flex gap-2">
                   <button 
                     type="button"
                     onClick={() => setEditingSlot(null)}
                     className="px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-slate-500 hover:bg-slate-200 transition-colors"
                   >
                     Cancel
                   </button>
                   <button 
                     type="submit"
                     className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-colors shadow-lg"
                   >
                     Save Class
                   </button>
                 </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
