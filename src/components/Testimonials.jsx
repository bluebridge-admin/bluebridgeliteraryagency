import React, { useState, useEffect, useRef } from "react";

import Candicee_Childs from "../assets/pp/Candicee_Childs.jpg";
import Howard_Bush from "../assets/pp/Howard_Bush.png";
import Sarah_Johnson from "../assets/pp/Sarah_Johnson.jpg";
import Clint_Goodwin from "../assets/pp/Clint_Goodwin.png";
import Gene_Elwood from "../assets/pp/Gene_Elwood.png";
import Deniz_Kayadelen from "../assets/pp/Deniz_Kayadelen.jpeg";

const testimonials = [
  {
    quote:
      "I loved working with Blue Bridge because they had everything organized and easy to follow. They helped me making my dreams come true. Excellent designers and support!",
    name: "Candicee Childs",
    role: "Author: Lemons, Lemonade",
    image: Candicee_Childs,
  },
  {
    quote:
      "Communication was excellent. There were no surprises. I was updated every step of the way. Very responsive. Seamless experience throughout.",
    name: "Howard S. Bush MD",
    role: "Author: Doctor-Patient Skills",
    image: Howard_Bush,
  },
  {
    quote:
      "Blue Bridge supported me in editing, structuring, design and marketing. Can't believe that my book is number #1! So happy to made this choice.",
    name: "Deniz Kayadelen",
    role: "Author: Out Of Comfort Zone",
    image: Deniz_Kayadelen,
  },
  {
    quote:
      "The editorial team transformed my manuscript into a masterpiece. Their attention to detail and creative insight exceeded all my expectations.",
    name: "Sarah Johnson",
    role: "Author: Midnight Whispers",
    image: Sarah_Johnson,
  },
  {
    quote:
      "I want you to know my first experience with your company was outstanding. Your company produced positive results in a reasonable a mount of time to market.",
    name: "Clint Goodwin",
    role: "Author: Leather to Steel",
    image: Clint_Goodwin,
  },
  {
    quote: "I received fantastic and wonderful assistance. I greatly appreciate Blue Bridge",
    name: "Gene Elwood",
    role: "Author: Syncopated Love Dreams",
    image: Gene_Elwood,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const updateCarousel = () => {
    if (!trackRef.current || !trackRef.current.children.length) return;

    const cardWidth = trackRef.current.children[0].offsetWidth;
    const containerWidth = trackRef.current.parentElement.offsetWidth;
    const visibleCards = Math.round(containerWidth / cardWidth) || 1;
    const maxIndex = Math.max(0, trackRef.current.children.length - visibleCards);

    let newIndex = currentIndex;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxIndex) newIndex = maxIndex;

    trackRef.current.style.transform = `translateX(-${newIndex * cardWidth + 30}px)`;
  };

  const nextSlide = () => {
    const containerWidth = trackRef.current.parentElement.offsetWidth;
    const cardWidth = trackRef.current.children[0].offsetWidth;
    const visibleCards = Math.round(containerWidth / cardWidth);

    setCurrentIndex((prev) => {
      if (prev < testimonials.length - visibleCards) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return testimonials.length - 1;
      }
    });
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener("resize", updateCarousel);
    return () => window.removeEventListener("resize", updateCarousel);
  }, [currentIndex]);

  useEffect(() => {
    updateCarousel();
  }, []);

  return (
    <>
      {/* <section className="py-32 bg-slate-950 text-white overflow-hidden relative" id="testimonies"> */}
      <div className="bg-outline-text top-10 -left-20 opacity-10">VOICES</div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-5"></div>

      {/* <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-10 reveal active"> */}
      <div>
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-main mb-10">
          Testimonies
        </h2>
        <h3 className="text-6xl font-black tracking-tighter leading-none">
          Success&nbsp;<span className="text-gradient">Stories</span>.
        </h3>
      </div>

      <div className="flex gap-4">
        <CarouselButton direction="prev" onClick={prevSlide} />
        <CarouselButton direction="next" onClick={nextSlide} />
      </div>
      {/* </div> */}

      <div className="carousel-container px-6 lg:px-24">
        <div className="carousel-track" ref={trackRef} id="testimonial-track">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

const CarouselButton = ({ direction, onClick }) => {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all active:scale-95 group ${
        isPrev
          ? "border border-white/20 hover:bg-primary-main hover:border-primary-main"
          : "bg-primary-main hover:bg-white hover:text-slate-900 shadow-xl shadow-blue-500/20"
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

const TestimonialCard = ({ quote, name, role, image }) => (
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

export default Testimonials;
