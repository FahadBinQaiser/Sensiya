import React from "react";

export default function LowRadialGradient() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(209,43,39,0.14),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(209,43,39,0.10),transparent_50%)]" />
    </>
  );
}
