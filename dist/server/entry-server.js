import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { NavLink, Routes, Route, useLocation, StaticRouter } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { styled } from "styled-components";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { Target, TrendingUp, Zap, BarChart, ArrowRight, Award, BookOpen, Globe, Star, Check } from "lucide-react";
const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    // <StyledHero className="w-full h-full relative rounded-[4rem]  ">
    /* @__PURE__ */ jsxs("div", { className: `home-card w-full h-full ${isLoaded ? "isRendered" : ""}`, children: [
      /* @__PURE__ */ jsx("div", { className: "pentagon1 w-full h-full bg-red-400" }),
      /* @__PURE__ */ jsx("div", { className: "pentagon2 w-full h-full bg-blue-400" }),
      /* @__PURE__ */ jsx("div", { className: "pentagon3 w-full h-full bg-green-400" }),
      /* @__PURE__ */ jsx("div", { className: "pentagon4 w-full h-full bg-orange-400", children: "4" }),
      /* @__PURE__ */ jsx("div", { className: "pentagon5 w-full h-full bg-purple-400", children: "5" })
    ] })
  );
};
const Animate = ({
  children,
  animation = "slideUp",
  // fadeIn, slideUp, slideLeft, zoomIn, bounce
  delay = 0,
  // delay in ms
  duration = 600,
  // animation duration in ms
  threshold = 0.4,
  // intersection observer threshold (0-1)
  once = true,
  // animate only once
  triggerOnce = false,
  // alias for once
  rootMargin = "10px",
  // intersection observer root margin
  style = {},
  isIn = true,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const animateOnce = once || triggerOnce;
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (animateOnce) {
            observer.unobserve(element);
          }
        } else if (!animateOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, animateOnce]);
  const getAnimationStyles = () => {
    const baseTransition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;
    const animations = {
      fadeIn: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: baseTransition
      },
      slideUp: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transition: baseTransition
      },
      slideLeft: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(60px)",
        transition: baseTransition
      },
      slideRight: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-60px)",
        transition: baseTransition
      },
      zoomIn: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        transition: baseTransition
      },
      bounce: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: `${baseTransition}, transform ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}ms`
      },
      flip: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "rotateY(0deg)" : "rotateY(90deg)",
        transformStyle: "preserve-3d",
        transition: baseTransition
      },
      none: {
        opacity: 1,
        transform: "none"
      }
    };
    return animations[animation] || animations.fadeIn;
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      style: {
        ...getAnimationStyles(),
        ...style
      },
      ...props,
      children
    }
  );
};
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
  const _className = !!className && hasPySet ? className?.replace(/\b(py|pt|pb)-[^\s]+/g, "") : className || "";
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: `relative overflow-hidden ${_className}`,
      id,
      style: {
        paddingTop: _pt,
        paddingBottom: _pb
      },
      children: /* @__PURE__ */ jsx("div", { className: `${!!maxWidth ? maxWidth : ""}  mx-auto w-full px-6`, children })
    }
  );
};
const partners = [
  { name: "Adlibris", src: "https://www.gratuityglobal.com/build/assets/adlibris-DKJqDnkr.png" },
  { name: "Agapea", src: "https://www.gratuityglobal.com/build/assets/agapea-BuQvhToa.png" },
  { name: "Amazon", src: "https://www.gratuityglobal.com/build/assets/Amazon-BRBJ-rFR.png" },
  {
    name: "Barnes and Noble",
    src: "https://www.gratuityglobal.com/build/assets/BarnesAndNoble-CCXuyrYJ.png"
  },
  { name: "Bertrams", src: "https://www.gratuityglobal.com/build/assets/bertrams-CU85AUiX.png" },
  { name: "Blackwell", src: "https://www.gratuityglobal.com/build/assets/blackwell-BMxsq-5R.png" },
  { name: "Booktopia", src: "https://www.gratuityglobal.com/build/assets/Booktopia-BfuQ3kUo.png" },
  { name: "Chapters", src: "https://www.gratuityglobal.com/build/assets/chapters-CiU2iLHx.png" },
  { name: "Ingram", src: "https://www.gratuityglobal.com/build/assets/Ingram-BuieUfvV.png" },
  { name: "Kobo", src: "https://www.gratuityglobal.com/build/assets/Kobo-D8yVJ7He.png" },
  {
    name: "Waterstones",
    src: "https://www.gratuityglobal.com/build/assets/waterstone-FliYxqyh.png"
  }
];
const Partners = () => {
  return /* @__PURE__ */ jsxs(Animate, { animation: "slideUp", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.5em] text-primary-main text-center", children: "Our Trusted Partners" }),
    /* @__PURE__ */ jsx("div", { className: "relative flex items-center marquee-mask mt-15", children: /* @__PURE__ */ jsx("div", { className: "animate-marquee items-center gap-20 py-1", children: [...partners, ...partners].map((partner, index) => /* @__PURE__ */ jsx(
      "img",
      {
        src: partner.src,
        className: "bookstore-icons h-10 md:h-12 w-auto",
        alt: partner.name
      },
      `${partner.name}-${index}`
    )) }) })
  ] });
};
const SIZE_MAP = {
  sm: "text-3xl md:text-4xl lg:text-5xl",
  md: "text-4xl md:text-5xl lg:text-6xl",
  lg: "text-5xl md:text-6xl lg:text-8xl",
  xl: "text-6xl md:text-97xl lg:text-[90px] leading-[0.9] tracking-tighter"
};
const SubHeading = ({
  align = "left",
  size = "md",
  color = null,
  py = null,
  pt = 0,
  pb = "10px",
  children,
  ...props
}) => {
  const hasPySet = !!pt || !!py || !!pb;
  const _pt = py || pt;
  const _pb = py || pb;
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "h2",
    {
      className: `text-${align} ${SIZE_MAP?.[size] || SIZE_MAP.md} font-black leading-[1.1]  ${className}`,
      style: {
        color: color || "var(--color-foreground-heading)",
        ...hasPySet && {
          paddingTop: _pt || 0,
          paddingBottom: _pb || 0
        }
      },
      children
    }
  );
};
const Candicee_Childs = "/assets/Candicee_Childs-IZqlDQ28.jpg";
const Howard_Bush = "/assets/Howard_Bush-BQN9z2J4.png";
const Sarah_Johnson = "/assets/Sarah_Johnson-aZnGeLwp.jpg";
const Clint_Goodwin = "/assets/Clint_Goodwin-Df-WHa8V.png";
const Gene_Elwood = "/assets/Gene_Elwood-FO4u5RlO.png";
const Deniz_Kayadelen = "/assets/Deniz_Kayadelen-C8UU7a0u.jpeg";
const StarRating = ({ rating = 0, size = "14px" }) => {
  const rateAverage = (rating > 4 ? 1 : rating / 5) * 100;
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `inline max-w-fit text-transparent  bg-clip-text`,
      style: {
        letterSpacing: ".5rem",
        fontSize: size,
        // backgroundImage: `linear-gradient(90deg,rgba(255, 247, 0, 1) ${rateAverage}%, rgba(132, 132, 131, 0.2) 0%)`,
        backgroundImage: `linear-gradient(90deg, var(--color-primary-main) ${rateAverage}%, rgba(132, 132, 131, 0.2) 0%)`
      },
      children: "★★★★★"
    }
  );
};
const SIZE_MAP_ICON = {
  sm: "20px",
  md: "24px",
  lg: "32px",
  xl: "46px"
};
const FontIcon = ({ icon, size = "md", className = "", ...props }) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `material-symbols-outlined select-none ${className}`,
      style: { fontSize: SIZE_MAP_ICON?.[size] || SIZE_MAP_ICON.md },
      ...props,
      children: icon
    }
  );
};
styled.div`
  width: 100%;

  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .mySwiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: left;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-slate-400);
  }
`;
const testimonials = [
  {
    quote: "I loved working with Blue Bridge because they had everything organized and easy to follow. They helped me making my dreams come true. Excellent designers and support!",
    name: "Candicee Childs",
    role: "Lemons, Lemonade",
    image: Candicee_Childs,
    rating: 5
  },
  {
    quote: "Communication was excellent. There were no surprises. I was updated every step of the way. Very responsive. Seamless experience throughout.",
    name: "Howard S. Bush MD",
    role: "Doctor-Patient Skills",
    image: Howard_Bush,
    rating: 4
  },
  {
    quote: "Blue Bridge supported me in editing, structuring, design and marketing. Can't believe that my book is number #1! So happy to made this choice.",
    name: "Deniz Kayadelen",
    role: "Out Of Comfort Zone",
    image: Deniz_Kayadelen,
    rating: 5
  },
  {
    quote: "The editorial team transformed my manuscript into a masterpiece. Their attention to detail and creative insight exceeded all my expectations.",
    name: "Sarah Johnson",
    role: "Midnight Whispers",
    image: Sarah_Johnson,
    rating: 3.5
  },
  {
    quote: "I want you to know my first experience with your company was outstanding. Your company produced positive results in a reasonable a mount of time to market.",
    name: "Clint Goodwin",
    role: "Leather to Steel",
    image: Clint_Goodwin,
    rating: 5
  },
  {
    quote: "I received fantastic and wonderful assistance. I greatly appreciate Blue Bridge",
    name: "Gene Elwood",
    role: "Syncopated Love Dreams",
    image: Gene_Elwood,
    rating: 5
  }
];
const Testimonies = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-[50%] -left-[50%] w-[200%] h-[200%] ol-red", children: /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900  ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.5em] text-primary-main text-center mb-10", children: "Testimonials" }),
      /* @__PURE__ */ jsxs(SubHeading, { className: "grow mb-10", color: "white", children: [
        "Success ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Stories" })
      ] }),
      /* @__PURE__ */ jsxs(
        Swiper,
        {
          breakpoints: {
            // When window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 15
            }
          },
          navigation: {
            enabled: true,
            prevEl: "#prev-testimony",
            nextEl: "#next-testimony"
          },
          mousewheel: true,
          keyboard: true,
          cssMode: true,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            clickable: true
          },
          modules: [Autoplay, Navigation, Pagination, Mousewheel, Keyboard],
          className: "h-[450px] bg-transp",
          children: [
            testimonials.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "relative isolate overflow-hidden bg-background-paper shadow-lg px-6 py-5 lg:py-10 lg:px-8 rounded-4xl", children: [
              /* @__PURE__ */ jsx(StarRating, { rating: item?.rating, size: "18px" }),
              /* @__PURE__ */ jsxs("figure", { className: "flex flex-col justify-start itens-start mt-10", children: [
                /* @__PURE__ */ jsxs("blockquote", { className: "text-left text-xl text-foreground-body lg:text-2xl", children: [
                  /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      viewBox: "0 0 162 128",
                      fill: "none",
                      "aria-hidden": "true",
                      stroke: "oklab(100% 0 5.96046e-8 / .2)",
                      height: "8rem",
                      style: {
                        position: "absolute",
                        top: "3rem"
                      },
                      children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            id: "b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb",
                            d: "M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                          }
                        ),
                        /* @__PURE__ */ jsx("use", { x: "86", href: "#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "text-xl", children: item?.quote })
                ] }),
                /* @__PURE__ */ jsxs("figcaption", { className: "flex flex-row justify-start items-center mt-20 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      alt: item?.name,
                      src: item?.image,
                      className: "mx-auto size-15 rounded-full aspect-square"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-center grow-1", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-semibold text-xl text-foreground-heading", children: item?.name }),
                    /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-lg", children: [
                      /* @__PURE__ */ jsx("span", { children: "Author: " }),
                      item?.role
                    ] })
                  ] })
                ] })
              ] })
            ] }) }, item.name)),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "absolute left-1 top-[30%] shadow-lg z-100 opacity-50 border-2 border-primary-main/80 rounded-full flex items-center justify-center transition-all active:scale-95 group hover:opacity-100 hover:bg-primary-main hover:border-primary-main",
                id: "prev-testimony",
                children: /* @__PURE__ */ jsx(
                  FontIcon,
                  {
                    icon: "arrow_left_alt",
                    size: "xl",
                    className: "text-primary-main/80 group-hover:text-white"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "absolute right-1 top-[30%] shadow-lg z-100 opacity-50 border-2 border-primary-main/80 rounded-full flex items-center justify-center transition-all active:scale-95 group hover:opacity-100 hover:bg-primary-main hover:border-primary-main",
                id: "next-testimony",
                children: /* @__PURE__ */ jsx(
                  FontIcon,
                  {
                    icon: "arrow_right_alt",
                    size: "xl",
                    className: "text-primary-main/80 group-hover:text-white"
                  }
                )
              }
            )
          ]
        }
      )
    ] })
  ] });
};
const CTAButton = ({ href, children }) => /* @__PURE__ */ jsxs(
  NavLink,
  {
    to: href,
    className: "w-165px group bg-primary-main text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3",
    children: [
      children,
      /* @__PURE__ */ jsx(FontIcon, { icon: "arrow_forward" })
    ]
  }
);
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Blue Bridge Literary Agency | Publishing and Marketing Agency" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Turning Ideas Into Ink, Your Story, Our Canvas" })
    ] }),
    /* @__PURE__ */ jsxs(PageSection, { id: "home", className: "flex items-center justify-center min-h-[85vh] ", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-outline-text top-1/4 -left-10", children: "CREATIVITY" }),
      /* @__PURE__ */ jsxs("div", { className: "w-full h-100 grid lg:grid-cols-12 gap-12 items-between justify-between mb-50", children: [
        /* @__PURE__ */ jsxs("div", { className: `lg:col-span-7 z-10 `, children: [
          /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-blue-100 shadow-sm mt-10 mb-8 ", children: [
            /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary-main" })
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "text-[10px] font-black tracking-[0.2em] text-primary-main uppercase", children: "Turning Ideas Into Ink!" })
          ] }) }),
          /* @__PURE__ */ jsx(Animate, { animation: "slideUp", delay: 200, children: /* @__PURE__ */ jsxs(SubHeading, { size: "xl", children: [
            "Your Story, ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Our Canvas" })
          ] }) }),
          /* @__PURE__ */ jsx(Animate, { animation: "slideUp", delay: 400, children: /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12 font-serif italic", children: '"Publishing Success, Marketing Brilliance! We transform creative visions into global literary legacies."' }) }),
          /* @__PURE__ */ jsx(Animate, { animation: "slideUp", delay: 600, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-5 ", children: /* @__PURE__ */ jsx(CTAButton, { href: "/contact-us", children: "Start Now" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:col-span-5 lg:block animate-float", children: /* @__PURE__ */ jsx(HomeHero, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PageSection, { className: " bg-slate-900 relative diagonal", children: /* @__PURE__ */ jsx(Animate, { children: /* @__PURE__ */ jsx(Testimonies, {}) }) }),
    /* @__PURE__ */ jsx(PageSection, { maxWidth: false, className: "py-30", children: /* @__PURE__ */ jsx(Partners, {}) })
  ] });
};
const Heading = ({ align = "left", color = "var(--color-primary-main)", children }) => {
  return /* @__PURE__ */ jsx(
    "h1",
    {
      className: `text-${align} text-[11px] font-black uppercase tracking-[0.5em] text-primary-main my-10`,
      style: {
        color
      },
      children
    }
  );
};
const About = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "About Us | Digital Marketing Agency | Blue Bride Literary Agency" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Your partners in growth. Learn how Blue Bride Literary Agency helps businesses thrive through custom SEO, web design, and marketing strategies. Meet your new team today."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PageSection, { className: "min-h-screen relative", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-outline-text top-1/8 -left-10", children: "TEAM" }),
      /* @__PURE__ */ jsx(Animate, { animation: "slideLeft", children: /* @__PURE__ */ jsx(Heading, { children: "Who We Are" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "z-10 order-2 lg:order-1", children: [
          /* @__PURE__ */ jsx(Animate, { animation: "slideLeft", delay: 200, children: /* @__PURE__ */ jsxs(SubHeading, { children: [
            "Three Decades of Unwavering ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Expertise" })
          ] }) }),
          /* @__PURE__ */ jsx(Animate, { animation: "slideLeft", delay: 400, children: /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-foreground-body leading-relaxed font-medium mb-12", children: "Blue Bridge Literary Agency stands as a beacon of excellence in the provision of comprehensive publishing solutions. Our mission is to empower authors from aspiring writers to seasoned wordsmiths." }) }),
          /* @__PURE__ */ jsx(Animate, { animation: "slideLeft", delay: 600, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-6 mb-12 border-y border-slate-200/60 py-8", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-3xl md:text-4xl font-black text-primary-main", children: "30+" }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1", children: "Years Active" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-3xl md:text-4xl font-black text-primary-main", children: "500+" }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1", children: "Books Published" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-3xl md:text-4xl font-black text-primary-main", children: "150+" }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1", children: "Bestsellers" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Animate, { animation: "slideLeft", delay: 800, children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6 group cursor-default", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-main shadow-sm group-hover:bg-primary-main group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl", children: "verified" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h5", { className: "text-xl font-black text-slate-900 mb-2", children: "Integrity & Accuracy" }),
                /* @__PURE__ */ jsx("p", { className: "text-foreground-body font-medium text-md", children: "Dedicated to the art and precision of literary management." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6 group cursor-default", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-main shadow-sm group-hover:bg-primary-main group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl", children: "psychology" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h5", { className: "text-xl font-black text-slate-900 mb-2", children: "Sustainable Prosperity" }),
                /* @__PURE__ */ jsx("p", { className: "text-foreground-body font-medium text-md", children: "Facilitating informed decisions for long-term success." })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative order-1 lg:order-2", children: /* @__PURE__ */ jsxs(Animate, { animation: "zoomIn", delay: 1e3, children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 rounded-[3rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                alt: "The Bridge",
                className: "w-full h-auto object-cover",
                src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-64 h-64 bg-primary-main/10 rounded-full blur-3xl -z-0" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -left-10 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl -z-0" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Animate, { animation: "zoomIn", children: /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur-md p-8 md:p-15 rounded-[3rem] shadow-xl text-center border border-slate-400/25 relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-primary-main/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all group-hover:bg-primary-main/10 duration-700" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" }),
        /* @__PURE__ */ jsx("h4", { className: "text-[11px] font-black uppercase tracking-[0.5em] text-primary-main mb-12 relative z-10", children: "Our Core Mission" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl lg:text-4xl font-black text-slate-900 leading-tight max-w-5xl mx-auto italic relative z-10", children: [
          "We believe in the transformative power of stories and aim to amplify ",
          /* @__PURE__ */ jsx("span", { className: "text-primary-main relative inline-block", children: "diverse voices" }),
          "  that resonate with readers across genres."
        ] })
      ] }) })
    ] })
  ] });
};
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Publishing Services",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_4c3gn0n",
      // Get from EmailJS dashboard
      "template_661yyoo",
      // Get from EmailJS dashboard
      form.current,
      "F1spcLvhTOFpzYWh9"
      // Get from EmailJS dashboard
    ).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.log("Error sending email:", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact Us | SEO & Marketing Services | Blue Bridge Literary Agency" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Have a question about your marketing strategy? We're here to help. Reach out to the [Agency Name] team via phone, email, or chat. Let's discuss your goals."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PageSection, { children: [
      /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsx(Heading, { children: "Get In Touch" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start", children: [
        /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(SubHeading, { children: [
            "Ready to publish your ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Legacy?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "lg:text-xl text-slate-500 font-medium mt-5 mb-12 leading-relaxed max-w-lg", children: "We provide the best business solutions for your company. Let's work together to achieve success." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:1-800-538-5788",
                className: "flex items-center gap-8 group w-fit p-2 -ml-2 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all shadow-sm group-hover:rotate-12", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl", children: "call" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1", children: "Office Line" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg lg:text-xl  font-black text-slate-900", children: "1-800-538-5788" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:contact@bluebridgeliterary.com",
                className: "flex items-center gap-8 group w-fit p-2 -ml-2 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all shadow-sm group-hover:-rotate-12", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl", children: "mail" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1", children: "Direct Email" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg lg:text-xl font-black text-slate-900", children: "admin@bluebridgeliteraryagency.com" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8 group w-fit p-2 -ml-2 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all shadow-sm group-hover:rotate-6", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl", children: "location_on" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1", children: "Visit Us" }),
                /* @__PURE__ */ jsx("p", { className: "text-lg lg:text-xl font-black text-slate-900", children: "East Brunswick, NJ" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Animate, { animation: "zoomIn", delay: 400, children: /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative border border-white", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 bg-primary-main/10 rounded-full blur-3xl animate-pulse pointer-events-none" }),
          /* @__PURE__ */ jsxs("form", { className: "space-y-6", ref: form, onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1", children: "Full Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    className: "w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:bg-white focus:border-primary-main focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-800 placeholder:text-slate-300",
                    placeholder: "John Doe",
                    required: "",
                    type: "text",
                    name: "name",
                    onChange: handleChange
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1", children: "Email Address" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    className: "w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:bg-white focus:border-primary-main focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-800 placeholder:text-slate-300",
                    placeholder: "john@example.com",
                    required: "",
                    type: "email",
                    name: "email",
                    onChange: handleChange
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1", children: "Service Required" }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    className: "w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:bg-white focus:border-primary-main focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-800 appearance-none cursor-pointer",
                    name: "service",
                    onChange: handleChange,
                    children: [
                      /* @__PURE__ */ jsx("option", { children: "Publishing Services" }),
                      /* @__PURE__ */ jsx("option", { children: "Marketing Brilliance" }),
                      /* @__PURE__ */ jsx("option", { children: "Full Creative Consultation" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none", children: "expand_more" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1", children: "Your Story / Message" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  className: "w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:bg-white focus:border-primary-main focus:ring-4 focus:ring-blue-500/10 transition-all font-bold h-40 resize-none text-slate-800 placeholder:text-slate-300",
                  name: "message",
                  placeholder: "Tell us about your project...",
                  onChange: handleChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                className: "w-full bg-primary-main text-white py-5 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-slate-900 hover:shadow-slate-900/30 transition-all active:scale-95 duration-300 mt-4 group",
                children: [
                  "Send Inquiry",
                  /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined align-middle ml-1 text-sm group-hover:translate-x-1 transition-transform", children: "send" })
                ]
              }
            )
          ] })
        ] }) }) })
      ] })
    ] })
  ] });
};
function NotFound() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "w-full h-[80vh] flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full h-100  text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-4xl text-gradient font-bold", children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8", children: "Sorry, we couldn't find the page you're looking for." }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "/",
        className: "rounded-md bg-primary-main px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
        children: "Go back home"
      }
    ) })
  ] }) }) });
}
const MarketingImage = "/assets/digital-marketing-dL0xfVE7.avif";
const Hero$1 = () => {
  return /* @__PURE__ */ jsxs(PageSection, { className: "relative min-h-[80vh] flex items-center justify-center ol-red", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: MarketingImage,
          alt: "Library Background",
          className: "w-full h-full object-cover opacity-100"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[var(--color-background-default)]/80 via-[var(--color-background-default)]/50 to-[var(--color-background-default)]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[var(--color-primary-light)]/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" }),
    /* @__PURE__ */ jsx(Animate, { children: /* @__PURE__ */ jsx(Heading, { align: "center", children: "Marketing Services" }) }),
    /* @__PURE__ */ jsx(Animate, { delay: 200, children: /* @__PURE__ */ jsxs(SubHeading, { align: "center", size: "lg", children: [
      "Elevate Your",
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Author Brand" })
    ] }) }),
    /* @__PURE__ */ jsx(Animate, { delay: 400, children: /* @__PURE__ */ jsx("p", { className: "text-xl md:text-3xl text-slate-700 py-12 leading-relaxed font-medium max-w-5xl mx-auto text-center", children: "Build credibility, amplify your voice, and connect with readers worldwide. Professional services designed exclusively for authors who are ready to grow." }) }),
    /* @__PURE__ */ jsx(Animate, { delay: 600, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx(
      NavLink,
      {
        to: "/contact-us",
        className: "bg-primary-main hover:translate-y-[-4px] text-[var(--color-primary-contrastText)] px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-xl shadow-[var(--color-primary-main)]/30 hover:shadow-[var(--color-primary-main)]/50",
        children: "Get Started Today"
      }
    ) }) })
  ] });
};
function WebsiteCreation() {
  const features = [
    {
      icon: "home",
      title: "Home Page",
      description: "Welcome readers with a stunning first impression"
    },
    {
      icon: "person",
      title: "About the Author",
      description: "Share your story and connect authentically"
    },
    {
      icon: "image",
      title: "Gallery",
      description: "Showcase your books, covers, and visual brand"
    },
    {
      icon: "shopping_cart",
      title: "Order Page",
      description: "Direct readers to purchase your books"
    },
    {
      icon: "contact_mail",
      title: "Contact Page",
      description: "Make it easy for readers and media to reach you"
    },
    {
      icon: "dashboard",
      title: "Custom Section",
      description: "Blog, events, trailers, FAQs - your choice"
    }
  ];
  const securityPoints = [
    "Full website ownership - no third-party control",
    "Secure data protection for you and your readers",
    "Build trust with professional, encrypted connections",
    "Long-term stability and brand consistency"
  ];
  return /* @__PURE__ */ jsxs(PageSection, { className: "bg-slate-900 diagonal", pb: "200px", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-primary-dark/10 rounded-full mb-6 animate-float", children: /* @__PURE__ */ jsx(FontIcon, { icon: "auto_stories", size: "lg", className: "text-primary-main" }) }) }),
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-8", children: "Website Creation & Setup for Authors" }) }),
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed", children: "Your website is your digital home - a place where readers discover your work, learn your story, and connect with your brand. We create professional, secure, and author-focused websites that establish your credibility and help you own your presence online." }) })
    ] }),
    /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-sm p-6 md:p-12 mb-12 border border-[var(--color-silver-main)]/30 shadow-sm relative overflow-hidden group", children: /* @__PURE__ */ jsx("div", { className: "flex items-start gap-4 mb-6", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-start items-base gap-2", children: [
        /* @__PURE__ */ jsx(FontIcon, { icon: "security", className: "text-primary-main", size: "lg" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground-heading mb-4", children: "Why Securing Your Website Matters" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-foreground-body mb-6", children: "In a world of rented platforms and social media uncertainty, your website is the one space you truly control. Security isn't just technical - it's about trust, ownership, and protecting your brand." }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: securityPoints.map((point, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 ", children: [
        /* @__PURE__ */ jsx(FontIcon, { icon: "check_circle", className: "text-primary-main", size: "sm" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground-body", children: point })
      ] }, index)) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "py-12", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white text-center mb-10", children: "What Your Website Package Includes" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((feature, index) => /* @__PURE__ */ jsx(Animate, { animation: "slideUp", delay: 100 * index, children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-silver-main)]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(FontIcon, { icon: feature.icon, size: "md" }) }),
            /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold text-foreground-heading mb-2", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground-body", children: feature.description })
          ]
        },
        index
      ) })) })
    ] }),
    /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsx("div", { className: "bg-primary-main/80 rounded-2xl p-8 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-white lg:text-xl", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Everything handled for you." }),
      " From domain setup to security certificates, we take care of the technical details so you can focus on what matters most - your writing."
    ] }) }) })
  ] });
}
function SEOService() {
  const benefits = [
    {
      icon: "visibility",
      title: "Increased Visibility",
      description: "Readers find you when searching for books in your genre"
    },
    {
      icon: "editor_choice",
      title: "Credibility & Authority",
      description: "Ranking high signals trust and professionalism"
    },
    {
      icon: "trending_up",
      title: "Organic Traffic Growth",
      description: "Steady stream of new readers without paid ads"
    },
    {
      icon: "star_shine",
      title: "Better Book Launches",
      description: "SEO-optimized pages perform better from day one"
    },
    {
      icon: "group",
      title: "Audience Building",
      description: "Turn casual browsers into dedicated fans"
    }
  ];
  const steps = [
    {
      title: "Keyword Research for Authors",
      description: "Discover what readers are searching for - genres, themes, author names, and book topics"
    },
    {
      title: "Optimized Book & Author Pages",
      description: "Craft meta descriptions, titles, and content that rank well and convert visitors"
    },
    {
      title: "Blog & Article Optimization",
      description: "Write or optimize posts that attract organic traffic and engage your audience"
    },
    {
      title: "Website & Portfolio SEO",
      description: "Technical optimization, site speed, mobile responsiveness, and clean structure"
    },
    {
      title: "Visibility Across Search Platforms",
      description: "Optimize for Google, Bing, and specialty platforms where readers discover books"
    }
  ];
  const idealFor = [
    "Fiction Authors",
    "Nonfiction Writers",
    "Bloggers",
    "Poets",
    "Academics",
    "Self-Published Authors",
    "Debut Authors",
    "Series Writers"
  ];
  return /* @__PURE__ */ jsxs(PageSection, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-primary-dark/20 rounded-full mb-6 animate-float", children: /* @__PURE__ */ jsx(FontIcon, { icon: "search", size: "lg", className: "text-emerald-600" }) }) }),
      /* @__PURE__ */ jsxs(Animate, { animation: "slideUp", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-foreground-heading mb-4", children: "Search Engine Optimization for Authors" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-emerald-600 font-semibold mb-6", children: "Amplify Your Voice. Reach More Readers. Grow Your Author Brand." })
      ] }),
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("p", { className: "text-lg lg:text-xl text-foreground-body max-w-3xl mx-auto leading-relaxed", children: "In today's digital landscape, being found online is essential. SEO helps your books, your name, and your brand appear when readers are actively searching. It's not just about traffic - it''s about connecting with the right audience at the right time." }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-foreground-heading text-center mb-10", children: "Why SEO Matters for Authors" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: benefits.slice(0, 3).map((benefit, index) => /* @__PURE__ */ jsx(Animate, { delay: index * 150, children: /* @__PURE__ */ jsxs("div", { className: "bg-background-paper p-6 rounded-xl border border-[var(--color-silver-main)]/50 group hover:border-emerald-600 transition-colors h-full hover:shadow-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-main/5 rounded-lg flex items-center justify-center mb-4  group-hover:bg-emerald-600 group-hover:primary-main/5 transition-all duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsx(
          FontIcon,
          {
            icon: benefit.icon,
            size: "md",
            className: "text-emerald-600 group-hover:text-white"
          }
        ) }),
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground-heading mb-2", children: benefit.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground-body", children: benefit.description })
      ] }) }, index)) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto", children: benefits.slice(3).map((benefit, index) => /* @__PURE__ */ jsx(Animate, { delay: index * 150, children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-background-paper p-6 rounded-xl border border-[var(--color-silver-main)]/50 group hover:border-emerald-600 transition-colors h-full hover:shadow-lg",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-main/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:primary-main/5 transition-all duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsx(
              FontIcon,
              {
                icon: benefit.icon,
                size: "md",
                className: "text-emerald-600 group-hover:text-white"
              }
            ) }),
            /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground-heading mb-2", children: benefit.title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground-body", children: benefit.description })
          ]
        },
        index
      ) }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-white rounded-2xl p-6 lg:p-12 mb-16", children: [
      /* @__PURE__ */ jsx(Animate, { children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-10 text-center", children: "How We Help Authors Shine Online" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: steps.map((step, index) => /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", delay: 100 * index, children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8  bg-emerald-600 rounded-full flex items-center justify-center font-bold", children: index + 1 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "lg:text-lg font-semibold mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm", children: step.description })
        ] })
      ] }) }, index) })) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground-heading mb-6", children: "Ideal For" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 justify-center max-w-3xl mx-auto", children: idealFor.map((type, index) => /* @__PURE__ */ jsx(Animate, { animation: "zoomIn", delay: 100 * index, className: "p-2", children: /* @__PURE__ */ jsx(
        "span",
        {
          className: "bg-emerald-600 text-white px-4 py-3 rounded-full font-medium",
          children: type
        },
        index
      ) })) })
    ] })
  ] });
}
const CimemaImage = "/assets/cinema-CRjNf4_q.avif";
const CinematicBookTrailers = () => {
  return /* @__PURE__ */ jsxs(PageSection, { className: "bg-[var(--color-dark-primary)] text-white relative diagonal", py: "200px", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 opacity-20", children: /* @__PURE__ */ jsx("img", { src: CimemaImage, alt: "Cinema Background", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[var(--color-dark-primary)] via-[var(--color-dark-primary)] to-transparent z-0" }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-16 items-center relative z-10", children: [
      /* @__PURE__ */ jsxs(Animate, { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-gold-dark)]/20 text-[var(--color-gold-light)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-gold-main)]/30", children: [
          /* @__PURE__ */ jsx(FontIcon, { icon: "star", size: "sm" }),
          " Premium Service"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-black text-white leading-tight mb-6", children: [
          "Cinematic ",
          /* @__PURE__ */ jsx("span", { className: "text-[var(--color-gold-main)]", children: "Book Trailers" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[var(--color-silver-main)] mb-8 leading-relaxed", children: "Capture Attention. Spark Emotion. Drive Sales. A book trailer is a cinematic experience that immerses potential readers in your story before they turn the first page." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: [
          "40-90 second cinematic video",
          "Professional voiceover",
          "Custom music & color grading",
          "Optimized for social media"
        ].map((item, i) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: "flex items-center gap-3 text-[var(--color-background-default)]",
            children: [
              /* @__PURE__ */ jsx(FontIcon, { icon: "check_circle", className: "text-[var(--color-gold-main)]", size: "sm" }),
              item
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsx("button", { className: "gradient-gold text-[var(--color-dark-primary)] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-yellow-500/20 transition-all hover:scale-105", children: "View Samples" })
      ] }),
      /* @__PURE__ */ jsx(Animate, { delay: 300, children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-video rounded-2xl bg-[var(--color-background-paper)]/10 border border-[var(--color-gold-main)]/20 flex items-center justify-center backdrop-blur-sm shadow-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/404.html",
              alt: "Cinematic Preview",
              className: "absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-[var(--color-gold-main)] text-[var(--color-dark-primary)] flex items-center justify-center pl-1 cursor-pointer hover:scale-110 transition-transform relative z-10 shadow-lg shadow-[var(--color-gold-main)]/50", children: /* @__PURE__ */ jsx(FontIcon, { icon: "play_arrow", size: "lg" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-gold-main)]/20 rounded-full blur-3xl animate-pulse-slow" })
      ] }) })
    ] })
  ] });
};
function YouTubeViews() {
  const benefits = [
    {
      number: "01",
      title: "Instant Credibility",
      description: "Higher view counts signal popularity and quality, encouraging organic viewers to watch and engage"
    },
    {
      number: "02",
      title: "Organic Reach Boost",
      description: "YouTube's algorithm favors videos with momentum - more views lead to more recommendations"
    },
    {
      number: "03",
      title: "Attract Media & Reviewers",
      description: "Book bloggers, influencers, and media outlets notice content that already has traction"
    },
    {
      number: "04",
      title: "Stand Out in a Crowded Market",
      description: "Thousands of authors compete for attention - guaranteed views give you an edge"
    },
    {
      number: "05",
      title: "Create Buzz Around Book Launches",
      description: "Launch day visibility sets the tone for long-term success"
    }
  ];
  const howWeHelp = [
    {
      icon: Target,
      title: "Targeted Audience",
      description: "Real viewers interested in books and your genre"
    },
    {
      icon: TrendingUp,
      title: "Organic Growth",
      description: "No bots or fake engagement - authentic results"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "See results quickly and maintain momentum"
    },
    {
      icon: BarChart,
      title: "Campaign Optimization",
      description: "Ongoing support to maximize impact"
    }
  ];
  return /* @__PURE__ */ jsxs(PageSection, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 animate-float", children: /* @__PURE__ */ jsx(FontIcon, { icon: "trending_up", size: "lg" }) }) }),
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground-heading mb-6", children: "Unlock Your Author Brand with Guaranteed YouTube Views" }) }),
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("p", { className: "text-lg lg:text-xl text-foreground-body font-medium max-w-3xl mx-auto leading-relaxed", children: "Visibility on YouTube isn't just about numbers - it's about authority, momentum, and algorithmic advantage. Guaranteed views give your book trailers, interviews, and author content the initial push needed to reach a wider audience organically." }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-foreground-heading text-center mb-10", children: "Why Guaranteed Views Matter" }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6 max-w-4xl mx-auto", children: benefits.map((benefit, index) => /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", delay: 100 * index, children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 rounded-xl p-6 md:p-8 flex flex-col  gap-3 border border-slate-400/30 shadow-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex flex-row items-center justify-start gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold text-lg", children: benefit.number }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-foreground-heading mb-2", children: benefit.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-lg text-foreground-body", children: benefit.description })
      ] }) }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-white rounded-2xl p-10 md:p-14", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-10 text-center", children: "How We Help" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: howWeHelp.map((item, index) => /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", delay: 100 * index, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "lg:text-xl font-semibold mb-2", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "lg:text-lg text-slate-300", children: item.description })
        ] })
      ] }, index) }, index)) })
    ] }),
    /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-lg lg:text-xl text-medium text-slate-700 max-w-3xl mx-auto leading-relaxed", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Trust-focused and results-driven." }),
      " Our approach prioritizes real engagement and sustainable growth, ensuring your content gets the visibility it deserves while maintaining integrity and authenticity."
    ] }) }) })
  ] });
}
function LiteraryOutreach() {
  const included = [
    "Ten professionally written query letters tailored to your work",
    "Customized for manuscript or screenplay format",
    "Sent directly to carefully selected publishers and film producers",
    "Strategic market placement based on genre and audience"
  ];
  const whyChoose = [
    {
      icon: "workspace_premium",
      title: "Licensed Literary Agents",
      description: "Industry professionals with proven track records"
    },
    {
      icon: "avg_pace",
      title: "Time-Saving",
      description: "We handle research, writing, and submissions"
    },
    {
      icon: "ads_click",
      title: "Market Expertise",
      description: "Access to insider knowledge and industry connections"
    },
    {
      icon: "check_circle",
      title: "Professional Response",
      description: "Guaranteed response within 2-4 weeks"
    }
  ];
  return /* @__PURE__ */ jsxs(PageSection, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 animate-float", children: /* @__PURE__ */ jsx(FontIcon, { icon: "mail", size: "lg", className: "text-amber-600" }) }) }),
      /* @__PURE__ */ jsxs(Animate, { animation: "slideUp", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-6", children: "Maximize Your Story's Potential" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-amber-600 font-semibold mb-6", children: "Literary & Film Outreach by Licensed Agents" })
      ] }),
      /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx("p", { className: "lg:text-xl text-foreground-body font-semibold max-w-5xl mx-auto leading-relaxed", children: "Your manuscript or screenplay deserves to be seen by the right people. Our licensed literary agents conduct strategic outreach to publishers and film producers, positioning your work for serious consideration. This is premium service for authors ready to take the next step." }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm p-8 md:p-10", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-slate-900 mb-6", children: "What's Included" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: included.map((item, index) => /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", delay: 100 * index, children: /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(FontIcon, { icon: "check_circle", size: "lg", className: "text-amber-600" }),
          /* @__PURE__ */ jsx("span", { className: "lg:text-lg text-slate-700", children: item })
        ] }, index) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-sm p-8 md:p-10", children: [
        /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-slate-900 mb-6", children: "Why Choose This Service" }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: whyChoose.map((item, index) => /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", delay: 100 * index, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(FontIcon, { icon: item.icon, size: "lg", className: "text-amber-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-slate-900 mb-1", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: item.description })
          ] })
        ] }, index) }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Animate, { animation: "bounce", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 lg:p-10 border border-amber-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-start items-base gap-2", children: [
        /* @__PURE__ */ jsx(FontIcon, { icon: "star_shine", size: "md", className: "text-amber-600" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-3", children: "Professional, Strategic, Exclusive" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "lg:text-lg text-slate-700 leading-relaxed", children: "This is not mass email blasting. Each query letter is thoughtfully crafted and strategically sent to industry professionals who align with your work. With licensed agents handling your outreach, you gain access to opportunities that typically remain behind closed doors." })
    ] }) }) })
  ] });
}
function FinalCTA() {
  return /* @__PURE__ */ jsx(PageSection, { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center relative z-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl text-foreground-heading md:text-5xl font-bold mb-6", children: "Your Story Deserves to Be Seen" }),
    /* @__PURE__ */ jsx("p", { className: "lg:text-xl text-foreground-body mb-10 leading-relaxed", children: "Whether you're launching your first book or scaling your author brand, we're here to help you build credibility, reach more readers, and make a lasting impact. Let's bring your vision to life." }),
    /* @__PURE__ */ jsxs(
      NavLink,
      {
        to: "/contact-us",
        className: "bg-primary-main hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold  transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2 group",
        children: [
          "Start Your Project Today",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
        ]
      }
    )
  ] }) });
}
function Marketing() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Marketing Services | SEO & Web Design | Blue Bride Literary Agency" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "We build brands that matter. Explore our suite of creative services, including custom web design, branding, and content marketing. Let's create something unique together."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Hero$1, {}),
    /* @__PURE__ */ jsx(WebsiteCreation, {}),
    /* @__PURE__ */ jsx(SEOService, {}),
    /* @__PURE__ */ jsx(CinematicBookTrailers, {}),
    /* @__PURE__ */ jsx(YouTubeViews, {}),
    /* @__PURE__ */ jsx(LiteraryOutreach, {}),
    /* @__PURE__ */ jsx(FinalCTA, {})
  ] });
}
const BooksImages = "/assets/books-CUMuAly-.avif";
const packages = [
  {
    id: "bronze",
    title: "Bronze",
    subtitle: "Economical & Essential",
    description: "Our most economical publishing program, equipped with all the essentials for efficient international publication—plus the flexibility to add services anytime.",
    features: [
      "Cover and Interior Customization",
      "ISBN Assignment",
      "Paperback Availability",
      "ePub / eBook Availability",
      "Global Distribution",
      "Library of Congress Control Number",
      "Copyright Registration",
      "Unlimited Color / B&W Image Insertions",
      'Amazon "Look Inside" & Google Preview',
      'Barnes & Noble "Read Instantly"',
      "5 Free Paperback Copies"
    ],
    highlight: false,
    color: "bg-slate-100 text-slate-800"
  },
  {
    id: "silver",
    title: "Silver",
    subtitle: "Hardcover & Extended Value",
    description: "A wide-ranging package designed for authors ready to compete in today’s publishing market with strong presentation and editorial support.",
    features: [
      "Everything in Bronze, plus:",
      "Hardcover Availability",
      "Free Basic Editing (up to 35,000 words)",
      "In-depth Editorial Evaluation",
      "Booksellers Return Program",
      "iPage Listing Advertising",
      "Author Website Set-Up",
      "15 Paperback Copies",
      "5 Hardcover Copies"
    ],
    highlight: false,
    color: "bg-gray-100 text-gray-800"
  },
  {
    id: "gold",
    title: "Gold",
    subtitle: "Ultimate All-in-One Solution",
    description: "The ultimate publishing bundle combining premium editing, marketing exposure, and long-term visibility to help your book stand out.",
    features: [
      "Everything in Silver, plus:",
      "Free Basic Editing (up to 55,000 words)",
      "24-Month Booksellers Return Program",
      "Basic Search Engine Optimization",
      "30 Days Facebook Marketing",
      "Goodreads Giveaway Program",
      "20 Paperback Copies",
      "10 Hardcover Copies"
    ],
    highlight: true,
    color: "bg-[#007BA7] text-white"
  }
];
const Hero = () => {
  return /* @__PURE__ */ jsxs(PageSection, { children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: BooksImages,
          alt: "Library Background",
          className: "w-full h-full object-cover opacity-30"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[var(--color-background-default)]/80 via-[var(--color-background-default)]/50 to-[var(--color-background-default)]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto  relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center py-20 mx-auto", children: [
      /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#007BA7] font-semibold text-sm mb-8 animate-fade-in-up", children: [
        /* @__PURE__ */ jsx(Award, { size: 16 }),
        /* @__PURE__ */ jsx("h1", { children: "Award-Winning Publishing Services" })
      ] }) }),
      /* @__PURE__ */ jsxs(Animate, { animation: "slideUp", delay: 400, children: [
        /* @__PURE__ */ jsxs(SubHeading, { align: "center", size: "lg", children: [
          "Publishing",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Made Professional" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed", children: "We provide top-quality publishing services, helping you share your stories, articles, and books with the world through a seamless, author-first process." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#packages",
              className: "w-full sm:w-auto px-8 py-4 bg-[#007BA7] text-white rounded-full font-bold text-lg hover:bg-[#006288] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#007BA7]/30 flex items-center justify-center gap-2",
              children: [
                "Explore Publishing ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              to: "/contact-us",
              className: "w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:border-[#007BA7]/30",
              children: "Schedule Consultation"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-slate-900", children: "500+" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 font-medium", children: "Books Published" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-slate-900", children: "50k+" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 font-medium", children: "Copies Sold" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-slate-900", children: "100%" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 font-medium", children: "Author Rights" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-slate-900", children: "24/7" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 font-medium", children: "Support" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const FeatureItem = ({ text }) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-gray-600 text-lg leading-relaxed", children: [
  /* @__PURE__ */ jsx("div", { className: "mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(Check, { size: 12, className: "text-[#007BA7]", strokeWidth: 3 }) }),
  /* @__PURE__ */ jsx("span", { children: text })
] });
const PackageCard = ({ pkg }) => {
  const isGold = pkg.highlight;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative flex flex-col h-full bg-white rounded-2xl transition-all duration-300 group
      ${isGold ? "ring-2 ring-[#007BA7] shadow-2xl shadow-blue-900/10 scale-100 md:scale-105 z-10" : "border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100"}`,
      children: [
        isGold && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsxs("span", { className: "bg-[#007BA7] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Star, { size: 12, fill: "white" }),
          " Most Popular"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: `p-8 ${isGold ? "pb-6" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-slate-900 mb-2", children: pkg.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[#007BA7] uppercase tracking-wide", children: pkg.subtitle })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed min-h-[80px]", children: pkg.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-8 flex-grow", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-slate-100 mb-6" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: pkg.features.map((feature, idx) => /* @__PURE__ */ jsx(FeatureItem, { text: feature }, idx)) })
        ] })
      ]
    }
  );
};
const ServicesSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-50", id: "packages", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-[#007BA7] font-bold tracking-wide uppercase text-sm mb-3", children: "Our Solutions" }),
      /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-6", children: "Publishing Packages" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Choose the perfect pathway for your book. From digital-first launches to full-scale hardcover distribution, we have a solution tailored to your goals." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-start", children: packages.map((pkg, index) => /* @__PURE__ */ jsx(Animate, { animation: "slideLeft", delay: 200 * index, children: /* @__PURE__ */ jsx(PackageCard, { pkg }, pkg.id) }, index)) })
  ] }) });
};
const ProcessSection = () => {
  const steps = [
    {
      title: "Consultation",
      desc: "We discuss your goals and choose the right package.",
      icon: /* @__PURE__ */ jsx(Zap, {})
    },
    {
      title: "Production",
      desc: "Editing, cover design, and formatting take place.",
      icon: /* @__PURE__ */ jsx(BookOpen, {})
    },
    {
      title: "Distribution",
      desc: "Your book goes live on Amazon, B&N, and more.",
      icon: /* @__PURE__ */ jsx(Globe, {})
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: steps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-blue-50 text-[#007BA7] flex items-center justify-center mb-6", children: step.icon }),
    /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-slate-900 mb-2", children: step.title }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: step.desc })
  ] }, i)) }) }) });
};
const CTASection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-[#007BA7] relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" }),
    /* @__PURE__ */ jsx(Animate, { animation: "fadeIn", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center relative z-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6", children: "Ready to Publish Your Book?" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto", children: "Join hundreds of successful authors who trusted us with their story. Your journey from manuscript to marketplace starts here." }),
      /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/contact-us",
          className: "bg-white text-[#007BA7] px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1",
          children: "Start Your Publishing Journey"
        }
      )
    ] }) })
  ] });
};
function Publishing() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Content Publishing & CMS Management Services | Blue Bridge" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Stop struggling with your CMS. We handle content uploading, formatting, and publishing for WordPress, HubSpot, and more. Ensure error-free, SEO-optimized posts every time."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Animate, { animation: "slideUp", children: /* @__PURE__ */ jsx(ProcessSection, {}) }),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
const routes = [
  {
    name: "Home",
    id: "home",
    route: "/",
    icon: "home",
    isNav: true,
    component: /* @__PURE__ */ jsx(Home, {})
  },
  {
    name: "Publishing",
    id: "publishing-services",
    icon: "dashboard_customize",
    route: "/publishing-services",
    isNav: true,
    component: /* @__PURE__ */ jsx(Publishing, {})
  },
  {
    name: "Marketing",
    id: "marketing-services",
    icon: "dashboard_customize",
    route: "/marketing-services",
    isNav: true,
    component: /* @__PURE__ */ jsx(Marketing, {})
  },
  {
    name: "About Us",
    id: "about",
    icon: "contact_support",
    route: "/about-us",
    isNav: true,
    component: /* @__PURE__ */ jsx(About, {})
  },
  {
    name: "Contact Us",
    id: "contact",
    icon: "perm_contact_calendar",
    route: "/contact-us",
    isNav: true,
    component: /* @__PURE__ */ jsx(Contact, {})
  },
  {
    name: "Not Found",
    id: "notfound",
    route: "/*",
    isNav: false,
    component: /* @__PURE__ */ jsx(NotFound, {})
  }
];
const RootRoutes = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", exact: true, element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/publishing-services", element: /* @__PURE__ */ jsx(Publishing, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/marketing-services", element: /* @__PURE__ */ jsx(Marketing, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/about-us", element: /* @__PURE__ */ jsx(About, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact-us", element: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] });
};
const NavLinks = ({ onClick, isMobile = false }) => {
  const contactClass = "bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-slate-900/20 hover:shadow-primary-main/30 ";
  const commonClass = "text-xs text-center text-foreground-body m-0 px-6 font-black uppercase tracking-[0.2em] transition-colors hover:text-foreground-heading";
  const mobileClass = "text-4xl text-foreground-body font-black uppercase tracking-tighter transition-colors hover:text-foreground-heading";
  return /* @__PURE__ */ jsx(Fragment, { children: routes.filter((item) => item?.isNav).map((item) => /* @__PURE__ */ jsx(
    NavLink,
    {
      to: item.route,
      onClick,
      className: `nav-link relative active:scale-95 transform ${isMobile ? mobileClass : item?.id === "contact" ? contactClass : commonClass}`,
      children: item.name
    },
    item.route
  )) });
};
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };
  return (
    //     background: rgba(255, 255, 255, 0.8);
    // color: rgb(52, 71, 103);
    // border-radius: 0.75rem;
    // box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
    // backdrop-filter: saturate(200%) blur(30px);
    /* @__PURE__ */ jsx("header", { className: "fixed top-0 w-full z-[60] glass-nav py-1 transition-all duration-300", children: /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-6 flex justify-between items-center   ", children: [
      /* @__PURE__ */ jsx(NavLink, { to: "/", className: "flex items-center gap-3 group cursor-pointer z-50", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300", children: /* @__PURE__ */ jsx("img", { src: "/favicon.svg", alt: "blue bridge literary agency logo" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center space-x-12", children: /* @__PURE__ */ jsx(NavLinks, { onClick: closeMenu }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex ", children: [
        /* @__PURE__ */ jsx("button", { className: "text-slate-900 z-50", onClick: toggleMenu, "aria-label": "Toggle Menu", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl", children: "menu" }) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl z-[55] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`,
            children: [
              /* @__PURE__ */ jsx("button", { className: "absolute top-8 right-8 text-slate-900", onClick: closeMenu, children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-4xl", children: "close" }) }),
              /* @__PURE__ */ jsx(NavLinks, { onClick: closeMenu, isMobile: true })
            ]
          }
        )
      ] })
    ] }) })
  );
};
const socialLinks = [
  {
    id: 1,
    href: "#",
    bgHoverColor: "hover:bg-[#d62976]",
    name: "Instagram",
    class: "containerOne",
    svg: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", className: "socialSvg instagramSvg", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
        fill: "currentColor"
      }
    ) })
  },
  {
    id: 2,
    href: "#",
    bgHoverColor: "hover:bg-[#00acee]",
    name: "Twitter",
    class: "containerTwo",
    svg: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", className: "socialSvg twitterSvg", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
        fill: "currentColor"
      }
    ) })
  },
  {
    id: 3,
    href: "#",
    bgHoverColor: "hover:bg-[#0072b1]",
    name: "LinkedIn",
    class: "containerThree",
    svg: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 448 512", className: "socialSvg linkdinSvg", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        fill: "currentColor"
      }
    ) })
  },
  {
    id: 4,
    href: "#",
    bgHoverColor: "hover:bg-[#128c7e]",
    name: "WhatsApp",
    class: "containerFour",
    svg: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", className: "socialSvg whatsappSvg", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.240-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
        fill: "currentColor"
      }
    ) })
  }
];
const Socials = () => {
  return /* @__PURE__ */ jsx("div", { className: "social-card w-fit h-fit bg-transparent flex items-center justify-center p-6 gap-5", children: socialLinks.map((link) => /* @__PURE__ */ jsx(
    "a",
    {
      href: link.href,
      onClick: (e) => handleClick(e, link.name),
      className: `
            socialContainer
            w-14 h-14 rounded-full  
            flex items-center justify-center
            overflow-hidden ${link.class}
          `,
      "aria-label": `Visit our ${link.name}`,
      children: link.svg
    },
    link.id
  )) });
};
const FOOTER_LINKS = {
  services: [
    {
      id: "publishing",
      label: "Publishing",
      route: "/publishing-services"
    },
    {
      id: "marketing",
      label: "Marketing",
      route: "/marketing-services"
    }
  ],
  company: [
    {
      id: "about-us",
      label: "About Us",
      route: "/about-us"
    },
    {
      id: "contact-us",
      label: "Contact Us",
      route: "/contact-us"
    }
  ]
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-slate-950 text-white pt-32 pb-16 border-t-8 border-primary-main", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-16 mb-24", children: [
      /* @__PURE__ */ jsx(CompanyInfo, {}),
      /* @__PURE__ */ jsx(FooterSection, { title: "Services", links: FOOTER_LINKS.services }),
      /* @__PURE__ */ jsx(FooterSection, { title: "Company", links: FOOTER_LINKS.company }),
      /* @__PURE__ */ jsx(SubscribeSection, {})
    ] }),
    /* @__PURE__ */ jsx(FooterBottom, {})
  ] }) });
};
const CompanyInfo = () => /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
    /* @__PURE__ */ jsx("div", { className: "w-16 h-16  rounded-lg flex items-center justify-center text-white", children: /* @__PURE__ */ jsx("img", { src: "/favicon.svg", alt: "blue bridge literary agency logo" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-2xl font-black tracking-tighter leading-none block", children: "BLUE BRIDGE" }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold tracking-[0.4em] uppercase text-primary-main", children: "Literary Agency" })
    ] })
  ] }),
  /* @__PURE__ */ jsx("p", { className: "text-1xl text-slate-400 font-medium leading-relaxed mb-10", children: "Our mission is to empower authors from aspiring writers to seasoned wordsmiths by providing a comprehensive platform for creation." })
] });
const FooterSection = ({ title, links }) => /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
  /* @__PURE__ */ jsx("h6", { className: "text-[10px] font-black uppercase tracking-[0.4em] text-primary-main mb-10", children: title }),
  /* @__PURE__ */ jsx("ul", { className: "space-y-6 text-slate-400 font-bold uppercase tracking-widest text-xs", children: links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: link?.route, className: "hover:text-white transition-colors inline-block", children: link?.label }) }, link?.id)) })
] });
const SubscribeSection = () => /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
  /* @__PURE__ */ jsx("h6", { className: "text-[10px] font-black uppercase tracking-[0.4em] text-primary-main mb-10", children: "Subscribe" }),
  /* @__PURE__ */ jsxs("div", { className: "relative mb-8", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        placeholder: "Email Address",
        className: "w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm font-bold text-white outline-none focus:border-primary-main transition-colors"
      }
    ),
    /* @__PURE__ */ jsx("button", { className: "absolute right-2 top-2 bottom-2 w-10 h-10 bg-primary-main rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-sm", children: "arrow_forward" }) })
  ] }),
  /* @__PURE__ */ jsxs("p", { className: "text-slate-500 font-bold text-xs leading-loose", children: [
    "1 Tower Center Boulevard,",
    /* @__PURE__ */ jsx("br", {}),
    "Ste 1510 East Brunswick, NJ 08816"
  ] })
] });
const FooterBottom = () => /* @__PURE__ */ jsxs("div", { className: "pt-5 border-t border-white/5 flex flex-col  justify-between items-center gap-8", children: [
  /* @__PURE__ */ jsx(Socials, {}),
  /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold text-slate-500 uppercase tracking-widest", children: "© 2024 Blue Bridge Literary Agency. NJ Licensed." })
] });
const Main = ({ children }) => {
  return /* @__PURE__ */ jsx("main", { className: "min-h-[80vh] w-full block relative", children });
};
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-noise -z-10" }),
    /* @__PURE__ */ jsx("div", { className: "custom-cursor -z-10", id: "cursor" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 -z-10 animate-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[80px] opacity-60 -z-10" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsx(RootRoutes, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render(_url, options) {
  console.log("_url, options: ", { _url, options });
  return renderToPipeableStream(
    /* @__PURE__ */ jsxs(StrictMode, { children: [
      /* @__PURE__ */ jsx(StaticRouter, { location: _url, children: /* @__PURE__ */ jsx(App, {}) }),
      /* @__PURE__ */ jsx("vite-streaming-end", {})
    ] }),
    options
  );
}
export {
  render
};
