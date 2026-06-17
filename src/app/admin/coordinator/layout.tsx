"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CoordinatorSidebar from "@/components/admin/CoordinatorSidebar";
import CoordinatorBottomNav from "@/components/admin/CoordinatorBottomNav";
import { motion, AnimatePresence } from "framer-motion";

export default function CoordinatorLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("adminRole");
    if (role !== "course_coordinator") {
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
          className="w-12 h-12 border-4 border-fuchsia-200 border-t-fuchsia-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans selection:bg-fuchsia-200 selection:text-fuchsia-900">


      {/* Desktop Sidebar */}
      <div className="hidden md:block relative z-40">
        <CoordinatorSidebar />
      </div>

      <main className="flex-1 h-screen md:h-screen overflow-y-auto overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key="coordinator-content"
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

      <CoordinatorBottomNav />
    </div>
  );
}
