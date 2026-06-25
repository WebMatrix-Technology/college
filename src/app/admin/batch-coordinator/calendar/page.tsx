"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, AlertCircle, Bookmark } from "lucide-react";

// Mock Calendar Events
const MOCK_EVENTS = [
  { id: 1, title: "Mid-Semester Examinations", type: "Exam", date: "Oct 15 - Oct 25", time: "09:00 AM", location: "Main Hall", priority: "High" },
  { id: 2, title: "Project Submission Deadline", type: "Deadline", date: "Nov 12", time: "11:59 PM", location: "Online Portal", priority: "High" },
  { id: 3, title: "Guest Lecture: AI in Industry", type: "Event", date: "Nov 18", time: "02:00 PM", location: "Auditorium A", priority: "Medium" },
  { id: 4, title: "Batch Mentoring Session", type: "Meeting", date: "Nov 25", time: "04:00 PM", location: "Room 402", priority: "Medium" },
  { id: 5, title: "End-Semester Practical Exams", type: "Exam", date: "Dec 05 - Dec 10", time: "09:00 AM", location: "Labs", priority: "High" },
];

export default function BatchCoordinatorCalendar() {
  const [course, setCourse] = useState("Course");
  const [batch, setBatch] = useState("Batch");
  const [filter, setFilter] = useState("All");
  
  useEffect(() => {
    setCourse(localStorage.getItem("coordinatorCourse") || "B.Tech");
    setBatch(localStorage.getItem("coordinatorBatch") || "Year 1");
  }, []);

  const filters = ["All", "Exam", "Deadline", "Event", "Meeting"];
  
  const filteredEvents = MOCK_EVENTS.filter(e => filter === "All" || e.type === filter);

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-3">
             <CalendarIcon size={36} className="text-teal-600" />
             <span className="text-teal-600">Batch Calendar</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">
            Batch Co-ordinator • {course} • {batch}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden p-6 md:p-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h2 className="text-xl font-black italic tracking-tighter text-slate-900">Upcoming Schedule</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Key academic events & deadlines</p>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === f 
                    ? 'bg-white text-teal-600 shadow-sm'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((evt, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                key={evt.id} 
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-teal-500/30 transition-all flex flex-col md:flex-row gap-6 overflow-hidden cursor-pointer"
              >
                <div className={`absolute left-0 top-0 w-1 h-full ${
                  evt.priority === 'High' ? 'bg-red-500' : 
                  evt.priority === 'Medium' ? 'bg-amber-500' : 'bg-teal-500'
                }`} />
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${
                      evt.type === 'Exam' ? 'bg-red-50 text-red-600' :
                      evt.type === 'Deadline' ? 'bg-amber-50 text-amber-600' :
                      evt.type === 'Meeting' ? 'bg-blue-50 text-blue-600' : 'bg-teal-50 text-teal-600'
                    }`}>
                      {evt.type}
                    </span>
                    {evt.priority === 'High' && (
                      <span className="flex items-center gap-1 text-[9px] font-black uppercase text-red-500">
                        <AlertCircle size={10} /> Critical
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black italic tracking-tighter text-slate-900 group-hover:text-teal-600 transition-colors">
                    {evt.title}
                  </h3>
                </div>
                
                <div className="flex flex-col justify-center gap-2 md:border-l md:border-slate-100 md:pl-6 min-w-[200px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <CalendarIcon size={14} className="text-slate-400" /> {evt.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <Clock size={14} className="text-slate-400" /> {evt.time}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <MapPin size={14} className="text-slate-400" /> {evt.location}
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-center bg-slate-50 border border-slate-100 rounded-2xl border-dashed">
              <Bookmark size={32} className="text-slate-300 mb-4" />
              <p className="text-slate-500 font-bold text-sm">No events scheduled.</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Try changing the filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
