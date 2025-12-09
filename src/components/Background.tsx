"use client";

import React from "react";

export default function Background({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(100, 116, 139, 0.5) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-50 overflow-y-scroll overflow-x-hidden">{children}</div>
    </div>
  );
}
