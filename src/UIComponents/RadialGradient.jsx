import React from "react";

export default function RadialGradients() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_90%,rgba(209,43,39,0.5),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_10%,rgba(209,43,39,0.5),transparent_50%)]" />
    </>
  );
}
