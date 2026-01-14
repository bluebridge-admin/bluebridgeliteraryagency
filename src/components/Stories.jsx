import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import Candicee_Childs from "../assets/pp/Candicee_Childs.jpg";
import Howard_Bush from "../assets/pp/Howard_Bush.png";
import Sarah_Johnson from "../assets/pp/Sarah_Johnson.jpg";
import Clint_Goodwin from "../assets/pp/Clint_Goodwin.png";
import Gene_Elwood from "../assets/pp/Gene_Elwood.png";
import Deniz_Kayadelen from "../assets/pp/Deniz_Kayadelen.jpeg";

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const autoSlideInterval = useRef(null);

  const testimonialss = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "The service was exceptional from start to finish. The team went above and beyond to deliver exactly what we needed.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateSoft",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 4.5,
      text: "We've seen a 40% increase in productivity since implementing their solution. The onboarding process was seamless.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CEO, DesignHub",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 4,
      text: "Their attention to detail and customer support is unmatched. We've partnered with them for all our digital needs.",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Operations Manager, GlobalLogix",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      text: "The ROI was evident within the first quarter. Their platform has become indispensable to our operations.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "I loved working with Blue Bridge because they had everything organized and easy to follow. They helped me making my dreams come true. Excellent designers and support!",
      name: "Candicee Childs",
      role: "Author: Lemons, Lemonade",
      image: Candicee_Childs,
      rating: 5,
    },
    {
      id: 2,
      text: "Communication was excellent. There were no surprises. I was updated every step of the way. Very responsive. Seamless experience throughout.",
      name: "Howard S. Bush MD",
      role: "Author: Doctor-Patient Skills",
      image: Howard_Bush,
      rating: 5,
    },
    {
      id: 3,
      text: "Blue Bridge supported me in editing, structuring, design and marketing. Can't believe that my book is number #1! So happy to made this choice.",
      name: "Deniz Kayadelen",
      role: "Author: Out Of Comfort Zone",
      image: Deniz_Kayadelen,
      rating: 5,
    },
    {
      id: 4,
      text: "The editorial team transformed my manuscript into a masterpiece. Their attention to detail and creative insight exceeded all my expectations.",
      name: "Sarah Johnson",
      role: "Author: Midnight Whispers",
      image: Sarah_Johnson,
      rating: 5,
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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon key="half-star" icon={faStarHalfAlt} className="text-yellow-400" />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={farStar} className="text-yellow-400" />);
    }

    return stars;
  };

  const updateVisibleCards = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setVisibleCards(3);
    } else if (window.innerWidth >= 768) {
      setVisibleCards(2);
    } else {
      setVisibleCards(1);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleCards + 1));
  }, [testimonials.length, visibleCards]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (testimonials.length - visibleCards + 1)) %
        (testimonials.length - visibleCards + 1)
    );
  }, [testimonials.length, visibleCards]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const startAutoSlide = useCallback(() => {
    clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  const resetAutoSlide = useCallback(() => {
    startAutoSlide();
  }, [startAutoSlide]);

  useEffect(() => {
    updateVisibleCards();

    const handleResize = () => {
      updateVisibleCards();
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    startAutoSlide();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(autoSlideInterval.current);
    };
  }, [updateVisibleCards, startAutoSlide]);

  useEffect(() => {
    if (trackRef.current && cardsRef.current[0]) {
      const cardWidth = cardsRef.current[0].offsetWidth;
      const offset = -currentIndex * cardWidth;
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex]);

  const handleMouseEnter = () => {
    clearInterval(autoSlideInterval.current);
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our customers say about their experience with our products and services.
          </p>
        </div> */}

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
            <CarouselButton direction="prev" onClick={prevSlide} />
            <CarouselButton direction="next" onClick={nextSlide} />
          </div>
        </div>

        <div className="relative">
          <div
            id="carousel"
            className="overflow-hidden relative py-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="min-w-full md:min-w-[50%] lg:min-w-[450px] px-6"
                >
                  <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[3.5rem] border border-white/10 h-full flex flex-col justify-between hover:bg-white/10 transition-colors duration-500 group">
                    <span className="text-6xl text-slate-600 font-serif opacity-70">"</span>

                    <p className="text-1xl text-slate-400  italic mb-12 leading-relaxed -mt-8">
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
                        <div className="flex space-x-1 mt-2">{renderStars(testimonial.rating)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-12 space-x-4">
            {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  resetAutoSlide();
                }}
                className={`indicator-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "active-dot scale-140 bg-primary-main" : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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

const StoryCard = ({ id, text, name, role, image, rating }) => (
  <div className="min-w-full md:min-w-[50%] lg:min-w-[450px] px-6">
    <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[3.5rem] border border-white/10 h-full flex flex-col justify-between hover:bg-white/10 transition-colors duration-500 group">
      <span className="text-6xl text-primary-main font-serif opacity-30">"</span>

      <p className="text-2xl text-slate-300 font-serif italic mb-12 leading-relaxed -mt-8">
        {quote}
      </p>

      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            alt={name}
          />
        </div>

        <div>
          <h6 className="text-xl font-black text-white leading-none mb-1">{name}</h6>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary-main">
            {role}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Stories;
