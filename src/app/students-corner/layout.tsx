import React from "react";
import { Metadata } from "next";
import ClientAuthGuard from "@/components/ClientAuthGuard";

export const metadata: Metadata = {
  title: "Student Portal",
  description: "Vanguard Student Command Center for academics, grades, and attendance.",
};

export default function StudentsCornerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientAuthGuard role="student">{children}</ClientAuthGuard>;
}