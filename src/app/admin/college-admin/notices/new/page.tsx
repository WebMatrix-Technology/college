"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, Megaphone, AlertCircle } from "lucide-react";

export default function DraftNoticePage() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <Link href="/admin/college-admin/notices" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Notice Board
        </Link>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Megaphone size={36} className="text-red-600" />
          Draft <span className="text-red-600">Notice</span>
        </h1>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden max-w-4xl">
        <div className="p-8 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <div>
             <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest">Announcement Editor</h2>
             <p className="text-[10px] font-bold text-slate-500 mt-1">Publish official communications to students and faculty.</p>
           </div>
           <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
             <AlertCircle size={24} />
           </div>
        </div>

        <form className="p-8 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject / Headline</label>
                <input 
                  type="text" 
                  placeholder="e.g. Schedule for Mid-Term Examinations"
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-red-500 transition-colors"
                />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Category</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-red-500 transition-colors">
                  <option>Academic</option>
                  <option>Administrative</option>
                  <option>Examination</option>
                  <option>Emergency</option>
                  <option>Event</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Target Audience</label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-red-500 transition-colors">
                  <option>All Students & Faculty</option>
                  <option>Faculty Only</option>
                  <option>Students Only</option>
                  <option>Specific Department...</option>
                </select>
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message Body</label>
              <textarea 
                rows={8}
                placeholder="Draft your announcement here..."
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-red-500 transition-colors resize-none"
              ></textarea>
           </div>
           
           <div className="flex items-center gap-4 p-4 bg-red-50 border-2 border-red-100 rounded-xl">
             <input type="checkbox" id="urgent" className="w-5 h-5 accent-red-600 rounded" />
             <label htmlFor="urgent" className="text-sm font-black text-red-900 cursor-pointer">Mark as High Priority / Urgent</label>
           </div>

           <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
              <Link href="/admin/college-admin/notices">
                <button type="button" className="px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-colors">
                  Cancel
                </button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-red-700 transition-colors"
              >
                <Send size={16} /> Publish Notice
              </motion.button>
           </div>
        </form>
      </div>
    </div>
  );
}
