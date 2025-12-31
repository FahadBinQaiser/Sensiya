import React from "react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

export default function SmoothScrollWrapper({ children }) {
  useSmoothScroll();

  return <>{children}</>;
}
