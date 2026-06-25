import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Stay updated with the latest events, workshops, and seminars at Vanguard Institute.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
