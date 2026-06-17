"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PublicBottomNav from "./PublicBottomNav";

export default function Navbar() {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Campus", href: "/campus" },
    { name: "Placements", href: "/placements" },
    { name: "Curriculum", href: "/curriculum" },
  ];

  const moreLinks = [
    { name: "About", href: "/about" },
    { name: "Procedure", href: "/procedure" },
    { name: "Our People", href: "/people" },
    { name: "Achievements", href: "/achievements" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* DESKTOP FLOATING PILL NAVBAR */}
      <nav className="hidden lg:block fixed z-[1000] top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1000px]">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgb(0,0,0,0.4)] rounded-full px-6 py-3 flex items-center justify-between"
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-1 shrink-0 group pl-2">
            <span className="font-black text-white text-2xl tracking-tighter italic">VIT</span>
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 group-hover:scale-150 transition-transform" />
          </Link>

          {/* CENTER LINKS */}
          <div className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative group py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors text-white/70 hover:text-white"
                >
                  {link.name}
                  {/* Subtle Active Indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}

            {/* MORE DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button className="flex items-center gap-1 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors text-white/70 hover:text-white">
                More
                <ChevronDown size={12} className={`transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-1/2 translate-x-1/2 mt-4 w-48 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2"
                  >
                    {moreLinks.map((ml) => (
                      <Link 
                        key={ml.name} 
                        href={ml.href}
                        className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {ml.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-6">
            <Link 
              href="/login" 
              className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors hidden sm:block"
            >
              Login
            </Link>
            <Link 
              href="/admissions" 
              className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION */}
      <PublicBottomNav />
    </>
  );
}