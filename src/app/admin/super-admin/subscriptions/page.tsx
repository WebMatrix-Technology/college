"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CreditCard, Zap, Check, ArrowRight, Activity } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "$999",
    period: "/month",
    description: "Perfect for single-campus colleges.",
    features: ["Up to 5,000 Students", "Standard Modules", "Email Support", "Daily Backups"],
    color: "bg-slate-900",
    textColor: "text-slate-900"
  },
  {
    name: "Enterprise",
    price: "$2,499",
    period: "/month",
    description: "For multi-campus universities.",
    features: ["Unlimited Students", "All Modules + Custom", "24/7 Priority Support", "Real-time Backups", "Dedicated Account Manager"],
    color: "bg-emerald-600",
    textColor: "text-emerald-600",
    popular: true
  }
];

export default function SubscriptionsModule() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <CreditCard size={36} className="text-emerald-600" />
          Subscription <span className="text-emerald-600">Plans</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Manage Billing & Revenue</p>
      </div>

      {/* Revenue Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 text-emerald-100"><Activity size={48} /></div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Monthly Recurring Revenue</p>
          <p className="text-4xl font-black italic text-emerald-600">$124,500</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-emerald-500">
            <span className="bg-emerald-50 px-2 py-1 rounded-md">+12.5%</span> from last month
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Active Subscriptions</p>
          <p className="text-4xl font-black italic text-slate-900">142</p>
          <p className="mt-4 text-[10px] font-bold text-slate-400">98% Retention Rate</p>
        </div>
        <Link href="/admin/super-admin/subscriptions/invoices" className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-2xl text-white flex flex-col justify-center items-center text-center group hover:bg-slate-800 transition-colors cursor-pointer">
           <Zap className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
           <p className="text-sm font-black uppercase tracking-widest">Generate Invoice Run</p>
           <p className="text-[10px] text-slate-400 mt-2">Process manual billing for out-of-cycle clients.</p>
        </Link>
      </div>

      {/* Plans Section */}
      <h2 className="text-lg font-black uppercase italic tracking-widest text-slate-900 mb-6">Current Offerings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
        {plans.map((plan, idx) => (
          <motion.div 
            key={plan.name}
            whileHover={{ y: -5 }}
            className={`bg-white rounded-[2rem] p-8 border-2 ${plan.popular ? 'border-emerald-500 shadow-[0_20px_50px_rgba(16,185,129,0.15)]' : 'border-slate-100 shadow-xl'} relative flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}
            <h3 className={`text-2xl font-black uppercase italic ${plan.textColor} mb-2`}>{plan.name}</h3>
            <p className="text-xs font-bold text-slate-500 mb-6">{plan.description}</p>
            
            <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-slate-100">
              <span className="text-5xl font-black tracking-tighter text-slate-900">{plan.price}</span>
              <span className="text-xs font-bold text-slate-400">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full ${plan.color} text-white flex items-center justify-center`}>
                    <Check size={12} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{feat}</span>
                </li>
              ))}
            </ul>

            <Link href={`/admin/super-admin/subscriptions/${plan.name.toLowerCase()}`}>
              <button className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                Edit Plan <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
