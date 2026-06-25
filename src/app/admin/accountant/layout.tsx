import React from "react";
import { Metadata } from "next";
import AccountantSidebar from "@/components/admin/AccountantSidebar";
import AccountantBottomNav from "@/components/admin/AccountantBottomNav";

export const metadata: Metadata = {
  title: "Accountant Portal | Vanguard",
  description: "Accountant dashboard for managing fees, salary, and expenses.",
};

export default function AccountantLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 selection:bg-emerald-600 selection:text-white">
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-0 h-screen shrink-0">
        <AccountantSidebar />
      </div>

      <main className="flex-1 min-w-0 max-w-full relative overflow-x-hidden pb-20 lg:pb-0">
        {children}
      </main>

      <AccountantBottomNav />
    </div>
  );
}
