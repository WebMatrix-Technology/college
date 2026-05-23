"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Mail, 
  Phone, 
  MoreVertical,
  UserPlus, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake,
  UserCheck, 
  Coins, 
  Settings2, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

// --- EXPANDED DATA SOURCE ---
const staffData = [
  // --- HR Unit ---
  { id: 101, name: "Anjali Verma", role: "Chief HR Officer", dept: "HR", email: "anjali.v@vit.edu", status: "Active", phone: "+91 9833602082" },
  { id: 102, name: "Karan Malhotra", role: "Talent Acquisition Head", dept: "HR", email: "karan.m@vit.edu", status: "Active", phone: "+91 9833602083" },
  { id: 103, name: "Ishita Gupta", role: "HR Assistant", dept: "HR", email: "ishita.g@vit.edu", status: "Active", phone: "+91 9833602084" },
  { id: 104, name: "Rohit Sharma", role: "Employee Relations", dept: "HR", email: "rohit.s@vit.edu", status: "Active", phone: "+91 9833602071" },
  { id: 105, name: "Megha Rao", role: "Onboarding Specialist", dept: "HR", email: "megha.r@vit.edu", status: "Active", phone: "+91 9833602072" },

  // --- Placement Unit ---
  { id: 201, name: "Vikram Mehta", role: "Director of Placements", dept: "Placement", email: "vikram.m@vit.edu", status: "On Leave", phone: "+91 9833602085" },
  { id: 202, name: "Siddharth Roy", role: "Corporate Relations Head", dept: "Placement", email: "sid.r@vit.edu", status: "Active", phone: "+91 9833602086" },
  { id: 203, name: "Ananya Iyer", role: "Placement Coordinator", dept: "Placement", email: "ananya.i@vit.edu", status: "Active", phone: "+91 9833602087" },
  { id: 204, name: "Rohan Deshmukh", role: "Industry Relations Lead", dept: "Placement", email: "rohan.d@vit.edu", status: "Active", phone: "+91 9833602073" },

  // --- Admission Unit ---
  { id: 301, name: "Priya Das", role: "Head of Admissions", dept: "Admission", email: "priya.d@vit.edu", status: "Active", phone: "+91 9833602088" },
  { id: 302, name: "Sameer Khan", role: "Admission Counselor", dept: "Admission", email: "sameer.k@vit.edu", status: "Active", phone: "+91 9833602089" },
  { id: 303, name: "Kavita Reddy", role: "Information Desk Incharge", dept: "Admission", email: "kavita.r@vit.edu", status: "Active", phone: "+91 9833602074" },

  // --- Finance Unit ---
  { id: 401, name: "Suresh Gupta", role: "Chief Finance Officer", dept: "Finance", email: "suresh.g@vit.edu", status: "Active", phone: "+91 9833602090" },
  { id: 402, name: "Neha Patil", role: "Senior Accountant", dept: "Finance", email: "neha.p@vit.edu", status: "Active", phone: "+91 9833602094" },
  { id: 403, name: "Manish Shah", role: "Auditor", dept: "Finance", email: "manish.s@vit.edu", status: "On Leave", phone: "+91 9833602075" },

  // --- Teaching Unit ---
  { id: 501, name: "Dr. Rajesh Sharma", role: "Dean of Academics", dept: "Teaching", email: "rajesh.s@vit.edu", status: "Active", phone: "+91 9833602091" },
  { id: 502, name: "Dr. Sunita Rao", role: "Head of Dept (CSE)", dept: "Teaching", email: "sunita.r@vit.edu", status: "Active", phone: "+91 9833602092" },
  { id: 503, name: "Dr. Arun Kumar", role: "Senior Professor", dept: "Teaching", email: "arun.k@vit.edu", status: "Active", phone: "+91 9833602095" },
  { id: 504, name: "Prof. Deepa Nair", role: "Assistant Professor", dept: "Teaching", email: "deepa.n@vit.edu", status: "Active", phone: "+91 9833602096" },
  { id: 505, name: "Dr. Amit Shah", role: "Research Head", dept: "Teaching", email: "amit.s@vit.edu", status: "Active", phone: "+91 9833602076" },

  // --- Non-Teaching Unit ---
  { id: 601, name: "Ramesh Kumar", role: "Chief Administrator", dept: "Non-Teaching", email: "ramesh.k@vit.edu", status: "Active", phone: "+91 9833602093" },
  { id: 602, name: "Sunil Verma", role: "IT Infrastructure Lead", dept: "Non-Teaching", email: "sunil.v@vit.edu", status: "Active", phone: "+91 9833602097" },
  { id: 603, name: "Geeta Singh", role: "Library Custodian", dept: "Non-Teaching", email: "geeta.s@vit.edu", status: "Active", phone: "+91 9833602098" },
  { id: 604, name: "Harish Patil", role: "Security & Facility Head", dept: "Non-Teaching", email: "harish.p@vit.edu", status: "Active", phone: "+91 9833602077" },
];

const departments = [
  { name: "HR", icon: UserCheck, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Placement", icon: HeartHandshake, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Admission", icon: GraduationCap, color: "text-green-500", bg: "bg-green-50" },
  { name: "Finance", icon: Coins, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "Teaching", icon: Briefcase, color: "text-orange-600", bg: "bg-orange-50" },
  { name: "Non-Teaching", icon: Settings2, color: "text-slate-500", bg: "bg-slate-50" },
];

export default function StaffDirectory() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnboard = () => {
    alert("SYSTEM PROTOCOL: Initializing Secure Onboarding Module...");
  };

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}?subject=Official Inquiry - Vanguard Admin`;
  };

  const handleMore = (name: string) => {
    alert(`FETCHING ENCRYPTED DATA: ${name.toUpperCase()} (LVL 4 AUTH REQ)`);
  };

  return (
    <div className="p-4 lg:p-10 bg-slate-50 min-h-screen selection:bg-orange-500 selection:text-white">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-2 bg-orange-600 rounded-full" />
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Staff Directory</h1>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
            <ShieldCheck size={12} className="text-orange-500" /> Personnel Database Core — VANGUARD_V2
          </p>
        </div>
        
        <button 
          onClick={handleOnboard}
          className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
        >
          <UserPlus size={18} /> Onboard Member
        </button>
      </div>

      {/* --- SEARCH HUB --- */}
      <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="Search name, role, or department..."
            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl text-[10px] font-bold uppercase tracking-widest focus:border-orange-500 focus:bg-white outline-none transition-all"
            value={searchTerm || ""} 
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
        <div className="flex items-center gap-4 border-l-2 border-slate-100 pl-6 h-10 hidden md:flex">
          <div className="text-right">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Active Headcount</p>
            <p className="text-xl font-black text-slate-900">{staffData.length}</p>
          </div>
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl animate-pulse">
             <Zap size={20} />
          </div>
        </div>
      </div>

      {/* --- DEPARTMENT SECTIONS --- */}
      <div className="space-y-16">
        {departments.map((dept) => {
          const filteredStaff = staffData.filter(staff => 
            staff.dept === dept.name && 
            (staff.name.toLowerCase().includes(searchTerm) || staff.role.toLowerCase().includes(searchTerm))
          );

          if (filteredStaff.length === 0 && searchTerm !== "") return null;

          return (
            <section key={dept.name} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl shadow-sm border border-slate-100 ${dept.bg} ${dept.color}`}>
                  <dept.icon size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
                    {dept.name} <span className="text-orange-600">Unit</span>
                  </h2>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Records: {filteredStaff.length}</p>
                </div>
                <div className="flex-1 h-[1px] bg-slate-200 ml-4 opacity-50" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredStaff.map((staff) => (
                    <motion.div
                      key={staff.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -8 }}
                      className="bg-white p-8 rounded-[2rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-orange-500/20 transition-all group relative overflow-hidden"
                    >
                      {/* Status Tag */}
                      <div className="absolute top-4 right-4">
                        <span className={`text-[8px] px-2 py-1 rounded-full font-black uppercase tracking-widest border ${
                          staff.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-orange-50 text-orange-700 border-orange-200'
                        }`}>
                          {staff.status}
                        </span>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        {/* Styled Initials Avatar */}
                        <div className="w-20 h-20 bg-slate-950 rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl italic group-hover:bg-orange-600 transition-colors shadow-lg mb-6">
                          {staff.name.charAt(0)}
                        </div>

                        <h3 className="font-black text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight text-lg leading-none">
                          {staff.name}
                        </h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mt-2 mb-6 h-8 flex items-center justify-center">
                          {staff.role}
                        </p>

                        <div className="w-full pt-6 border-t border-slate-50 flex flex-col gap-3">
                          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-bold">
                            <Mail size={14} className="text-slate-300" /> {staff.email}
                          </div>
                          
                          {/* Working Buttons */}
                          <div className="flex gap-2 justify-center mt-2">
                             <button 
                               onClick={() => handleCall(staff.phone)}
                               title="Call Personnel"
                               className="p-3 bg-slate-50 hover:bg-orange-600 hover:text-white rounded-xl text-slate-400 transition-all shadow-sm active:scale-90"
                             >
                               <Phone size={16} />
                             </button>
                             <button 
                               onClick={() => handleEmail(staff.email)}
                               title="Send Official Mail"
                               className="p-3 bg-slate-50 hover:bg-slate-950 hover:text-white rounded-xl text-slate-400 transition-all shadow-sm active:scale-90"
                             >
                               <Mail size={16} />
                             </button>
                             <button 
                               onClick={() => handleMore(staff.name)}
                               title="Advanced Records"
                               className="p-3 bg-slate-50 hover:bg-slate-200 rounded-xl text-slate-400 transition-all active:scale-90"
                             >
                               <MoreVertical size={16} />
                             </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>
          );
        })}
      </div>

      {/* --- FOOTER LOG --- */}
      <div className="mt-20 border-t border-slate-200 pt-8 flex items-center justify-between opacity-30">
        <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.5em]">Auth Node: VIT_ADMIN_HR_SECURE</p>
        <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.5em]">Terminal Session: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
}