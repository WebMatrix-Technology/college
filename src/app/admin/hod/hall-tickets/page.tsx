"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, Printer, Search, Filter, 
  CheckSquare, AlertTriangle, CheckCircle2, XCircle, Users,
  BookOpen, Layers
} from "lucide-react";
import { toast } from "@/components/Toast";

const mockStudents = [
  { id: "STU-2601", name: "Aarav Patel", batch: "B.Tech CS - Sem 4", examCode: "CS401", feeStatus: "Cleared", ticketStatus: "Generated" },
  { id: "STU-2602", name: "Priya Sharma", batch: "B.Tech CS - Sem 4", examCode: "CS401", feeStatus: "Pending Dues", ticketStatus: "On Hold" },
  { id: "STU-2603", name: "Rohan Kumar", batch: "B.Tech CS - Sem 4", examCode: "CS401", feeStatus: "Cleared", ticketStatus: "Pending" },
  { id: "STU-2604", name: "Ananya Singh", batch: "B.Tech CS - Sem 4", examCode: "CS401", feeStatus: "Cleared", ticketStatus: "Pending" },
  { id: "STU-2605", name: "Vikram Reddy", batch: "M.Tech AI - Sem 1", examCode: "AI302", feeStatus: "Cleared", ticketStatus: "Generated" },
];

export default function HodHallTicketsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBatch, setFilterBatch] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const filteredStudents = mockStudents.filter(student => {
    if (selectedCourse !== "All" && !student.batch.includes(selectedCourse)) return false;
    // Map "Year X" to "Sem Y" roughly for mock data, or just simple includes if "Sem" matches
    if (selectedBatch !== "All" && !student.batch.includes(selectedBatch.replace('Year ', 'Sem '))) return false;

    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBatch = filterBatch === "All" || student.batch === filterBatch;
    return matchesSearch && matchesBatch;
  });

  const toggleSelect = (id: string) => {
    setSelectedStudents(prev => 
      prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(filteredStudents.map(s => s.id));
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex flex-wrap items-center gap-3">
             <FileText size={36} className="text-indigo-600" />
             <span className="text-indigo-600">Hall</span> Tickets
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Examination Eligibility & Ticket Generation</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => toast(`Generating tickets for ${selectedStudents.length} students...`)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             disabled={selectedStudents.length === 0}
             className="w-full sm:w-auto justify-center bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
           >
             <CheckSquare size={16} /> Generate Selected
           </motion.button>
           <motion.button 
             onClick={() => toast("Sending selected tickets to printer...")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             disabled={selectedStudents.length === 0}
             className="w-full sm:w-auto justify-center bg-white text-slate-700 border border-slate-200 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
           >
             <Printer size={16} /> Print Selected
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
              placeholder="Search by Student Name or ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="relative w-full md:w-64 shrink-0">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <select 
              value={filterBatch}
              onChange={(e) => setFilterBatch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="All">All Batches</option>
              <option value="B.Tech CS - Sem 4">B.Tech CS - Sem 4</option>
              <option value="M.Tech AI - Sem 1">M.Tech AI - Sem 1</option>
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
                <th className="p-4 w-12 text-center">
                  <input 
                    type="checkbox" 
                    checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
                  />
                </th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Student Identity</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Target Exam</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Clearance Status</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Ticket Status</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredStudents.map((student, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                    key={student.id}
                    className={`transition-colors group ${selectedStudents.includes(student.id) ? 'bg-indigo-50/50' : 'hover:bg-slate-50/50'}`}
                  >
                    <td className="p-4 text-center">
                      <input 
                        type="checkbox" 
                        checked={selectedStudents.includes(student.id)}
                        onChange={() => toggleSelect(student.id)}
                        className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                          <Users size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{student.name}</p>
                          <p className="text-[9px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">{student.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-xs font-black text-slate-700">{student.examCode}</p>
                      <p className="text-[9px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">{student.batch}</p>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5 ${
                        student.feeStatus === "Cleared" ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-red-50 text-red-600 border border-red-200 animate-pulse"
                      }`}>
                        {student.feeStatus === "Cleared" ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                        {student.feeStatus}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5 ${
                        student.ticketStatus === "Generated" ? "bg-blue-50 text-blue-600 border border-blue-200" :
                        student.ticketStatus === "Pending" ? "bg-amber-50 text-amber-600 border border-amber-200" :
                        "bg-slate-100 text-slate-500 border border-slate-200"
                      }`}>
                        {student.ticketStatus === "Generated" && <FileText size={12} />}
                        {student.ticketStatus === "On Hold" && <XCircle size={12} />}
                        {student.ticketStatus}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                       {student.ticketStatus === "Pending" && student.feeStatus === "Cleared" && (
                         <button 
                           onClick={() => toast(`Generating ticket for ${student.name}`)}
                           className="text-[9px] font-black uppercase tracking-widest text-indigo-600 border border-indigo-200 bg-indigo-50 hover:bg-indigo-600 hover:text-white px-3 py-1.5 rounded-md transition-all shadow-sm inline-flex items-center gap-1"
                         >
                           Generate
                         </button>
                       )}
                       {student.ticketStatus === "Generated" && (
                         <button 
                           onClick={() => toast(`Printing ticket for ${student.name}`)}
                           className="text-[9px] font-black uppercase tracking-widest text-slate-500 border border-slate-200 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-md transition-all shadow-sm inline-flex items-center gap-1"
                         >
                           <Printer size={12} /> Print
                         </button>
                       )}
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <Users size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-400">No Eligible Students</h3>
              <p className="text-xs text-slate-400 mt-2">Adjust your filters or verify batch mapping.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
