"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Search, MapPin, Building2, Briefcase, Mail, ExternalLink
} from "lucide-react";

const mockAlumni = [
  { id: "AL-2023-01", name: "Ravi Kumar", batch: "2023", dept: "Computer Science", company: "Google", role: "Software Engineer II", location: "Bangalore", email: "ravi.k@google.com" },
  { id: "AL-2022-45", name: "Neha Singh", batch: "2022", dept: "Electronics", company: "Intel", role: "Hardware Engineer", location: "Hyderabad", email: "neha.singh@intel.com" },
  { id: "AL-2024-12", name: "Aditya Verma", batch: "2024", dept: "Mechanical", company: "L&T", role: "Project Manager", location: "Mumbai", email: "aditya.v@larsentoubro.com" },
  { id: "AL-2021-88", name: "Ananya Desai", batch: "2021", dept: "Business", company: "McKinsey", role: "Senior Analyst", location: "Gurgaon", email: "ananya_d@mckinsey.com" },
];

export default function AlumniNetwork() {
  const [search, setSearch] = useState("");

  const filteredAlumni = mockAlumni.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase()) || 
    a.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <GraduationCap size={36} className="text-violet-600" />
            Alumni <span className="text-violet-600">Network</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Maintain relations with successfully placed graduates</p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col xl:flex-row items-center gap-4">
          <div className="relative w-full xl:w-96 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Name or Company..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <button className="w-full xl:w-auto bg-violet-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-violet-700 transition-colors flex items-center justify-center gap-2">
            <Mail size={14} /> Send Event Invite
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Alumnus Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Current Employment</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Location</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredAlumni.map((alumnus, idx) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={alumnus.id} 
                  className="bg-white hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <GraduationCap size={16} className="text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">{alumnus.name}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Batch of {alumnus.batch} • {alumnus.dept}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-black italic text-slate-900 flex items-center gap-1"><Building2 size={14} className="text-violet-600"/> {alumnus.company}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5 flex items-center gap-1"><Briefcase size={12} /> {alumnus.role}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-600 flex items-center gap-1"><MapPin size={14} className="text-slate-400"/> {alumnus.location}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:border-violet-600 hover:text-violet-600 transition-all flex items-center justify-center gap-2 ml-auto">
                      Update Profile <ExternalLink size={12} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
