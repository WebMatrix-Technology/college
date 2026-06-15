"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, IndianRupee } from "lucide-react";
import GridCourses from "@/components/admin/GridCourses";
import { departmentNames } from "@/components/admin/GridDepartments";

export default function FeesCoursesHub() {
  const params = useParams();
  const deptId = params.deptId as string;
  const deptName = departmentNames[deptId] || "Department";

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <Link href="/admin/college-admin/fees" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Departments
        </Link>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <IndianRupee size={36} className="text-emerald-600" />
          {deptName} <span className="text-emerald-600">Programs</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a program to manage its fees</p>
      </div>
      <GridCourses basePath={`/admin/college-admin/fees/${deptId}`} deptId={deptId} icon={IndianRupee} />
    </div>
  );
}
