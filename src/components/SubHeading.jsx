import React from "react";

// align: left | center | right
// size: sm | md | lg

// text-4xl md:text-6xl font-black text-slate-900 leading-tight max-w-4xl
const SIZE_MAP = {
  sm: "text-3xl md:text-4xl lg:text-5xl",
  md: "text-4xl md:text-5xl lg:text-6xl",
  lg: "text-5xl md:text-6xl lg:text-8xl",
  xl: "text-6xl md:text-97xl lg:text-[90px] leading-[0.9] tracking-tighter",
};
const SubHeading = ({
  align = "left",
  size = "md",
  color = null,
  py = null,
  pt = 0,
  pb = "10px",
  children,
  ...props
}) => {
  const hasPySet = !!pt || !!py || !!pb;
  const _pt = py || pt;
  const _pb = py || pb;

  const { className } = props;
  return (
    <h2
      className={`text-${align} ${
        SIZE_MAP?.[size] || SIZE_MAP.md
      } font-black leading-[1.1]  ${className}`}
      style={{
        color: color || "var(--color-foreground-heading)",
        ...(hasPySet && {
          paddingTop: _pt || 0,
          paddingBottom: _pb || 0,
        }),
      }}
    >
      {children}
    </h2>
  );
};

export default SubHeading;
