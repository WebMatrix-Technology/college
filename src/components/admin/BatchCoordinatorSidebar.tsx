"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  GraduationCap,
  BookOpen,
  Clock,
  LogOut,
  Target,
  Users
} from "lucide-react";

const navItems = [
  { name: "Batch Overview", href: "/admin/batch-coordinator/dashboard", icon: LayoutDashboard },
  { name: "Batch Students", href: "/admin/batch-coordinator/students", icon: GraduationCap },
  { name: "Batch Syllabus", href: "/admin/batch-coordinator/subjects", icon: BookOpen },
  { name: "Batch Schedule", href: "/admin/batch-coordinator/timetable", icon: Clock },
];

export default function BatchCoordinatorSidebar() {
  const pathname = usePathname();
  const [course, setCourse] = useState("Course");
  const [batch, setBatch] = useState("Batch");

  useEffect(() => {
    const courseName = localStorage.getItem("coordinatorCourse");
    const batchName = localStorage.getItem("coordinatorBatch");
    if (courseName) setCourse(courseName);
    if (batchName) setBatch(batchName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    localStorage.removeItem("coordinatorCourse");
    localStorage.removeItem("coordinatorBatch");
    window.location.href = "/admin/login";
  };

  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen flex flex-col font-sans border-r border-slate-800 shadow-2xl relative z-10 overflow-hidden">
      {/* Dynamic Background Effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-teal-600/20 to-transparent pointer-events-none" />

      {/* Logo/Brand Area */}
      <div className="p-8 shrink-0 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/30">
            <Target size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase italic tracking-tighter text-white leading-none">Vanguard</h1>
            <p className="text-[9px] font-black uppercase tracking-widest text-teal-400 mt-1">Batch Central</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar relative z-10 space-y-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 px-4">Batch Tools</p>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link key={item.name} href={item.href}>
              <motion.div 
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative ${
                  isActive 
                    ? "bg-teal-600/10 text-teal-400" 
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {isActive && (
                  <motion.div layoutId="active-pill-batch" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-teal-500 rounded-r-full" />
                )}
                <item.icon size={18} className={isActive ? "text-teal-500" : ""} />
                <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* User Profile / Logout */}
      <div className="p-6 shrink-0 relative z-10 border-t border-slate-800/50">
         <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
               <span className="text-sm font-black">BC</span>
             </div>
             <div>
               <p className="text-[10px] font-black text-white uppercase">{course} • {batch}</p>
               <p className="text-[9px] font-bold text-slate-400">Batch Coordinator</p>
             </div>
           </div>
           <button 
             onClick={handleLogout}
             className="w-10 h-10 rounded-xl bg-slate-800/50 text-slate-400 flex items-center justify-center hover:bg-red-500/10 hover:text-red-400 transition-colors"
           >
             <LogOut size={16} />
           </button>
         </div>
         <Link href="/faculty" className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-teal-600/10 hover:bg-teal-600/20 text-teal-400 rounded-xl transition-colors text-[10px] font-black uppercase tracking-widest border border-teal-500/20">
           <Users size={14} /> Faculty Portal
         </Link>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  );
}
