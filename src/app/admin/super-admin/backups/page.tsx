"use client";
import React from "react";
import { motion } from "framer-motion";
import { Database, DownloadCloud, UploadCloud, Server, Clock, HardDrive } from "lucide-react";

export default function BackupsModule() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Database size={36} className="text-teal-600" />
            Data <span className="text-teal-600">Backups</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Disaster Recovery & Archives</p>
        </div>
        <button className="bg-teal-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-teal-700 transition-colors shadow-xl">
          <UploadCloud size={16} /> Create Manual Backup
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 text-white shadow-2xl relative overflow-hidden">
          <Server className="absolute -right-4 -top-4 text-slate-800 opacity-50" size={120} />
          <h3 className="text-xs font-black uppercase tracking-widest text-teal-400 mb-2 relative z-10">Last Automated Backup</h3>
          <p className="text-3xl font-black italic relative z-10">Today, 03:00 AM</p>
          <p className="text-[10px] font-bold text-slate-400 mt-4 relative z-10 flex items-center gap-2"><CheckCircle size={12} className="text-teal-500"/> Success (Size: 4.2 GB)</p>
        </div>
        
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2"><HardDrive size={14}/> Total Archive Size</h3>
          <p className="text-3xl font-black italic text-slate-900">124.5 TB</p>
          <p className="text-[10px] font-bold text-slate-400 mt-4">Across 4 S3 Buckets</p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2"><Clock size={14}/> Retention Policy</h3>
          <p className="text-3xl font-black italic text-slate-900">30 Days</p>
          <p className="text-[10px] font-bold text-slate-400 mt-4">Older backups are sent to Glacier</p>
        </div>
      </div>

      <h2 className="text-lg font-black uppercase italic tracking-widest text-slate-900 mb-6">Recent Backup Jobs</h2>
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Job ID</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Date & Time</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Type</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Size</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Status</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="hover:bg-slate-50 transition-colors">
                <td className="p-6 text-xs font-black text-slate-400">BKUP-{20260600 + item}</td>
                <td className="p-6 text-sm font-bold text-slate-600">June 0{item}, 2026 - 03:00 AM</td>
                <td className="p-6">
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest">Automated</span>
                </td>
                <td className="p-6 text-sm font-bold text-slate-600">4.{item} GB</td>
                <td className="p-6">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest">Success</span>
                </td>
                <td className="p-6 text-right">
                  <button className="text-[10px] font-black uppercase tracking-widest text-teal-600 hover:text-teal-800 flex items-center gap-1 justify-end w-full">
                    <DownloadCloud size={14} /> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Needed to mock CheckCircle inside the file for standalone run
function CheckCircle(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}
