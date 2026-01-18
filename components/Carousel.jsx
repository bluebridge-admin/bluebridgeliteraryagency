import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import Candicee_Childs from "../assets/pp/Candicee_Childs.jpg";
import Howard_Bush from "../assets/pp/Howard_Bush.png";
import Sarah_Johnson from "../assets/pp/Sarah_Johnson.jpg";
import Clint_Goodwin from "../assets/pp/Clint_Goodwin.png";
import Gene_Elwood from "../assets/pp/Gene_Elwood.png";
import Deniz_Kayadelen from "../assets/pp/Deniz_Kayadelen.jpeg";
import { styled } from "styled-components";
import StarRating from "./StarRating";

const testimonials = [
  {
    id: 1,
    text: "I loved working with Blue Bridge because they had everything organized and easy to follow. They helped me making my dreams come true. Excellent designers and support!",
    name: "Candicee Childs",
    role: "Author: Lemons, Lemonade",
    image: Candicee_Childs,
    rating: 0,
  },
  {
    id: 2,
    text: "Communication was excellent. There were no surprises. I was updated every step of the way. Very responsive. Seamless experience throughout.",
    name: "Howard S. Bush MD",
    role: "Author: Doctor-Patient Skills",
    image: Howard_Bush,
    rating: 3.5,
  },
  {
    id: 3,
    text: "Blue Bridge supported me in editing, structuring, design and marketing. Can't believe that my book is number #1! So happy to made this choice.",
    name: "Deniz Kayadelen",
    role: "Author: Out Of Comfort Zone",
    image: Deniz_Kayadelen,
    rating: 0,
  },
  {
    id: 4,
    text: "The editorial team transformed my manuscript into a masterpiece. Their attention to detail and creative insight exceeded all my expectations.",
    name: "Sarah Johnson",
    role: "Author: Midnight Whispers",
    image: Sarah_Johnson,
    rating: 2.5,
  },
  {
    id: 5,
    text: "I want you to know my first experience with your company was outstanding. Your company produced positive results in a reasonable a mount of time to market.",
    name: "Clint Goodwin",
    role: "Author: Leather to Steel",
    image: Clint_Goodwin,
    rating: 5,
  },
  {
    id: 6,
    text: "I received fantastic and wonderful assistance. I greatly appreciate Blue Bridge",
    name: "Gene Elwood",
    role: "Author: Syncopated Love Dreams",
    image: Gene_Elwood,
    rating: 5,
  },
];

const StyledCarousel = styled.div`
  & .carouselCardItem {
    transition: all 500ms ease-in;
    &.start {
      margin-left: -100%;
    }
  }
`;

const CarouselButton = ({ direction, onClick }) => {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 text-white rounded-full flex items-center justify-center transition-all active:scale-95 group ${
        isPrev
          ? "border border-white/20 hover:bg-primary-main hover:border-white"
          : "border border-white/20 hover:text-white hover:bg-primary-main shadow-xl hover:border-white"
      }`}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} testimonial`}
    >
      <span
        className={`material-symbols-outlined transition-transform ${
          isPrev ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
        }`}
      >
        {isPrev ? "west" : "east"}
      </span>
    </button>
  );
};

const Carousel = () => {
  const [stories, setStories] = useState(testimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  const handleNext = () => {
    setStories((items) => {
      // Handle edge cases (empty or single item array)
      if (items.length <= 1) return [...items];
      return [...items.slice(1), items[0]];
    });
  };

  const handlePrev = () => {
    setStories((items) => {
      if (items.length <= 1) return [...items];
      return [items[items.length - 1], ...items.slice(0, -1)];
    });
  };

  return (
    <StyledCarousel className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="bg-outline-text top-10 -left-20 opacity-10">VOICES</div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-5"></div>

        <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-10 reveal active">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-main mb-10">
              Testimonies
            </h2>

            <h3 className="text-6xl text-white font-black tracking-tighter leading-none">
              Success <span className="text-gradient">Stories</span>.
            </h3>
          </div>

          <div className="flex gap-4">
            <CarouselButton direction="prev" onClick={handlePrev} />
            <CarouselButton direction="next" onClick={handleNext} />
          </div>
        </div>

        <div className="relative">
          <div id="carousel" className="overflow-hidden relative py-8">
            <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out">
              {stories.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`carouselCardItem min-w-full md:min-w-[50%] lg:min-w-[450px] px-6 ${
                    index === 0 ? "start" : ""
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[3.5rem] border border-white/10 h-full flex flex-col justify-start hover:bg-white/10 transition-colors duration-500 group">
                    {/* <span className="text-6xl text-slate-600 font-serif opacity-70">"</span> */}
                    <div className="flex text-xs space-x-1 mb-9">
                      {/* {renderStars(testimonial.rating)} */}
                      <StarRating rating={testimonial.rating} size="16px" />
                    </div>
                    <p className="text-xl text-slate-400  italic mb-12 leading-relaxed -mt-8">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden">
                        <img
                          src={testimonial.image}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          alt={testimonial.name}
                        />
                      </div>
                      <div>
                        <h6 className="text-xl font-black text-white leading-none mb-1">
                          {testimonial.name}
                        </h6>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {}}
                className={`indicator-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "active-dot scale-140 bg-primary-main" : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
