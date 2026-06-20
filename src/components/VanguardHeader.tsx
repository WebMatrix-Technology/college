"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LogOut, UserCheck, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface VanguardHeaderProps {
  title: string;
  subtitle: string;
  tag: string;
  TagIcon: React.ElementType;
  primaryColor: "orange" | "emerald" | "blue" | "indigo" | "rose" | "fuchsia" | "purple" | "cyan";
  secondaryColor?: string;
  showBack?: boolean;
  backHref?: string;
  children?: React.ReactNode;
}

export default function VanguardHeader({
  title,
  subtitle,
  tag,
  TagIcon,
  primaryColor,
  secondaryColor = "blue",
  showBack = false,
  backHref = "/students-corner",
  children
}: VanguardHeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  // Maps for tailwind classes (Tailwind doesn't support dynamic string interpolation for arbitrary colors reliably)
  const colorMap: Record<string, { text: string, gradientFrom: string, bgFade: string, border: string }> = {
    orange: { text: "text-orange-500", gradientFrom: "from-orange-600/30", bgFade: "bg-orange-500/10", border: "border-orange-500/50" },
    emerald: { text: "text-emerald-500", gradientFrom: "from-emerald-600/30", bgFade: "bg-emerald-500/10", border: "border-emerald-500/50" },
    blue: { text: "text-blue-500", gradientFrom: "from-blue-600/30", bgFade: "bg-blue-500/10", border: "border-blue-500/50" },
    indigo: { text: "text-indigo-500", gradientFrom: "from-indigo-600/30", bgFade: "bg-indigo-500/10", border: "border-indigo-500/50" },
    rose: { text: "text-rose-500", gradientFrom: "from-rose-600/30", bgFade: "bg-rose-500/10", border: "border-rose-500/50" },
    fuchsia: { text: "text-fuchsia-500", gradientFrom: "from-fuchsia-600/30", bgFade: "bg-fuchsia-500/10", border: "border-fuchsia-500/50" },
    purple: { text: "text-purple-500", gradientFrom: "from-purple-600/30", bgFade: "bg-purple-500/10", border: "border-purple-500/50" },
    cyan: { text: "text-cyan-500", gradientFrom: "from-cyan-600/30", bgFade: "bg-cyan-500/10", border: "border-cyan-500/50" }
  };

  const pColor = colorMap[primaryColor] || colorMap.orange;
  const sColor = colorMap[secondaryColor] || colorMap.blue;

  return (
    <section className="pt-24 pb-12 bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-64 -right-64 w-[800px] h-[800px] bg-gradient-to-r ${pColor.gradientFrom} to-transparent rounded-full blur-[100px]`}
        />
        <motion.div 
          animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className={`absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-gradient-to-r ${sColor.gradientFrom} to-transparent rounded-full blur-[80px]`}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {showBack && (
          <Link 
            href={backHref}
            className={`group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:${pColor.text} transition-all mb-8`}
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
          </Link>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className={`${pColor.text} font-black uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2`}>
              <TagIcon size={14} className="animate-pulse" /> {tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              {title} <br/><span className={`${pColor.text} relative`}>
                {subtitle}
                <span className={`absolute bottom-1 left-0 w-full h-2 ${pColor.bgFade} -skew-x-12`}></span>
              </span>
            </h1>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3 w-full md:w-auto">
            <Link href="/students-corner/profile">
              <button className={`flex items-center justify-center gap-2 ${pColor.bgFade} hover:bg-white hover:text-slate-900 transition-all px-6 py-3 text-[10px] font-black uppercase tracking-widest border ${pColor.border} ${pColor.text} rounded-2xl w-full md:w-auto backdrop-blur-sm`}>
                <UserCheck size={14} /> Profile
              </button>
            </Link>
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-red-600 transition-all px-6 py-3 text-[10px] font-black uppercase tracking-widest border border-white/10 rounded-2xl w-full md:w-auto backdrop-blur-sm"
            >
              <LogOut size={14} /> Logout
            </button>
          </motion.div>
        </div>

        {children}
      </div>
    </section>
  );
}
