"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Play, Pause, MapPin, Info } from "lucide-react";

const TOUR_LOCATIONS = [
  {
    id: "library",
    name: "Central Tech Library",
    description: "A 24/7 haven of knowledge. Spanning four floors with over 500,000 digital and physical volumes, fully automated retrieval systems, and silent study pods.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070",
  },
  {
    id: "labs",
    name: "Innovation & Robotics Labs",
    description: "State-of-the-art research facilities equipped with quantum computing nodes, AI training clusters, and advanced robotics testing arenas.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
  },
  {
    id: "sports",
    name: "Olympic Sports Complex",
    description: "World-class athletics facilities featuring an Olympic-sized heated pool, indoor multi-purpose courts, and a professional-grade turf football stadium.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbb1b379e0?q=80&w=2069",
  },
  {
    id: "hostels",
    name: "Smart Hostels",
    description: "Premium, fully air-conditioned living spaces with biometric security, high-speed fiber internet, and dedicated collaborative lounges.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069",
  },
  {
    id: "cafeteria",
    name: "Global Food Court",
    description: "A sprawling multi-cuisine dining hall serving organic, locally sourced meals with 12 distinct international food stations.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974",
  }
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds per slide

export default function VisualTourPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeLocation = TOUR_LOCATIONS[activeIndex];

  const nextLocation = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TOUR_LOCATIONS.length);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextLocation, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPlaying, nextLocation]);

  return (
    <main className="fixed inset-0 bg-black overflow-hidden font-sans selection:bg-orange-500/30 text-white z-[9999]">
      
      {/* BACKGROUND IMAGE SLIDER (Ken Burns Effect) */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.img
            src={activeLocation.image}
            alt={activeLocation.name}
            className="w-full h-full object-cover origin-center"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: AUTO_PLAY_INTERVAL / 1000 + 2, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY GRADIENTS FOR READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* TOP NAVIGATION & CONTROLS */}
      <div className="absolute top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-start z-10">
        <Link 
          href="/campus"
          className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition-all shadow-2xl"
        >
          <ChevronLeft size={18} className="text-white group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">Exit Tour</span>
        </Link>

        <div className="flex gap-3">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all shadow-2xl group"
          >
            {isPlaying ? (
              <Pause size={16} className="text-white fill-white" />
            ) : (
              <Play size={16} className="text-white fill-white ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* BOTTOM CONTENT AREA */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10 flex flex-col md:flex-row justify-between items-end gap-10">
        
        {/* TEXT DETAILS */}
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1.5 rounded-full bg-orange-600/20 border border-orange-500/30 backdrop-blur-md flex items-center gap-2 text-orange-400">
                  <MapPin size={12} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Campus Node {activeIndex + 1}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6 drop-shadow-2xl pr-4">
                {activeLocation.name}
              </h1>
              <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed max-w-xl backdrop-blur-sm bg-black/20 p-4 rounded-2xl border border-white/5">
                {activeLocation.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOCK / NAVIGATOR */}
        <div className="w-full md:w-auto bg-black/40 backdrop-blur-3xl border border-white/10 p-2 rounded-[2rem] flex items-center gap-2 overflow-x-auto no-scrollbar shadow-2xl shrink-0">
          {TOUR_LOCATIONS.map((loc, idx) => (
            <button
              key={loc.id}
              onClick={() => {
                setActiveIndex(idx);
                setIsPlaying(false); // Pause on manual interaction
              }}
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] overflow-hidden shrink-0 group border border-white/5"
            >
              <img src={loc.image} alt={loc.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              
              {activeIndex === idx && (
                <motion.div 
                  layoutId="active-thumb"
                  className="absolute inset-0 border-2 border-orange-500 rounded-[1.5rem] z-10"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
