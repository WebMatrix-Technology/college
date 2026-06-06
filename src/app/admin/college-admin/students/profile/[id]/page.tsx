"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, Phone, Mail, GraduationCap, Edit3, CalendarCheck, BookOpen, AlertTriangle } from "lucide-react";

export default function StudentProfilePage() {
  const { id } = useParams();
  const router = useRouter();

  // Mock student details
  const student = {
    id: id,
    name: "Rahul Verma",
    branch: "B.Tech Computer Science",
    batch: "Class of 2026",
    semester: "Semester 5",
    email: "rahul.verma@example.com",
    phone: "+91 98765 00000",
    status: "Active",
    attendance: "68%",
    cgpa: "8.4",
  };

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex justify-between items-start">
        <div>
          <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors mb-6 cursor-pointer bg-transparent border-none">
            <ArrowLeft size={14} /> Back
          </button>
          <div className="flex items-center gap-6">
             <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center shadow-sm text-2xl font-black">
               <User size={32} />
             </div>
             <div>
               <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 leading-tight">
                 {student.name}
               </h1>
               <div className="flex items-center gap-4 mt-2">
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">ID: {student.id}</span>
                 <span className="text-[10px] font-bold text-slate-500">{student.branch}</span>
                 <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">{student.status}</span>
               </div>
             </div>
          </div>
        </div>
        <div className="flex gap-2">
           <button className="bg-white text-slate-600 border-2 border-slate-100 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm">
             <Edit3 size={16} /> Edit Profile
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            {/* Quick Contact & Info */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8">
               <div className="flex-1 space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Contact Details</p>
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <Mail size={16} className="text-emerald-400" /> {student.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <Phone size={16} className="text-emerald-400" /> {student.phone}
                  </div>
               </div>
               <div className="flex-1 space-y-4 md:border-l border-slate-100 md:pl-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Academic Standing</p>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{student.batch}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Current Batch</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{student.semester}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Current Semester</p>
                  </div>
               </div>
            </div>

            {/* Enrolled Courses */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
               <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center justify-between">
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                   <BookOpen size={16} className="text-emerald-600" /> Current Courses
                 </h3>
                 <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Fall 2026</span>
               </div>
               <div className="divide-y divide-slate-100">
                 {[
                   { code: "CSE3001", name: "Software Engineering", credits: 4 },
                   { code: "CSE3002", name: "Internet and Web Programming", credits: 3 },
                   { code: "MAT2001", name: "Statistics for Engineers", credits: 4 },
                 ].map((course, idx) => (
                   <div key={idx} className="p-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-slate-800">{course.name}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{course.code}</p>
                      </div>
                      <p className="text-xs font-black text-slate-600">{course.credits} Credits</p>
                   </div>
                 ))}
               </div>
            </div>
         </div>

         {/* Sidebar Stats */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none" />
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Performance Profile</h3>
               
               <div className="flex gap-4 mb-6 relative z-10">
                 <div className="flex-1 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                   <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">CGPA</p>
                   <p className="text-2xl font-black italic text-emerald-400">{student.cgpa}</p>
                 </div>
                 <div className="flex-1 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                   <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Rank</p>
                   <p className="text-2xl font-black italic text-blue-400">42<span className="text-[10px] text-slate-500">/150</span></p>
                 </div>
               </div>

               <div className="space-y-4 relative z-10">
                 <div>
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Cumulative Attendance</span>
                     <span className="text-[10px] font-bold text-red-400">{student.attendance}</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-red-500 w-[68%]" />
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Defaulter Alert */}
            <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-start gap-4">
               <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
               <div>
                 <h4 className="text-xs font-black uppercase tracking-widest text-red-900 mb-1">Attendance Defaulter</h4>
                 <p className="text-[10px] font-bold text-red-700 leading-relaxed">
                   Student is below the mandatory 75% threshold. Warning issued on Oct 10th.
                 </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
