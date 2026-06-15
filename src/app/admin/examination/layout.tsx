"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Menu } from "lucide-react";
import ExaminationSidebar from "@/components/admin/ExaminationSidebar";

export default function ExaminationLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("adminRole");
    
    // Allow if role is strictly 'examination'
    if (role !== "examination") {
      router.push("/admin/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
         <div className="flex flex-col items-center text-rose-500">
           <Loader2 className="w-8 h-8 animate-spin mb-4" />
           <p className="text-[10px] font-black uppercase tracking-widest">Verifying Examination Clearance...</p>
         </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 text-white z-50 sticky top-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-600/30">
            <span className="text-white font-black text-xs">V</span>
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-tighter text-white leading-none">Vanguard</h1>
            <p className="text-[8px] font-black uppercase tracking-widest text-rose-400 mt-0.5">Controller of Exams</p>
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
        <ExaminationSidebar />
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex-1 overflow-x-hidden h-[calc(100vh-64px)] md:h-auto overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
