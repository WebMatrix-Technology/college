import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Life",
  description: "Experience the vibrant campus life at Vanguard Institute. Explore our facilities, student clubs, and housing.",
};

export default function CampusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
