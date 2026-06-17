"use client";
import React from "react";
import SuperAdminSidebar from "@/components/admin/SuperAdminSidebar";
import SuperAdminBottomNav from "@/components/admin/SuperAdminBottomNav";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 relative overflow-hidden">


      {/* Desktop Sidebar */}
      <div className="hidden md:block relative z-40">
        <SuperAdminSidebar />
      </div>
      
      {/* 2. Main Content Area */}
      <main className="flex-1 h-screen md:h-screen overflow-y-auto custom-scrollbar">
        <div className="max-w-[1600px] mx-auto">
          <div>
            {children}
          </div>
        </div>
      </main>

      {/* Decorative background element for the admin area */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      {/* Mobile Bottom Navigation */}
      <SuperAdminBottomNav />
    </div>
  );
}
