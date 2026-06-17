"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Ticket, Sparkles, X, CheckCircle, ArrowDown } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function EventsPage() {
 const [filter, setFilter] = useState("All");
 const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

 const events = [
 { 
 id: "1", 
 title: "Tech-Nexus 2026", 
 category: "Technical", 
 date: "Mar 15, 2026", 
 location: "Main Auditorium", 
 bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070", // Coding/Tech BG
 desc: "Annual technical symposium featuring robot wars and hackathons." 
 },
 { 
 id: "2", 
 title: "Rhythms Cultural", 
 category: "Cultural", 
 date: "Mar 22, 2026", 
 location: "Open Air Theatre", 
 bgImage: "/Rhythms/rythm.png", // Concert BG
 desc: "A night of music, dance, and celebrity performances." 
 },
 { 
 id: "3", 
 title: "AI & ML Workshop", 
 category: "Workshop", 
 date: "Apr 05, 2026", 
 location: "Block B Lab-4", 
 bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070", // AI BG
 desc: "Hands-on session on building neural networks." 
 }
 ];

 const filteredEvents = filter === "All" ? events : events.filter(e => e.category === filter);

 return (
 <main className="min-h-screen bg-white pb-24">
 

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
 <span className="text-white/50">Campus Life</span>
 </motion.nav>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] break-words mb-6"
 >
 Events <br /> <span className="text-orange-600 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">Hub.</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="text-white/60 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-orange-600/50 pl-4 mb-10"
 >
 Immerse yourself in a vibrant culture of innovation, art, and technology. Experience the best of Vanguard life.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <button onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
 Explore Events <ArrowDown size={14} className="animate-bounce" />
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
 <img src="/library/collegelib.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Cultural Fest" />
 <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-2xl">
 <p className="text-white font-bold text-sm">Tech Nexus 2026</p>
 <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Upcoming Mega Event</p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* --- EVENT FILTERS --- */}
 <section className="py-8 bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-20 z-40 shadow-sm">
 <div className="max-w-7xl mx-auto px-6 flex justify-center">
 <div className="flex gap-2 p-1.5 bg-slate-100 rounded-full overflow-x-auto no-scrollbar">
 {["All", "Cultural", "Technical", "Workshop", "Sports"].map(cat => (
 <button 
 key={cat}
 onClick={() => setFilter(cat)}
 className={`relative px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${
 filter === cat ? 'text-white shadow-[0_5px_15px_rgba(234,88,12,0.3)]' : 'text-slate-500 hover:text-slate-900'
 }`}
 >
 {filter === cat && (
 <motion.div 
 layoutId="eventFilterBg" 
 className="absolute inset-0 bg-orange-600 rounded-full -z-10"
 />
 )}
 {cat}
 </button>
 ))}
 </div>
 </div>
 </section>

 {/* --- EVENTS GRID --- */}
 <section className="py-32 max-w-7xl mx-auto px-6 min-h-[60vh]">
 <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
 <AnimatePresence>
 {filteredEvents.map((ev, i) => (
 <motion.div 
 key={ev.id}
 layout
 initial={{ opacity: 0, scale: 0.9, y: 20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.9, y: 20 }}
 transition={{ duration: 0.4 }}
 className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
 >
 <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
 <img 
 src={ev.bgImage} 
 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
 alt={ev.title} 
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-center shadow-lg">
 <p className="text-orange-600 font-black text-2xl leading-none">{ev.date.split(' ')[0]}</p>
 <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{ev.date.split(' ')[1]}</p>
 </div>
 <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
 <p className="text-[9px] font-bold uppercase tracking-widest text-white">{ev.category}</p>
 </div>
 </div>

 <div className="p-8 flex flex-col flex-grow relative bg-white">
 <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-4 group-hover:text-orange-600 transition-colors leading-tight">
 {ev.title}
 </h3>
 
 <div className="space-y-3 mb-8 flex-grow">
 <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
 <Calendar className="w-4 h-4 text-orange-500" /> {ev.date}
 </div>
 <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
 <MapPin className="w-4 h-4 text-orange-500" /> {ev.location}
 </div>
 </div>

 <button 
 onClick={() => setRegisteredEvent(ev.id)}
 className="w-full py-4 bg-slate-50 text-slate-900 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300 border border-slate-200 hover:border-orange-600 group-hover:shadow-[0_0_20px_rgba(234,88,12,0.2)]"
 >
 Register Now
 </button>
 </div>
 </motion.div>
 ))}
 </AnimatePresence>
 </motion.div>
 
 {filteredEvents.length === 0 && (
 <div className="text-center py-20">
 <p className="text-slate-400 font-black uppercase tracking-widest text-sm">No events found in this category.</p>
 </div>
 )}
 </section>

 {/* --- SUCCESS MODAL --- */}
 <AnimatePresence>
 {registeredEvent && (
 <motion.div 
 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
 className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-sm"
 >
 <motion.div 
 initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
 className="bg-white p-12 max-w-sm w-full relative text-center rounded-[2.5rem] shadow-2xl"
 >
 <button onClick={() => setRegisteredEvent(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors bg-slate-100 p-2 rounded-full">
 <X size={20} />
 </button>
 
 <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
 <CheckCircle size={40} />
 </div>
 
 <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Confirmed!</h3>
 <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
 Your spot for the event has been secured. Check your student email for the e-ticket.
 </p>
 <button onClick={() => setRegisteredEvent(null)} className="w-full py-4 bg-orange-600 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-orange-700 transition-colors shadow-lg">
 Done
 </button>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 <CTA theme="light" title="Never Miss" titleAccent="Out." subtitle="Subscribe to our events newsletter to stay updated on what's happening." buttonText="View Calendar" buttonLink="/events" />
 <Footer />
 </main>
 );
}