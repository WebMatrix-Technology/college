"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WebsiteAdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("adminRole");
    if (role !== "website_admin" && role !== "super_admin") {
      router.push("/admin/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) return null;

  return (
    <div className="w-full h-screen overflow-hidden bg-[#f8fafc]">
      {children}
    </div>
  );
}
