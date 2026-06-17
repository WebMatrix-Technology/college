"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Clock, Calendar as CalendarIcon, 
  MapPin, Loader2, BookOpen
} from "lucide-react";

const TIMETABLE_DATA = [
  { time: "09:00 AM", subject: "Quantum Computing", type: "Lecture", room: "Lab 4A", instructor: "Dr. A. Sharma" },
  { time: "10:30 AM", subject: "Neural Networks", type: "Lab", room: "AI Center", instructor: "Prof. S. Bose" },
  { time: "12:00 PM", subject: "Lunch Break", type: "Break", room: "-", instructor: "-" },
  { time: "01:00 PM", subject: "Web Architecture", type: "Lecture", room: "Hall 2B", instructor: "Dr. K. Patel" },
  { time: "02:30 PM", subject: "Ethical Hacking", type: "Workshop", room: "Cyber Sec Lab", instructor: "Prof. V. Desai" },
];

export default function StudentTimetable() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-orange-600" size={40} />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FDFDFD] p-6 pt-24 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <Link href="/students-corner" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-4 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Command Center
            </Link>
            <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Daily <span className="text-orange-600">Schedule.</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Node: Timetable // Session 2026</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-6 rounded-3xl shadow-xl w-full md:w-72 flex items-center gap-4 text-white">
            <div className="p-3 bg-orange-600 rounded-2xl">
              <CalendarIcon size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Day</p>
              <h3 className="text-xl font-black italic mt-1">Monday</h3>
            </div>
          </div>
        </div>

        {/* --- TIMETABLE GRID --- */}
        <div className="space-y-4">
          {TIMETABLE_DATA.map((slot, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className={`border p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center gap-6 transition-all group ${
                slot.type === 'Break' 
                  ? 'bg-slate-50 border-slate-100 opacity-60' 
                  : 'bg-white border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200'
              }`}
            >
              <div className="w-40 shrink-0">
                <span className={`text-2xl font-black uppercase italic tracking-tighter ${slot.type === 'Break' ? 'text-slate-400' : 'text-slate-900 group-hover:text-orange-600 transition-colors'}`}>
                  {slot.time}
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className={`text-xl font-black uppercase tracking-tight ${slot.type === 'Break' ? 'text-slate-500' : 'text-slate-900'}`}>
                  {slot.subject}
                </h3>
                {slot.type !== 'Break' && (
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <BookOpen size={12} /> {slot.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <MapPin size={12} /> {slot.room}
                    </span>
                  </div>
                )}
              </div>

              {slot.type !== 'Break' && (
                <div className="w-48 shrink-0 md:text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Instructor</p>
                  <p className="font-bold text-slate-900">{slot.instructor}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER --- */}
        <footer className="mt-20 py-10 border-t border-slate-100 text-center opacity-30">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">Vanguard Schedule Protocol // 2026</p>
        </footer>
      </div>
    </main>
  );
}
