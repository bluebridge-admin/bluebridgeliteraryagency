import React from "react";

const PageSection = ({
  maxWidth = "max-w-7xl",
  py = null,
  pt = "82px",
  pb = "82px",
  id,
  children,
  ...props
}) => {
  const { className } = props;
  const hasPySet = !!pt || !!py || !!pb;
  const _pt = py || pt;
  const _pb = py || pb;
  const _className =
    !!className && hasPySet ? className?.replace(/\b(py|pt|pb)-[^\s]+/g, "") : className || "";
  return (
    <section
      className={`relative overflow-hidden ${_className}`}
      id={id}
      style={{
        paddingTop: _pt,
        paddingBottom: _pb,
      }}
    >
      <div className={`${!!maxWidth ? maxWidth : ""}  mx-auto w-full px-6`}>{children}</div>
    </section>
  );
};

export default PageSection;
