"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, CalendarCheck, BookOpen, Clock, Edit3, Shield } from "lucide-react";

export default function FacultyProfilePage() {
  const { id } = useParams();
  const router = useRouter();

  // Mock faculty details
  const faculty = {
    id: id,
    name: "Dr. K. Sharma",
    role: "HOD",
    dept: "Computer Science",
    email: "k.sharma@vit.ac.in",
    phone: "+91 98765 43210",
    status: "Active",
    qualification: "Ph.D. in Artificial Intelligence",
    joined: "Aug 2012",
  };

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex justify-between items-start">
        <div>
          <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors mb-6 cursor-pointer bg-transparent border-none">
            <ArrowLeft size={14} /> Back
          </button>
          <div className="flex items-center gap-6">
             <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shadow-lg text-2xl font-black">
               {faculty.name.split(' ').map(n=>n[0]).join('').replace('.','').substring(0,2)}
             </div>
             <div>
               <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 leading-tight flex items-center gap-3">
                 {faculty.name}
                 {faculty.role === "HOD" && <Shield size={24} className="text-indigo-500" />}
               </h1>
               <div className="flex items-center gap-4 mt-2">
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">ID: {faculty.id}</span>
                 <span className="text-[10px] font-bold text-slate-500">{faculty.dept}</span>
                 <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">{faculty.status}</span>
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
                    <Mail size={16} className="text-indigo-400" /> {faculty.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <Phone size={16} className="text-indigo-400" /> {faculty.phone}
                  </div>
               </div>
               <div className="flex-1 space-y-4 md:border-l border-slate-100 md:pl-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Academic Profile</p>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{faculty.qualification}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Highest Qualification</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{faculty.joined}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Joined Institution</p>
                  </div>
               </div>
            </div>

            {/* Teaching Schedule */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
               <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center justify-between">
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                   <Clock size={16} className="text-indigo-600" /> Current Timetable
                 </h3>
                 <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Fall 2026</span>
               </div>
               <div className="p-6">
                 <div className="space-y-4">
                   {[
                     { day: "Monday", time: "08:00 AM - 09:00 AM", subject: "CSE3001", room: "SJT-412" },
                     { day: "Wednesday", time: "11:00 AM - 12:30 PM", subject: "CSE4005", room: "SMV-201" },
                     { day: "Thursday", time: "02:00 PM - 04:00 PM", subject: "CSE3002 Lab", room: "TT-Lab-1" },
                   ].map((slot, idx) => (
                     <div key={idx} className="flex items-center gap-4 p-4 border-2 border-slate-50 rounded-xl hover:border-slate-100 transition-colors">
                        <div className="w-24 shrink-0 border-r border-slate-100">
                          <p className="text-xs font-black text-slate-900">{slot.day}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-700">{slot.subject}</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{slot.time} • Room {slot.room}</p>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
         </div>

         {/* Sidebar Stats */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px] rounded-full pointer-events-none" />
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Performance Metrics</h3>
               
               <div className="space-y-6 relative z-10">
                 <div>
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Class Attendance Rate</span>
                     <span className="text-[10px] font-bold text-emerald-400">96%</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 w-[96%]" />
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Syllabus Completion</span>
                     <span className="text-[10px] font-bold text-blue-400">45%</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[45%]" />
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Subjects Allocated */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
               <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                 <BookOpen size={14} /> Allocated Subjects
               </h3>
               <div className="space-y-3">
                 <div className="p-3 bg-slate-50 rounded-lg">
                   <p className="text-xs font-bold text-slate-800">Software Engineering</p>
                   <p className="text-[9px] font-black uppercase tracking-widest text-indigo-500 mt-1">CSE3001 • Theory</p>
                 </div>
                 <div className="p-3 bg-slate-50 rounded-lg">
                   <p className="text-xs font-bold text-slate-800">Web Programming Lab</p>
                   <p className="text-[9px] font-black uppercase tracking-widest text-indigo-500 mt-1">CSE3002 • Lab</p>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
