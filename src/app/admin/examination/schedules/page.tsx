"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CalendarDays, 
  Search,
  Plus,
  Clock,
  MapPin,
  MoreVertical,
  X,
  CheckCircle2,
  Edit2,
  Trash2,
  Eye,
  AlertCircle
} from "lucide-react";

export default function ExamSchedulesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Mid-Terms");
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  
  // Modals state
  const [viewExam, setViewExam] = useState<any>(null);
  const [editExam, setEditExam] = useState<any>(null);
  const [cancelExam, setCancelExam] = useState<any>(null);

  // Convert to state to allow mutations
  const [exams, setExams] = useState([
    { id: 1, course: "B.Tech", subject: "Quantum Computing (CS-401)", date: "2026-06-18", time: "10:00", endTime: "13:00", room: "Hall A, Hall B", status: "Scheduled", type: "Mid-Terms" },
    { id: 2, course: "B.Tech", subject: "Neural Networks (AI-302)", date: "2026-06-19", time: "14:00", endTime: "17:00", room: "Hall C", status: "Scheduled", type: "Mid-Terms" },
    { id: 3, course: "MBA", subject: "Financial Management (FIN-201)", date: "2026-06-20", time: "09:00", endTime: "12:00", room: "Hall D", status: "Draft", type: "Finals" },
    { id: 4, course: "LLB", subject: "Constitutional Law (LAW-101)", date: "2026-06-21", time: "10:00", endTime: "13:00", room: "Hall A", status: "Scheduled", type: "Mid-Terms" },
  ]);

  const handleDelete = (id: number) => {
    setExams(exams.filter(e => e.id !== id));
    setCancelExam(null);
  };

  const filteredExams = exams.filter(e => e.type === activeTab);

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 flex items-center gap-3">
            <CalendarDays className="text-rose-600" size={32} />
            Exam Schedules
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
            Master Timetable Configuration
          </p>
        </div>
        
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button 
            onClick={() => {
              setEditExam(null);
              setIsModalOpen(true);
            }}
            className="w-full flex justify-center items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg shadow-slate-200"
          >
            <Plus size={16} /> Schedule New Exam
          </button>
        </div>
      </div>

      {/* TABS & SEARCH */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-wrap gap-2">
          {["Mid-Terms", "Finals", "Practicals"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors ${
                activeTab === tab 
                  ? "bg-rose-50 text-rose-600" 
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search subject or code..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-xs font-bold focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* SCHEDULE LIST */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <div className="col-span-3">Subject</div>
          <div className="col-span-2">Course</div>
          <div className="col-span-3">Date & Time</div>
          <div className="col-span-2">Venue</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {filteredExams.map((exam) => (
            <motion.div 
              key={exam.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50/50 transition-colors group"
            >
              <div className="col-span-3 font-bold text-sm text-slate-900">{exam.subject}</div>
              <div className="col-span-2">
                 <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[9px] font-black uppercase tracking-widest">
                   {exam.course}
                 </span>
              </div>
              <div className="col-span-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <CalendarDays size={12} className="text-rose-500" /> {exam.date}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                    <Clock size={12} /> {exam.time} - {exam.endTime}
                  </span>
                </div>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-medium text-slate-600 flex items-center gap-1">
                  <MapPin size={12} className="text-slate-400" /> {exam.room}
                </span>
              </div>
              <div className="col-span-1">
                 <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${
                   exam.status === 'Scheduled' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                 }`}>
                   {exam.status}
                 </span>
              </div>
              <div className="col-span-1 text-right relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === exam.id ? null : exam.id)}
                  className="text-slate-400 hover:text-rose-600 transition-colors p-2 rounded-full hover:bg-slate-100"
                >
                  <MoreVertical size={16} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === exam.id && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden z-20"
                    >
                      <button 
                        onClick={() => {
                          setViewExam(exam);
                          setActiveDropdown(null);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        <Eye size={14} className="text-slate-400" /> View Details
                      </button>
                      <button 
                        onClick={() => {
                          setEditExam(exam);
                          setIsModalOpen(true);
                          setActiveDropdown(null);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        <Edit2 size={14} className="text-blue-500" /> Edit Schedule
                      </button>
                      <button 
                        onClick={() => {
                          setCancelExam(exam);
                          setActiveDropdown(null);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-rose-600 hover:bg-rose-50 transition-colors"
                      >
                        <Trash2 size={14} /> Cancel Exam
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
          {filteredExams.length === 0 && (
            <div className="p-12 text-center text-slate-500 text-sm font-medium">
              No exams found for this category.
            </div>
          )}
        </div>
        </div>
      </div>
      </div>

      {/* SCHEDULE/EDIT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100"
            >
              <div className="bg-slate-900 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-tighter">
                    {editExam ? "Edit Exam Schedule" : "Schedule Exam"}
                  </h2>
                  <p className="text-rose-400 text-[10px] font-black uppercase tracking-widest mt-1">
                    {editExam ? "Update Master Timetable" : "Add to Master Timetable"}
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Course & Subject</label>
                  <select defaultValue={editExam ? `${editExam.course} - ${editExam.subject}` : "B.Tech - Quantum Computing (CS-401)"} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold focus:outline-none focus:border-rose-500">
                    <option>B.Tech - Quantum Computing (CS-401)</option>
                    <option>B.Tech - Neural Networks (AI-302)</option>
                    <option>MBA - Financial Management (FIN-201)</option>
                    <option>LLB - Constitutional Law (LAW-101)</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Date</label>
                    <input type="date" defaultValue={editExam?.date || ""} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold focus:outline-none focus:border-rose-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Exam Type</label>
                    <select defaultValue={editExam?.type || "Mid-Terms"} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold focus:outline-none focus:border-rose-500">
                      <option>Mid-Terms</option>
                      <option>Finals</option>
                      <option>Practicals</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Start Time</label>
                    <input type="time" defaultValue={editExam?.time || "10:00"} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold focus:outline-none focus:border-rose-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">End Time</label>
                    <input type="time" defaultValue={editExam?.endTime || "13:00"} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold focus:outline-none focus:border-rose-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Assign Venue</label>
                  <select defaultValue={editExam?.room || "Hall A"} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold focus:outline-none focus:border-rose-500">
                    <option value="Hall A">Hall A (Capacity: 150)</option>
                    <option value="Hall B">Hall B (Capacity: 100)</option>
                    <option value="Hall C">Hall C (Capacity: 200)</option>
                    <option value="Hall D">Hall D (Capacity: 120)</option>
                  </select>
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-100 flex gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-slate-50 text-slate-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30"
                >
                  <CheckCircle2 size={16} /> {editExam ? "Save Changes" : "Confirm Schedule"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CANCEL EXAM MODAL */}
      <AnimatePresence>
        {cancelExam && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full overflow-hidden border border-slate-100"
            >
              <div className="bg-slate-900 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-tighter">Cancel Exam</h2>
                  <p className="text-rose-400 text-[10px] font-black uppercase tracking-widest mt-1">Warning: Destructive Action</p>
                </div>
                <button onClick={() => setCancelExam(null)} className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-xl border border-rose-100">
                   <AlertCircle className="text-rose-500 shrink-0" />
                   <div>
                     <h4 className="text-sm font-bold text-slate-900">Confirm Cancellation</h4>
                     <p className="text-xs text-slate-600 leading-relaxed mt-1">
                       Are you sure you want to cancel the <strong>{cancelExam.subject}</strong> exam scheduled on {cancelExam.date}? This action cannot be undone and will notify all enrolled students.
                     </p>
                   </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-100 flex gap-4 bg-slate-50">
                <button 
                  onClick={() => setCancelExam(null)}
                  className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-colors"
                >
                  Keep Exam
                </button>
                <button 
                  onClick={() => handleDelete(cancelExam.id)}
                  className="flex-1 py-3 bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30"
                >
                  <Trash2 size={16} /> Yes, Cancel Exam
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* VIEW DETAILS MODAL */}
      <AnimatePresence>
        {viewExam && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full overflow-hidden border border-slate-100"
            >
              <div className="bg-slate-900 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-tighter">Exam Details</h2>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mt-1">Read-only View</p>
                </div>
                <button onClick={() => setViewExam(null)} className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                   <div>
                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Subject</p>
                     <p className="text-sm font-bold text-slate-900">{viewExam.subject}</p>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Course</p>
                       <p className="text-xs font-bold text-slate-700">{viewExam.course}</p>
                     </div>
                     <div>
                       <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Type</p>
                       <p className="text-xs font-bold text-slate-700">{viewExam.type}</p>
                     </div>
                   </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 space-y-3">
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <p className="text-[9px] font-black uppercase tracking-widest text-blue-400">Date</p>
                       <p className="text-xs font-bold text-blue-900 flex items-center gap-1"><CalendarDays size={14}/> {viewExam.date}</p>
                     </div>
                     <div>
                       <p className="text-[9px] font-black uppercase tracking-widest text-blue-400">Time</p>
                       <p className="text-xs font-bold text-blue-900 flex items-center gap-1"><Clock size={14}/> {viewExam.time} - {viewExam.endTime}</p>
                     </div>
                   </div>
                   <div>
                     <p className="text-[9px] font-black uppercase tracking-widest text-blue-400">Venue</p>
                     <p className="text-xs font-bold text-blue-900 flex items-center gap-1"><MapPin size={14}/> {viewExam.room}</p>
                   </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Status</span>
                  <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${
                    viewExam.status === 'Scheduled' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {viewExam.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-100">
                <button 
                  onClick={() => setViewExam(null)}
                  className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
