"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, Search, Plus, Filter, Mail, Phone, Edit3, MoreVertical, BadgeCheck
} from "lucide-react";

const mockStaff = [
  { id: "EMP-1001", name: "Dr. Arvind Mehta", role: "HOD - Physics", dept: "Physics", type: "Faculty", joinDate: "2015-08-01", status: "Active" },
  { id: "EMP-1002", name: "Prof. Anjali Desai", role: "Associate Professor", dept: "Business", type: "Faculty", joinDate: "2018-06-15", status: "Active" },
  { id: "EMP-2005", name: "Ramesh Kumar", role: "System Administrator", dept: "IT Support", type: "Staff", joinDate: "2020-01-10", status: "Active" },
  { id: "EMP-2010", name: "Suresh Pillai", role: "Lab Assistant", dept: "Chemistry", type: "Staff", joinDate: "2023-09-01", status: "Probation" },
  { id: "EMP-3001", name: "Meera Reddy", role: "Admissions Counselor", dept: "Administration", type: "Staff", joinDate: "2024-01-15", status: "Active" },
];

export default function StaffDirectory() {
  const [search, setSearch] = useState("");

  const filteredStaff = mockStaff.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.role.toLowerCase().includes(search.toLowerCase()) ||
    s.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen bg-slate-50">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
            <Users size={36} className="text-rose-600" />
            Staff <span className="text-rose-600">Directory</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Master employee database for Faculty and Staff</p>
        </div>
        <button className="bg-rose-600 text-white px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:bg-rose-700 transition-colors">
          <Plus size={16} /> Add Employee
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col xl:flex-row items-center gap-4">
          <div className="relative w-full xl:w-96 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Name, Role, or Dept..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs outline-none focus:border-rose-500 transition-colors"
            />
          </div>
          <button className="w-full xl:w-auto bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <Filter size={14} /> Filters
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Employee Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Role / Dept</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Type & Tenure</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Contact</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredStaff.map((staff, idx) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={staff.id} 
                  className="bg-white hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <Users size={16} className="text-slate-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-slate-900 leading-tight">{staff.name}</p>
                          {staff.status === 'Active' && <BadgeCheck size={14} className="text-emerald-500" />}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{staff.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-700">{staff.role}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{staff.dept}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest mb-1 inline-block ${
                      staff.type === 'Faculty' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {staff.type}
                    </span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Joined: {staff.joinDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-rose-100 hover:text-rose-600 transition-colors">
                        <Mail size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-rose-100 hover:text-rose-600 transition-colors">
                        <Phone size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
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