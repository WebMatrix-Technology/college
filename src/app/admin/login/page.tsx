"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ShieldAlert, Lock, UserCheck, ArrowRight, ArrowLeft, Loader2, ChevronDown
} from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState("");
  const [isDemoMenuOpen, setIsDemoMenuOpen] = useState(false);
  const router = useRouter();

  // Mock database mapping emails to roles
  const mockUsers: Record<string, string> = {
    "super@vanguard.com": "super_admin",
    "admin@vanguard.com": "college_admin",
    "hod.it@vanguard.com": "hod_IT",
    "hod.law@vanguard.com": "hod_Law",
    "hod.commerce@vanguard.com": "hod_Commerce",
    "hod.science@vanguard.com": "hod_Science",
    "hod.socialscience@vanguard.com": "hod_Social Science",
    "hod.management@vanguard.com": "hod_Management",
    "coordinator.btech@vanguard.com": "coordinator_B.Tech",
    "coordinator.llb@vanguard.com": "coordinator_LLB",
    "coordinator.mba@vanguard.com": "coordinator_MBA",
    "batch.btech.y1@vanguard.com": "batch_coordinator_B.Tech_Year 1",
    "batch.llb.y2@vanguard.com": "batch_coordinator_LLB_Year 2",
    "hr@vanguard.com": "hr",
    "exam@vanguard.com": "examination",
    "accounts@vanguard.com": "accountant",
    "library@vanguard.com": "librarian",
    "placement@vanguard.com": "placement",
    "website.admin@vanguard.com": "website_admin",
    "admission@vanguard.com": "ADMISSION_HEAD",
    "admission.manager@vanguard.com": "ADMISSION_MANAGER",
    "admission.clerk@vanguard.com": "ADMISSION_CLERK"
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please input valid personnel credentials.");
      return;
    }

    const assignedRole = mockUsers[email.toLowerCase()];

    if (!assignedRole) {
      setError("Unauthorized email or invalid credentials.");
      return;
    }

    let actualRole = assignedRole;
    let deptContext = "";
    let coordinatorCourse = "";
    let coordinatorBatch = "";

    if (assignedRole.startsWith("hod_")) {
      actualRole = "hod";
      deptContext = assignedRole.replace("hod_", "");
    } else if (assignedRole.startsWith("batch_coordinator_")) {
      actualRole = "batch_coordinator";
      const parts = assignedRole.replace("batch_coordinator_", "").split("_");
      coordinatorCourse = parts[0];
      coordinatorBatch = parts[1];
    } else if (assignedRole.startsWith("coordinator_")) {
      actualRole = "course_coordinator";
      coordinatorCourse = assignedRole.replace("coordinator_", "");
    }

    setIsAuthenticating(true);

    // Simulating Secure Auth Logic
    setTimeout(() => {
      setIsAuthenticating(false);
      
      // Save state for RBAC (Role Based Access Control)
      localStorage.setItem("isAdminLoggedIn", "true");
      localStorage.setItem("adminRole", actualRole);
      
      if (actualRole === "hod") {
        localStorage.setItem("hodDepartment", deptContext);
      }
      if (actualRole === "course_coordinator" || actualRole === "batch_coordinator") {
        localStorage.setItem("coordinatorCourse", coordinatorCourse);
        if (actualRole === "batch_coordinator") {
           localStorage.setItem("coordinatorBatch", coordinatorBatch);
        }
      }
      
      // REDIRECTION LOGIC
      if (actualRole === "hr") {
        router.push("/admin/hr/dashboard");
      } 
      else if (actualRole.includes("ADMISSION")) {
        router.push("/admin/admission/dashboard");
      } 
      else if (actualRole === "super_admin") {
        router.push("/admin/super-admin/dashboard");
      }
      else if (actualRole === "college_admin") {
        router.push("/admin/college-admin/dashboard");
      }
      else if (actualRole === "hod") {
        router.push("/admin/hod/dashboard");
      }
      else if (actualRole === "course_coordinator") {
        router.push("/admin/coordinator/dashboard");
      }
      else if (actualRole === "batch_coordinator") {
        router.push("/admin/batch-coordinator/dashboard");
      }

      else if (actualRole === "examination") {
        router.push("/admin/examination/dashboard");
      }
      else if (actualRole === "accountant") {
        router.push("/admin/accountant/dashboard");
      }
      else if (actualRole === "librarian") {
        router.push("/admin/librarian/dashboard");
      }
      else if (actualRole === "placement") {
        router.push("/admin/placement/dashboard");
      }
      else if (actualRole === "website_admin") {
        router.push("/admin/website-admin/dashboard");
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
            
            {/* Demo Credentials Selector */}
            <div className="relative z-20">
              <button
                type="button"
                onClick={() => setIsDemoMenuOpen(!isDemoMenuOpen)}
                className="w-full flex items-center justify-between bg-orange-50 border border-orange-100 p-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-orange-600 hover:bg-orange-100 transition-colors"
              >
                <span>Select Demo Credentials</span>
                <ChevronDown size={14} className={`transition-transform ${isDemoMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDemoMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden max-h-48 overflow-y-auto custom-scrollbar"
                  >
                    {Object.keys(mockUsers).map((mockEmail) => (
                      <button
                        key={mockEmail}
                        type="button"
                        onClick={() => {
                          setEmail(mockEmail);
                          setPassword("password123");
                          setIsDemoMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 border-b border-slate-50 last:border-0 transition-colors flex justify-between"
                      >
                        <span>{mockUsers[mockEmail].replace(/_/g, " ").toUpperCase()}</span>
                        <span className="text-slate-400 font-normal truncate max-w-[120px]">{mockEmail}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
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

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Official Email</label>
              <div className="relative group">
                <UserCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={18} />
                <input 
                  type="email"
                  required
                  placeholder="admin@vanguard.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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