"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Network,
  Users,
  GraduationCap,
  BookOpen,
  CalendarDays,
  Layers,
  Clock,
  FileSpreadsheet,
  IndianRupee,
  CalendarCheck,
  Bell,
  BarChart,
  LogOut
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/college-admin/dashboard", icon: LayoutDashboard },
  { name: "Departments", href: "/admin/college-admin/departments", icon: Network },
  { name: "Faculty", href: "/admin/college-admin/faculty", icon: Users },
  { name: "Students", href: "/admin/college-admin/students", icon: GraduationCap },
  { name: "Semesters", href: "/admin/college-admin/semesters", icon: CalendarDays },
  { name: "Batches", href: "/admin/college-admin/batches", icon: Layers },
  { name: "Timetable", href: "/admin/college-admin/timetable", icon: Clock },
  { name: "Examinations", href: "/admin/college-admin/examinations", icon: FileSpreadsheet },
  { name: "Fees", href: "/admin/college-admin/fees", icon: IndianRupee },
  { name: "Attendance", href: "/admin/college-admin/attendance", icon: CalendarCheck },
  { name: "Notices", href: "/admin/college-admin/notices", icon: Bell },
  { name: "Reports", href: "/admin/college-admin/reports", icon: BarChart },
];

export default function CollegeAdminSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    window.location.href = "/admin/login";
  };

  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen flex flex-col font-sans border-r border-slate-800 shadow-2xl relative z-10 overflow-hidden shrink-0">
      {/* Dynamic Background Effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none" />

      {/* Logo/Brand Area */}
      <div className="p-8 shrink-0 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
            <GraduationCap size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase italic tracking-tighter text-white leading-none">Vanguard</h1>
            <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 mt-1">Tenant Console</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar relative z-10 space-y-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 px-4">Academic Core</p>
        
        {navItems.slice(0, 5).map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link key={item.name} href={item.href}>
              <motion.div 
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative ${
                  isActive 
                    ? "bg-blue-600/10 text-blue-400" 
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {isActive && (
                  <motion.div layoutId="active-pill-ca-1" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full" />
                )}
                <item.icon size={18} className={isActive ? "text-blue-500" : ""} />
                <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}

        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 mt-8 px-4">Scheduling & Ops</p>
        
        {navItems.slice(5).map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link key={item.name} href={item.href}>
              <motion.div 
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative ${
                  isActive 
                    ? "bg-blue-600/10 text-blue-400" 
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {isActive && (
                  <motion.div layoutId="active-pill-ca-2" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full" />
                )}
                <item.icon size={18} className={isActive ? "text-blue-500" : ""} />
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
               <span className="text-sm font-black">AR</span>
             </div>
             <div>
               <p className="text-xs font-black text-white">Arvind Ramesh</p>
               <p className="text-[9px] font-bold text-slate-400">Principal</p>
             </div>
           </div>
           <button 
             onClick={handleLogout}
             className="w-10 h-10 rounded-xl bg-slate-800/50 text-slate-400 flex items-center justify-center hover:bg-red-500/10 hover:text-red-400 transition-colors"
           >
             <LogOut size={16} />
           </button>
         </div>
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
