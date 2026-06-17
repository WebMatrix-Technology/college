"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Briefcase, MapPin, Clock, ArrowRight, 
  Search, Sparkles, Zap, ShieldCheck, 
  Globe, GraduationCap, Laptop, ChevronRight,
  Code, HeartHandshake, Database
} from "lucide-react";

// --- JOB DATA ---
const JOBS = [
  { 
    id: 1, title: "Lead AI Researcher", dept: "Teaching", type: "Full-Time", location: "Mumbai Node", 
    salary: "₹18L - ₹24L", icon: Sparkles, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" 
  },
  { 
    id: 2, title: "Corporate Relations Head", dept: "Placement", type: "Full-Time", location: "Bangalore Node", 
    salary: "₹12L - ₹15L", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" 
  },
  { 
    id: 3, title: "Senior System Admin", dept: "IT & Infrastructure", type: "Contract", location: "Remote / Hybrid", 
    salary: "₹10L - ₹12L", icon: Laptop, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" 
  },
  { 
    id: 4, title: "Assistant Registrar", dept: "Administration", type: "Full-Time", location: "Pune Node", 
    salary: "₹8L - ₹10L", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" 
  },
  { 
    id: 5, title: "Psychology Counselor", dept: "Admission", type: "Part-Time", location: "Mumbai Node", 
    salary: "₹6L - ₹8L", icon: HeartHandshake, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" 
  },
  { 
    id: 6, title: "Data Scientist", dept: "IT & Infrastructure", type: "Full-Time", location: "Bangalore Node", 
    salary: "₹14L - ₹20L", icon: Database, color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" 
  }
];

const DEPARTMENTS = ["All Roles", "Teaching", "Placement", "IT & Infrastructure", "Administration", "Admission"];

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDept, setActiveDept] = useState("All Roles");

  const filteredJobs = JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeDept === "All Roles" || job.dept === activeDept;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-orange-500/30 overflow-hidden font-sans">
      
      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-orange-200/40 to-rose-200/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-blue-200/40 to-indigo-200/20 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 px-6 z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-8 shadow-sm">
            <Zap size={14} className="text-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Join Vanguard</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8 text-slate-950">
            Architect The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              Future.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We are assembling a global coalition of visionaries, educators, and engineers. Build the next generation of human potential.
          </p>
          
          <div className="mt-12 flex justify-center gap-6">
            <button 
              onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:scale-105 transition-transform shadow-xl hover:bg-orange-600"
            >
              Explore Roles
            </button>
            <Link 
              href="/about"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-600 font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              Our Mission <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* --- CULTURE & PERKS --- */}
      <section className="py-24 px-6 relative z-10 border-y border-slate-100 bg-white/60 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-950 mb-4 italic">Why Vanguard?</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">An ecosystem designed to accelerate your growth and amplify your impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Global Mobility", d: "Transfer seamlessly between any Vanguard academic node worldwide.", icon: Globe, c: "from-blue-500 to-cyan-500", text: "text-blue-600", bg: "bg-blue-50" },
              { t: "R&D Grants", d: "Unlimited access to institutional research and AI funds for your projects.", icon: Zap, c: "from-orange-500 to-rose-500", text: "text-orange-600", bg: "bg-orange-50" },
              { t: "Family Wellness", d: "Comprehensive premium healthcare and free education for your kin.", icon: ShieldCheck, c: "from-emerald-500 to-teal-500", text: "text-emerald-600", bg: "bg-emerald-50" }
            ].map((item, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm group overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.c} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8`}>
                  <item.icon size={24} className={item.text} />
                </div>
                <h4 className="text-xl font-black uppercase italic tracking-tight text-slate-900 mb-3">{item.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEARCH & FILTER HUD --- */}
      <section id="open-roles" className="pt-32 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center bg-white/80 backdrop-blur-2xl p-4 rounded-[2rem] border border-slate-100 shadow-sm">
            
            <div className="relative flex-1 w-full group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Search roles (e.g. Researcher, Admin)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500/50 focus:bg-white transition-all shadow-inner"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap shrink-0 ${
                    activeDept === dept 
                      ? "bg-slate-950 text-white border-slate-950 shadow-lg" 
                      : "bg-slate-50 text-slate-500 border-slate-100 hover:bg-white hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- JOB LISTING MATRIX --- */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div
                  layout
                  key={job.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:border-orange-200 hover:shadow-2xl transition-all flex flex-col justify-between h-[320px] overflow-hidden"
                >
                  {/* Subtle Hover Gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 ${job.bg} blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-14 h-14 ${job.bg} ${job.color} ${job.border} border rounded-2xl flex items-center justify-center shrink-0`}>
                        <job.icon size={24} />
                      </div>
                      <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">
                        {job.dept}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-4 group-hover:text-orange-600 transition-colors">
                      {job.title}
                    </h3>

                    <div className="space-y-3">
                      <p className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <MapPin size={14} className={job.color} /> {job.location}
                      </p>
                      <p className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <Clock size={14} className={job.color} /> {job.type}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Remuneration</p>
                      <p className="text-sm font-black text-emerald-600">{job.salary}</p>
                    </div>
                    
                    <Link 
                      href="/careers/apply"
                      className={`w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:w-32 group-hover:bg-orange-600 transition-all duration-300 overflow-hidden relative shadow-lg`}
                    >
                      <span className="absolute left-1/2 -translate-x-1/2 font-black text-[10px] uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        Apply Now
                      </span>
                      <ArrowRight size={18} className="absolute right-3.5 opacity-100 group-hover:opacity-0 transition-opacity" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
            
          {filteredJobs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-32 bg-white rounded-[3rem] border border-slate-100 shadow-sm"
            >
              <Search size={48} className="mx-auto text-slate-300 mb-6" />
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">No Matching Roles</h3>
              <p className="text-slate-500 font-medium text-sm">We couldn't find any positions matching your search parameters.</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveDept("All Roles"); }}
                className="mt-8 px-6 py-3 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
          
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none mb-6 drop-shadow-lg">
              Don't See Your <br/>Perfect Role?
            </h2>
            <p className="text-white/90 font-medium text-lg max-w-xl mx-auto mb-10 drop-shadow">
              Join our talent network. We are always looking for exceptional individuals to join Vanguard, even if a specific role isn't listed yet.
            </p>
            <Link 
              href="/careers/apply"
              className="inline-flex px-10 py-5 bg-white text-rose-600 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
            >
              Submit General Application
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}