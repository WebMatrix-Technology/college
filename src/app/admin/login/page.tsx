"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ShieldAlert, Lock, UserCheck, ArrowRight, ArrowLeft, Loader2 
} from "lucide-react";

export default function AdminLoginPage() {
  const [role, setRole] = useState("hr");
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!adminId || !password) {
      setError("Please input valid personnel credentials.");
      return;
    }

    setIsAuthenticating(true);

    // Simulating Secure Auth Logic
    setTimeout(() => {
      setIsAuthenticating(false);
      
      // Save state for RBAC (Role Based Access Control)
      localStorage.setItem("isAdminLoggedIn", "true");
      localStorage.setItem("adminRole", role);
      
      // REDIRECTION LOGIC
      if (role === "hr") {
        router.push("/admin/hr/dashboard");
      } 
      else if (role.includes("ADMISSION") || role === "COUNSELOR" || role === "ASSISTANT") {
        router.push("/admin/admission/dashboard");
      } 
      else {
        router.push("/admin/dashboard");
      }
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-orange-600 selection:text-white">
      
      {/* Cinematic Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
      
      {/* Top Header Return Context */}
      <div className="absolute top-8 left-8 z-20">
        <Link href="/" className="group text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-500 flex items-center gap-2 transition duration-200">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Home Registry
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between">
          
          {/* Header Branding */}
          <div className="bg-slate-900 p-10 text-center border-b-4 border-orange-600 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />
            <ShieldAlert className="text-orange-500 mx-auto mb-4 animate-pulse" size={48} />
            <h1 className="text-white text-3xl font-black tracking-tighter italic uppercase">Admin <span className="text-orange-600">Central.</span></h1>
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em] mt-3">
              Verified Personnel Only
            </p>
          </div>

          {/* Form Content */}
          <form className="p-8 space-y-5 bg-white" onSubmit={handleAdminLogin}>
            
            {/* Error Notification */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-50 border border-red-100 p-4 rounded-xl text-red-600 font-bold text-[10px] uppercase tracking-wider text-center"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Role Selection */}
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Administrative Role</label>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-[11px] font-black uppercase tracking-wider outline-none focus:border-orange-500 focus:bg-white transition-all cursor-pointer text-slate-800"
              >
                <optgroup label="Core Departments">
                  <option value="hr">Human Resources (HR)</option>
                  <option value="it_admin">System Admin</option>
                </optgroup>
                
                {/* NEW ADMISSION ROLES */}
                <optgroup label="Admission Node">
                  <option value="ADMISSION_HEAD">Admission Head</option>
                  <option value="COUNSELOR">Admission Counselor</option>
                  <option value="ASSISTANT">Admission Assistant</option>
                </optgroup>
              </select>
            </div>

            {/* ID Input */}
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Personnel ID</label>
              <div className="relative group">
                <UserCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={18} />
                <input 
                  type="text"
                  required
                  placeholder="VNG-XXXX"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  className="w-full p-4 pl-12 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-orange-500 focus:bg-white text-slate-900 transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Security Key</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={18} />
                <input 
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 pl-12 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-orange-500 focus:bg-white text-slate-900 transition-all"
                />
              </div>
            </div>

            {/* Action Button */}
            <button 
              type="submit" 
              disabled={isAuthenticating}
              className="w-full bg-slate-950 text-white font-black py-4 rounded-2xl uppercase tracking-[0.3em] text-xs hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-50 mt-6"
            >
              {isAuthenticating ? (
                <><Loader2 className="animate-spin" size={16} /> Verifying Session...</>
              ) : (
                <><span className="italic leading-none">Authorize Session</span> <ArrowRight size={16} /></>
              )}
            </button>
            
            <p className="text-center text-[8px] font-black text-slate-400 uppercase tracking-widest mt-4 leading-none">
              Encrypted Tunnel Activity Logged
            </p>
          </form>
        </div>
      </motion.div>
    </main>
  );
}