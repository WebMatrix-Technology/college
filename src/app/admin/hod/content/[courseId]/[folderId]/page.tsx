"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FolderOpen, FileText, FileDown, ArrowLeft, Upload 
} from "lucide-react";
import { toast } from "@/components/Toast";

const mockSubFolders = [
  { id: "programming-core", name: "Programming Core", files: 24, size: "1.2 GB", lastUpdated: "2 hrs ago", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
  { id: "lab-manuals", name: "Lab Manuals", files: 18, size: "850 MB", lastUpdated: "1 day ago", color: "text-fuchsia-500", bg: "bg-fuchsia-50", border: "border-fuchsia-100" },
  { id: "ai-research", name: "AI Research Papers", files: 42, size: "3.4 GB", lastUpdated: "5 mins ago", color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
  { id: "project-guidelines", name: "Project Guidelines", files: 12, size: "420 MB", lastUpdated: "1 week ago", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
  { id: "syllabus-revisions", name: "Syllabus Revisions", files: 56, size: "2.1 GB", lastUpdated: "3 days ago", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
];

const mockFiles = [
  { id: "FIL-1", name: "Programming_C_Syllabus.pdf", type: "PDF", size: "2.4 MB" },
  { id: "FIL-2", name: "Machine_Learning_Lab.docx", type: "DOCX", size: "1.8 MB" },
  { id: "FIL-3", name: "Ethics_In_AI_Lecture_01.pptx", type: "PPTX", size: "14.5 MB" },
  { id: "FIL-4", name: "Final_Year_Project_Rubric.pdf", type: "PDF", size: "5.2 MB" },
  { id: "FIL-5", name: "Semester_3_Timetable.pdf", type: "PDF", size: "1.1 MB" },
];

export default function HodFilesViewPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const folderId = params.folderId as string;
  
  const folder = mockSubFolders.find(f => f.id === folderId) || {
    name: "Unknown Folder",
    files: 0,
    size: "0 B",
    bg: "bg-slate-50",
    color: "text-slate-500"
  };

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      
      <button 
        onClick={() => router.push(`/admin/hod/content/${courseId}`)}
        className="mb-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Subject Folders
      </button>

      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex items-center gap-6">
          <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center ${folder.bg} ${folder.color} shadow-sm`}>
            <FolderOpen size={40} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 mb-2">
              {folder.name}
            </h1>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              {folder.files} Files • {folder.size} Total Size
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => toast("Opening Upload Dialog...")}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30"
           >
             <Upload size={16} /> Upload to Folder
           </motion.button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockFiles.map((file, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={file.id} 
              className="p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group flex flex-col gap-4"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                  <FileText size={24} />
                </div>
                <button 
                  onClick={() => toast(`Downloading ${file.name}`)}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 flex items-center justify-center transition-all shadow-sm"
                >
                  <FileDown size={16} />
                </button>
              </div>
              <div>
                <p className="text-sm font-black text-slate-800 break-words group-hover:text-indigo-700 transition-colors">
                  {file.name}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[9px] font-black uppercase tracking-widest">
                    {file.type}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {file.size}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
