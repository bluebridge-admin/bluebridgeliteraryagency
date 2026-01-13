import React from "react";

// align: left | center | right
const Header1 = ({ align = "left", children }) => {
  return (
    <h1
      className={`text-${align} text-[10px] font-black uppercase tracking-[0.5em] text-primary-main mb-6`}
    >
      {children}
    </h1>
  );
};

export default Header1;
