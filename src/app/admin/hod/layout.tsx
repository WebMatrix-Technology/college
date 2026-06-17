"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HodSidebar from "@/components/admin/HodSidebar";
import HodBottomNav from "@/components/admin/HodBottomNav";
import { motion, AnimatePresence } from "framer-motion";

export default function HodLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("adminRole");
    if (role !== "hod") {
      router.replace("/admin/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans selection:bg-indigo-200 selection:text-indigo-900">


      {/* Desktop Sidebar */}
      <div className="hidden md:block relative z-40">
        <HodSidebar />
      </div>

      <main className="flex-1 h-screen md:h-screen overflow-y-auto overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key="hod-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full min-h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <HodBottomNav />
    </div>
  );
}
