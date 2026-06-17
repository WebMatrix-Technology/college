"use client";
import HRSidebar from "@/components/admin/HRSidebar";
import HRBottomNav from "@/components/admin/HRBottomNav";

/**
 * HR Layout
 * This wrapper provides the responsive sidebar navigation for all HR-related routes.
 * It uses conditional padding to account for the mobile floating menu button.
 */
export default function HRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block relative z-40">
        <HRSidebar />
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
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-rose-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <HRBottomNav />
    </div>
  );
}