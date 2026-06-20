"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  BookOpen, Calendar, Bell, FileText, 
  Download, GraduationCap, Laptop, 
  Clock, ArrowUpRight, Zap, MessageCircle, LogOut,
  Trophy, UserCheck, ClipboardList, Target, Flame
} from "lucide-react";
import VanguardHeader from "@/components/VanguardHeader";

export default function StudentsCorner() {
  const router = useRouter();

  const primaryActions = [
    { title: "Exam Schedule", detail: "Finals: April 10", Icon: Calendar, color: "bg-blue-600", link: "/students-corner/exams" },
    { title: "Course Content", detail: "24 New Modules", Icon: BookOpen, color: "bg-orange-600", link: "/students-corner/courses" },
    { title: "Fee Portal", detail: "Sem 4 Pending", Icon: Zap, color: "bg-purple-600", link: "/students-corner/fees" },
  ];

  const recentUpdates = [
    { text: "New Assignment uploaded in Quantum Computing", time: "2H AGO", tag: "ACADEMIC" },
    { text: "Placement Drive: Microsoft visiting on Feb 20", time: "5H AGO", tag: "CAREER" },
    { text: "Attendance record for Jan 2026 finalized", time: "YESTERDAY", tag: "RECORD" },
  ];

  const liveStatus = [
    { title: "Placement Drive", detail: "Microsoft: Feb 20", Icon: Trophy, color: "bg-emerald-600", link: "/students-corner/placements" },
    { title: "Live Attendance", detail: "Current: 85%", Icon: UserCheck, color: "bg-slate-800", link: "/students-corner/attendance" },
    { title: "Assignments", detail: "02 Pending Tasks", Icon: ClipboardList, color: "bg-rose-600", link: "/students-corner/assignments" },
  ];

  const sidebarLinks = [
    { name: "Daily Timetable", Icon: Clock, link: "/students-corner/timetable" },
    { name: "Digital Library", Icon: Laptop, link: "/students-corner/library" },
    { name: "Hall Tickets", Icon: FileText, link: "/students-corner/hall-tickets" },
    { name: "Syllabus 2026", Icon: Download, link: "/students-corner/syllabus" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-orange-500 selection:text-white">

      {/* --- HERO HEADER --- */}
      <VanguardHeader 
        title="Welcome," 
        subtitle="Vanguard." 
        tag="Student Command Center" 
        TagIcon={Flame} 
        primaryColor="orange"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600 animate-pulse"></div>
          <div className="bg-orange-600 text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-widest rounded-2xl shrink-0 flex items-center gap-2 shadow-[0_0_10px_rgba(234,88,12,0.5)]">
            <Bell size={12} className="animate-bounce" /> Live Notice
          </div>
          <div className="overflow-hidden flex-1 relative h-5">
            <motion.div 
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute text-xs font-bold uppercase tracking-widest text-slate-300 whitespace-nowrap top-0"
            >
              Technovate 2026 Registration is LIVE • Mid-term results uploaded for CS & AI departments • Library hours extended to 10 PM.
            </motion.div>
          </div>
        </motion.div>
      </VanguardHeader>

      {/* --- DASHBOARD GRID --- */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 relative z-20 -mt-8">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* PRIMARY ACTIONS GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {primaryActions.map((item, i) => (
              <Link href={item.link} key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${item.color} p-8 text-white shadow-2xl flex flex-col justify-between h-64 relative overflow-hidden group cursor-pointer rounded-2xl`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-150 group-hover:rotate-12 group-hover:opacity-30 transition-all duration-700 z-0">
                    <item.Icon size={100} />
                  </div>
                  
                  <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-2xl backdrop-blur-md z-10 border border-white/20 group-hover:border-white/50 transition-colors shadow-lg">
                    <item.Icon size={20} />
                  </div>
                  
                  <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-none drop-shadow-md">{item.title}</h3>
                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-3 transition-all duration-300">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 border-t border-white/20 pt-2 flex items-center gap-2">
                         <Target size={12} /> {item.detail}
                       </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* LIVE STATUS BAR */}
          <div className="bg-white border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl">
            <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3 text-slate-900 border-b border-slate-100 pb-4">
              <Zap className="text-orange-600" /> Active Modules
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {liveStatus.map((item, i) => (
                <Link href={item.link} key={i}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`flex flex-col p-6 border border-slate-100 group hover:border-slate-300 transition-all rounded-2xl relative overflow-hidden ${item.color} hover:shadow-xl`}
                  >
                    <div className="absolute top-0 right-0 p-2 opacity-5">
                      <item.Icon size={60} />
                    </div>
                    <item.Icon size={24} className="mb-4" />
                    <h3 className="text-sm font-black uppercase text-white tracking-widest">{item.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mt-1">{item.detail}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* RECENT UPDATES */}
          <div className="bg-white border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl">
            <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3 text-slate-900 border-b border-slate-100 pb-4">
              <Clock className="text-orange-600" /> RECENT UPDATES
            </h2>
            <div className="space-y-6">
              {recentUpdates.map((update, i) => (
                <div key={i} className="flex justify-between items-start border-b border-slate-50 pb-6 last:border-0 last:pb-0 group">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-orange-600 transition-colors">{update.text}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{update.time}</p>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest bg-slate-50 text-slate-500 px-3 py-1.5 rounded-full border border-slate-100 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200 transition-colors">
                    {update.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-4 space-y-8">
          
          <div className="bg-slate-950 p-8 text-white rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl group-hover:bg-orange-500/40 transition-colors duration-700" />
            <h3 className="text-xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-4 relative z-10 flex items-center gap-2">
              <GraduationCap size={20} className="text-orange-500" /> Student Tools
            </h3>
            <div className="space-y-4 relative z-10">
              {sidebarLinks.map((link, i) => (
                <Link href={link.link} key={i} className="block w-full">
                  <button className="w-full flex items-center justify-between group/btn p-4 bg-white/5 hover:bg-orange-600 transition-all rounded-2xl text-left border border-white/5 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                    <span className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover/btn:text-white transition-colors">
                      <link.Icon size={16} className="text-slate-500 group-hover/btn:text-white transition-colors" /> {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-all transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 text-white rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform duration-700">
              <MessageCircle size={120} />
            </div>
            <div className="relative z-10">
              <h4 className="text-sm font-black uppercase tracking-widest mb-2 opacity-80 flex items-center gap-2">
                <MessageCircle size={14} /> Counselor Connect
              </h4>
              <p className="text-2xl font-black italic tracking-tighter mb-8 leading-tight drop-shadow-md">
                Need academic guidance or support?
              </p>
              <button className="bg-white text-orange-600 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-colors w-full shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group/btn">
                Message Counselor <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </section>
      
      <footer className="py-12 text-center relative z-10">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] flex items-center justify-center gap-2">
          Vanguard System <span className="w-1 h-1 rounded-full bg-orange-500"></span> Student Portal
        </p>
      </footer>
    </main>
  );
}