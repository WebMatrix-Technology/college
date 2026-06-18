"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, BookOpen, Building2, Briefcase, Menu, X,
  Info, FileText, Users, Trophy, Calendar, Phone, LogIn, Sparkles
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
      {/* FLOATING DOCK NAVBAR */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] z-[1000]">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 p-2 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] flex justify-between items-center relative overflow-hidden">
          
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none rounded-[2rem]" />

          {primaryLinks.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center p-2.5 relative group"
                onClick={() => setIsMoreOpen(false)}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill-public" 
                    className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-rose-500 rounded-[1.5rem] shadow-[0_0_20px_rgba(234,88,12,0.4)] z-0" 
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} className={`transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/80"}`} />
                  <span className={`text-[9px] font-black uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-white" : "text-white/30"}`}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
          
          {/* MORE BUTTON */}
          <button 
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="flex-1 flex flex-col items-center justify-center p-2.5 relative group"
          >
            {isMoreOpen && (
              <motion.div 
                layoutId="nav-pill-public" 
                className="absolute inset-0 bg-white/10 rounded-[1.5rem] border border-white/10 z-0" 
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <Menu size={20} strokeWidth={isMoreOpen ? 2.5 : 2} className={`transition-colors duration-300 ${isMoreOpen ? "text-white" : "text-white/40"}`} />
              <span className={`text-[9px] font-black uppercase tracking-widest transition-colors duration-300 ${isMoreOpen ? "text-white" : "text-white/30"}`}>
                More
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* FLOATING MORE MENU DRAWER */}
      <AnimatePresence>
        {isMoreOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMoreOpen(false)}
              className="lg:hidden fixed inset-0 bg-[#020617]/60 backdrop-blur-md z-[900]"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95, x: "-50%" }}
              animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
              exit={{ opacity: 0, y: 20, scale: 0.95, x: "-50%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="lg:hidden fixed bottom-32 left-1/2 w-[92%] max-w-[420px] bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] z-[950] overflow-hidden shadow-2xl origin-bottom"
            >
               {/* Header */}
               <div className="p-6 border-b border-white/5 flex justify-between items-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[50px] rounded-full pointer-events-none" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 flex items-center gap-2">
                   <Sparkles size={14} className="text-orange-500" /> Explore VIT
                 </h3>
                 <button onClick={() => setIsMoreOpen(false)} className="w-8 h-8 rounded-full bg-white/5 border border-white/5 text-white/50 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all hover:rotate-90">
                   <X size={14} strokeWidth={3} />
                 </button>
               </div>

               {/* Links Grid */}
               <div className="p-4 grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto no-scrollbar relative z-10">
                 {secondaryLinks.map((item) => {
                   const isActive = pathname === item.href;
                   return (
                     <Link key={item.name} href={item.href} onClick={() => setIsMoreOpen(false)}>
                       <div className={`flex flex-col items-start gap-3 p-4 rounded-[1.5rem] border transition-all duration-300 ${isActive ? 'bg-orange-500/10 border-orange-500/20 text-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.15)]' : 'bg-white/5 border-transparent text-white/70 hover:bg-white/10 hover:border-white/10'}`}>
                         <item.icon size={20} strokeWidth={isActive ? 2.5 : 1.5} className={isActive ? 'text-orange-500' : 'text-white/40'} />
                         <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                       </div>
                     </Link>
                   );
                 })}
               </div>

               {/* Quick Actions (Apply & Login) */}
               <div className="p-4 border-t border-white/5 grid grid-cols-2 gap-3 bg-[#000000]/50">
                 <Link href="/admissions" onClick={() => setIsMoreOpen(false)}>
                   <button className="w-full flex items-center justify-center gap-2 p-4 rounded-[1.5rem] bg-white text-slate-950 hover:bg-slate-200 hover:scale-[0.98] transition-all">
                     <span className="text-[10px] font-black uppercase tracking-widest">Apply Now</span>
                   </button>
                 </Link>
                 <Link href="/login" onClick={() => setIsMoreOpen(false)}>
                   <button className="w-full flex items-center justify-center gap-2 p-4 rounded-[1.5rem] bg-orange-600/10 text-orange-500 border border-orange-500/20 hover:bg-orange-600 hover:text-white hover:scale-[0.98] transition-all">
                     <span className="text-[10px] font-black uppercase tracking-widest">Login</span>
                   </button>
                 </Link>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
