"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, IndianRupee, Receipt, WalletCards, 
  Menu, X, BookOpenCheck, FileSpreadsheet, LogOut
, Sparkles } from "lucide-react";

const primaryLinks = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin/accountant/dashboard" },
  { name: "Collections", icon: IndianRupee, href: "/admin/accountant/collections" },
  { name: "Invoices", icon: Receipt, href: "/admin/accountant/invoices" },
  { name: "Payroll", icon: WalletCards, href: "/admin/accountant/payroll" },
];

const secondaryLinks = [
  { name: "Scholarships", icon: BookOpenCheck, href: "/admin/accountant/scholarships" },
  { name: "Reports", icon: FileSpreadsheet, href: "/admin/accountant/reports" },
];

export default function AccountantBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    router.push("/admin/login");
  };

  return (
    <>
      <div className="md:hidden h-24 w-full" />

      {/* FLOATING DOCK NAVBAR */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] z-[1000]">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 p-2 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] flex justify-between items-center relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none rounded-[2rem]" />

          {primaryLinks.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && !item.href.endsWith("/dashboard"));
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center p-2.5 relative group"
                onClick={() => setIsMoreOpen(false)}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill-accountant" 
                    className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-[1.5rem] shadow-[0_0_20px_rgba(0,0,0,0.4)] z-0" 
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} className={`transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/80"}`} />
                  <span className={`text-[9px] font-black uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-white" : "text-white/30"} line-clamp-1 truncate px-1`}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
          
          <button 
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="flex-1 flex flex-col items-center justify-center p-2.5 relative group"
          >
            {isMoreOpen && (
              <motion.div 
                layoutId="nav-pill-accountant" 
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

      <AnimatePresence>
        {isMoreOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMoreOpen(false)}
              className="md:hidden fixed inset-0 bg-[#020617]/60 backdrop-blur-md z-[900]"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95, x: "-50%" }}
              animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
              exit={{ opacity: 0, y: 20, scale: 0.95, x: "-50%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="md:hidden fixed bottom-32 left-1/2 w-[92%] max-w-[420px] bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] z-[950] overflow-hidden shadow-2xl origin-bottom"
            >
               <div className="p-6 border-b border-white/5 flex justify-between items-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 flex items-center gap-2">
                   <Sparkles size={14} className="text-emerald-500" /> Admin Options
                 </h3>
                 <button onClick={() => setIsMoreOpen(false)} className="w-8 h-8 rounded-full bg-white/5 border border-white/5 text-white/50 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all hover:rotate-90">
                   <X size={14} strokeWidth={3} />
                 </button>
               </div>

               <div className="p-4 grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto no-scrollbar relative z-10">
                 {secondaryLinks.map((item) => {
                   const isActive = pathname === item.href || pathname.startsWith(item.href);
                   return (
                     <Link key={item.name} href={item.href} onClick={() => setIsMoreOpen(false)}>
                       <div className={`flex flex-col items-start gap-3 p-4 rounded-[1.5rem] border transition-all duration-300 ${isActive ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(0,0,0,0.2)]' : 'bg-white/5 border-transparent text-white/70 hover:bg-white/10 hover:border-white/10'}`}>
                         <item.icon size={20} strokeWidth={isActive ? 2.5 : 1.5} className={isActive ? 'text-emerald-400' : 'text-white/40'} />
                         <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                       </div>
                     </Link>
                   );
                 })}
               </div>

               <div className="p-4 border-t border-white/5 bg-[#000000]/50">
                 <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 p-4 rounded-[1.5rem] bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-600 hover:text-white hover:scale-[0.98] transition-all">
                   <LogOut size={16} />
                   <span className="text-[10px] font-black uppercase tracking-widest">Sign Out</span>
                 </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
