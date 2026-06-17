"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Cpu, Briefcase, Microscope, Palette, 
  Gavel, Stethoscope, Landmark, Globe, ArrowRight 
} from "lucide-react";

export default function Programs() {
  const allPrograms = [
    {
      school: "Engineering & Tech",
      icon: <Cpu size={24} />,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-50 text-blue-600",
      courses: ["Computer Science", "Artificial Intelligence", "Robotics", "Cyber Security", "Data Science"]
    },
    {
      school: "Business & Mgmt",
      icon: <Briefcase size={24} />,
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50 text-emerald-600",
      courses: ["MBA - Finance", "International Business", "Digital Marketing", "HR Management", "Supply Chain"]
    },
    {
      school: "Life Sciences",
      icon: <Microscope size={24} />,
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-50 text-purple-600",
      courses: ["Biotechnology", "Microbiology", "Forensic Science", "Genetics", "Food Tech"]
    },
    {
      school: "Design & Media",
      icon: <Palette size={24} />,
      color: "from-rose-500 to-rose-600",
      bg: "bg-rose-50 text-rose-600",
      courses: ["UX/UI Design", "Fashion Tech", "Animation & VFX", "Journalism", "Interior Design"]
    },
    {
      school: "Law & Governance",
      icon: <Gavel size={24} />,
      color: "from-amber-500 to-amber-600",
      bg: "bg-amber-50 text-amber-600",
      courses: ["BA LLB (Integrated)", "Corporate Law", "Cyber Law", "Public Policy", "Intellectual Property"]
    },
    {
      school: "Health Sciences",
      icon: <Stethoscope size={24} />,
      color: "from-red-500 to-red-600",
      bg: "bg-red-50 text-red-600",
      courses: ["Physiotherapy", "Clinical Research", "Public Health", "Nutrition", "Sports Medicine"]
    },
    {
      school: "Humanities & Social",
      icon: <Landmark size={24} />,
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50 text-indigo-600",
      courses: ["Psychology", "Applied Economics", "Sociology", "English Literature", "Political Science"]
    },
    {
      school: "Global Languages",
      icon: <Globe size={24} />,
      color: "from-cyan-500 to-cyan-600",
      bg: "bg-cyan-50 text-cyan-600",
      courses: ["French", "German", "Spanish", "Japanese", "Mandarin"]
    }
  ];

  return (
    <section id="programs" className="py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 border border-orange-200 bg-orange-50 rounded-full text-orange-600 text-[10px] font-black uppercase tracking-[0.3em]">
              8 Schools • 40+ Courses
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-slate-950 uppercase tracking-tighter leading-none">
              Global <br className="hidden md:block" />
              <span className="text-orange-600">Academics.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg font-medium max-w-md">
            Explore diverse undergraduate and postgraduate programs meticulously designed to meet international industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allPrograms.map((p, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              key={idx} 
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group flex flex-col h-full hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 ${p.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {p.icon}
              </div>
              
              <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-6">
                {p.school}
              </h3>
              
              <ul className="space-y-4 flex-grow mb-8">
                {p.courses.map((course, i) => (
                  <li key={i} className="text-xs font-bold text-slate-500 flex items-start gap-3 group/item cursor-pointer">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-orange-500 transition-colors shrink-0" />
                    <span className="group-hover/item:text-slate-900 group-hover/item:translate-x-1 transition-all">{course}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/curriculum"
                className="mt-auto w-full py-4 rounded-xl border border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Curriculum <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}