"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, LogOut, Search, Globe, 
  FileText, LayoutTemplate, Image as ImageIcon, 
  Megaphone, Settings, ChevronRight, Calendar, Trophy
} from "lucide-react";

export default function WebsiteAdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    router.push("/admin/login");
  };

  const menuItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/admin/website-admin/dashboard" },
    { name: "Pages Manager", icon: LayoutTemplate, href: "/admin/website-admin/pages" },
    { name: "Programs & Courses", icon: FileText, href: "/admin/website-admin/programs" },
    { name: "About & Leaders", icon: Globe, href: "/admin/website-admin/about" },
    { name: "Events Calendar", icon: Calendar, href: "/admin/website-admin/events" },
    { name: "Achievements", icon: Trophy, href: "/admin/website-admin/achievements" },
    { name: "Image Gallery", icon: ImageIcon, href: "/admin/website-admin/gallery" },
    { name: "Announcements", icon: Megaphone, href: "/admin/website-admin/announcements" },
  ];

  const filteredItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-72 bg-slate-900 text-white h-full flex flex-col font-sans border-r border-slate-800 shadow-2xl relative z-10 overflow-hidden shrink-0">
      {/* Dynamic Background Effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none" />

      {/* Logo Area */}
      <div className="p-6 shrink-0 relative z-10 border-b border-slate-800/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Globe className="text-white" size={20} />
          </div>
          <div>
            <h2 className="font-black text-xl tracking-tighter italic text-white leading-none">CMS</h2>
            <p className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em] mt-1">Website Admin</p>
          </div>
        </div>

        {/* Global Search */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors" size={14} />
          <input 
            type="text" 
            placeholder="Search CMS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700/50 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl pl-9 pr-4 py-2.5 outline-none focus:border-blue-500/50 focus:bg-slate-800 transition-all relative z-10 placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-4 py-6 custom-scrollbar relative z-10 space-y-1">
        {filteredItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin/website-admin/dashboard' && pathname.startsWith(item.href));
          
          return (
            <Link key={item.name} href={item.href} className="block">
              <div className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group overflow-hidden ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}>
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active-pill"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-2xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon size={18} className={isActive ? "text-blue-400" : "group-hover:text-slate-300 transition-colors"} />
                <span className="text-[11px] font-black uppercase tracking-widest relative z-10">{item.name}</span>
                
                {isActive && (
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute right-4 w-1.5 h-1.5 rounded-full bg-blue-500"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* User Profile / Logout */}
      <div className="p-6 shrink-0 relative z-10 border-t border-slate-800/50">
         <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 border border-slate-700">
               <span className="text-sm font-black">WA</span>
             </div>
             <div>
               <p className="text-xs font-black text-white truncate max-w-[100px]">Web Admin</p>
               <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Authenticated</p>
             </div>
           </div>
           <button 
             onClick={handleLogout}
             className="w-10 h-10 rounded-xl bg-slate-800/50 text-slate-400 flex items-center justify-center hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 border border-transparent transition-all"
           >
             <LogOut size={16} />
           </button>
         </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  );
}
