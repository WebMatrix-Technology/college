"use client";
import React, { use } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, MapPin, Globe, Phone, Mail, CheckCircle, Ban, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function CollegeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Use React.use() to unwrap the params promise
  const resolvedParams = use(params);
  
  // In a real app, you would fetch college details based on resolvedParams.id
  // Here we use mock data for demonstration
  const mockCollege = {
    id: resolvedParams.id || "COL-001",
    name: "VIT Chennai",
    type: "University",
    status: "Active",
    students: 12500,
    joined: "2024-01-15",
    location: "Chennai, Tamil Nadu",
    website: "chennai.vit.ac.in",
    phone: "+91 44 3993 1555",
    email: "admin@chennai.vit.ac.in",
    subscription: "Enterprise",
    adminName: "Dr. Arvind Ramesh"
  };

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      {/* Header Context */}
      <div className="mb-10">
        <Link href="/admin/super-admin/colleges" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2 mb-4 w-fit">
          <ArrowLeft size={12} /> Back to Directory
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
              <Building2 size={36} className="text-blue-600" />
              {mockCollege.name}
            </h1>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2 flex items-center gap-2">
              Tenant ID: <span className="text-slate-600">{mockCollege.id}</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider ${
              mockCollege.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            }`}>
              {mockCollege.status === "Active" ? <CheckCircle size={14} /> : <Ban size={14} />}
              {mockCollege.status}
            </span>
            <button className="bg-slate-900 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-colors shadow-lg">
              Edit Details
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
             <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">Institution Profile</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
                      <p className="text-sm font-bold text-slate-700">{mockCollege.location}</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Globe size={18} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Website</p>
                      <Link href={`https://${mockCollege.website}`} target="_blank" className="text-sm font-bold text-blue-600 hover:underline">{mockCollege.website}</Link>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Phone size={18} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Contact Phone</p>
                      <p className="text-sm font-bold text-slate-700">{mockCollege.phone}</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Admin Email</p>
                      <p className="text-sm font-bold text-slate-700">{mockCollege.email}</p>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Statistics Mock */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
             <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">Usage Statistics</h3>
             <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border-2 border-slate-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                     <Users className="text-blue-600" size={24}/>
                     <span className="text-xs font-black uppercase tracking-widest text-slate-400">Total Students</span>
                  </div>
                  <p className="text-3xl font-black italic text-slate-900">{mockCollege.students.toLocaleString()}</p>
                </div>
                <div className="p-6 border-2 border-slate-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                     <BookOpen className="text-orange-600" size={24}/>
                     <span className="text-xs font-black uppercase tracking-widest text-slate-400">Active Courses</span>
                  </div>
                  <p className="text-3xl font-black italic text-slate-900">142</p>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Right Column: Settings / Actions */}
        <div className="space-y-8">
           <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Subscription Details</h3>
              
              <div className="mb-6">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Current Plan</p>
                 <p className="text-2xl font-black italic text-emerald-400">{mockCollege.subscription}</p>
              </div>
              
              <div className="mb-8">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Billing Cycle</p>
                 <p className="text-sm font-bold text-white">Monthly (Next invoice: July 15)</p>
              </div>

              <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors border border-slate-700">
                Manage Billing
              </button>
           </div>

           <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100">
              <h3 className="text-sm font-black uppercase tracking-widest text-red-700 mb-4 flex items-center gap-2">
                 <Ban size={16} /> Danger Zone
              </h3>
              <p className="text-[10px] font-bold text-red-500 mb-6 leading-relaxed">
                 Suspending this tenant will immediately revoke access for all associated students, faculty, and admins.
              </p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors shadow-lg">
                Suspend Tenant
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
