import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";

const StyledSlider = styled.div`
  .cd-svg-clipped-slider {
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 4em auto;
  }

  .cd-svg-clipped-slider .gallery-wrapper,
  .cd-svg-clipped-slider .gallery,
  .cd-svg-clipped-slider .caption {
    position: relative;
  }

  .cd-svg-clipped-slider .gallery li {
    /* slider images */
    position: absolute;
    z-index: 1;
    top: 0;
    left: 25%;
    /* (100% - width)/2 */
    width: 50%;
    height: 100%;
    opacity: 0;
    transform: translateX(75%) scale(0.4);
    cursor: pointer;
    transition: opacity 0.3s, transform 0.3s ease-in-out;
  }

  .cd-svg-clipped-slider .gallery li.selected {
    /* slide in the center */
    position: relative;
    z-index: 3;
    height: 0;
    padding-bottom: 50%;
    /* width(50%) * image aspect ratio (800/800) */
    opacity: 1;
    transform: translateX(0) scale(1);
    cursor: auto;
  }

  .cd-svg-clipped-slider .gallery li.left,
  .cd-svg-clipped-slider .gallery li.left-hide {
    /* slides on the left */
    /* .left -> slide visible on the left; .left-hide -> slides hidden on the left */
    transform: translateX(-75%) scale(0.4);
  }

  .cd-svg-clipped-slider .gallery li.left,
  .cd-svg-clipped-slider .gallery li.right {
    /* .right -> slide visible on the right */
    z-index: 2;
    opacity: 1;
  }

  .cd-svg-clipped-slider .svg-wrapper {
    /* using padding Hack to fix bug on IE - svg height not properly calculated */
    height: 0;
    padding-bottom: 100%;
    /* image aspect ratio (800/800) * 100 */
  }

  .cd-svg-clipped-slider svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .cd-svg-clipped-slider use.cover-layer {
    /* dark layer visible on lateral slides */
    fill: #243238;
    transition: opacity 0.3s;
    opacity: 0.2;
  }

  .cd-svg-clipped-slider use.cover-layer:hover {
    opacity: 0;
  }

  .cd-svg-clipped-slider .gallery li.selected use.cover-layer {
    opacity: 0;
  }

  .cd-svg-clipped-slider .caption {
    margin: 1em 0;
    overflow: hidden;
  }

  .cd-svg-clipped-slider .caption li {
    /* slide titles */
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
    transform: translateX(100px);
    opacity: 0;
    padding: 1em 0;
    transition: opacity 0.3s, transform 0.3s ease-in-out;
  }

  .cd-svg-clipped-slider .caption li.selected {
    /* slide visible in the center */
    z-index: 2;
    position: relative;
    transform: translateX(0);
    opacity: 1;
  }

  .cd-svg-clipped-slider .caption li.left {
    /* slide hidden on the left */
    transform: translateX(-100px);
  }

  @media only screen and (min-width: 768px) {
    .cd-svg-clipped-slider .caption li {
      font-size: 2.4rem;
    }
  }

  @media only screen and (min-width: 1170px) {
    .cd-svg-clipped-slider {
      width: 90%;
    }
    .cd-svg-clipped-slider .gallery li {
      left: 30%;
      (100% - width)/2
      width: 40%;
      transform: translateX(80%) scale(0.4);
    }
    .cd-svg-clipped-slider .gallery li.selected {
      padding-bottom: 40%;
      /* width(40%) * image aspect ratio (800/800) */
    }
    .cd-svg-clipped-slider .gallery li.left,
    .cd-svg-clipped-slider .gallery li.left-hide {
      transform: translateX(-80%) scale(0.4);
    }
  }
`;

const Slider = ({ items = [], initialSelectedIndex = 0, onSlideChange }) => {
  const [selectedSlide, setSelectedSlide] = useState(initialSelectedIndex);
  const sliderRef = useRef(null);

  // Data paths from original HTML
  const selectedPath =
    "M780,0H20C8.954,0,0,8.954,0,20v760c0,11.046,8.954,20,20,20h760c11.046,0,20-8.954,20-20V20 C800,8.954,791.046,0,780,0z";
  const lateralPath =
    "M795.796,389.851L410.149,4.204c-5.605-5.605-14.692-5.605-20.297,0L4.204,389.851 c-5.605,5.605-5.605,14.692,0,20.297l385.648,385.648c5.605,5.605,14.692,5.605,20.297,0l385.648-385.648 C801.401,404.544,801.401,395.456,795.796,389.851z";

  // Default items if none provided
  const defaultItems = [
    { image: "img/img-01.jpg", caption: "Lorem ipsum dolor" },
    { image: "img/img-02.jpg", caption: "Consectetur adipisicing elit" },
    // Add more items as needed
  ];

  const slides = items.length > 0 ? items : defaultItems;

  const showPrevSlide = () => {
    const newIndex = selectedSlide === 0 ? slides.length - 1 : selectedSlide - 1;
    setSelectedSlide(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  };

  const showNextSlide = () => {
    const newIndex = selectedSlide === slides.length - 1 ? 0 : selectedSlide + 1;
    setSelectedSlide(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  };

  const handleSlideClick = (index) => {
    if (index !== selectedSlide) {
      setSelectedSlide(index);
      if (onSlideChange) onSlideChange(index);
    }
  };

  // Initialize component - similar to original constructor
  useEffect(() => {
    // Any initialization logic can go here
    console.log("Slider initialized with", slides.length, "slides");
  }, []);

  // Determine slide position classes
  const getSlidePosition = (index) => {
    if (index === selectedSlide) return "selected";
    if (index === selectedSlide - 1 || (selectedSlide === 0 && index === slides.length - 1)) {
      return "left";
    }
    if (index === selectedSlide + 1 || (selectedSlide === slides.length - 1 && index === 0)) {
      return "right";
    }
    return "";
  };

  return (
    <StyledSlider>
      <div
        className="cd-svg-clipped-slider"
        ref={sliderRef}
        data-selected={selectedPath}
        data-lateral={lateralPath}
      >
        <div className="gallery-wrapper ol-red">
          <ul className="gallery ol-green">
            {slides.map((item, index) => {
              const position = getSlidePosition(index);
              const isSelected = position === "selected";
              const clipPathId = `cd-image-${index + 1}`;
              const morphingPathId = `cd-morphing-path-${index + 1}`;

              return (
                <li key={index} className={position} onClick={() => handleSlideClick(index)}>
                  <div className="svg-wrapper">
                    <svg viewBox="0 0 800 800">
                      <title>Animated SVG</title>
                      <defs>
                        <clipPath id={clipPathId}>
                          <path id={morphingPathId} d={isSelected ? selectedPath : lateralPath} />
                        </clipPath>
                      </defs>

                      <image
                        height="800px"
                        width="800px"
                        clipPath={`url(#${clipPathId})`}
                        xlinkHref={item.image}
                      />
                      <use xlinkHref={`#${morphingPathId}`} className="cover-layer" />
                    </svg>
                  </div>
                </li>
              );
            })}
          </ul>

          <nav>
            <ul className="navigation">
              <li>
                <a
                  href="#0"
                  className="prev"
                  onClick={(e) => {
                    e.preventDefault();
                    showPrevSlide();
                  }}
                >
                  Prev
                </a>
              </li>
              <li>
                <a
                  href="#0"
                  className="next"
                  onClick={(e) => {
                    e.preventDefault();
                    showNextSlide();
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="caption">
          {slides.map((item, index) => (
            <li key={index} className={getSlidePosition(index)}>
              {item.caption}
            </li>
          ))}
        </ul>
      </div>
    </StyledSlider>
  );
};

// Usage example:
// const App = () => {
//   const sliderItems = [
//     { image: "img/img-01.jpg", caption: "First Slide" },
//     { image: "img/img-02.jpg", caption: "Second Slide" },
//     { image: "img/img-03.jpg", caption: "Third Slide" },
//   ];
//
//   const handleSlideChange = (index) => {
//     console.log(`Slide changed to ${index}`);
//   };
//
//   return (
//     <Slider
//       items={sliderItems}
//       initialSelectedIndex={0}
//       onSlideChange={handleSlideChange}
//     />
//   );
// };

export default Slider;
