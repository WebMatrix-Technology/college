"use client";
import React from "react";
import { useParams } from "next/navigation";
import GridYears from "@/components/admin/GridYears";
import { Award, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ScholarshipsYearsHub() {
  const params = useParams();
  const deptId = params.deptId as string;
  const courseId = params.courseId as string;

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <Link href={`/admin/accountant/scholarships/${deptId}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Courses
        </Link>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Award size={36} className="text-emerald-600" />
          <span className="uppercase">{courseId}</span> <span className="text-emerald-600">Batches</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a year to view scholarships</p>
      </div>
      <GridYears basePath={`/admin/accountant/scholarships/${deptId}/${courseId}`} deptId={deptId} courseId={courseId} icon={Award} />
    </div>
  );
}
