"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Megaphone, Search, Plus, Trash2, Check,
  AlertCircle, Calendar, EyeOff, Eye, X
} from "lucide-react";
import WebsiteAdminSidebar from "@/components/admin/WebsiteAdminSidebar";
import WebsiteAdminBottomNav from "@/components/admin/WebsiteAdminBottomNav";

const initialBanners = [
  { id: 1, title: "Admissions Open 2026", type: "Banner", status: "Active", date: "Until Aug 2026" },
  { id: 2, title: "Campus Tech Fest Announcement", type: "News", status: "Active", date: "Oct 12, 2026" },
  { id: 3, title: "Holiday Notification", type: "Alert", status: "Inactive", date: "Passed" },
];

export default function AnnouncementsManager() {
  const [banners, setBanners] = useState(initialBanners);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-blue-500/30 selection:text-blue-900">
      <div className="hidden md:block z-50 h-full">
        <WebsiteAdminSidebar />
      </div>

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/10 to-blue-400/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg shadow-cyan-500/30">
                <Megaphone size={32} className="text-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Announcements</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">
              Global Banners & Site News
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 shadow-xl shadow-slate-900/20"
          >
            <Plus size={16} /> New Announcement
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`${showForm ? 'lg:col-span-7' : 'lg:col-span-12'} transition-all duration-500`}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white/50">
                <h2 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">Active Banners</h2>
              </div>
              
              <div className="p-4 space-y-4">
                {banners.map((item) => (
                  <div key={item.id} className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center justify-between transition-shadow hover:shadow-lg">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                        item.type === 'Banner' ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                        item.type === 'Alert' ? 'bg-gradient-to-br from-rose-500 to-red-600' :
                        'bg-gradient-to-br from-emerald-400 to-teal-500'
                      }`}>
                        {item.type === 'Alert' ? <AlertCircle size={20} /> : <Megaphone size={20} />}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg mb-1">{item.title}</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                          <Calendar size={12} className="text-slate-400"/> {item.date} 
                          <span className="opacity-30">•</span> 
                          {item.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                        item.status === 'Active' 
                          ? 'bg-emerald-50 text-emerald-500 border-emerald-200 hover:bg-emerald-100' 
                          : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                      }`}>
                        {item.status === 'Active' ? <Eye size={16} /> : <EyeOff size={16} />}
                      </button>
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-rose-200 bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {showForm && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }}
                className="lg:col-span-5"
              >
                <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-[60px] rounded-full pointer-events-none" />
                  
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <h2 className="font-black text-white text-xl">Create Banner</h2>
                    <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-white"><X size={20}/></button>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Announcement Title</label>
                      <input type="text" placeholder="e.g., Spring Admissions Open" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm font-bold text-white outline-none focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Display Type</label>
                      <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm font-bold text-white outline-none focus:border-blue-500">
                        <option>Top Banner (Global)</option>
                        <option>Homepage News Section</option>
                        <option>Urgent Alert (Modal)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Target URL</label>
                      <input type="text" placeholder="e.g., /admissions" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm font-bold text-white outline-none focus:border-blue-500" />
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors mt-8">
                      <Check size={16} /> Publish Announcement
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>
      <WebsiteAdminBottomNav />
    </div>
  );
}
