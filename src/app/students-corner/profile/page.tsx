"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, User, Mail, Phone, MapPin, 
  BookOpen, Award, Shield, Loader2, Fingerprint
} from "lucide-react";

export default function StudentProfile() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-orange-600" size={40} />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FDFDFD] p-6 pt-24 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <Link href="/students-corner" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-4 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Command Center
            </Link>
            <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Identity <span className="text-orange-600">Profile.</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Node: Identity_Matrix // Active</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl shadow-sm w-full md:w-auto flex items-center gap-4 text-emerald-800">
            <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
              <Shield size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600/70">Clearance Level</p>
              <h3 className="text-xl font-black italic mt-1">Enrolled Student</h3>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* --- LEFT: AVATAR & QUICK INFO --- */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-xl text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 inset-x-0 h-32 bg-slate-950 rounded-t-[3rem] -z-10" />
              
              <div className="w-40 h-40 mx-auto rounded-[2rem] bg-slate-100 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden mb-8 relative">
                <div className="absolute inset-0 bg-orange-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <User size={64} className="text-slate-300" />
              </div>

              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 leading-tight">Alex<br/>Vanguard</h2>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mt-2 mb-6">ID: VNG-2024-8891</p>
              
              <div className="flex justify-center gap-2">
                <span className="px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100 flex items-center gap-2">
                  <Fingerprint size={12} /> Verified
                </span>
              </div>
            </motion.div>

            {/* Academic Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="bg-slate-950 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-white/10 pb-4 mb-6">Academic Program</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Degree</p>
                  <p className="text-sm font-black uppercase tracking-wider">B.Tech Computer Science</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Current Semester</p>
                  <p className="text-sm font-black uppercase tracking-wider text-orange-500">Semester 4</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Admission Batch</p>
                  <p className="text-sm font-black uppercase tracking-wider">Class of 2026</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: DETAILED INFO --- */}
          <div className="md:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-12 shadow-sm"
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-8 flex items-center gap-3">
                <BookOpen className="text-orange-600" /> Contact Parameters
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 text-slate-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Institution Email</p>
                    <p className="font-bold text-slate-900 text-sm">alex.v@vanguard.edu</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 text-slate-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Primary Phone</p>
                    <p className="font-bold text-slate-900 text-sm">+1 (555) 889-1020</p>
                  </div>
                </div>
                <div className="flex gap-4 md:col-span-2">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 text-slate-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Registered Address</p>
                    <p className="font-bold text-slate-900 text-sm leading-relaxed max-w-sm">
                      442 Vanguard Residence<br/>
                      North Campus Node, Block C<br/>
                      Tech City, CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-12 shadow-sm"
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-8 flex items-center gap-3">
                <Award className="text-orange-600" /> System Access
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Library', 'Labs', 'Hostel', 'Sports'].map((facility, i) => (
                  <div key={i} className="p-4 border border-slate-100 rounded-2xl text-center bg-slate-50/50">
                    <div className="w-8 h-8 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                      <Shield size={14} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">{facility}</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-600 mt-1">Granted</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="mt-20 py-10 border-t border-slate-100 text-center opacity-30">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">Vanguard Identity Protocol // 2026</p>
        </footer>
      </div>
    </main>
  );
}
