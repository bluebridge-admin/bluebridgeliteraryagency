import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    // <StyledHero className="w-full h-full relative rounded-[4rem]  ">
    <div
      className={`absolute animate-delay-8000 ol-red w-full h-full flex items-center justify-center opacity-0 transition-all duration-500 ease-in ${
        isLoaded ? "isRendered" : ""
      }`}
    >
      <div className="pentagon1 w-full h-full bg-red-400">ddddddddd1</div>
      <div className="pentagon2 w-full h-full bg-blue-400">2</div>
      <div className="pentagon3 w-full h-full bg-green-400">3</div>
      <div className="pentagon4 w-full h-full bg-orange-400">4</div>
      <div className="pentagon5 w-full h-full bg-purple-400">5sssss</div>
    </div>
    // </StyledHero>
  );
};

export default Hero;
