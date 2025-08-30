import React from "react";

export default function PatternBG({
  className = "",
  children
}: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: "url(/patterns/pattern-paper.png), url(/patterns/pattern-halftone.png)",
        backgroundSize: "cover, 256px 256px",
        backgroundBlendMode: "multiply"
      }}
    >
      {children}
    </div>
  );
}
