"use client";
import PlacementSidebar from "@/components/admin/PlacementSidebar";
import PlacementBottomNav from "@/components/admin/PlacementBottomNav";

export default function PlacementLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 selection:bg-indigo-600 selection:text-white">
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-0 h-screen shrink-0">
        <PlacementSidebar />
      </div>

      <main className="flex-1 min-w-0 max-w-full relative overflow-x-hidden pb-20 lg:pb-0">
        {children}
      </main>

      <PlacementBottomNav />
    </div>
  );
}
