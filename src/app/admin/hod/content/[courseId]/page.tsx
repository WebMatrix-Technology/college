"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderOpen, FileText, ArrowLeft, Upload, 
  Search, Filter, Folder, MoreVertical, Clock, HardDrive, X, Edit3, Share2, Trash2
} from "lucide-react";
import { toast } from "@/components/Toast";

const mockCourses = [
  { id: "btech-cs-sem1", name: "B.Tech CS - Sem 1" },
  { id: "btech-cs-sem2", name: "B.Tech CS - Sem 2" },
  { id: "mtech-ai-sem1", name: "M.Tech AI - Sem 1" },
  { id: "bca-sem4", name: "BCA - Sem 4" },
  { id: "general-electives", name: "General Electives" },
];

const mockSubFolders = [
  { id: "programming-core", name: "Programming Core", files: 24, size: "1.2 GB", lastUpdated: "2 hrs ago", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
  { id: "lab-manuals", name: "Lab Manuals", files: 18, size: "850 MB", lastUpdated: "1 day ago", color: "text-fuchsia-500", bg: "bg-fuchsia-50", border: "border-fuchsia-100" },
  { id: "ai-research", name: "AI Research Papers", files: 42, size: "3.4 GB", lastUpdated: "5 mins ago", color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
  { id: "project-guidelines", name: "Project Guidelines", files: 12, size: "420 MB", lastUpdated: "1 week ago", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
  { id: "syllabus-revisions", name: "Syllabus Revisions", files: 56, size: "2.1 GB", lastUpdated: "3 days ago", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
];

export default function HodCourseFoldersPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  
  const course = mockCourses.find(c => c.id === courseId) || { name: "Unknown Course" };

  const [searchQuery, setSearchQuery] = useState("");
  const [activeOptionsModal, setActiveOptionsModal] = useState<any | null>(null);
  const [showNewFolderModal, setShowNewFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const filteredFolders = mockSubFolders.filter(folder => 
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 lg:p-12 font-sans min-h-screen">
      
      <button 
        onClick={() => router.push("/admin/hod/content")}
        className="mb-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Courses
      </button>

      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex flex-wrap items-center gap-3">
             <FolderOpen size={36} className="text-indigo-600" />
             {course.name}
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Course Subject Directories</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0">
           <motion.button 
             onClick={() => setShowNewFolderModal(true)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto justify-center bg-indigo-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30"
           >
             <FolderOpen size={16} /> New Folder
           </motion.button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl mb-10 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search subject folders..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors flex items-center justify-center gap-2">
          <Filter size={16} /> Filter
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredFolders.map((folder, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.05 }}
              key={folder.id}
              onClick={() => router.push(`/admin/hod/content/${courseId}/${folder.id}`)}
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

      <AnimatePresence>
        {showNewFolderModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] shadow-2xl p-8 max-w-md w-full relative"
            >
              <button onClick={() => setShowNewFolderModal(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors">
                <X size={20} />
              </button>
              
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <FolderOpen size={28} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2">Create New Folder</h2>
              <p className="text-xs font-bold text-slate-500 mb-8">Organize resources into a new subject directory.</p>
              
              <div className="mb-8">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Folder Name</label>
                <input 
                  type="text" 
                  autoFocus
                  placeholder="e.g. AI Research Papers" 
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setShowNewFolderModal(false)}
                  className="flex-1 px-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    if(newFolderName.trim() === '') {
                      toast("Please enter a folder name!");
                      return;
                    }
                    toast(`Folder "${newFolderName}" created!`);
                    setShowNewFolderModal(false);
                    setNewFolderName("");
                  }}
                  className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30"
                >
                  Create Folder
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
