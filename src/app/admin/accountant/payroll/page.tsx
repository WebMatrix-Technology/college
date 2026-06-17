"use client";
import React from "react";
import GridDepartments from "@/components/admin/GridDepartments";
import { Banknote } from "lucide-react";

export default function PayrollDepartmentsHub() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Banknote size={36} className="text-emerald-600" />
          Payroll <span className="text-emerald-600">Hub</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a department to view payroll</p>
      </div>
      <GridDepartments basePath="/admin/accountant/payroll" icon={Banknote} />
    </div>
  );
}
