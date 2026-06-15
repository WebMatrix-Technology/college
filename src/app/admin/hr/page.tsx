"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Search, Plus, Mail, Phone, MoreVertical, 
  UserCheck, UserPlus, ShieldCheck, Zap, Trash2, Edit3, 
  Briefcase, Award, Users, Filter, X, Loader2,
  CheckCircle
} from "lucide-react";

// --- MASTER DATA SOURCE ---
const INITIAL_STAFF = [
  { id: 101, name: "Anjali Verma", role: "Chief HR Officer", dept: "HR", email: "anjali.v@vit.edu", status: "Active", phone: "+91 9833602082" },
  { id: 102, name: "Karan Malhotra", role: "Talent Acquisition Head", dept: "HR", email: "karan.m@vit.edu", status: "Active", phone: "+91 9833602083" },
  { id: 201, name: "Vikram Mehta", role: "Director of Placements", dept: "Placement", email: "vikram.m@vit.edu", status: "On Leave", phone: "+91 9833602085" },
  { id: 502, name: "Dr. Sunita Rao", role: "Head of Dept (CSE)", dept: "Teaching", email: "sunita.r@vit.edu", status: "Active", phone: "+91 9833602092" },
];

const DEPARTMENTS = ["All Units", "HR", "Placement", "Admission", "Finance", "Teaching", "Non-Teaching"];

export default function HRPage() {
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState(INITIAL_STAFF);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDept, setActiveDept] = useState("All Units");

  // Onboarding Modal Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newDept, setNewDept] = useState("HR");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // --- HANDLERS ---
  const handleOnboard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newRole || !newEmail) return;

    const newMember = {
      id: Math.floor(100 + Math.random() * 900),
      name: newName,
      role: newRole,
      dept: newDept,
      email: newEmail,
      status: "Active",
      phone: newPhone || "+91 9833600000"
    };

    setStaff(prev => [newMember, ...prev]);
    setIsModalOpen(false);
    setNewName("");
    setNewRole("");
    setNewEmail("");
    setNewPhone("");
    alert(`SECURE_NODE: ${newName.toUpperCase()} has been verified and registered.`);
  };

  const deleteStaff = (id: number) => {
    setStaff(prev => prev.filter(s => s.id !== id));
  };

  const filteredStaff = staff.filter(s => {
    const matchesSearch = 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toString().includes(searchTerm);
    const matchesDept = activeDept === "All Units" || s.dept === activeDept;
    return matchesSearch && matchesDept;
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-orange-600" size={40} />
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20 p-4 md:p-8 pt-24 font-sans selection:bg-orange-600 selection:text-white text-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Command Center
            </Link>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none text-slate-950">
              Personnel <span className="text-orange-600">Core.</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-3 flex items-center gap-2">
              <ShieldCheck size={12} className="text-emerald-600" /> Authorized HR Management Console
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto justify-center px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
            >
              <UserPlus size={16} /> Onboard Member
            </button>
          </div>
        </div>

        {/* --- METRICS HUB --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-slate-200/60 p-6 rounded-[2rem] shadow-sm flex items-center gap-6">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Total Workforce</p>
              <p className="text-3xl font-black italic text-slate-900">{staff.length} <span className="text-xs not-italic text-slate-300">Personnel</span></p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/60 p-6 rounded-[2rem] shadow-sm flex items-center gap-6">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Fully Active</p>
              <p className="text-3xl font-black italic text-emerald-600">{staff.filter(s => s.status === 'Active').length}</p>
            </div>
          </div>

          <div className="bg-slate-950 text-white p-6 rounded-[2rem] shadow-xl flex items-center justify-between relative overflow-hidden group">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Registry System</p>
              <p className="text-xl font-black italic mt-1 leading-tight text-white">Vanguard V2 Core</p>
              <p className="text-[8px] text-emerald-400 font-bold tracking-widest mt-1">OPERATIONAL</p>
            </div>
            <Zap className="text-orange-500 absolute -right-2 -bottom-2 opacity-10 group-hover:scale-110 transition-transform pointer-events-none" size={100} />
          </div>
        </div>

        {/* --- FILTERS & SEARCH TOOLBAR --- */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="FILTER SEARCH BY NAME, ROLE OR UID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 p-5 pl-14 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500 font-black text-[11px] uppercase tracking-widest shadow-sm transition-all text-slate-900"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${
                  activeDept === dept 
                  ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105" 
                  : "bg-white text-slate-400 border-slate-200 hover:border-orange-500 hover:text-slate-900"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN LEDGER TABLE --- */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-2xl shadow-slate-200/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">Identity Node</th>
                  <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">Role & Unit</th>
                  <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] text-center">Status</th>
                  <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] text-right">Registry Operations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <AnimatePresence mode="popLayout">
                  {filteredStaff.map((person) => (
                    <motion.tr 
                      layout
                      key={person.id}
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hover:bg-slate-50/80 transition-all group"
                    >
                      <td className="p-8">
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl italic shadow-lg group-hover:scale-110 group-hover:bg-orange-600 transition-all">
                            {person.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-base font-black text-slate-950 uppercase tracking-tight italic leading-none mb-1 group-hover:text-orange-600 transition-colors">{person.name}</p>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID: {person.id}</span>
                          </div>
                        </div>
                      </td>

                      <td className="p-8">
                        <p className="text-sm font-black text-slate-800 uppercase tracking-tight leading-none mb-1">{person.role}</p>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{person.dept}</span>
                      </td>

                      <td className="p-8 text-center">
                        <span className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${
                          person.status === 'Active' 
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                          : 'bg-orange-50 text-orange-600 border-orange-100'
                        }`}>
                          {person.status}
                        </span>
                      </td>

                      <td className="p-8 text-right">
                        <div className="flex justify-end gap-2">
                           <a href={`tel:${person.phone}`} className="p-4 bg-slate-50 hover:bg-orange-600 hover:text-white rounded-xl text-slate-400 transition-all shadow-sm active:scale-90 border border-slate-100">
                             <Phone size={16} />
                           </a>
                           <a href={`mailto:${person.email}`} className="p-4 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-xl text-slate-400 transition-all shadow-sm active:scale-90 border border-slate-100">
                             <Mail size={16} />
                           </a>
                           <button 
                             onClick={() => deleteStaff(person.id)}
                             className="p-4 bg-slate-50 hover:bg-red-600 hover:text-white rounded-xl text-slate-400 transition-all shadow-sm active:scale-90 border border-slate-100"
                           >
                             <Trash2 size={16} />
                           </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>

            {filteredStaff.length === 0 && (
              <div className="p-20 text-center">
                <p className="text-slate-300 font-black uppercase tracking-[0.5em] text-xs italic">No matching personnel nodes recorded.</p>
              </div>
            )}
          </div>
        </div>

        {/* --- ONBOARDING MODAL OVERLAY --- */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white border border-slate-200 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 p-8 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center pb-6 border-b border-slate-100 mb-6">
                   <div>
                     <h3 className="font-black uppercase italic tracking-tighter text-2xl">Onboard Staff</h3>
                     <p className="text-[9px] font-bold uppercase opacity-80 tracking-widest text-slate-400">New Vanguard Node Entry</p>
                   </div>
                   <button onClick={() => setIsModalOpen(false)} className="hover:rotate-90 transition-transform bg-slate-100 p-2.5 rounded-full text-slate-400 hover:text-slate-950">
                      <X size={18}/>
                   </button>
                </div>

                <form onSubmit={handleOnboard} className="space-y-4">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={newName} 
                      onChange={(e) => setNewName(e.target.value)} 
                      placeholder="e.g. Rahul Verma"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-sm focus:border-orange-500 transition"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Corporate Role</label>
                    <input 
                      type="text" 
                      required 
                      value={newRole} 
                      onChange={(e) => setNewRole(e.target.value)} 
                      placeholder="e.g. Lead Analyst"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-sm focus:border-orange-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Department</label>
                      <select 
                        value={newDept} 
                        onChange={(e) => setNewDept(e.target.value)}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-orange-500"
                      >
                        {DEPARTMENTS.slice(1).map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Phone</label>
                      <input 
                        type="text" 
                        value={newPhone} 
                        onChange={(e) => setNewPhone(e.target.value)} 
                        placeholder="+91"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-sm focus:border-orange-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Official Email</label>
                    <input 
                      type="email" 
                      required 
                      value={newEmail} 
                      onChange={(e) => setNewEmail(e.target.value)} 
                      placeholder="e.g. r.verma@vit.edu"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-sm focus:border-orange-500 transition mb-4"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-slate-950 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
                  >
                    <UserCheck size={16} /> Register Member
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- TOAST NOTIFICATION --- */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50 border border-white/10"
            >
              <CheckCircle className="text-emerald-400" size={20} />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-black uppercase tracking-widest">Database Synced</span>
                <span className="text-[9px] text-slate-400 uppercase">New Personnel Node updated successfully.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}