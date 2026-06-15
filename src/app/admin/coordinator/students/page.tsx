"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Search, Filter, AlertTriangle, CheckCircle2, TrendingUp,
  Download, Layers, Users, ChevronDown, ChevronRight, BookOpen
} from "lucide-react";
import { toast } from "@/components/Toast";
import { departmentMockData } from "@/lib/departmentMockData";

export default function CoordinatorStudentsPage() {
  const [course, setCourse] = useState("Course");
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [studentsData, setStudentsData] = useState<any[]>([]);
  
  // Selection States
  const [selectedBatch, setSelectedBatch] = useState("All");

  // Filter States
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterMinCgpa, setFilterMinCgpa] = useState<number | "">("");

  useEffect(() => {
    const coordinatorCourse = localStorage.getItem("coordinatorCourse") || "B.Tech";
    setCourse(coordinatorCourse);

    let courseStudents: any[] = [];
    for (const [deptName, data] of Object.entries(departmentMockData)) {
      if (data.courses.includes(coordinatorCourse)) {
        courseStudents = data.students.filter(s => s.course === coordinatorCourse);
        break;
      }
    }
    setStudentsData(courseStudents);
  }, []);

  const toggleSection = (key: string) => {
    setCollapsedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // 2. Filter students based on Selection, Search, and Active Filters
  const filteredStudents = studentsData.filter(s => {
    if (selectedBatch !== "All" && s.batch !== selectedBatch) return false;

    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || s.status === filterStatus;
    
    const cgpaVal = parseFloat(s.cgpa);
    const matchesCgpa = filterMinCgpa === "" || (!isNaN(cgpaVal) && cgpaVal >= filterMinCgpa);

    return matchesSearch && matchesStatus && matchesCgpa;
  });

  // Group filtered students by Section
  const groupedSections = filteredStudents.reduce((acc, student) => {
    if (!acc[student.section]) acc[student.section] = [];
    acc[student.section].push(student);
    return acc;
  }, {} as Record<string, any[]>);

  const sortedSections = Object.keys(groupedSections).sort();

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-3">
             <GraduationCap size={36} className="text-fuchsia-600" />
             <span className="text-fuchsia-600">{course}</span> Students
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Course Roster & Academic Tracking</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => toast("Exporting student data to CSV...")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
           >
             <Download size={16} /> Export Data
           </motion.button>
        </div>
      </div>

      {/* --- SELECTION PANEL --- */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl mb-10 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Active Course</label>
          <div className="relative">
            <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-fuchsia-500" />
            <div className="w-full bg-slate-100 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-500 cursor-not-allowed">
              {course} (Locked)
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Select Academic Year</label>
          <div className="relative">
            <Layers size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-fuchsia-500" />
            <select 
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-fuchsia-500 transition-colors appearance-none"
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-6 relative w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input 
                  type="text" 
                  placeholder="Search by ID or Name..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 pl-9 pr-4 py-2.5 bg-white border-2 border-slate-100 rounded-3xl shadow-sm text-xs font-bold text-slate-600 outline-none focus:border-fuchsia-500 transition-colors"
                />
              </div>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`px-4 py-2.5 border-2 rounded-3xl shadow-sm transition-colors flex items-center gap-2 text-xs font-bold ${
                  isFilterOpen ? "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700" : "bg-white border-slate-100 text-slate-500 hover:border-slate-300"
                }`}
              >
                <Filter size={16} /> Filter
              </button>
            </div>

            {/* The Filter Panel Dropdown */}
            {isFilterOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-3 w-full md:w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 z-50"
              >
                <div className="flex justify-between items-center mb-4">
                   <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Filter Criteria</h4>
                   <button 
                     onClick={() => {
                       setFilterStatus("All");
                       setFilterMinCgpa("");
                     }}
                     className="text-[9px] font-black uppercase tracking-widest text-fuchsia-600 hover:text-fuchsia-800 underline"
                   >
                     Clear All
                   </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Academic Standing</label>
                    <select 
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 outline-none focus:border-fuchsia-500"
                    >
                      <option value="All">Any Status</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Warning">Warning</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Minimum CGPA</label>
                    <input 
                      type="number" 
                      step="0.1"
                      min="0"
                      max="10"
                      placeholder="e.g. 8.0"
                      value={filterMinCgpa}
                      onChange={(e) => setFilterMinCgpa(e.target.value ? parseFloat(e.target.value) : "")}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 outline-none focus:border-fuchsia-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px bg-slate-300 flex-1" />
              <h2 className="text-xl font-black italic uppercase tracking-tighter text-slate-900 flex items-center gap-2">
                <Layers size={20} className="text-fuchsia-500" /> {course} • {selectedBatch === "All" ? "All Years" : selectedBatch}
              </h2>
              <div className="h-px bg-slate-300 flex-1" />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {sortedSections.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-3xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400">No students found matching the selected criteria.</p>
                </div>
              ) : (
                sortedSections.map(section => {
                  const isCollapsed = collapsedSections[section];
                  
                  return (
                  <div key={section} className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                    <div 
                      onClick={() => toggleSection(section)}
                      className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2 cursor-pointer hover:bg-slate-100 transition-colors"
                    >
                      {isCollapsed ? <ChevronRight size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
                      <Users size={16} className="text-slate-500" />
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-700">Section {section}</h3>
                      <span className="ml-auto text-[10px] font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded-md">
                        {groupedSections[section].length} Students
                      </span>
                    </div>
                    
                    {!isCollapsed && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                          <tr className="border-b border-slate-100">
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Student Identity</th>
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Academic Standing</th>
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {groupedSections[section].map((stu: any, idx: number) => (
                            <motion.tr 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              key={stu.id}
                              className="hover:bg-fuchsia-50/30 transition-colors group"
                            >
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-fuchsia-100 text-fuchsia-500 flex items-center justify-center shrink-0 font-black text-[10px]">
                                    {stu.name.charAt(0)}
                                  </div>
                                  <div>
                                    <p className="text-xs font-black text-slate-900 group-hover:text-fuchsia-700 transition-colors">{stu.name}</p>
                                    <p className="text-[9px] font-bold text-slate-500 mt-0.5">{stu.id}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="flex items-center gap-4">
                                  <div>
                                    <p className="text-xs font-black text-slate-900">{stu.cgpa} <span className="text-[9px] font-bold text-slate-400">CGPA</span></p>
                                  </div>
                                  <div className="h-6 w-px bg-slate-200" />
                                  <div>
                                    <p className="text-xs font-black text-slate-900">{stu.attendance} <span className="text-[9px] font-bold text-slate-400">ATT</span></p>
                                  </div>
                                  <div className="h-6 w-px bg-slate-200" />
                                  <div>
                                    <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${
                                      stu.status === "Excellent" ? "bg-emerald-100 text-emerald-700" :
                                      stu.status === "Good" ? "bg-blue-100 text-blue-700" :
                                      stu.status === "Warning" ? "bg-orange-100 text-orange-700" :
                                      "bg-red-100 text-red-700 animate-pulse"
                                    }`}>
                                      {stu.status}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 text-right space-x-2">
                                 <button 
                                   onClick={() => toast(`Opening full profile for ${stu.name}.`)}
                                   className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-fuchsia-600 transition-colors border border-slate-200 hover:border-fuchsia-200 px-3 py-1.5 rounded-md bg-white shadow-sm inline-flex items-center gap-1"
                                 >
                                   Profile
                                 </button>
                                 <button 
                                   onClick={() => toast(`Dispatching warning alert to ${stu.name}.`)}
                                   className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors border border-slate-200 hover:border-red-200 px-3 py-1.5 rounded-md bg-white shadow-sm"
                                 >
                                   Alert
                                 </button>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    )}
                  </div>
                )})
              )}
            </div>
          </div>
        </motion.div>
    </div>
  );
}
