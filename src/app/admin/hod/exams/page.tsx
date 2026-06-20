"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileSpreadsheet, Calendar, Search, Filter, 
  Plus, Edit, Trash2, Clock, CheckCircle2, AlertCircle,
  BookOpen, Layers
} from "lucide-react";
import { toast } from "@/components/Toast";

const mockExams = [
  { id: "EXM-001", code: "CS401", subject: "Quantum Computing", date: "Oct 15, 2026 - 09:00 AM", duration: "3 Hours", course: "B.Tech CS - Year 4", status: "Scheduled" },
  { id: "EXM-002", code: "AI302", subject: "Neural Networks Lab", date: "Oct 18, 2026 - 01:00 PM", duration: "2 Hours", course: "M.Tech AI - Year 1", status: "In-Progress" },
  { id: "EXM-003", code: "CS205", subject: "Data Structures", date: "Sep 22, 2026 - 10:00 AM", duration: "3 Hours", course: "B.Tech CS - Year 2", status: "Completed" },
  { id: "EXM-004", code: "DS405", subject: "Big Data Analytics", date: "Oct 20, 2026 - 09:00 AM", duration: "3 Hours", course: "B.Tech CS - Year 4", status: "Scheduled" },
  { id: "EXM-005", code: "CS101", subject: "Programming Fundamentals", date: "Nov 05, 2026 - 10:00 AM", duration: "3 Hours", course: "B.Tech CS - Year 1", status: "Draft" },
];

export default function HodExamsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedBatch, setSelectedBatch] = useState("All");

  const filteredExams = mockExams.filter(exam => {
    if (selectedCourse !== "All" && !exam.course.includes(selectedCourse)) return false;
    if (selectedBatch !== "All" && !exam.course.includes(selectedBatch)) return false;

    const matchesSearch = exam.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          exam.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || exam.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex flex-wrap items-center gap-3">
             <FileSpreadsheet size={36} className="text-indigo-600" />
             <span className="text-indigo-600">Exam</span> Schedules
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Departmental Examination Tracking</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => toast("Opening New Exam Scheduler...")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30"
           >
             <Plus size={16} /> Schedule Exam
           </motion.button>
        </div>
      </div>

      {/* --- SELECTION PANEL --- */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl mb-10 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Degree / Course</label>
          <div className="relative">
            <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <select 
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                setSelectedBatch("All");
              }}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="All">All Courses</option>
              <option value="B.Tech CS">B.Tech CS</option>
              <option value="M.Tech AI">M.Tech AI</option>
              <option value="BCA">BCA</option>
            </select>
          </div>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Academic Year</label>
          <div className="relative">
            <Layers size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <select 
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="All">All Years</option>
              <option value="Year 1">Year 1</option>
              <option value="Year 2">Year 2</option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl mb-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by Subject or Code..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="relative w-full md:w-64 shrink-0">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="All">All Statuses</option>
              <option value="Scheduled">Scheduled</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Completed">Completed</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-slate-300 flex-1" />
          <h2 className="text-xl font-black italic uppercase tracking-tighter text-indigo-900 flex items-center gap-2">
            <Layers size={20} className="text-indigo-500" /> {selectedCourse === "All" ? "All Courses" : selectedCourse} • {selectedBatch === "All" ? "All Years" : selectedBatch}
          </h2>
          <div className="h-px bg-slate-300 flex-1" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Exam Details</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Schedule</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Target Group</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredExams.map((exam, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                    key={exam.id}
                    className="hover:bg-indigo-50/30 transition-colors group"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                          <FileSpreadsheet size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-900">{exam.subject}</p>
                          <p className="text-[9px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">{exam.code} • {exam.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-xs font-black text-slate-700 flex items-center gap-2">
                          <Calendar size={12} className="text-indigo-400" /> {exam.date}
                        </p>
                        <p className="text-[9px] font-bold text-slate-500 flex items-center gap-2">
                          <Clock size={12} className="text-slate-400" /> {exam.duration}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-slate-200">
                        {exam.course}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5 ${
                        exam.status === "Scheduled" ? "bg-blue-50 text-blue-600 border border-blue-200" :
                        exam.status === "In-Progress" ? "bg-orange-50 text-orange-600 border border-orange-200 animate-pulse" :
                        exam.status === "Completed" ? "bg-emerald-50 text-emerald-600 border border-emerald-200" :
                        "bg-slate-100 text-slate-500 border border-slate-200"
                      }`}>
                        {exam.status === "Completed" && <CheckCircle2 size={12} />}
                        {exam.status === "In-Progress" && <Clock size={12} />}
                        {exam.status === "Draft" && <AlertCircle size={12} />}
                        {exam.status}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                       <button 
                         onClick={() => toast(`Editing exam schedule for ${exam.code}`)}
                         className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 inline-flex items-center justify-center transition-all shadow-sm"
                         title="Edit Exam"
                       >
                         <Edit size={14} />
                       </button>
                       <button 
                         onClick={() => toast(`Canceling exam ${exam.code}`)}
                         className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-200 inline-flex items-center justify-center transition-all shadow-sm"
                         title="Cancel Exam"
                       >
                         <Trash2 size={14} />
                       </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredExams.length === 0 && (
            <div className="text-center py-12">
              <FileSpreadsheet size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-400">No Exams Found</h3>
              <p className="text-xs text-slate-400 mt-2">Adjust your filters or schedule a new examination.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
