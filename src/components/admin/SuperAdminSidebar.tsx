"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, Building2, CreditCard, Users, 
  LineChart, Settings, ShieldAlert, Database, 
  LifeBuoy, LogOut
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin/super-admin/dashboard" },
  { name: "Colleges", icon: Building2, href: "/admin/super-admin/colleges" },
  { name: "Subscriptions", icon: CreditCard, href: "/admin/super-admin/subscriptions" },
  { name: "Users", icon: Users, href: "/admin/super-admin/users" },
  { name: "Analytics", icon: LineChart, href: "/admin/super-admin/analytics" },
  { name: "Settings", icon: Settings, href: "/admin/super-admin/settings" },
  { name: "Audit Logs", icon: ShieldAlert, href: "/admin/super-admin/audit-logs" },
  { name: "Backups", icon: Database, href: "/admin/super-admin/backups" },
  { name: "Support", icon: LifeBuoy, href: "/admin/super-admin/support" },
];

export default function SuperAdminSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar Container */}
      <aside className="
        w-72 bg-slate-900 text-slate-300 flex flex-col min-h-screen border-r border-slate-800
      ">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-black text-white italic">V</div>
          <div>
            <h2 className="text-white font-black text-sm tracking-tighter">VANGUARD CORE</h2>
            <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">Super Admin</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin/super-admin/dashboard");
            return (
              <Link key={item.name} href={item.href}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20" : "hover:bg-slate-800 hover:text-white"
                }`}>
                  <item.icon size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link href="/admin/login">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-black text-xs uppercase tracking-widest">
              <LogOut size={20} /> Sign Out
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}
