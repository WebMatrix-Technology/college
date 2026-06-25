import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal",
  description: "Vanguard Institute Administrative Portal for managing staff, faculty, students, and website data.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
