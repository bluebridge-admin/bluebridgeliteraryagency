import React from "react";

const PageSection = ({ maxWidth = "max-w-7xl", id, children, ...props }) => {
  const { className } = props;

  return (
    <section className={`py-32 relative overflow-hidden ${className}`} id={id}>
      {/* <div className="absolute top-20 left-20 w-32 h-32 bg-primary-main/5 rounded-full blur-2xl"></div> */}

      <div className={`${!!maxWidth ? maxWidth : ""} mx-auto px-0 w-full px-6`}>{children}</div>
    </section>
  );
};

export default PageSection;
