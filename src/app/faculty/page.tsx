"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Users, CheckSquare, FileUp, Calendar, 
  Settings, LogOut, ArrowUpRight, Bell, 
  ClipboardList, Briefcase, Mail, BookOpen, UploadCloud, MessageSquare,
  GraduationCap, Target, Terminal, Clock
} from "lucide-react";

export default function FacultyDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  const facultyActions = [
    { title: "Attendance", detail: "Mark daily presence", Icon: CheckSquare, color: "bg-emerald-600", link: "/faculty/attendance" },
    { title: "Grading Center", detail: "Upload marks & results", Icon: FileUp, color: "bg-orange-600", link: "/faculty/grading" },
    { title: "My Schedule", detail: "8 Lectures this week", Icon: Calendar, color: "bg-blue-600", link: "/faculty/timetable" },
    { title: "My Subjects", detail: "View Assigned Courses", Icon: BookOpen, color: "bg-purple-600", link: "/faculty/subjects" },
    { title: "Materials", detail: "Upload Notes & Docs", Icon: UploadCloud, color: "bg-indigo-600", link: "/faculty/materials" },
    { title: "Assignments", detail: "Create & Evaluate", Icon: ClipboardList, color: "bg-rose-600", link: "/faculty/assignments" },
  ];

  const adminTools = [
    { name: "Student Broadcasts", Icon: MessageSquare, path: "/faculty/communication" },
    { name: "Salary Slips", Icon: Briefcase, path: "/faculty/salary" },
    { name: "Research Portal", Icon: Users, path: "/faculty/research" },
    { name: "Leave Portal", Icon: Mail, path: "/faculty/leave" },
    { name: "Settings", Icon: Settings, path: "/faculty/settings" },
  ];

  const recentUpdates = [
    { text: "Mid-term examination schedule released by controller", time: "1H AGO", tag: "EXAMS" },
    { text: "Department meeting scheduled for Friday at 3 PM", time: "4H AGO", tag: "MEETING" },
    { text: "New research grant approved for AI Lab", time: "YESTERDAY", tag: "GRANT" }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-emerald-500 selection:text-white font-sans">
      
      {/* --- HERO HEADER --- */}
      <section className="pt-40 pb-12 bg-slate-950 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div 
            animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -top-64 -right-64 w-[800px] h-[800px] bg-gradient-to-r from-emerald-600/30 to-transparent rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ rotate: -360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-[80px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <span className="text-emerald-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
                <Terminal size={14} className="animate-pulse" /> Vanguard Faculty Node
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-white">
                Welcome, <br/><span className="text-emerald-500 relative">
                  Professor.
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-emerald-500/20 -skew-x-12"></span>
                </span>
              </h1>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3 w-full md:w-auto">
              <button 
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-red-600 transition-all px-6 py-3 text-[10px] font-black uppercase tracking-widest border border-white/10 rounded-2xl w-full md:w-auto backdrop-blur-sm"
              >
                <LogOut size={14} /> Logout
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DASHBOARD GRID --- */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 relative z-20 -mt-8">
        
        {/* LEFT COLUMN: PRIMARY ACTIONS & BATCHES */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* ACTION GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {facultyActions.map((item, i) => (
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

          {/* RECENT UPDATES */}
          <div className="bg-white border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3 text-slate-900 border-b border-slate-100 pb-4">
              <Clock className="text-emerald-600" /> RECENT UPDATES
            </h2>
            <div className="space-y-6">
              {recentUpdates.map((update, i) => (
                <div key={i} className="flex justify-between items-start border-b border-slate-50 pb-6 last:border-0 last:pb-0 group">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">{update.text}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{update.time}</p>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest bg-slate-50 text-slate-500 px-3 py-1.5 rounded-full border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors">
                    {update.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: ADMINISTRATIVE TOOLS */}
        <div className="lg:col-span-4 space-y-8">
          
          <div className="bg-slate-950 p-8 text-white rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600/20 rounded-full blur-3xl group-hover:bg-emerald-500/40 transition-colors duration-700" />
            <h3 className="text-xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-4 relative z-10 flex items-center gap-2">
              <Settings size={20} className="text-emerald-500" /> Administrative
            </h3>
            <div className="space-y-4 relative z-10">
              {adminTools.map((tool, i) => (
                <Link href={tool.path} key={i} className="block w-full">
                  <button className="w-full flex items-center justify-between group/btn p-4 bg-white/5 hover:bg-emerald-600 transition-all rounded-2xl text-left border border-white/5 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <span className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover/btn:text-white transition-colors">
                      <tool.Icon size={16} className="text-slate-500 group-hover/btn:text-white transition-colors" /> {tool.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-all transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 p-4 opacity-20 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
              <Bell size={120} />
            </div>
            <div className="relative z-10">
              <h4 className="text-sm font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
                <Bell size={14} className="animate-pulse" /> Staff Notice Board
              </h4>
              <p className="text-xl font-black italic tracking-tighter mb-8 leading-tight drop-shadow-md">
                Final exam question papers must be submitted by Monday, 5:00 PM to the controller office.
              </p>
              <button className="bg-white text-emerald-700 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-colors w-full shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group/btn">
                Acknowledge Notice <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </section>

      <footer className="py-12 text-center relative z-10 border-t border-slate-200 mt-12 bg-white">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] flex items-center justify-center gap-2">
          Vanguard System <span className="w-1 h-1 rounded-full bg-emerald-500"></span> Professor Portal
        </p>
      </footer>
    </main>
  );
}