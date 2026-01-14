import React, { useEffect, useState } from "react";

const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    // <StyledHero className="w-full h-full relative rounded-[4rem]  ">
    <div className={`home-card w-full h-full ${isLoaded ? "isRendered" : ""}`}>
      <div className="pentagon1 w-full h-full bg-red-400"></div>
      <div className="pentagon2 w-full h-full bg-blue-400"></div>
      <div className="pentagon3 w-full h-full bg-green-400"></div>
      <div className="pentagon4 w-full h-full bg-orange-400">4</div>
      <div className="pentagon5 w-full h-full bg-purple-400">5</div>
    </div>
    // </StyledHero>
  );
};

export default HomeHero;
