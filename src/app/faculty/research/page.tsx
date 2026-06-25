"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FlaskConical, Search, Plus, 
  FileText, ExternalLink, Filter, Target,
  Users, Calendar
} from "lucide-react";
import VanguardHeader from "@/components/VanguardHeader";

// Mock Research Projects Data
const RESEARCH_PROJECTS = [
  {
    id: 1,
    title: "Quantum Neural Network Architecture for Predictive Modeling",
    grant: "Vanguard Tech Grant 2025",
    status: "Active",
    budget: "$45,000",
    team: 4,
    deadline: "Dec 2026",
    progress: 68
  },
  {
    id: 2,
    title: "Sustainable Nanomaterials for Next-Gen Batteries",
    grant: "National Science Foundation",
    status: "Under Review",
    budget: "$120,000",
    team: 6,
    deadline: "Mar 2027",
    progress: 15
  },
  {
    id: 3,
    title: "AI-Driven Cyber Threat Intelligence System",
    grant: "Defense Research Lab",
    status: "Completed",
    budget: "$85,000",
    team: 3,
    deadline: "Jan 2026",
    progress: 100
  }
];

export default function FacultyResearch() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Active", "Under Review", "Completed"];
  
  const filteredProjects = RESEARCH_PROJECTS.filter(project => 
    activeFilter === "All" ? true : project.status === activeFilter
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-500 selection:text-white">
      
      <VanguardHeader 
        title="Research" 
        subtitle="Portal." 
        tag="Faculty Node // Grants & Projects" 
        TagIcon={FlaskConical} 
        primaryColor="indigo"
        showBack={true}
        backHref="/faculty"
      >
        <div className="mt-12 bg-slate-950/40 backdrop-blur-md border border-white/10 text-white p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-6 md:absolute md:right-0 md:bottom-0 md:mb-12 md:mr-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500 rounded-2xl">
              <FlaskConical size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Active Grants</p>
              <p className="text-xl font-black italic">2 <span className="text-[10px] opacity-40">Projects</span></p>
            </div>
          </div>
          
          <div className="h-10 w-px bg-white/20 hidden md:block"></div>
          
          <button className="bg-white text-slate-900 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center gap-2">
            <Plus size={14} /> New Proposal
          </button>
        </div>
      </VanguardHeader>

      <section className="py-12 max-w-7xl mx-auto px-6 relative z-20 -mt-8">
        
        {/* --- FILTERS & SEARCH --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeFilter === f 
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900 shadow-sm border border-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="SEARCH PROJECTS..." 
              className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                key={project.id}
                className="bg-white border border-slate-200 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-indigo-600/30 transition-all group relative overflow-hidden"
              >
                {/* Status Indicator */}
                <div className={`absolute top-0 left-0 w-1.5 h-full ${
                  project.status === 'Active' ? 'bg-emerald-500' :
                  project.status === 'Completed' ? 'bg-blue-500' : 'bg-orange-500'
                }`}></div>

                <div className="flex justify-between items-start mb-6 gap-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest mb-3 ${
                      project.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                      project.status === 'Completed' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                    }`}>
                      {project.status}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black italic uppercase text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all shrink-0">
                    <ExternalLink size={16} />
                  </button>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Grant Body</p>
                  <p className="text-sm font-bold text-slate-700">{project.grant}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      <Target size={12} /> Budget
                    </div>
                    <p className="font-bold text-slate-900">{project.budget}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      <Users size={12} /> Team
                    </div>
                    <p className="font-bold text-slate-900">{project.team} Members</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      <Calendar size={12} /> Deadline
                    </div>
                    <p className="font-bold text-slate-900">{project.deadline}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                    <span className="text-slate-400">Research Progress</span>
                    <span className="text-indigo-600">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${
                        project.status === 'Completed' ? 'bg-blue-500' : 'bg-indigo-500'
                      }`}
                    ></motion.div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </section>
    </main>
  );
}
