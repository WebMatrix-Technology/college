"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Image as ImageIcon, Search, Plus, Trash2, Check, X,
  Folder, UploadCloud, Eye
} from "lucide-react";
import WebsiteAdminSidebar from "@/components/admin/WebsiteAdminSidebar";
import WebsiteAdminBottomNav from "@/components/admin/WebsiteAdminBottomNav";

const initialAlbums = [
  { id: "campus", title: "Campus Infrastructure", photos: 24, status: "Published" },
  { id: "events", title: "Recent Events", photos: 156, status: "Published" },
  { id: "hostel", title: "Hostel Facilities", photos: 12, status: "Draft" },
];

export default function GalleryManager() {
  const [albums, setAlbums] = useState(initialAlbums);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden selection:bg-blue-500/30 selection:text-blue-900">
      <div className="hidden md:block z-50 h-full">
        <WebsiteAdminSidebar />
      </div>

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 lg:p-12 relative custom-scrollbar">
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-pink-400/10 to-rose-400/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-lg shadow-pink-500/30">
                <ImageIcon size={32} className="text-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Image Gallery</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-4">
              Media & Assets Manager
            </p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-transform">
            <Plus size={16} /> Create Album
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`${selectedAlbum ? 'lg:col-span-4' : 'lg:col-span-12'} transition-all duration-500`}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-[calc(100vh-200px)]">
              <div className="p-8 border-b border-slate-100 flex flex-col gap-6 bg-white/50 shrink-0">
                <h2 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">Media Albums</h2>
              </div>
              
              <div className="p-4 space-y-2 overflow-y-auto custom-scrollbar flex-1">
                {albums.map((album) => (
                  <motion.div 
                    key={album.id}
                    onClick={() => setSelectedAlbum(album.id)}
                    className={`bg-white border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                      selectedAlbum === album.id 
                        ? 'border-pink-500 shadow-lg shadow-pink-500/10' 
                        : 'border-slate-100 hover:border-pink-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-black text-slate-900 line-clamp-1">{album.title}</h4>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md shrink-0 ${
                        album.status === 'Published' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {album.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400">
                      <span className="flex items-center gap-1"><ImageIcon size={12} /> {album.photos} Photos</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedAlbum && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }}
                className="lg:col-span-8"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden h-[calc(100vh-200px)] flex flex-col">
                  
                  <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white/50 shrink-0">
                    <div>
                      <h2 className="font-black text-slate-900 text-2xl tracking-tighter line-clamp-1">
                        {albums.find(a => a.id === selectedAlbum)?.title}
                      </h2>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500 mt-2">
                        Album Media
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setSelectedAlbum(null)} className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-50 transition-colors">
                        <X size={16} />
                      </button>
                      <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform">
                        <Check size={16} /> Publish
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-6">
                    
                    {/* Drag & Drop Upload Zone */}
                    <div className="w-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-[2rem] p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-100 transition-colors group">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform shadow-sm">
                        <UploadCloud size={24} />
                      </div>
                      <h3 className="font-black text-slate-800 text-lg mb-1">Drag & Drop Media Here</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Supports JPG, PNG, WEBP (Max 5MB)</p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="relative aspect-square bg-slate-200 rounded-2xl overflow-hidden group">
                           <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors z-10 flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100">
                             <div className="flex justify-end">
                               <button className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500 transition-colors"><Trash2 size={14}/></button>
                             </div>
                             <div>
                               <p className="text-[9px] font-bold text-white uppercase tracking-widest truncate">IMG_{20260100 + item}.jpg</p>
                             </div>
                           </div>
                           {/* Placeholder for the actual image */}
                           <div className="w-full h-full flex items-center justify-center text-slate-400">
                             <ImageIcon size={32} className="opacity-20" />
                           </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>
      <WebsiteAdminBottomNav />
    </div>
  );
}
