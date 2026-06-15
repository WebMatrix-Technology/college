"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BatchCoordinatorSidebar from "@/components/admin/BatchCoordinatorSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

export default function BatchCoordinatorLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("adminRole");
    if (role !== "batch_coordinator") {
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
          className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 text-white z-50 sticky top-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-teal-600/30">
            <span className="text-white font-black text-xs">B</span>
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-tighter text-white leading-none">Vanguard</h1>
            <p className="text-[8px] font-black uppercase tracking-widest text-teal-400 mt-0.5">Batch Coordinator</p>
          </div>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
           <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Wrapper */}
      <div className={`
        fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <BatchCoordinatorSidebar />
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <main className="flex-1 h-[calc(100vh-64px)] md:h-screen overflow-y-auto overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key="batch-coordinator-content"
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
    </div>
  );
}
