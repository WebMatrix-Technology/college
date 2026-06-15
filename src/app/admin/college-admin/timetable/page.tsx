"use client";
import React from "react";
import GridDepartments from "@/components/admin/GridDepartments";
import { Clock } from "lucide-react";

export default function TimetableDepartmentsHub() {
  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Clock size={36} className="text-indigo-600" />
          Master <span className="text-indigo-600">Timetable</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a department to view schedules</p>
      </div>
      <GridDepartments basePath="/admin/college-admin/timetable" icon={Clock} />
    </div>
  );
}
