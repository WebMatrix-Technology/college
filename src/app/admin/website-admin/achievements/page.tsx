"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, Search, Plus, Trash2, Check, X,
  Award, Calendar, Star, Image as ImageIcon
} from "lucide-react";
import WebsiteAdminSidebar from "@/components/admin/WebsiteAdminSidebar";
import WebsiteAdminBottomNav from "@/components/admin/WebsiteAdminBottomNav";

const initialAchievements = [
  { id: "nirf", title: "NIRF Ranking Top 50", year: "2025", type: "Institutional", status: "Published" },
  { id: "hackathon", title: "Smart India Hackathon Winners", year: "2026", type: "Student", status: "Published" },
  { id: "research", title: "100+ Patents Filed", year: "2026", type: "Faculty", status: "Draft" },
];

export default function AchievementsManager() {
  const [achievements, setAchievements] = useState(initialAchievements);
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-blue-500/30 selection:text-blue-900">
      <div className="hidden md:block z-50 h-full">
        <WebsiteAdminSidebar />
      </div>

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/10 to-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl shadow-lg shadow-amber-500/30">
                <Trophy size={32} className="text-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Achievements</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">
              Milestones & Awards Database
            </p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-transform">
            <Plus size={16} /> Add Achievement
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`${selectedAchievement ? 'lg:col-span-4' : 'lg:col-span-12'} transition-all duration-500`}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-[calc(100vh-200px)]">
              <div className="p-8 border-b border-slate-100 flex flex-col gap-6 bg-white/50 shrink-0">
                <h2 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">Recognitions</h2>
              </div>
              
              <div className="p-4 space-y-2 overflow-y-auto custom-scrollbar flex-1">
                {achievements.map((achieve) => (
                  <motion.div 
                    key={achieve.id}
                    onClick={() => setSelectedAchievement(achieve.id)}
                    className={`bg-white border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                      selectedAchievement === achieve.id 
                        ? 'border-amber-500 shadow-lg shadow-amber-500/10' 
                        : 'border-slate-100 hover:border-amber-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-black text-slate-900 line-clamp-1">{achieve.title}</h4>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md shrink-0 ${
                        achieve.status === 'Published' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {achieve.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {achieve.year}</span>
                      <span className="flex items-center gap-1"><Award size={12} /> {achieve.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedAchievement && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }}
                className="lg:col-span-8"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden h-[calc(100vh-200px)] flex flex-col">
                  
                  <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white/50 shrink-0">
                    <div>
                      <h2 className="font-black text-slate-900 text-2xl tracking-tighter line-clamp-1">
                        {achievements.find(a => a.id === selectedAchievement)?.title}
                      </h2>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 mt-2">
                        Achievement Details
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setSelectedAchievement(null)} className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-50 transition-colors">
                        <X size={16} />
                      </button>
                      <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg shadow-amber-500/30 hover:scale-105 transition-transform">
                        <Check size={16} /> Save
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
                    
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                        <Star size={14} /> Record Info
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Award / Title</label>
                          <input type="text" defaultValue={achievements.find(a => a.id === selectedAchievement)?.title} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-amber-500" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Year</label>
                          <input type="text" defaultValue={achievements.find(a => a.id === selectedAchievement)?.year} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-amber-500" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Category</label>
                          <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-amber-500">
                            <option>Institutional</option>
                            <option>Student</option>
                            <option>Faculty</option>
                            <option>Alumni</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Featured Image</label>
                          <div className="w-full h-24 bg-white border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2"><ImageIcon size={14}/> Upload Award Photo</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                        <Trophy size={14} /> Detailed Description
                      </h3>
                      <textarea rows={6} defaultValue="Vanguard College was recognized for its outstanding contribution..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-amber-500 resize-none" />
                    </div>

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
