import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Join Vanguard Institute of Technology. Explore our programs, admission process, and start your application today.",
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
