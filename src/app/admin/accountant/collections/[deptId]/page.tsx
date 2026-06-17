"use client";
import React from "react";
import { useParams } from "next/navigation";
import GridCourses from "@/components/admin/GridCourses";
import { Wallet, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CollectionsCoursesHub() {
  const params = useParams();
  const deptId = params.deptId as string;

  return (
    <div className="p-6 lg:p-12 font-sans min-h-screen">
      <div className="mb-10">
        <Link href="/admin/accountant/collections" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Departments
        </Link>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 flex items-center gap-4">
          <Wallet size={36} className="text-emerald-600" />
          <span className="uppercase">{deptId}</span> <span className="text-emerald-600">Courses</span>
        </h1>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Select a course to view fee collections</p>
      </div>
      <GridCourses basePath={`/admin/accountant/collections/${deptId}`} deptId={deptId} icon={Wallet} />
    </div>
  );
}
