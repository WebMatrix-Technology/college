"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CollegeAdminSidebar from "@/components/admin/CollegeAdminSidebar";
import { motion, AnimatePresence } from "framer-motion";

export default function CollegeAdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // In a real app, you would verify a JWT or session token.
    // Here we use the mock local storage role check.
    const role = localStorage.getItem("adminRole");
    if (role !== "college_admin") {
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
          className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <CollegeAdminSidebar />
      <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key="college-admin-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
