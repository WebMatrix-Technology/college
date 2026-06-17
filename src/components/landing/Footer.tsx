"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden pt-24 pb-12 border-t border-slate-900 z-10">
      {/* Massive Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 whitespace-nowrap select-none pointer-events-none tracking-tighter">
        VANGUARD
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-1 mb-6">
              <span className="font-black text-white text-3xl tracking-tighter italic">VIT</span>
              <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mt-2"></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              A global powerhouse for research, innovation, and elite placement opportunities. Architecting the future since 1998.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4">
              {["About Campus", "Academic Programs", "Faculty & Staff", "Events Gallery"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Resources</h4>
            <ul className="space-y-4">
              {["Admissions 2026", "Student Portal", "Library Access", "Alumni Network"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="text-sm text-slate-400 leading-relaxed">
                100 Innovation Way, Tech City<br />TC 12345
              </li>
              <li className="text-sm">
                <a href="mailto:hello@vanguard.edu" className="text-orange-500 hover:text-white transition-colors">hello@vanguard.edu</a>
              </li>
              <li className="text-sm">
                <a href="tel:+18001234567" className="text-slate-400 hover:text-white transition-colors">+1 (800) 123-4567</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            © {new Date().getFullYear()} Vanguard Institute. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
