"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, BookOpen, Clock, Activity, Target, TrendingUp, Users, CheckCircle2
} from "lucide-react";
import { departmentMockData } from "@/lib/departmentMockData";

export default function CoordinatorDashboard() {
  const [course, setCourse] = useState("Course");
  const [department, setDepartment] = useState("");
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalSubjects: 0,
    avgAttendance: "0%",
    avgCgpa: "0.0"
  });

  useEffect(() => {
    const coordinatorCourse = localStorage.getItem("coordinatorCourse") || "B.Tech";
    setCourse(coordinatorCourse);

    // Find which department this course belongs to
    let foundDept = "";
    let courseStudents: any[] = [];
    let courseSubjects: any[] = [];

    for (const [deptName, data] of Object.entries(departmentMockData)) {
      if (data.courses.includes(coordinatorCourse)) {
        foundDept = deptName;
        courseStudents = data.students.filter(s => s.course === coordinatorCourse);
        courseSubjects = data.subjects.filter(s => s.course === coordinatorCourse);
        break;
      }
    }

    setDepartment(foundDept);

    if (foundDept) {
      // Calculate specific metrics
      const totalStudents = courseStudents.length;
      const totalSubjects = courseSubjects.length;
      
      // Calculate average CGPA
      let totalCgpa = 0;
      courseStudents.forEach(s => {
        totalCgpa += parseFloat(s.cgpa) || 0;
      });
      const avgCgpa = totalStudents ? (totalCgpa / totalStudents).toFixed(1) : "0.0";

      // Calculate average attendance
      let totalAtt = 0;
      courseStudents.forEach(s => {
        totalAtt += parseFloat(s.attendance.replace("%", "")) || 0;
      });
      const avgAtt = totalStudents ? Math.round(totalAtt / totalStudents) + "%" : "0%";

      setStats({
        totalStudents,
        totalSubjects,
        avgCgpa,
        avgAttendance: avgAtt
      });
    }

  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-3">
             <Target size={36} className="text-fuchsia-600" />
             <span className="text-fuchsia-600">{course}</span> Overview
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">
            Course Co-ordinator Dashboard • {department || "Department"}
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
          <div className="relative z-10 flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-fuchsia-100 rounded-2xl flex items-center justify-center text-fuchsia-600">
              <Users size={24} />
            </div>
          </div>
          <h3 className="text-4xl font-black italic tracking-tighter text-slate-900 relative z-10 mb-1">{stats.totalStudents}</h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 relative z-10">Enrolled Students</p>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
          <div className="relative z-10 flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
              <TrendingUp size={24} />
            </div>
          </div>
          <h3 className="text-4xl font-black italic tracking-tighter text-slate-900 relative z-10 mb-1">{stats.avgCgpa}</h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 relative z-10">Average CGPA</p>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
          <div className="relative z-10 flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <Activity size={24} />
            </div>
          </div>
          <h3 className="text-4xl font-black italic tracking-tighter text-slate-900 relative z-10 mb-1">{stats.avgAttendance}</h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 relative z-10">Average Attendance</p>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
          <div className="relative z-10 flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
              <BookOpen size={24} />
            </div>
          </div>
          <h3 className="text-4xl font-black italic tracking-tighter text-slate-900 relative z-10 mb-1">{stats.totalSubjects}</h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 relative z-10">Active Subjects</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8">
           <h2 className="text-lg font-black italic uppercase tracking-tighter text-slate-900 mb-6 flex items-center gap-2">
             <Clock size={20} className="text-fuchsia-500" /> Upcoming Deadlines
           </h2>
           <div className="space-y-4">
             <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-sm font-bold text-slate-900">Mid-Semester Exam Scheduling</h3>
                 <span className="text-[9px] font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-2 py-1 rounded-md">Urgent</span>
               </div>
               <p className="text-xs font-bold text-slate-500">Submit final timetable for {course} batches to examination branch.</p>
             </div>
             <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-sm font-bold text-slate-900">Syllabus Progress Review</h3>
                 <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-100 px-2 py-1 rounded-md">In 3 Days</span>
               </div>
               <p className="text-xs font-bold text-slate-500">Review subject completion rates across all active batches.</p>
             </div>
           </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8">
           <h2 className="text-lg font-black italic uppercase tracking-tighter text-slate-900 mb-6 flex items-center gap-2">
             <GraduationCap size={20} className="text-fuchsia-500" /> At-Risk Students
           </h2>
           <div className="flex flex-col items-center justify-center py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
              <CheckCircle2 size={48} className="text-emerald-300 mb-4" />
              <h3 className="text-lg font-black italic tracking-tighter text-slate-500">No Critical Alerts</h3>
              <p className="text-xs font-bold text-slate-400 mt-2 text-center px-4">All {course} students are currently maintaining satisfactory attendance and grades.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
