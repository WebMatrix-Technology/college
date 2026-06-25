"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import ToastContainer from "@/components/Toast";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const isAdmissionsPage = pathname.startsWith("/admissions");
  const isFacultyPage = pathname.startsWith("/faculty");
  const isStudentsCornerPage = pathname.startsWith("/students-corner");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Performance: Bypass the landing page loader for admin users
  useEffect(() => {
    if (isAdminPage) {
      setLoading(false); 
      return;
    }
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [isAdminPage]);

  return (
    <AnimatePresence mode="wait">
      {/* Show loader only for the main landing website */}
      {loading && !isAdminPage ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          <div className="relative flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="font-black text-white text-5xl md:text-7xl tracking-tighter italic">VIT</span>
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full mt-4 md:mt-6" 
              />
            </motion.div>

            {/* Progress Line */}
            <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-orange-500"
              />
            </div>
            
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]"
            >
              Engineering the future
            </motion.span>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={isAdminPage ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          {/* Navbar is HIDDEN for all /admin, /admissions, /faculty, and /students-corner routes */}
          {!isAdminPage && !isAdmissionsPage && !isFacultyPage && !isStudentsCornerPage && <Navbar {...({ isScrolled } as any)} />}
          
          {children}
          <ToastContainer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
