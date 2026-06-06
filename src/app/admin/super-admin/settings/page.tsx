"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Save, Mail, MessageSquare, Globe, Shield } from "lucide-react";

export default function SettingsModule() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Settings size={36} className="text-slate-600" />
            System <span className="text-slate-600">Settings</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Core Platform Configurations</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-xl">
          <Save size={16} /> Save Configurations
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - General & Security */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* General Platform Config */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 mb-6">
              <Globe size={20} className="text-blue-600" /> General Info
            </h3>
            <div className="space-y-6">
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Platform Name</label>
                <input type="text" defaultValue="Vanguard Core Education Platform" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-slate-400 outline-none transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Support Email</label>
                  <input type="email" defaultValue="support@vanguard.io" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-slate-400 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Support Phone</label>
                  <input type="text" defaultValue="+1 (800) 555-0199" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-slate-400 outline-none transition-all" />
                </div>
              </div>
            </div>
          </div>

          {/* Third Party Integrations */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 mb-6">
              <Mail size={20} className="text-orange-600" /> Integrations
            </h3>
            <div className="space-y-6">
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">SMTP Gateway (SendGrid/AWS)</label>
                <input type="password" defaultValue="sg.1234567890abcdefghijklmnopqrstuvwxyz" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-orange-500 outline-none transition-all" />
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block flex items-center gap-2"><MessageSquare size={12} /> SMS Provider API Key (Twilio)</label>
                <input type="password" defaultValue="tw_api_0987654321xyz" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:border-orange-500 outline-none transition-all" />
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Danger Zone & Toggles */}
        <div className="space-y-8">
          
          {/* Security & Access */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 mb-6">
              <Shield size={20} className="text-emerald-600" /> Security
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border-2 border-slate-100 rounded-xl">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-900">Enforce 2FA</p>
                  <p className="text-[9px] font-bold text-slate-400 mt-1">Require MFA for all Admins</p>
                </div>
                {/* Toggle switch mock */}
                <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                   <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border-2 border-slate-100 rounded-xl">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-900">Session Timeout</p>
                  <p className="text-[9px] font-bold text-slate-400 mt-1">Idle time before logout</p>
                </div>
                <select className="bg-slate-50 border-2 border-slate-200 rounded-lg text-xs font-bold p-1 outline-none">
                  <option>15 mins</option>
                  <option>30 mins</option>
                  <option>1 hour</option>
                </select>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100">
            <h3 className="text-lg font-black uppercase tracking-widest text-red-700 mb-2">Danger Zone</h3>
            <p className="text-xs font-bold text-red-500 mb-6">Critical system operations. Use with extreme caution.</p>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-red-900 uppercase tracking-widest">Maintenance Mode</span>
                  <button 
                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                    className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors ${maintenanceMode ? 'bg-red-600 text-white' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                  >
                    {maintenanceMode ? 'Active' : 'Enable'}
                  </button>
                </div>
                <p className="text-[9px] font-bold text-red-400">Takes the entire platform offline for all tenants.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
