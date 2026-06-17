"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  theme?: "dark" | "light";
}

export default function CTA({
  title = "Ready to start your",
  titleAccent = "Journey?",
  subtitle = "Join Vanguard and become part of a legacy of excellence. Connect with us to explore limitless possibilities.",
  buttonText = "Apply Now",
  buttonLink = "/admissions",
  theme = "dark"
}: CTAProps) {
  const isDark = theme === "dark";

  return (
    <section className={`py-16 relative overflow-hidden ${isDark ? "bg-slate-950" : "bg-white"}`}>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`relative w-full rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl flex flex-col items-center text-center ${
            isDark 
              ? "bg-slate-900 border border-white/5" 
              : "bg-slate-50 border border-slate-100"
          }`}
        >
          {/* Dynamic Animated Background Orbs inside the card */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[3rem] pointer-events-none z-0">
            <motion.div 
              animate={{ 
                x: ["0%", "5%", "-5%", "0%"],
                y: ["0%", "-10%", "10%", "0%"],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className={`absolute -top-[50%] -left-[10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-40 ${isDark ? "bg-orange-600/20" : "bg-orange-400/20"}`}
            />
            <motion.div 
              animate={{ 
                x: ["0%", "-5%", "5%", "0%"],
                y: ["0%", "10%", "-10%", "0%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute -bottom-[50%] -right-[10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 ${isDark ? "bg-blue-600/20" : "bg-blue-400/10"}`}
            />
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
          </div>

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full mb-8 flex items-center justify-center shadow-2xl ${
                isDark ? "bg-slate-800 text-orange-500" : "bg-white text-orange-600 border border-orange-100"
              }`}
            >
              <ArrowRight size={24} className="-rotate-45" />
            </motion.div>

            <h2 className={`text-[clamp(2.5rem,4vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-6 ${
              isDark ? "text-white" : "text-slate-950"
            }`}>
              {title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">
                {titleAccent}
              </span>
            </h2>
            
            <p className={`text-sm md:text-lg font-medium max-w-xl mx-auto mb-10 leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}>
              {subtitle}
            </p>

            <Link 
              href={buttonLink} 
              className={`group relative inline-flex items-center justify-center gap-4 px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all hover:-translate-y-1 overflow-hidden ${
                isDark 
                  ? "bg-white text-slate-950 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]" 
                  : "bg-slate-950 text-white shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[0_0_60px_rgba(0,0,0,0.2)] hover:bg-orange-600"
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                {buttonText} 
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
