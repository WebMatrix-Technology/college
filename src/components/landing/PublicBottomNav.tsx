"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, BookOpen, Building2, Briefcase, Menu, X,
  Info, FileText, Users, Trophy, Calendar, Phone, LogIn
} from "lucide-react";

const primaryLinks = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Programs", icon: BookOpen, href: "/programs" },
  { name: "Campus", icon: Building2, href: "/campus" },
  { name: "Careers", icon: Briefcase, href: "/careers" },
];

const secondaryLinks = [
  { name: "About Us", icon: Info, href: "/about" },
  { name: "Admissions", icon: FileText, href: "/procedure" },
  { name: "Our People", icon: Users, href: "/people" },
  { name: "Achievements", icon: Trophy, href: "/achievements" },
  { name: "Events", icon: Calendar, href: "/events" },
  { name: "Contact", icon: Phone, href: "/contact" },
];

export default function PublicBottomNav() {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[1000] bg-[#101827]/95 backdrop-blur-xl border-t border-white/10 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center px-2 py-2">
          {primaryLinks.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center p-2 relative group"
                onClick={() => setIsMoreOpen(false)}
              >
                {isActive && (
                  <motion.div layoutId="nav-pill-public" className="absolute inset-0 bg-orange-500/20 rounded-2xl z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <item.icon size={20} className={isActive ? "text-orange-500" : "text-slate-400 group-hover:text-slate-200"} />
                  <span className={`text-[9px] font-black uppercase tracking-wider ${isActive ? "text-orange-500" : "text-slate-500"}`}>
                    {item.name}
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
              <motion.div layoutId="nav-pill-public" className="absolute inset-0 bg-orange-500/20 rounded-2xl z-0" />
            )}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <Menu size={20} className={isMoreOpen ? "text-orange-500" : "text-slate-400"} />
              <span className={`text-[9px] font-black uppercase tracking-wider ${isMoreOpen ? "text-orange-500" : "text-slate-500"}`}>
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
              className="lg:hidden fixed inset-0 bg-[#020617]/80 backdrop-blur-sm z-[900]"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed bottom-20 left-2 right-2 bg-[#101827] border border-white/10 rounded-[2rem] z-[950] overflow-hidden shadow-2xl"
            >
               <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#101827]/50">
                 <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Explore VIT</h3>
                 <button onClick={() => setIsMoreOpen(false)} className="w-8 h-8 rounded-full bg-white/5 text-slate-400 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                   <X size={16} />
                 </button>
               </div>
               <div className="p-2 max-h-[50vh] overflow-y-auto">
                 {secondaryLinks.map((item) => {
                   const isActive = pathname === item.href;
                   return (
                     <Link key={item.name} href={item.href} onClick={() => setIsMoreOpen(false)}>
                       <div className={`flex items-center gap-4 p-4 rounded-2xl transition-colors ${isActive ? 'bg-orange-500/10 text-orange-500' : 'text-slate-300 hover:bg-white/5'}`}>
                         <item.icon size={18} className={isActive ? 'text-orange-500' : 'text-slate-400'} />
                         <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                       </div>
                     </Link>
                   );
                 })}
               </div>
               <div className="p-4 border-t border-white/10 grid grid-cols-2 gap-3">
                 <Link href="/admissions" onClick={() => setIsMoreOpen(false)}>
                   <button className="w-full flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-200 transition-colors border border-white">
                     <span className="text-[10px] font-black uppercase tracking-widest text-center">Apply Now</span>
                   </button>
                 </Link>
                 <Link href="/login" onClick={() => setIsMoreOpen(false)}>
                   <button className="w-full flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-orange-600/10 text-orange-500 hover:bg-orange-600/20 transition-colors border border-orange-500/20">
                     <span className="text-[10px] font-black uppercase tracking-widest text-center">Login Portals</span>
                   </button>
                 </Link>
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
