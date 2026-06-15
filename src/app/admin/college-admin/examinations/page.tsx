"use client";
import React from "react";
import GridDepartments from "@/components/admin/GridDepartments";
import { FileSpreadsheet } from "lucide-react";

export default function ExaminationsDepartmentsHub() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <FileSpreadsheet size={36} className="text-blue-600" />
          Examinations <span className="text-blue-600">Hub</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a department to view exams</p>
      </div>
      <GridDepartments basePath="/admin/college-admin/examinations" icon={FileSpreadsheet} />
    </div>
  );
}
