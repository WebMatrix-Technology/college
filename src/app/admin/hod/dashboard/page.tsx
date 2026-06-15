"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, GraduationCap, BookOpen, TrendingUp, Calendar, Clock, CheckCircle2, AlertTriangle, Building2, ChevronRight, Activity
} from "lucide-react";
import { departmentMockData } from "@/lib/departmentMockData";

export default function HodDashboard() {
  const [department, setDepartment] = useState("Department");
  const [data, setData] = useState(departmentMockData["Information Technology"]);

  useEffect(() => {
    const dept = localStorage.getItem("hodDepartment") || "Information Technology";
    setDepartment(dept);
    if (departmentMockData[dept]) {
      setData(departmentMockData[dept]);
    }
  }, []);

  const stats = [
    { label: `Students in ${department}`, value: data.stats.totalStudents.toString(), change: "+4.2%", icon: GraduationCap, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Active Faculty", value: data.stats.totalFaculty.toString(), change: "+1.1%", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Average Attendance", value: data.stats.avgAttendance, change: "+2.4%", icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Dept CGPA", value: data.stats.avgCgpa, change: "Top 10%", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" }
  ];

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex flex-wrap items-center gap-3">
             <Building2 size={36} className="text-indigo-600" />
             {department} Dashboard
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Head of Department Console</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex flex-col relative overflow-hidden group hover:border-indigo-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} shrink-0`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-md ${stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                {stat.change}
              </span>
            </div>
            <div>
              <h3 className="text-4xl font-black italic text-slate-900 tracking-tighter mb-1 group-hover:text-indigo-600 transition-colors">{stat.value}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-black italic uppercase tracking-tighter text-slate-900 flex items-center gap-2">
              <Calendar size={20} className="text-indigo-500" /> Today's Schedule
            </h2>
            <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              View All <ChevronRight size={12} />
            </button>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="text-center w-16 shrink-0">
                  <p className="text-sm font-black text-slate-900">09:00</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">AM</p>
                </div>
                <div className="w-1 h-12 rounded-full bg-indigo-500 shrink-0" />
                <div className="flex-1">
                  <h4 className="text-sm font-black text-slate-900 mb-1">Department Meeting</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">All Faculty • Boardroom A</p>
                </div>
             </div>
             
             <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="text-center w-16 shrink-0">
                  <p className="text-sm font-black text-slate-900">11:30</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">AM</p>
                </div>
                <div className="w-1 h-12 rounded-full bg-emerald-500 shrink-0" />
                <div className="flex-1">
                  <h4 className="text-sm font-black text-slate-900 mb-1">Syllabus Review</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Curriculum Committee</p>
                </div>
             </div>

             <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="text-center w-16 shrink-0">
                  <p className="text-sm font-black text-slate-900">02:00</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">PM</p>
                </div>
                <div className="w-1 h-12 rounded-full bg-orange-500 shrink-0" />
                <div className="flex-1">
                  <h4 className="text-sm font-black text-slate-900 mb-1">Student Grievances</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Open Office Hours</p>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-slate-900 rounded-[2rem] shadow-xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10" />
          
          <h2 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-2 relative z-10">
            <AlertTriangle size={20} className="text-orange-400" /> Action Required
          </h2>

          <div className="space-y-6 relative z-10">
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-300">Leave Approvals</h4>
                <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[9px] font-black flex items-center justify-center">3</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400">Pending faculty leave requests require your signature.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-emerald-300">Timetable Clashes</h4>
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[9px] font-black flex items-center justify-center">0</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400">All current semester timetables are conflict-free.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-orange-300">Exam Papers</h4>
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-[9px] font-black flex items-center justify-center">12</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400">Mid-term question papers awaiting HOD moderation.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
