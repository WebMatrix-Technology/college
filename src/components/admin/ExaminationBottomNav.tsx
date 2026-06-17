"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, CalendarDays, UserCheck, FileSpreadsheet, 
  Menu, X, LogOut
} from "lucide-react";

const primaryLinks = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin/examination/dashboard" },
  { name: "Schedules", icon: CalendarDays, href: "/admin/examination/schedules" },
  { name: "Invigilation", icon: UserCheck, href: "/admin/examination/invigilation" },
  { name: "Results", icon: FileSpreadsheet, href: "/admin/examination/results" },
];

export default function ExaminationBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    router.push("/admin/login");
  };

  return (
    <>
      <div className="md:hidden h-20 w-full" />

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center px-2 py-2">
          {primaryLinks.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin/examination/dashboard");
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center p-2 relative group"
                onClick={() => setIsMoreOpen(false)}
              >
                {isActive && (
                  <motion.div layoutId="nav-pill-exam" className="absolute inset-0 bg-rose-500/20 rounded-2xl z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <item.icon size={20} className={isActive ? "text-rose-400" : "text-slate-400 group-hover:text-slate-200"} />
                  <span className={`text-[9px] font-black uppercase tracking-wider ${isActive ? "text-rose-400" : "text-slate-500"}`}>
                    {item.name.substring(0, 5)}
                  </span>
                </div>
              </Link>
            );
          })}
          
          <button 
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="flex-1 flex flex-col items-center justify-center p-2 relative group"
          >
            {isMoreOpen && (
              <motion.div layoutId="nav-pill-exam" className="absolute inset-0 bg-rose-500/20 rounded-2xl z-0" />
            )}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <Menu size={20} className={isMoreOpen ? "text-rose-400" : "text-slate-400"} />
              <span className={`text-[9px] font-black uppercase tracking-wider ${isMoreOpen ? "text-rose-400" : "text-slate-500"}`}>
                More
              </span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMoreOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMoreOpen(false)}
              className="md:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed bottom-20 left-2 right-2 bg-slate-900 border border-slate-800 rounded-[2rem] z-40 overflow-hidden shadow-2xl"
            >
               <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                 <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">System Options</h3>
                 <button onClick={() => setIsMoreOpen(false)} className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center">
                   <X size={16} />
                 </button>
               </div>
               <div className="p-4 border-t border-slate-800">
                 <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">
                   <LogOut size={16} />
                   <span className="text-xs font-black uppercase tracking-widest">Sign Out</span>
                 </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
      `}</style>
    </>
  );
}
