import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Programs",
  description: "Discover our world-class undergraduate and postgraduate engineering and technology programs.",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
