"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, Search, Plus, Trash2, Check, X,
  MapPin, Clock, Users, Image as ImageIcon
} from "lucide-react";
import WebsiteAdminSidebar from "@/components/admin/WebsiteAdminSidebar";
import WebsiteAdminBottomNav from "@/components/admin/WebsiteAdminBottomNav";

const initialEvents = [
  { id: "tech-fest", title: "Vanguard Tech Fest 2026", date: "Oct 12, 2026", type: "Cultural", status: "Published" },
  { id: "ai-conf", title: "AI & Future Symposium", date: "Nov 05, 2026", type: "Academic", status: "Published" },
  { id: "alumni-meet", title: "Annual Alumni Meet", date: "Dec 20, 2026", type: "Social", status: "Draft" },
];

export default function EventsManager() {
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-blue-500/30 selection:text-blue-900">
      <div className="hidden md:block z-50 h-full">
        <WebsiteAdminSidebar />
      </div>

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        <div className="absolute top-[30%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-rose-400/10 to-orange-400/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl shadow-lg shadow-rose-500/30">
                <Calendar size={32} className="text-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">Events Calendar</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">
              Manage Campus Events
            </p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-transform">
            <Plus size={16} /> Create Event
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`${selectedEvent ? 'lg:col-span-4' : 'lg:col-span-12'} transition-all duration-500`}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-[calc(100vh-200px)]">
              <div className="p-8 border-b border-slate-100 flex flex-col gap-6 bg-white/50 shrink-0">
                <h2 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">Upcoming Events</h2>
              </div>
              
              <div className="p-4 space-y-2 overflow-y-auto custom-scrollbar flex-1">
                {events.map((evt) => (
                  <motion.div 
                    key={evt.id}
                    onClick={() => setSelectedEvent(evt.id)}
                    className={`bg-white border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                      selectedEvent === evt.id 
                        ? 'border-rose-500 shadow-lg shadow-rose-500/10' 
                        : 'border-slate-100 hover:border-rose-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-black text-slate-900 line-clamp-1">{evt.title}</h4>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md shrink-0 ${
                        evt.status === 'Published' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {evt.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span className="flex items-center gap-1"><Clock size={12} /> {evt.date}</span>
                      <span className="bg-slate-100 px-2 py-1 rounded text-slate-500">{evt.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedEvent && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }}
                className="lg:col-span-8"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden h-[calc(100vh-200px)] flex flex-col">
                  
                  <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white/50 shrink-0">
                    <div>
                      <h2 className="font-black text-slate-900 text-2xl tracking-tighter line-clamp-1">
                        {events.find(e => e.id === selectedEvent)?.title}
                      </h2>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-500 mt-2">
                        Event Editor
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setSelectedEvent(null)} className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-50 transition-colors">
                        <X size={16} />
                      </button>
                      <button className="bg-gradient-to-r from-rose-600 to-orange-600 text-white px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg shadow-rose-500/30 hover:scale-105 transition-transform">
                        <Check size={16} /> Publish
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
                    
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                        <Calendar size={14} /> Event Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Event Title</label>
                          <input type="text" defaultValue={events.find(e => e.id === selectedEvent)?.title} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-rose-500" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Date & Time</label>
                          <input type="text" defaultValue={events.find(e => e.id === selectedEvent)?.date} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-rose-500" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Location</label>
                          <div className="relative">
                            <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input type="text" defaultValue="Main Auditorium" className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-rose-500" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Category</label>
                          <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-rose-500">
                            <option>Academic</option>
                            <option>Cultural</option>
                            <option>Social</option>
                            <option>Sports</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Cover Image</label>
                          <div className="w-full h-[46px] bg-white border border-slate-200 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-50">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2"><ImageIcon size={14}/> Upload Banner</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                        <Users size={14} /> Event Description
                      </h3>
                      <textarea rows={6} defaultValue="Join us for the most awaited event of the year..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-rose-500 resize-none" />
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>
      <WebsiteAdminBottomNav />
    </div>
  );
}
