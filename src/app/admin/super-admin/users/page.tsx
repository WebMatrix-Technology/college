"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Search, Shield, User, ShieldAlert, Filter } from "lucide-react";

const mockUsers = [
  { id: "U-1001", name: "Dr. Arvind Ramesh", role: "College Admin", college: "VIT Chennai", email: "arvind.r@vit.ac.in", status: "Active" },
  { id: "U-1002", name: "Priya Sharma", role: "HOD - CS", college: "VIT Vellore", email: "priya.s@vit.ac.in", status: "Active" },
  { id: "U-1003", name: "System Admin", role: "Super Admin", college: "Platform", email: "sysadmin@vanguard.io", status: "Active" },
  { id: "U-1004", name: "Vikram Singh", role: "Accountant", college: "VIT Bhopal", email: "vikram.s@vit.ac.in", status: "Offline" },
];

export default function UsersModule() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Users size={36} className="text-purple-600" />
          Global <span className="text-purple-600">Users</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Platform Identity Management</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, email, or role..." 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-purple-600 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="px-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-600 hover:border-purple-600 hover:text-purple-600 transition-colors">
          <Filter size={16} /> Filter Roles
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {mockUsers.map((user, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            key={user.id} 
            className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6 relative overflow-hidden group hover:border-purple-600 transition-colors"
          >
            {user.role === "Super Admin" && (
              <div className="absolute top-0 right-0 p-4 text-orange-500 bg-orange-50 rounded-bl-2xl">
                <ShieldAlert size={16} />
              </div>
            )}
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-400 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
               <User size={24} />
            </div>
            <h3 className="font-black text-lg text-slate-900">{user.name}</h3>
            <p className="text-xs font-bold text-slate-500 mb-4">{user.email}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
               <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                 <Shield size={10} /> {user.role}
               </span>
               <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest">
                 {user.college}
               </span>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
               <span className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${user.status === 'Active' ? 'text-emerald-500' : 'text-slate-400'}`}>
                 <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} /> {user.status}
               </span>
               <Link href={`/admin/super-admin/users/${user.id}`}>
                 <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-purple-600">Edit User</button>
               </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
