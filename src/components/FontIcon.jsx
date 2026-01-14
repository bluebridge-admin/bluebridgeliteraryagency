const SIZE_MAP_ICON = {
  sm: "20px",
  md: "24px",
  lg: "32px",
  xl: "46px",
};

const FontIcon = ({ icon, size = "md", className = "", ...props }) => {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{ fontSize: SIZE_MAP_ICON?.[size] || SIZE_MAP_ICON.md }}
      {...props}
    >
      {icon}
    </span>
  );
};

export default FontIcon;
