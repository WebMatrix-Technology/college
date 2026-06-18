"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardCheck, UserCheck, FileText, CreditCard, GraduationCap, ArrowRight, ArrowDown, Calendar, CheckCircle } from "lucide-react";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function AdmissionProcedure() {
 const steps = [
 {
 title: "Online Application",
 desc: "Register on our portal and fill out the digital application form with your academic details.",
 icon: <ClipboardCheck className="w-8 h-8" />,
 color: "border-orange-500"
 },
 {
 title: "Entrance Examination",
 desc: "Clear the VIT-SET (Selection Entrance Test) or submit valid JEE/GATE/CAT scores.",
 icon: <GraduationCap className="w-8 h-8" />,
 color: "border-slate-900"
 },
 {
 title: "Document Verification",
 desc: "Upload scanned copies of your 10th/12th marksheets, ID proof, and transfer certificates.",
 icon: <FileText className="w-8 h-8" />,
 color: "border-orange-500"
 },
 {
 title: "Personal Interview",
 desc: "Shortlisted candidates will be invited for a virtual or in-person interaction with the faculty dean.",
 icon: <UserCheck className="w-8 h-8" />,
 color: "border-slate-900"
 },
 {
 title: "Fee Payment",
 desc: "Upon selection, secure your seat by paying the admission and first-semester tuition fees.",
 icon: <CreditCard className="w-8 h-8" />,
 color: "border-orange-500"
 }
 ];

 return (
 <main className="min-h-screen bg-white ">

 {/* --- HERO SECTION: DYNAMIC REDESIGN --- */}
 <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0a0a0a]">
 {/* Animated Gradient Background */}
 <div className="absolute inset-0 z-0 overflow-hidden">
 <motion.div 
 animate={{ 
 scale: [1, 1.2, 1],
 x: [0, 50, 0],
 y: [0, 30, 0]
 }}
 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
 className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-orange-600/30 rounded-full blur-[120px]" 
 />
 <motion.div 
 animate={{ 
 scale: [1, 1.5, 1],
 x: [0, -50, 0],
 y: [0, -30, 0]
 }}
 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
 className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" 
 />
 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
 </div>

 <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <motion.nav 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="flex items-center gap-3 text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-8"
 >
 <Link href="/" className="hover:text-white transition">Home</Link>
 <span className="w-4 h-[1px] bg-orange-500/50"></span>
 <span className="text-white/50">Admissions</span>
 </motion.nav>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] break-words mb-6 pr-8 pb-4"
 >
 Pathway to <br /> <span className="text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 pr-8 pb-4 inline-block">Excellence.</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-4 mb-10"
 >
 Follow our streamlined admission process to become a part of the Vanguard legacy. We look for ambition, intelligence, and a drive to build tomorrow.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
 View Procedure <ArrowDown size={14} className="animate-bounce" />
 </button>
 </motion.div>
 </div>

 <motion.div 
 initial={{ opacity: 0, x: 50 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.6, duration: 0.8 }}
 className="hidden lg:flex justify-end"
 >
 <div className="relative w-72 h-96 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
 <div className="absolute inset-0 bg-orange-600/20 group-hover:bg-orange-600/0 transition-colors duration-500 z-10" />
 <img src="/library/collegelib.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Admissions" />
 <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
 <p className="text-white font-bold text-sm">2026 Admissions</p>
 <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Applications Open</p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* --- TIMELINE STEPS --- */}
 <section className="py-32 max-w-5xl mx-auto px-6 relative">
 <div className="absolute left-[39px] md:left-1/2 top-32 bottom-32 w-1.5 bg-slate-100 md:-translate-x-1/2 rounded-full" />
 
 <div className="space-y-16">
 {steps.map((step, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 className={`flex flex-col md:flex-row gap-8 items-center group relative ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
 >
 <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-24 md:pl-0`}>
 <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-orange-600 transition-colors">{step.title}</h3>
 <p className="text-slate-500 leading-relaxed mt-4 font-medium">{step.desc}</p>
 </div>

 <div className="absolute left-0 md:static flex-shrink-0 w-20 h-20 bg-white border-4 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-orange-500 group-hover:text-orange-600 group-hover:scale-110 shadow-xl transition-all duration-500 rounded-full z-10">
 {step.icon}
 </div>

 <div className={`flex-1 w-full pl-24 md:pl-0 hidden md:block ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
 <span className="text-8xl font-black text-slate-50 group-hover:text-slate-100 transition-colors leading-none inline-block transform group-hover:scale-110 duration-500">0{i + 1}</span>
 </div>
 </motion.div>
 ))}
 </div>
 </section>

 {/* --- IMPORTANT DATES & DOCUMENTS (BENTO) --- */}
 <section className="py-32 bg-slate-50 px-6">
 <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden group"
 >
 <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-orange-50 transition-colors duration-500">
 <FileText size={100} />
 </div>
 <h4 className="text-3xl font-black uppercase mb-8 italic tracking-tighter text-slate-900 relative z-10">
 Required <span className="text-orange-600">Documents</span>
 </h4>
 <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase tracking-wide relative z-10">
 {[
 "10th & 12th Certificate",
 "Entrance Exam Scorecard",
 "Transfer/Migration Certificate",
 "5 Passport Size Photos",
 "Aadhaar Card / Passport Copy"
 ].map((doc, idx) => (
 <li key={idx} className="flex items-center gap-4">
 <div className="w-2 h-2 rounded-full bg-orange-500" />
 {doc}
 </li>
 ))}
 </ul>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="bg-slate-950 p-12 rounded-[2.5rem] shadow-2xl border border-slate-800 text-white relative overflow-hidden group"
 >
 <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors duration-500">
 <ClipboardCheck size={100} />
 </div>
 <h4 className="text-3xl font-black uppercase mb-8 italic tracking-tighter relative z-10">
 Important <span className="text-orange-500">Dates</span>
 </h4>
 <div className="space-y-8 relative z-10">
 {[
 { label: "Application Starts", date: "Jan 15, 2026" },
 { label: "Entrance Test (VIT-SET)", date: "April 10, 2026" },
 { label: "Result Declaration", date: "May 05, 2026" }
 ].map((item, idx) => (
 <div key={idx} className="flex justify-between items-end border-b border-white/10 pb-4 group/item">
 <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] group-hover/item:text-orange-400 transition-colors">{item.label}</span>
 <span className="font-black text-xl italic tracking-tighter">{item.date}</span>
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>

 <CTA theme="light" />
 <Footer />
 </main>
 );
}