"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import ExaminationSidebar from "@/components/admin/ExaminationSidebar";
import ExaminationBottomNav from "@/components/admin/ExaminationBottomNav";

export default function ExaminationLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

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


      {/* Desktop Sidebar */}
      <div className="hidden md:block relative z-40">
        <ExaminationSidebar />
      </div>

      <div className="flex-1 overflow-x-hidden h-screen md:h-auto overflow-y-auto">
        {children}
      </div>

      <ExaminationBottomNav />
    </div>
  );
}
