import React from "react";
import { styled } from "styled-components";

const StyledCard = styled.div``;

const Paper = ({ bgImage = null, children, ...props }) => {
  const { className } = props;

  return (
    <StyledCard
      className={`relative rounded-[3rem] shadow-md bg-background-paper overflow-hidden flex items-center justify-center ${className} `}
    >
      {!!bgImage && <img src={bgImage} className="absolute h-full w-full object-cover z-0" />}
      <div className="z-50 h-full w-full ">{children}</div>
    </StyledCard>
  );
};

export default Paper;
