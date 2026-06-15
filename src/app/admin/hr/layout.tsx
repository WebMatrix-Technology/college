"use client";
import React, { useState } from "react";
import HRSidebar from "@/components/admin/HRSidebar";
import { Menu } from "lucide-react";

/**
 * HR Layout
 * This wrapper provides the responsive sidebar navigation for all HR-related routes.
 * It uses conditional padding to account for the mobile floating menu button.
 */
export default function HRLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 text-white z-50 sticky top-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-600/30">
            <span className="text-white font-black text-xs italic">V</span>
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-tighter text-white leading-none">VIT Admin</h1>
            <p className="text-[8px] font-black uppercase tracking-widest text-orange-400 mt-0.5">HR Portal</p>
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
        <HRSidebar />
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* 2. Main Content Area */}
      <main className="flex-1 h-[calc(100vh-64px)] md:h-screen overflow-y-auto custom-scrollbar">
        <div className="max-w-[1600px] mx-auto">
          <div>
            {children}
          </div>
        </div>
      </main>

      {/* Decorative background element for the admin area */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}