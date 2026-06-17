"use client";
import React from "react";
import GridDepartments from "@/components/admin/GridDepartments";
import { Wallet } from "lucide-react";

export default function CollectionsDepartmentsHub() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Wallet size={36} className="text-emerald-600" />
          Fee <span className="text-emerald-600">Collections</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a department to view collections</p>
      </div>
      <GridDepartments basePath="/admin/accountant/collections" icon={Wallet} />
    </div>
  );
}
