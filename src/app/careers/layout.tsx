import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Vanguard Institute faculty and staff. Explore open positions and career opportunities.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
