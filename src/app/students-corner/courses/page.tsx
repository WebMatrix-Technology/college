"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  BookOpen, 
  Download, 
  Search, 
  ChevronLeft, 
  Layers, 
  Code, 
  Cpu, 
  Globe,
  Database,
  Terminal,
  Server,
  ShieldCheck
} from "lucide-react";

export default function CourseContentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSem, setActiveSem] = useState("ALL SEM");

  // Complete 1 to 6 Semesters Dataset
  const courses = [
    // --- SEMESTER 1 ---
    { title: "Engineering Mathematics I", code: "MTH-101", sem: "SEM 1", credits: "4", icon: <Cpu />, type: "Technical", internal: 28, external: 52, practical: 0 },
    { title: "Engineering Physics", code: "PHY-101", sem: "SEM 1", credits: "4", icon: <Layers />, type: "Core Science", internal: 12, external: 18, practical: 12 },
    { title: "Programming in C", code: "CS-104", sem: "SEM 1", credits: "4", icon: <Code />, type: "Development", internal: 29, external: 55, practical: 18 },

    // --- SEMESTER 2 ---
    { title: "Engineering Mathematics II", code: "MTH-201", sem: "SEM 2", credits: "4", icon: <Cpu />, type: "Technical", internal: 26, external: 45, practical: 0 },
    { title: "Data Structures & Algorithms", code: "CS-203", sem: "SEM 2", credits: "4", icon: <Layers />, type: "Core Computing", internal: 28, external: 50, practical: 20 },
    { title: "Web Architecture", code: "WD-205", sem: "SEM 2", credits: "3", icon: <Globe />, type: "Development", internal: 20, external: 50, practical: 30 },

    // --- SEMESTER 3 ---
    { title: "Discrete Structures", code: "CS-301", sem: "SEM 3", credits: "4", icon: <Database />, type: "Data Systems", internal: 27, external: 52, practical: 0 },
    { title: "Operating Systems", code: "CS-304", sem: "SEM 3", credits: "3", icon: <Terminal />, type: "Systems", internal: 30, external: 70, practical: 0 },
    { title: "Object Oriented Programming", code: "CS-303", sem: "SEM 3", credits: "4", icon: <Code />, type: "Security", internal: 29, external: 58, practical: 20 },

    // --- SEMESTER 4 ---
    { title: "Database Management Systems", code: "CS-401", sem: "SEM 4", credits: "4", icon: <Database />, type: "Data Systems", internal: 26, external: 54, practical: 18 },
    { title: "Theory of Computation", code: "CS-402", sem: "SEM 4", credits: "3", icon: <Terminal />, type: "Systems", internal: 22, external: 42, practical: 0 },
    { title: "Neural Networks", code: "AI-302", sem: "SEM 4", credits: "3", icon: <Layers />, type: "Artificial Intelligence", internal: 30, external: 70, practical: 0 },

    // --- SEMESTER 5 ---
    { title: "Computer Networks", code: "CS-501", sem: "SEM 5", credits: "4", icon: <Globe />, type: "Infrastructure", internal: 27, external: 58, practical: 18 },
    { title: "Design & Analysis of Algorithms", code: "CS-502", sem: "SEM 5", credits: "3", icon: <Cpu />, type: "Technical", internal: 24, external: 46, practical: 0 },
    { title: "Ethical Hacking", code: "CS-405", sem: "SEM 5", credits: "3", icon: <Code />, type: "Security", internal: 25, external: 50, practical: 25 },

    // --- SEMESTER 6 ---
    { title: "Cloud Computing", code: "CS-601", sem: "SEM 6", credits: "4", icon: <Server />, type: "Infrastructure", internal: 25, external: 50, practical: 25 },
    { title: "Cyber Security", code: "CS-602", sem: "SEM 6", credits: "3", icon: <ShieldCheck />, type: "Security", internal: 30, external: 70, practical: 0 },
    { title: "Quantum Computing", code: "CS-603", sem: "SEM 6", credits: "4", icon: <Cpu />, type: "Technical", internal: 30, external: 50, practical: 20 }
  ];

  const SEMESTERS = ["ALL SEM", "SEM 1", "SEM 2", "SEM 3", "SEM 4", "SEM 5", "SEM 6"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSem = activeSem === "ALL SEM" || course.sem === activeSem;
    return matchesSearch && matchesSem;
  });

  const handleDownload = (courseName: string) => {
    alert(`Downloading Syllabus for: ${courseName}`);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-orange-600 selection:text-white font-sans text-slate-900">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/students-corner" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-all">
            <ChevronLeft size={14} /> Back to Corner
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">VIT Academic Portal</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER & SEARCH --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Course <br /> <span className="text-orange-600">Content.</span>
            </h1>
            <p className="mt-6 text-slate-400 text-sm font-bold uppercase tracking-widest">Spring Semester 2026 Curriculum</p>
          </motion.div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH SUBJECTS..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border border-slate-100 shadow-xl rounded-2xl outline-none focus:border-orange-600 text-xs font-bold uppercase tracking-widest transition-all"
            />
          </div>
        </div>

        {/* --- SEMESTER FILTER TABS --- */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-6 mb-12">
          {SEMESTERS.map((sem) => (
            <button
              key={sem}
              onClick={() => setActiveSem(sem)}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 whitespace-nowrap ${
                activeSem === sem 
                ? "bg-slate-950 text-white border-slate-950 shadow-xl" 
                : "bg-white text-slate-400 border-slate-50 hover:border-orange-500 hover:text-slate-900"
              }`}
            >
              {sem}
            </button>
          ))}
        </div>

        {/* --- COURSE GRID --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCourses.map((course, i) => (
            <motion.div 
              key={`${course.code}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-2xl flex flex-col justify-between group hover:border-orange-600 transition-all gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-orange-600 transition-colors shadow-lg">
                    {React.cloneElement(course.icon as React.ReactElement, { size: 28 } as any)}
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">{course.title}</h3>
                    <div className="flex gap-4 mt-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">{course.code}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{course.credits} Credits</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleDownload(course.title)}
                  className="p-4 bg-slate-50 text-slate-400 hover:bg-orange-600 hover:text-white transition-all rounded-xl border border-slate-100 shadow-sm"
                  title="Download Syllabus"
                >
                  <Download size={20} />
                </button>
              </div>

              {/* Internal, External, and Practical Marks Split */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 grid grid-cols-3 gap-2 text-center select-none">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 block mb-1">Internal</span>
                  <p className="text-lg font-black text-slate-800 italic leading-none">{course.internal}</p>
                  <span className="text-[7px] text-slate-400 font-bold uppercase">Marks</span>
                </div>
                <div className="border-x border-slate-200/60">
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 block mb-1">External</span>
                  <p className="text-lg font-black text-slate-800 italic leading-none">{course.external}</p>
                  <span className="text-[7px] text-slate-400 font-bold uppercase">Marks</span>
                </div>
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 block mb-1">Practical</span>
                  <p className="text-lg font-black text-slate-800 italic leading-none">{course.practical || "00"}</p>
                  <span className="text-[7px] text-slate-400 font-bold uppercase">Marks</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                 <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{course.type}</span>
                 <span className="text-[9px] font-black uppercase text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">{course.sem} Node</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- EMPTY STATE --- */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-300 font-black uppercase tracking-[0.5em] text-xs italic">No subjects matched your curriculum search for {activeSem}.</p>
          </div>
        )}
      </section>

      <footer className="py-12 text-center border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1.5em]">VIT Academic Registry • 2026</p>
      </footer>
    </main>
  );
}