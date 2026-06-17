"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Plus, Check, X, Clock, IndianRupee, MessageSquare
} from "lucide-react";

const mockRequests = [
  { id: "REQ-091", title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell", requester: "Prof. Anjali Desai", dept: "Computer Science", date: "2026-06-15", status: "Pending", estCost: "₹4,500" },
  { id: "REQ-092", title: "Financial Management", author: "Prasanna Chandra", requester: "Vikram Singh", dept: "Business", date: "2026-06-14", status: "Approved", estCost: "₹850" },
  { id: "REQ-093", title: "Advanced Engineering Mathematics", author: "Erwin Kreyszig", requester: "Rahul Verma", dept: "Mechanical", date: "2026-06-10", status: "Ordered", estCost: "₹1,200" },
  { id: "REQ-094", title: "The Design of Everyday Things", author: "Don Norman", requester: "Priya Nair", dept: "Design", date: "2026-06-05", status: "Rejected", estCost: "₹950" },
];

export default function Requisitions() {
  const [activeTab, setActiveTab] = useState("Pending");

  const filteredRequests = mockRequests.filter(r => r.status === activeTab || activeTab === "All");

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <BookOpen size={36} className="text-amber-600" />
            Purchase <span className="text-amber-600">Requisitions</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage library book requests from students and faculty</p>
        </div>
      </div>

      <div className="flex bg-white p-2 rounded-2xl mb-8 shadow-md border border-slate-100 max-w-fit">
        {["Pending", "Approved", "Ordered", "Rejected", "All"].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              activeTab === tab ? "bg-slate-900 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRequests.map((req, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={req.id} 
            className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-6 flex flex-col relative overflow-hidden group"
          >
            {/* Status indicator bar */}
            <div className={`absolute top-0 left-0 w-full h-2 ${
              req.status === 'Approved' ? 'bg-emerald-500' : 
              req.status === 'Ordered' ? 'bg-blue-500' : 
              req.status === 'Rejected' ? 'bg-red-500' : 'bg-amber-500'
            }`} />

            <div className="flex justify-between items-start mb-4 mt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">
                {req.id}
              </span>
              <span className="text-[9px] font-bold text-slate-400 flex items-center gap-1">
                <Clock size={12} /> {req.date}
              </span>
            </div>
            
            <h4 className="text-lg font-black text-slate-900 leading-tight mb-1">{req.title}</h4>
            <p className="text-xs font-bold text-slate-500 mb-6">{req.author}</p>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Requested By</span>
                <span className="text-xs font-bold text-slate-700">{req.requester}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Department</span>
                <span className="text-xs font-bold text-slate-700">{req.dept}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Est. Cost</span>
                <span className="text-sm font-black italic text-emerald-600 flex items-center gap-1">
                  {req.estCost}
                </span>
              </div>
            </div>

            {req.status === 'Pending' && (
              <div className="mt-auto flex gap-2">
                <button className="flex-1 bg-emerald-100 text-emerald-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                  <Check size={14} /> Approve
                </button>
                <button className="flex-1 bg-red-100 text-red-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                  <X size={14} /> Reject
                </button>
              </div>
            )}
            
            {req.status !== 'Pending' && (
              <div className="mt-auto">
                <button className="w-full bg-white border border-slate-200 text-slate-600 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  <MessageSquare size={14} /> Add Note
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
