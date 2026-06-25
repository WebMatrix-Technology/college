import React from "react";
import { Metadata } from "next";
import ClientAuthGuard from "@/components/ClientAuthGuard";

export const metadata: Metadata = {
  title: "Faculty Portal",
  description: "Vanguard Faculty Node for managing attendance, grading, and course materials.",
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientAuthGuard role="faculty">{children}</ClientAuthGuard>;
}
