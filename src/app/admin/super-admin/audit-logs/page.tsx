"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Download, Clock, AlertTriangle, Key, Terminal } from "lucide-react";

const mockLogs = [
  { id: "LOG-0921", action: "SYSTEM_BACKUP_INITIATED", user: "System Admin", role: "Super Admin", ip: "192.168.1.1", time: "2 mins ago", severity: "info", icon: Terminal },
  { id: "LOG-0920", action: "COLLEGE_SUSPENDED", user: "System Admin", role: "Super Admin", ip: "192.168.1.1", time: "1 hour ago", severity: "critical", icon: AlertTriangle },
  { id: "LOG-0919", action: "FAILED_LOGIN_ATTEMPT", user: "Unknown", role: "N/A", ip: "45.22.109.12", time: "3 hours ago", severity: "warning", icon: Key },
  { id: "LOG-0918", action: "API_KEY_ROTATED", user: "Vikram Singh", role: "IT Admin", ip: "10.0.0.5", time: "5 hours ago", severity: "warning", icon: Key },
  { id: "LOG-0917", action: "NEW_COLLEGE_ONBOARDED", user: "System Admin", role: "Super Admin", ip: "192.168.1.1", time: "1 day ago", severity: "info", icon: ShieldAlert },
];

export default function AuditLogsModule() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <ShieldAlert size={36} className="text-red-600" />
            Audit <span className="text-red-600">Logs</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Security & Activity Ledger</p>
        </div>
        <button className="bg-white border-2 border-slate-100 text-slate-600 px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm">
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex gap-4">
          <input type="date" className="p-2 border-2 border-slate-200 rounded-lg text-xs font-bold text-slate-500 outline-none" />
          <select className="p-2 border-2 border-slate-200 rounded-lg text-xs font-bold text-slate-500 outline-none">
            <option>All Severities</option>
            <option>Info</option>
            <option>Warning</option>
            <option>Critical</option>
          </select>
        </div>

        {/* Ledger */}
        <div className="p-6 space-y-4">
          {mockLogs.map((log, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={log.id}
              className="flex flex-col md:flex-row gap-6 p-6 border-2 border-slate-50 hover:border-slate-100 rounded-2xl transition-colors group relative overflow-hidden"
            >
              {/* Severity Strip */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                log.severity === 'critical' ? 'bg-red-500' :
                log.severity === 'warning' ? 'bg-orange-400' : 'bg-blue-400'
              }`} />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                log.severity === 'critical' ? 'bg-red-100 text-red-600' :
                log.severity === 'warning' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
              }`}>
                <log.icon size={20} />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">{log.action}</h4>
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1"><Clock size={12}/> {log.time}</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                  <p className="text-xs font-bold text-slate-500">
                    <span className="text-[9px] uppercase tracking-widest text-slate-400 mr-2">User:</span> {log.user} ({log.role})
                  </p>
                  <p className="text-xs font-bold text-slate-500">
                    <span className="text-[9px] uppercase tracking-widest text-slate-400 mr-2">IP:</span> {log.ip}
                  </p>
                  <p className="text-xs font-bold text-slate-500">
                    <span className="text-[9px] uppercase tracking-widest text-slate-400 mr-2">ID:</span> {log.id}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
