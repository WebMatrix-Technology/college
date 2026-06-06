"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Save, Grid, BookOpen, Clock, Users, MapPin } from "lucide-react";

export default function DraftTimetablePage() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <Link href="/admin/college-admin/timetable" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Master Timetable
        </Link>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Grid size={36} className="text-orange-600" />
          Draft <span className="text-orange-600">Schedule</span>
        </h1>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden max-w-4xl">
        <div className="p-8 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <div>
             <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest">Allocation Wizard</h2>
             <p className="text-[10px] font-bold text-slate-500 mt-1">Map subjects, faculty, and rooms to a specific timeslot.</p>
           </div>
           <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
             <Clock size={24} />
           </div>
        </div>

        <form className="p-8 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Academic Department</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-orange-500 transition-colors">
                  <option>Computer Science</option>
                  <option>Mechanical</option>
                  <option>Business Administration</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Target Batch / Semester</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-orange-500 transition-colors">
                  <option>Class of 2026 - Semester 5</option>
                  <option>Class of 2027 - Semester 3</option>
                </select>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                  <BookOpen size={14} /> Subject / Course
                </label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-orange-500 transition-colors">
                  <option>CSE3001 - Software Engineering</option>
                  <option>CSE3002 - Web Programming Lab</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                  <Users size={14} /> Assigned Faculty
                </label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-orange-500 transition-colors">
                  <option>Dr. K. Sharma (FAC-1021)</option>
                  <option>Prof. M. Reddy (FAC-1033)</option>
                </select>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Day of Week</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-orange-500 transition-colors">
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Time Slot</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-orange-500 transition-colors">
                  <option>08:00 AM - 09:30 AM</option>
                  <option>10:00 AM - 11:30 AM</option>
                  <option>02:00 PM - 03:30 PM</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                  <MapPin size={14} /> Room Allocation
                </label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-orange-500 transition-colors">
                  <option>SJT-412 (Theory, 60 cap)</option>
                  <option>TT-Lab-1 (Lab, 30 cap)</option>
                </select>
              </div>
           </div>

           <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
              <Link href="/admin/college-admin/timetable">
                <button type="button" className="px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-colors">
                  Cancel
                </button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:bg-orange-700 transition-colors"
              >
                <Save size={16} /> Block Time Slot
              </motion.button>
           </div>
        </form>
      </div>
    </div>
  );
}
