"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Save, Check, X } from "lucide-react";
import { use } from "react";

export default function EditPlanPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const planName = resolvedParams.id === 'standard' ? 'Standard' : 'Enterprise';
  
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      {/* Header Context */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <Link href="/admin/super-admin/subscriptions" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors flex items-center gap-2 mb-4 w-fit">
            <ArrowLeft size={12} /> Back to Subscriptions
          </Link>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <CreditCard size={36} className="text-emerald-600" />
            Edit <span className="text-emerald-600">{planName} Plan</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Modify Plan Features and Pricing</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-emerald-700 transition-colors shadow-xl">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
               <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">Plan Basics</h3>
               <div className="space-y-6">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Plan Name</label>
                    <input type="text" defaultValue={planName} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-emerald-600 outline-none transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Monthly Price ($)</label>
                      <input type="text" defaultValue={planName === 'Standard' ? "999" : "2499"} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-emerald-600 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Student Limit</label>
                      <input type="text" defaultValue={planName === 'Standard' ? "5000" : "Unlimited"} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-emerald-600 outline-none transition-all" />
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
               <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">Features Included</h3>
               <div className="space-y-4">
                  {['Core Modules (Admin, Faculty, Student)', 'Custom Domain Support', 'Priority 24/7 Support', 'Dedicated Account Manager', 'Real-time Backups'].map((feat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border-2 border-slate-50 rounded-xl hover:border-slate-100 transition-colors">
                      <span className="text-xs font-bold text-slate-700">{feat}</span>
                      <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                         <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 flex items-center justify-center text-emerald-500">
                           <Check size={10} />
                         </div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-xs font-bold text-slate-400 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                    + Add New Feature Line
                  </button>
               </div>
            </div>
         </div>

         {/* Right Column */}
         <div className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none" />
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Live Subscriptions</h3>
               
               <p className="text-[10px] font-bold text-slate-500 mb-1">Tenants on this plan</p>
               <p className="text-4xl font-black italic text-emerald-400 mb-8">{planName === 'Standard' ? '86' : '56'}</p>

               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <p className="text-[9px] font-black uppercase tracking-widest text-orange-400 mb-2">Notice</p>
                 <p className="text-[10px] font-bold text-slate-300 leading-relaxed">Changes to pricing will only affect new subscribers. Existing tenants will remain on their legacy pricing until their contract is manually renewed.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
