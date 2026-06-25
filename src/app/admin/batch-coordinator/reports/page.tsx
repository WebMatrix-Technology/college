"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileBarChart, Download, FileText, FileSpreadsheet, Activity, ChevronRight } from "lucide-react";

// Mock Reports
const MOCK_REPORTS = [
  { id: 1, title: "Semester Attendance Summary", type: "PDF", size: "2.4 MB", date: "Nov 01, 2026", category: "Attendance" },
  { id: 2, title: "Mid-Term Examination Results", type: "Excel", size: "5.1 MB", date: "Oct 28, 2026", category: "Grades" },
  { id: 3, title: "Defaulters List (Below 75%)", type: "PDF", size: "1.2 MB", date: "Nov 05, 2026", category: "Attendance" },
  { id: 4, title: "Batch Performance Analytics", type: "CSV", size: "8.4 MB", date: "Oct 30, 2026", category: "Analytics" },
  { id: 5, title: "Continuous Evaluation Marks", type: "Excel", size: "3.7 MB", date: "Nov 10, 2026", category: "Grades" },
];

export default function BatchCoordinatorReports() {
  const [course, setCourse] = useState("Course");
  const [batch, setBatch] = useState("Batch");
  const [downloading, setDownloading] = useState<number | null>(null);
  
  useEffect(() => {
    setCourse(localStorage.getItem("coordinatorCourse") || "B.Tech");
    setBatch(localStorage.getItem("coordinatorBatch") || "Year 1");
  }, []);

  const handleDownload = (id: number) => {
    setDownloading(id);
    setTimeout(() => {
      setDownloading(null);
    }, 1500);
  };

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-3">
             <FileBarChart size={36} className="text-teal-600" />
             <span className="text-teal-600">Reports</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">
            Batch Co-ordinator • {course} • {batch}
          </p>
        </div>
        
        <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-teal-600 transition-colors flex items-center gap-2 shadow-xl">
          <Activity size={14} /> Generate Custom Report
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-black italic tracking-tighter text-slate-900 mb-6">Recent Reports</h2>
          
          {MOCK_REPORTS.map((report, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={report.id}
              className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  report.type === 'PDF' ? 'bg-red-50 text-red-500' :
                  report.type === 'Excel' ? 'bg-emerald-50 text-emerald-500' :
                  'bg-blue-50 text-blue-500'
                }`}>
                  {report.type === 'PDF' ? <FileText size={24} /> : <FileSpreadsheet size={24} />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{report.title}</h3>
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                    <span>•</span>
                    <span className="text-slate-500">{report.category}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => handleDownload(report.id)}
                disabled={downloading === report.id}
                className="w-full md:w-auto bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-600 px-4 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                {downloading === report.id ? (
                  <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-3 h-3 border-2 border-teal-600 border-t-transparent rounded-full" /> Exporting...</>
                ) : (
                  <><Download size={14} /> Download</>
                )}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full blur-[80px] opacity-30" />
            <h3 className="text-2xl font-black italic tracking-tighter mb-2 relative z-10">Analytics Engine</h3>
            <p className="text-slate-400 text-sm mb-6 relative z-10">Process batch data and run complex queries using the Vanguard Analytics Engine.</p>
            
            <div className="space-y-3 relative z-10">
              {["Run Attendance Prediction", "Analyze Grade Trends", "Generate Progress Cards"].map((action, i) => (
                <button key={i} className="w-full bg-white/5 hover:bg-teal-500/20 border border-white/10 p-3 rounded-xl flex items-center justify-between text-xs font-bold transition-colors">
                  {action}
                  <ChevronRight size={14} className="text-teal-400" />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
