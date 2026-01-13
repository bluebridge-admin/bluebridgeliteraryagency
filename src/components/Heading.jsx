import React from "react";

// align: left | center | right
const Heading = ({ align = "left", color = "var(--color-primary-main)", children }) => {
  return (
    <h1
      className={`text-${align} text-[11px] font-black uppercase tracking-[0.5em] text-primary-main my-10`}
      style={{
        color: color,
      }}
    >
      {children}
    </h1>
  );
};

export default Heading;
