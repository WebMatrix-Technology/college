"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { GraduationCap, Briefcase, Mail, Linkedin, Award, BookOpen, ArrowDown } from "lucide-react";

type StaffMember = {
 name: string;
 role: string;
 dept: string;
 image: string;
 bio: string;
 expertise?: string[];
};

export default function StaffPage() {
 const [activeTab, setActiveTab] = useState<"teaching" | "non-teaching">("teaching");
 const [isScrolled, setIsScrolled] = useState(false);

 React.useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 0);
 };
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 // --- BUTTON HANDLERS ---
 const handleEmailClick = (name: string) => {
 const subject = encodeURIComponent(`Inquiry for ${name} - Vanguard University`);
 window.location.href = `mailto:contact@vanguard.edu?subject=${subject}`;
 };

 const handleLinkedinClick = (name: string) => {
 const searchUrl = `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(name + " Vanguard University")}`;
 window.open(searchUrl, "_blank");
 };

 const handleCTAClick = () => {
 window.location.href = "/careers"; // Redirects to your careers node
 };

 const teachingStaff: StaffMember[] = [
 {
 name: "Dr. Elena Vance",
 role: "Dean, School of AI",
 dept: "Computer Science",
 image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
 bio: "Former lead researcher at DeepMind with 15+ years in Neural Networks.",
 expertise: ["Machine Learning", "Quantum Computing"]
 },
 {
 name: "Prof. Marcus Thorne",
 role: "Head of Department",
 dept: "Mechanical Engineering",
 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
 bio: "Specialist in Fluid Dynamics and Sustainable Energy Systems.",
 expertise: ["Robotics", "Thermodynamics"]
 },
 {
 name: "Dr. Sarah Jenkins",
 role: "Senior Professor",
 dept: "Business Management",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
 bio: "Academic consultant for Fortune 500 startups in Silicon Valley.",
 expertise: ["Global Finance", "Market Analytics"]
 }
 ];

 const nonTeachingStaff: StaffMember[] = [
 {
 name: "Mr. David Miller",
 role: "Registrar",
 dept: "Administration",
 image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
 bio: "Oversees academic records and university compliance protocols."
 },
 {
 name: "Ms. Rachel Green",
 role: "Placement Director",
 dept: "Corporate Relations",
 image: "/non-teaching/non.png",
 bio: "Specializes in building international recruitment pipelines."
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
 <span className="text-white/50">Our People</span>
 </motion.nav>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] break-words mb-6"
 >
 Human <br /> <span className="text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">Capital.</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-4 mb-10"
 >
 Meet the global thinkers, brilliant researchers, and operational experts driving the Vanguard legacy forward.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
 Meet the Team <ArrowDown size={14} className="animate-bounce" />
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
 <img src="/library/collegelib.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Faculty" />
 <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
 <p className="text-white font-bold text-sm">300+ Faculty</p>
 <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">World Class Mentors</p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* --- TAB NAVIGATION --- */}
 <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm py-4">
 <div className="max-w-7xl mx-auto px-6 flex justify-center">
 <div className="bg-slate-100 p-1 rounded-full flex relative">
 <button 
 onClick={() => setActiveTab("teaching")}
 className={`relative z-10 px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-full ${activeTab === 'teaching' ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
 >
 Teaching Faculty
 </button>
 <button 
 onClick={() => setActiveTab("non-teaching")}
 className={`relative z-10 px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-full ${activeTab === 'non-teaching' ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
 >
 Non-Teaching Staff
 </button>
 
 {/* Sliding Pill Background */}
 <motion.div 
 className="absolute top-1 bottom-1 w-1/2 bg-slate-900 rounded-full shadow-md z-0"
 initial={false}
 animate={{ x: activeTab === 'teaching' ? '0%' : '100%' }}
 transition={{ type: "spring", stiffness: 400, damping: 30 }}
 />
 </div>
 </div>
 </section>

 {/* --- STAFF GRID --- */}
 <section className="py-24 max-w-7xl mx-auto px-6">
 <div className="grid md:grid-cols-3 gap-12">
 <AnimatePresence mode="wait">
 {(activeTab === "teaching" ? teachingStaff : nonTeachingStaff).map((member, i) => (
 <motion.div
 key={member.name}
 initial={{ opacity: 0, scale: 0.95, y: 20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 20 }}
 transition={{ duration: 0.4, delay: i * 0.1 }}
 className="group bg-slate-50 border border-slate-100 p-4 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500"
 >
 <div className="relative aspect-[3/4] overflow-hidden bg-slate-200 rounded-[2rem] mb-6">
 <img 
 src={member.image} 
 alt={member.name} 
 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
 
 {/* Floating Action Buttons */}
 <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center gap-4">
 <button 
 onClick={() => handleEmailClick(member.name)}
 className="p-4 bg-orange-600 text-white rounded-full hover:scale-110 hover:bg-orange-500 active:scale-95 transition-all shadow-[0_0_20px_rgba(234,88,12,0.5)]"
 >
 <Mail className="w-5 h-5" />
 </button>
 <button 
 onClick={() => handleLinkedinClick(member.name)}
 className="p-4 bg-white text-slate-900 rounded-full hover:scale-110 hover:bg-slate-100 active:scale-95 transition-all shadow-xl"
 >
 <Linkedin className="w-5 h-5" />
 </button>
 </div>
 </div>

 <div className="px-2 pb-4 space-y-3 text-center">
 <p className="text-orange-600 font-black text-[9px] uppercase tracking-[0.3em] bg-orange-500/10 inline-block px-3 py-1 rounded-full">{member.dept}</p>
 <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{member.name}</h3>
 <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{member.role}</p>
 <p className="text-slate-500 text-sm italic leading-relaxed pt-4 border-t border-slate-100 mt-2 font-medium">"{member.bio}"</p>
 
 {member.expertise && (
 <div className="flex flex-wrap justify-center gap-2 mt-6">
 {member.expertise.map(exp => (
 <span key={exp} className="px-4 py-1.5 bg-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-widest rounded-full group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
 {exp}
 </span>
 ))}
 </div>
 )}
 </div>
 </motion.div>
 ))}
 </AnimatePresence>
 </div>
 </section>

 {/* --- JOIN THE TEAM CTA --- */}
 <CTA theme="light" title="Join Our" titleAccent="Team." subtitle="We are always looking for visionary educators and researchers." buttonText="View Openings" buttonLink="/careers" />
 <Footer />
 </main>
 );
}