"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutTemplate, Search, Edit3, Check, X,
  Globe, Type, Image as ImageIcon, Link as LinkIcon
} from "lucide-react";
import WebsiteAdminSidebar from "@/components/admin/WebsiteAdminSidebar";
import WebsiteAdminBottomNav from "@/components/admin/WebsiteAdminBottomNav";

const pages = [
  { id: "home", name: "Home Page", path: "/", lastEdited: "2 hours ago", status: "Published" },
  { id: "programs", name: "Programs & Courses", path: "/programs", lastEdited: "1 day ago", status: "Published" },
  { id: "campus", name: "Campus Life", path: "/campus", lastEdited: "3 days ago", status: "Published" },
  { id: "faculty", name: "Faculty Directory", path: "/faculty", lastEdited: "1 week ago", status: "Draft" },
];

export default function ContentManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  const filteredPages = pages.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-blue-500/30 selection:text-blue-900">
      <div className="hidden md:block z-50 h-full">
        <WebsiteAdminSidebar />
      </div>

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-indigo-400/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30">
                <LayoutTemplate size={32} className="text-white" />
              </div>
              Pages <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Manager</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">
              Content Management System
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* PAGES LIST */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`${selectedPage ? 'lg:col-span-4' : 'lg:col-span-12'} transition-all duration-500`}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-[calc(100vh-200px)]">
              <div className="p-8 border-b border-slate-100 flex flex-col gap-6 bg-white/50 shrink-0">
                <h2 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">Public Pages</h2>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-300" />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search pages..." 
                    className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 outline-none focus:border-blue-500 relative z-10 transition-colors" 
                  />
                </div>
              </div>
              
              <div className="p-4 space-y-2 overflow-y-auto custom-scrollbar flex-1">
                {filteredPages.map((page) => (
                  <motion.div 
                    key={page.id}
                    onClick={() => setSelectedPage(page.id)}
                    className={`bg-white border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                      selectedPage === page.id 
                        ? 'border-blue-500 shadow-lg shadow-blue-500/10' 
                        : 'border-slate-100 hover:border-blue-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-black text-slate-900">{page.name}</h4>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                        page.status === 'Published' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {page.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span className="flex items-center gap-1"><Globe size={12} /> {page.path}</span>
                      <span>Edited {page.lastEdited}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* EDITOR PANEL */}
          <AnimatePresence>
            {selectedPage && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }}
                className="lg:col-span-8"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden h-[calc(100vh-200px)] flex flex-col">
                  
                  {/* Editor Header */}
                  <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white/50 shrink-0">
                    <div>
                      <h2 className="font-black text-slate-900 text-2xl tracking-tighter">
                        {pages.find(p => p.id === selectedPage)?.name}
                      </h2>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mt-2">
                        Content Editor
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setSelectedPage(null)} className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-50 transition-colors">
                        <X size={16} />
                      </button>
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform">
                        <Check size={16} /> Publish
                      </button>
                    </div>
                  </div>

                  {/* Form Editor Body */}
                  <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
                    
                    {/* SEO Block */}
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                        <Search size={14} /> Search Engine Optimization (SEO)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Meta Title</label>
                          <input type="text" defaultValue={`Vanguard College | ${pages.find(p => p.id === selectedPage)?.name}`} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-blue-500 transition-colors" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Meta Description</label>
                          <textarea rows={2} defaultValue="Welcome to Vanguard College. Explore our programs and campus life." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-blue-500 transition-colors resize-none" />
                        </div>
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                        <LayoutTemplate size={14} /> Page Sections
                      </h3>
                      <div className="space-y-6">
                        {/* Section 1 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-5">
                          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                            <span className="font-black text-sm text-slate-800">Hero Section</span>
                            <button className="text-[10px] font-bold uppercase tracking-widest text-blue-500 flex items-center gap-1 hover:text-blue-600"><Edit3 size={12}/> Edit Structure</button>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-2"><Type size={12}/> Headline</label>
                              <input type="text" defaultValue="Engineering the Future" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-blue-500" />
                            </div>
                            <div>
                              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-2"><ImageIcon size={12}/> Hero Background Image</label>
                              <div className="w-full h-32 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Click to upload media</span>
                              </div>
                            </div>
                            <div>
                              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-2"><LinkIcon size={12}/> CTA Button Link</label>
                              <input type="text" defaultValue="/admissions" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-blue-500" />
                            </div>
                          </div>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-5">
                          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                            <span className="font-black text-sm text-slate-800">Body Content (Rich Text)</span>
                          </div>
                          <textarea rows={6} defaultValue="Vanguard College provides state-of-the-art facilities..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-500 resize-none" />
                        </div>
                      </div>
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
