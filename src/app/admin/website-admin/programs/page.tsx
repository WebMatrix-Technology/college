"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, Search, Plus, Trash2, Check, X,
  BookOpen, Clock, DollarSign, List, Edit3
} from "lucide-react";
import WebsiteAdminSidebar from "@/components/admin/WebsiteAdminSidebar";
import WebsiteAdminBottomNav from "@/components/admin/WebsiteAdminBottomNav";

const initialPrograms = [
  { id: "btech-cs", title: "B.Tech Computer Science", duration: "4 Years", fees: "$12,000/yr", status: "Active" },
  { id: "mtech-ai", title: "M.Tech Artificial Intelligence", duration: "2 Years", fees: "$15,000/yr", status: "Active" },
  { id: "bba", title: "Bachelor of Business Administration", duration: "3 Years", fees: "$8,000/yr", status: "Draft" },
];

export default function ProgramsManager() {
  const [programs, setPrograms] = useState(initialPrograms);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-blue-500/30 selection:text-blue-900">
      <div className="hidden md:block z-50 h-full">
        <WebsiteAdminSidebar />
      </div>

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/10 to-purple-400/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/30">
                <FileText size={32} className="text-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Programs & Courses</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">
              Curriculum Management System
            </p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-transform">
            <Plus size={16} /> New Program
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`${selectedProgram ? 'lg:col-span-4' : 'lg:col-span-12'} transition-all duration-500`}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-[calc(100vh-200px)]">
              <div className="p-8 border-b border-slate-100 flex flex-col gap-6 bg-white/50 shrink-0">
                <h2 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">Academic Programs</h2>
              </div>
              
              <div className="p-4 space-y-2 overflow-y-auto custom-scrollbar flex-1">
                {programs.map((program) => (
                  <motion.div 
                    key={program.id}
                    onClick={() => setSelectedProgram(program.id)}
                    className={`bg-white border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                      selectedProgram === program.id 
                        ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' 
                        : 'border-slate-100 hover:border-indigo-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-black text-slate-900 line-clamp-1">{program.title}</h4>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md shrink-0 ${
                        program.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {program.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400">
                      <span className="flex items-center gap-1"><Clock size={12} /> {program.duration}</span>
                      <span className="flex items-center gap-1"><DollarSign size={12} /> {program.fees}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedProgram && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }}
                className="lg:col-span-8"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden h-[calc(100vh-200px)] flex flex-col">
                  
                  <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white/50 shrink-0">
                    <div>
                      <h2 className="font-black text-slate-900 text-2xl tracking-tighter">
                        {programs.find(p => p.id === selectedProgram)?.title}
                      </h2>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 mt-2">
                        Curriculum Editor
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setSelectedProgram(null)} className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-50 transition-colors">
                        <X size={16} />
                      </button>
                      <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform">
                        <Check size={16} /> Save Changes
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
                    
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                        <BookOpen size={14} /> Basic Information
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Program Title</label>
                          <input type="text" defaultValue={programs.find(p => p.id === selectedProgram)?.title} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Duration</label>
                          <input type="text" defaultValue={programs.find(p => p.id === selectedProgram)?.duration} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Annual Fees</label>
                          <input type="text" defaultValue={programs.find(p => p.id === selectedProgram)?.fees} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                          <List size={14} /> Curriculum by Semester
                        </h3>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 flex items-center gap-1 hover:text-indigo-600">
                          <Plus size={12}/> Add Semester
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white border border-slate-200 rounded-2xl p-5">
                          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                            <span className="font-black text-sm text-slate-800">Semester 1</span>
                            <div className="flex gap-2">
                              <button className="text-slate-400 hover:text-indigo-500"><Edit3 size={14}/></button>
                              <button className="text-slate-400 hover:text-red-500"><Trash2 size={14}/></button>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            <li className="text-sm font-medium text-slate-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"/> Mathematics I</li>
                            <li className="text-sm font-medium text-slate-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"/> Physics for Engineers</li>
                            <li className="text-sm font-medium text-slate-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"/> Intro to Programming</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl p-5">
                          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                            <span className="font-black text-sm text-slate-800">Semester 2</span>
                            <div className="flex gap-2">
                              <button className="text-slate-400 hover:text-indigo-500"><Edit3 size={14}/></button>
                              <button className="text-slate-400 hover:text-red-500"><Trash2 size={14}/></button>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            <li className="text-sm font-medium text-slate-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"/> Mathematics II</li>
                            <li className="text-sm font-medium text-slate-600 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"/> Data Structures</li>
                          </ul>
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
