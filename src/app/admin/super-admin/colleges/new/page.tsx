"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Save, User, ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function OnboardCollege() {
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      {/* Header Context */}
      <div className="mb-10">
        <Link href="/admin/super-admin/colleges" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2 mb-4 w-fit">
          <ArrowLeft size={12} /> Back to Directory
        </Link>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Building2 size={36} className="text-blue-600" />
          Onboard <span className="text-blue-600">Tenant</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Provision a New Institution</p>
      </div>

      <div className="max-w-4xl">
        {/* Step Indicator */}
        <div className="flex gap-4 mb-8">
           {[
             { num: 1, label: "Institution Details", icon: Building2 },
             { num: 2, label: "Admin Credentials", icon: User },
             { num: 3, label: "Plan & Deploy", icon: ShieldCheck }
           ].map((s) => (
             <div key={s.num} className={`flex-1 p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
               step === s.num ? 'border-blue-600 bg-blue-50 text-blue-700' :
               step > s.num ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 bg-white text-slate-400'
             }`}>
               <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                 step === s.num ? 'bg-blue-600 text-white' :
                 step > s.num ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
               }`}>
                 {step > s.num ? <Check size={14}/> : s.num}
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">{s.label}</span>
             </div>
           ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 lg:p-12 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden">
           {/* Step 1: Institution Details */}
           {step === 1 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Institution Name</label>
                  <input type="text" placeholder="e.g. VIT University" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-blue-600 outline-none transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Institution Type</label>
                    <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-blue-600 outline-none transition-all text-slate-600">
                      <option>University (Multi-Campus)</option>
                      <option>Autonomous College</option>
                      <option>Affiliated College</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Primary Domain</label>
                    <input type="text" placeholder="e.g. vit.ac.in" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-blue-600 outline-none transition-all" />
                  </div>
                </div>
                <div className="pt-6 flex justify-end">
                   <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-colors shadow-lg">Next Step</button>
                </div>
             </motion.div>
           )}

           {/* Step 2: Admin Credentials */}
           {step === 2 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Root Admin Name</label>
                  <input type="text" placeholder="e.g. Dr. Ramesh" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-blue-600 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Root Admin Email</label>
                  <input type="email" placeholder="admin@domain.com" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-blue-600 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Temporary Password</label>
                  <input type="text" readOnly value="VNG-Temp-X9A2" className="w-full p-4 bg-slate-100 border-2 border-slate-200 rounded-xl text-sm font-bold text-slate-500 outline-none" />
                  <p className="text-[9px] font-bold text-slate-400 mt-2 ml-1">This will be emailed to the root admin and must be changed on first login.</p>
                </div>
                <div className="pt-6 flex justify-between">
                   <button onClick={() => setStep(1)} className="bg-slate-100 text-slate-600 px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-colors">Back</button>
                   <button onClick={() => setStep(3)} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-colors shadow-lg">Next Step</button>
                </div>
             </motion.div>
           )}

           {/* Step 3: Plan & Deploy */}
           {step === 3 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Select Subscription Tier</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-2 border-slate-100 rounded-xl p-6 cursor-pointer hover:border-emerald-500 transition-colors bg-slate-50">
                       <h4 className="font-black italic uppercase text-slate-900 mb-1">Standard</h4>
                       <p className="text-[10px] font-bold text-slate-500">Up to 5k Students</p>
                    </div>
                    <div className="border-2 border-emerald-500 rounded-xl p-6 cursor-pointer bg-emerald-50 relative">
                       <div className="absolute top-2 right-2 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white"><Check size={10}/></div>
                       <h4 className="font-black italic uppercase text-emerald-700 mb-1">Enterprise</h4>
                       <p className="text-[10px] font-bold text-emerald-600">Unlimited Students</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl mt-6">
                   <h4 className="text-xs font-black uppercase tracking-widest text-orange-700 mb-2">Deployment Confirmation</h4>
                   <p className="text-[10px] font-bold text-orange-600 leading-relaxed">
                     By proceeding, a new isolated tenant database will be provisioned. The root admin will receive an email with their temporary credentials and the onboarding portal link. This process takes approximately 45 seconds.
                   </p>
                </div>

                <div className="pt-6 flex justify-between">
                   <button onClick={() => setStep(2)} className="bg-slate-100 text-slate-600 px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-colors">Back</button>
                   <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-colors shadow-2xl flex items-center gap-2">
                     <Save size={16} /> Provision Tenant
                   </button>
                </div>
             </motion.div>
           )}
        </div>
      </div>
    </div>
  );
}
