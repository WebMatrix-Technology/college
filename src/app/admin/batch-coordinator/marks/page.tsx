"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, GraduationCap, ArrowUpRight, ArrowDownRight, Award } from "lucide-react";
import { departmentMockData } from "@/lib/departmentMockData";

export default function BatchCoordinatorMarks() {
  const [course, setCourse] = useState("Course");
  const [batch, setBatch] = useState("Batch");
  const [students, setStudents] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    const coordinatorCourse = localStorage.getItem("coordinatorCourse") || "B.Tech";
    const coordinatorBatch = localStorage.getItem("coordinatorBatch") || "Year 1";
    setCourse(coordinatorCourse);
    setBatch(coordinatorBatch);

    let batchStudents: any[] = [];
    for (const data of Object.values(departmentMockData)) {
      if (data.courses.includes(coordinatorCourse)) {
        batchStudents = data.students.filter(s => s.course === coordinatorCourse && s.batch === coordinatorBatch);
        break;
      }
    }
    
    // Sort by CGPA descending by default
    batchStudents.sort((a, b) => parseFloat(b.cgpa) - parseFloat(a.cgpa));
    setStudents(batchStudents);
  }, []);

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    student.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-3">
             <Award size={36} className="text-teal-600" />
             <span className="text-teal-600">Marks & Grades</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">
            Batch Co-ordinator • {course} • {batch}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-xl font-black italic tracking-tighter text-slate-900">Academic Performance</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Cumulative Grade Point Average</p>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text"
                placeholder="Search students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold rounded-xl px-12 py-3 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>
            <button className="bg-slate-50 border border-slate-200 p-3 rounded-xl hover:bg-slate-100 transition-colors">
              <Filter size={16} className="text-slate-500" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Rank</th>
                <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Student ID</th>
                <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Name</th>
                <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Trend</th>
                <th className="pb-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">CGPA</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, i) => {
                const cgpaValue = parseFloat(student.cgpa);
                // Mock trend based on ID logic
                const isUp = parseInt(student.id.split("-")[1] || "0") % 2 === 0;
                
                return (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={student.id} 
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="py-4 px-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                        i === 0 ? 'bg-yellow-100 text-yellow-700' : 
                        i === 1 ? 'bg-slate-200 text-slate-700' : 
                        i === 2 ? 'bg-orange-100 text-orange-700' : 
                        'bg-slate-50 text-slate-400'
                      }`}>
                        {i + 1}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-bold text-xs text-slate-500">{student.id}</td>
                    <td className="py-4 px-4 font-bold text-sm text-slate-900">{student.name}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="inline-flex items-center justify-center">
                        {isUp ? (
                          <ArrowUpRight size={16} className="text-emerald-500" />
                        ) : (
                          <ArrowDownRight size={16} className="text-red-500" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className={`text-base font-black italic ${
                        cgpaValue >= 9.0 ? 'text-teal-600' :
                        cgpaValue < 6.0 ? 'text-red-600' : 'text-slate-900'
                      }`}>
                        {student.cgpa}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
              
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                    No students found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
