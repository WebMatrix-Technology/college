"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Library, Upload, Search, Filter, 
  Folder, FileText, FileDown, MoreVertical, 
  FolderOpen, Clock, HardDrive, X, UploadCloud, Edit3, Trash2, Share2
} from "lucide-react";
import { toast } from "@/components/Toast";

const mockFolders = [
  { id: "FLD-1", name: "Programming Core", files: 24, size: "1.2 GB", lastUpdated: "2 hrs ago", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
  { id: "FLD-2", name: "Lab Manuals", files: 18, size: "850 MB", lastUpdated: "1 day ago", color: "text-fuchsia-500", bg: "bg-fuchsia-50", border: "border-fuchsia-100" },
  { id: "FLD-3", name: "AI Research Papers", files: 42, size: "3.4 GB", lastUpdated: "5 mins ago", color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
  { id: "FLD-4", name: "Project Guidelines", files: 12, size: "420 MB", lastUpdated: "1 week ago", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
  { id: "FLD-5", name: "Syllabus Revisions", files: 56, size: "2.1 GB", lastUpdated: "3 days ago", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
];

const mockRecentFiles = [
  { id: "FIL-1", name: "Programming_C_Syllabus.pdf", type: "PDF", size: "2.4 MB", folder: "Programming Core" },
  { id: "FIL-2", name: "Machine_Learning_Lab.docx", type: "DOCX", size: "1.8 MB", folder: "Lab Manuals" },
  { id: "FIL-3", name: "Ethics_In_AI_Lecture_01.pptx", type: "PPTX", size: "14.5 MB", folder: "AI Research Papers" },
  { id: "FIL-4", name: "Final_Year_Project_Rubric.pdf", type: "PDF", size: "5.2 MB", folder: "Project Guidelines" },
];

export default function CoordinatorContentPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeOptionsModal, setActiveOptionsModal] = useState<any | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const filteredFolders = mockFolders.filter(folder => 
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex flex-wrap items-center gap-3">
             <Library size={36} className="text-fuchsia-600" />
             <span className="text-fuchsia-600">Course</span> Content
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Course Resource Repository</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => setShowUploadModal(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-fuchsia-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-fuchsia-700 transition-colors shadow-lg shadow-fuchsia-600/30"
           >
             <Upload size={16} /> Upload Material
           </motion.button>
        </div>
      </div>

      {/* SEARCH AND FILTERS */}
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl mb-10 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search folders or files..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-fuchsia-500 transition-colors"
          />
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-fuchsia-600 hover:border-fuchsia-200 transition-colors flex items-center justify-center gap-2">
          <Filter size={16} /> Filter
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* FOLDERS GRID */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-2">
            <FolderOpen size={20} className="text-fuchsia-500" /> Directories
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <AnimatePresence>
              {filteredFolders.map((folder, idx) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  key={folder.id}
                  onClick={() => router.push(`/admin/coordinator/content/${folder.id}`)}
                  className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${folder.bg} ${folder.border} group relative overflow-hidden`}
                >
                  <div className={`absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-500 ${folder.color}`}>
                    <Folder size={120} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm ${folder.color}`}>
                      <Folder size={24} />
                    </div>
                    <button className="text-slate-400 hover:text-slate-700 transition-colors z-20" onClick={(e) => { e.stopPropagation(); setActiveOptionsModal(folder); }}>
                      <MoreVertical size={16} />
                    </button>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-sm font-black text-slate-800 mb-1">{folder.name}</h3>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-4">
                      <span className="flex items-center gap-1"><FileText size={12} /> {folder.files} Files</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1"><HardDrive size={12} /> {folder.size}</span>
                    </div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2 flex items-center gap-1">
                      <Clock size={10} /> Updated {folder.lastUpdated}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RECENT FILES SIDEBAR */}
        <div className="space-y-6">
          <h2 className="text-xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-2">
            <Clock size={20} className="text-fuchsia-500" /> Recent Uploads
          </h2>
          
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
            <div className="divide-y divide-slate-50">
              {mockRecentFiles.map((file, idx) => (
                <div key={file.id} className="p-4 hover:bg-slate-50 transition-colors group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <FileText size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-slate-800 truncate group-hover:text-fuchsia-600 transition-colors" title={file.name}>
                      {file.name}
                    </p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {file.folder} • {file.size}
                    </p>
                  </div>
                  <button 
                    onClick={() => toast(`Downloading ${file.name}`)}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-fuchsia-600 hover:border-fuchsia-200 flex items-center justify-center transition-all shadow-sm shrink-0"
                  >
                    <FileDown size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-50 bg-slate-50/50">
              <button className="w-full py-2 text-[10px] font-black uppercase tracking-widest text-fuchsia-600 hover:text-fuchsia-800 transition-colors">
                View All Files
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* --- MODALS --- */}

      {/* UPLOAD MODAL */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] shadow-2xl p-8 max-w-md w-full relative"
            >
              <button onClick={() => setShowUploadModal(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors">
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center mb-6">
                <UploadCloud size={32} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2">Upload Material</h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Drag & Drop files or click to browse</p>
              
              <div 
                className="border-2 border-dashed border-fuchsia-200 bg-fuchsia-50/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-fuchsia-50 hover:border-fuchsia-400 transition-colors group mb-6"
                onClick={() => { toast("Browsing local files..."); setTimeout(() => setShowUploadModal(false), 1000); }}
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-fuchsia-500 mb-4 group-hover:scale-110 transition-transform">
                  <Upload size={20} />
                </div>
                <p className="text-sm font-black text-slate-700">Drop files here</p>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Supported: PDF, DOCX, PPTX (Max 50MB)</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOLDER OPTIONS MODAL */}
      <AnimatePresence>
        {activeOptionsModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-6 max-w-xs w-full relative"
            >
              <button onClick={() => setActiveOptionsModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors">
                <X size={16} />
              </button>
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Options for</p>
                <h3 className="text-sm font-black text-slate-900">{activeOptionsModal.name}</h3>
              </div>
              <div className="space-y-2">
                <button onClick={() => { toast("Renaming folder..."); setActiveOptionsModal(null); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-xs font-bold text-slate-700 transition-colors">
                  <Edit3 size={16} className="text-slate-400" /> Rename Folder
                </button>
                <button onClick={() => { toast("Opening sharing options..."); setActiveOptionsModal(null); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-xs font-bold text-slate-700 transition-colors">
                  <Share2 size={16} className="text-slate-400" /> Share / Manage Access
                </button>
                <div className="h-px bg-slate-100 my-2" />
                <button onClick={() => { toast("Folder deleted!"); setActiveOptionsModal(null); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-red-50 flex items-center gap-3 text-xs font-bold text-red-600 transition-colors">
                  <Trash2 size={16} className="text-red-400" /> Delete Folder
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
