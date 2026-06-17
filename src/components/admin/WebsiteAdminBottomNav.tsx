"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, LayoutTemplate, Megaphone,
  Menu, X, LogOut, FileText, Globe, Calendar, Trophy, Image as ImageIcon
} from "lucide-react";

export default function WebsiteAdminBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    router.push("/admin/login");
  };

  const allItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/admin/website-admin/dashboard" },
    { name: "Pages", icon: LayoutTemplate, href: "/admin/website-admin/pages" },
    { name: "Programs", icon: FileText, href: "/admin/website-admin/programs" },
    { name: "About", icon: Globe, href: "/admin/website-admin/about" },
    { name: "Events", icon: Calendar, href: "/admin/website-admin/events" },
    { name: "Achieve", icon: Trophy, href: "/admin/website-admin/achievements" },
    { name: "Gallery", icon: ImageIcon, href: "/admin/website-admin/gallery" },
    { name: "Announce", icon: Megaphone, href: "/admin/website-admin/announcements" },
  ];

  const primaryItems = allItems.slice(0, 3);
  const moreItems = allItems.slice(3);

  return (
    <>
      <div className="md:hidden h-20 w-full" />

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center px-2 py-2">
          {primaryItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin/website-admin/dashboard' && pathname.startsWith(item.href));
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center p-2 relative group"
                onClick={() => setIsMoreOpen(false)}
              >
                {isActive && (
                  <motion.div layoutId="nav-pill-website" className="absolute inset-0 bg-blue-500/20 rounded-2xl z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <item.icon size={20} className={isActive ? "text-blue-400" : "text-slate-400 group-hover:text-slate-200"} />
                  <span className={`text-[9px] font-black uppercase tracking-wider ${isActive ? "text-blue-400" : "text-slate-500"}`}>
                    {item.name.split(" ")[0]}
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
              <motion.div layoutId="nav-pill-website" className="absolute inset-0 bg-blue-500/20 rounded-2xl z-0" />
            )}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <Menu size={20} className={isMoreOpen ? "text-blue-400" : "text-slate-400"} />
              <span className={`text-[9px] font-black uppercase tracking-wider ${isMoreOpen ? "text-blue-400" : "text-slate-500"}`}>
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
                 <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Additional Options</h3>
                 <button onClick={() => setIsMoreOpen(false)} className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center">
                   <X size={16} />
                 </button>
               </div>
               
               <div className="p-2 grid grid-cols-2 gap-2">
                 {moreItems.map((item) => {
                   const isActive = pathname === item.href || pathname.startsWith(item.href);
                   return (
                     <Link 
                       key={item.name} 
                       href={item.href}
                       onClick={() => setIsMoreOpen(false)}
                       className={`flex items-center gap-3 p-3 rounded-2xl transition-colors ${
                         isActive ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
                       }`}
                     >
                       <item.icon size={18} className={isActive ? "text-blue-400" : "text-slate-400"} />
                       <span className="text-[11px] font-black uppercase tracking-widest">{item.name}</span>
                     </Link>
                   )
                 })}
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
