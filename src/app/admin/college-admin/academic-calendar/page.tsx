"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, Plus, Filter, Search, Edit3, Trash2, X, Save } from "lucide-react";

const mockEvents = [
  { id: 1, date: "Aug 15, 2026", name: "Independence Day", type: "Holiday", mandatory: true },
  { id: 2, date: "Sep 05, 2026", name: "Teachers Day Celebration", type: "Event", mandatory: false },
  { id: 3, date: "Oct 12, 2026", name: "Mid-Term Examinations Begin", type: "Academic", mandatory: true },
  { id: 4, date: "Nov 01, 2026", name: "Cultural Fest (GraVITas)", type: "Event", mandatory: false },
  { id: 5, date: "Dec 10, 2026", name: "End-Term Examinations Begin", type: "Academic", mandatory: true },
  { id: 6, date: "Dec 25, 2026", name: "Christmas", type: "Holiday", mandatory: true },
];

export default function AcademicCalendarModule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <CalendarCheck size={36} className="text-purple-600" />
            Academic <span className="text-purple-600">Calendar</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Institution Events & Holidays</p>
        </div>
        <div className="flex gap-2">
           <motion.button 
             onClick={() => setIsModalOpen(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-purple-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:bg-purple-700 transition-colors"
           >
             <Plus size={16} /> Add Calendar Event
           </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
            <div className="bg-slate-50 p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search events..." 
                  className="w-full pl-11 pr-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                 <select className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 outline-none hover:border-slate-300 transition-colors">
                   <option>All Types</option>
                   <option>Academic</option>
                   <option>Holiday</option>
                   <option>Event</option>
                 </select>
                 <button className="px-4 py-3 bg-white border-2 border-slate-100 rounded-xl text-slate-500 hover:border-slate-300 transition-colors">
                   <Filter size={16} />
                 </button>
              </div>
            </div>

            <div className="p-6">
               <div className="space-y-4">
                 {mockEvents.map((evt, idx) => (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.05 }}
                     key={evt.id}
                     className="flex items-center gap-6 p-4 border-2 border-slate-50 rounded-2xl hover:border-slate-100 transition-colors group"
                   >
                      <div className="w-24 shrink-0 text-center border-r-2 border-slate-50 pr-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{evt.date.split(' ')[0]}</p>
                        <p className="text-xl font-black italic text-slate-900">{evt.date.split(' ')[1].replace(',', '')}</p>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-sm font-black text-slate-900">{evt.name}</h4>
                          <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                            evt.type === 'Holiday' ? 'bg-emerald-100 text-emerald-700' :
                            evt.type === 'Academic' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                          }`}>
                            {evt.type}
                          </span>
                        </div>
                        {evt.mandatory && <p className="text-[9px] font-bold text-red-500 mt-1">Mandatory Institutional Closure/Event</p>}
                      </div>
                      
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors">
                           <Edit3 size={14} />
                         </button>
                         <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors">
                           <Trash2 size={14} />
                         </button>
                      </div>
                   </motion.div>
                 ))}
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Term Metrics</h3>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Holidays</p>
                    <p className="text-2xl font-black italic text-emerald-400">14</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Events</p>
                    <p className="text-2xl font-black italic text-orange-400">8</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Add Calendar Event</h3>
                <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Event Title</label>
                   <input type="text" placeholder="e.g. Diwaly Holidays" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Date</label>
                     <input type="date" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Event Type</label>
                     <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors">
                       <option>Holiday</option>
                       <option>Examination</option>
                       <option>Cultural Event</option>
                       <option>Administrative</option>
                     </select>
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Target Audience</label>
                   <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-indigo-500 transition-colors">
                     <option>Global (All Campus)</option>
                     <option>Faculty Only</option>
                     <option>Students Only</option>
                   </select>
                 </div>
                 <button onClick={() => setIsModalOpen(false)} className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-indigo-700 transition-colors mt-4">
                   <Save size={16} /> Schedule Event
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
