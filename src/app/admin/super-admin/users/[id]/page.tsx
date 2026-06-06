"use client";
import React, { use } from "react";
import Link from "next/link";
import { ArrowLeft, User, Shield, ShieldAlert, Ban, Save, Key, LogOut } from "lucide-react";
import { motion } from "framer-motion";

export default function UserProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  // Mock Data
  const mockUser = {
    id: resolvedParams.id || "U-1001",
    name: "Dr. Arvind Ramesh",
    role: "College Admin",
    college: "VIT Chennai",
    email: "arvind.r@vit.ac.in",
    status: "Active",
    lastLogin: "2 hours ago",
    mfaEnabled: true,
  };

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      {/* Header Context */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <Link href="/admin/super-admin/users" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-purple-600 transition-colors flex items-center gap-2 mb-4 w-fit">
            <ArrowLeft size={12} /> Back to Directory
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <User size={36} className="text-purple-600" />
            User <span className="text-purple-600">Profile</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2 flex items-center gap-2">
            Global ID: <span className="text-slate-600">{mockUser.id}</span>
          </p>
        </div>
        <button className="bg-purple-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-purple-700 transition-colors shadow-xl">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start">
             <div className="w-24 h-24 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                <User size={48} />
             </div>
             <div className="flex-1 space-y-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Full Name</label>
                     <input type="text" defaultValue={mockUser.name} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-purple-600 outline-none transition-all" />
                   </div>
                   <div>
                     <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Email Address</label>
                     <input type="email" defaultValue={mockUser.email} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-purple-600 outline-none transition-all" />
                   </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Assigned Role</label>
                     <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-purple-600 outline-none transition-all text-slate-900">
                        <option value="Super Admin" selected={mockUser.role === 'Super Admin'}>Super Admin</option>
                        <option value="College Admin" selected={mockUser.role === 'College Admin'}>College Admin</option>
                        <option value="HOD" selected={mockUser.role === 'HOD'}>HOD</option>
                        <option value="Accountant" selected={mockUser.role === 'Accountant'}>Accountant</option>
                     </select>
                   </div>
                   <div>
                     <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Tenant Assignment</label>
                     <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-purple-600 outline-none transition-all text-slate-900">
                        <option value="Platform" selected={mockUser.college === 'Platform'}>Platform (Global)</option>
                        <option value="VIT Chennai" selected={mockUser.college === 'VIT Chennai'}>VIT Chennai</option>
                        <option value="VIT Vellore" selected={mockUser.college === 'VIT Vellore'}>VIT Vellore</option>
                     </select>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
             <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
               <Shield size={20} className="text-emerald-600" /> Security Controls
             </h3>
             <div className="space-y-4">
               <div className="flex items-center justify-between p-4 border-2 border-slate-50 rounded-xl">
                 <div>
                   <p className="text-xs font-black uppercase tracking-widest text-slate-900">Two-Factor Authentication (MFA)</p>
                   <p className="text-[9px] font-bold text-slate-400 mt-1">Currently {mockUser.mfaEnabled ? 'enabled' : 'disabled'} via Authenticator App</p>
                 </div>
                 <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors">
                   {mockUser.mfaEnabled ? 'Disable MFA' : 'Enable MFA'}
                 </button>
               </div>
               <div className="flex items-center justify-between p-4 border-2 border-slate-50 rounded-xl">
                 <div>
                   <p className="text-xs font-black uppercase tracking-widest text-slate-900">Password Reset</p>
                   <p className="text-[9px] font-bold text-slate-400 mt-1">Force user to reset password on next login</p>
                 </div>
                 <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors flex items-center gap-1">
                   <Key size={12}/> Send Reset Link
                 </button>
               </div>
             </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
           <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Status Overview</h3>
              
              <div className="mb-6">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Account Status</p>
                 <p className={`text-2xl font-black italic ${mockUser.status === 'Active' ? 'text-emerald-400' : 'text-red-400'}`}>
                   {mockUser.status}
                 </p>
              </div>
              
              <div className="mb-8">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Last Login</p>
                 <p className="text-sm font-bold text-white">{mockUser.lastLogin}</p>
                 <p className="text-[9px] font-bold text-slate-500 mt-1">IP: 192.168.1.45</p>
              </div>

              <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors border border-slate-700 flex items-center justify-center gap-2">
                <LogOut size={14}/> Force Logout
              </button>
           </div>

           <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100">
              <h3 className="text-sm font-black uppercase tracking-widest text-red-700 mb-4 flex items-center gap-2">
                 <Ban size={16} /> Danger Zone
              </h3>
              <p className="text-[10px] font-bold text-red-500 mb-6 leading-relaxed">
                 Suspending this user will immediately kill any active sessions and revoke their platform access.
              </p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors shadow-lg">
                Suspend Account
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
