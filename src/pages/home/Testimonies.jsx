import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { styled } from "styled-components";

const StyledSlideSwiper = styled.div`
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

import Candicee_Childs from "../../assets/pp/Candicee_Childs.jpg";
import Howard_Bush from "../../assets/pp/Howard_Bush.png";
import Sarah_Johnson from "../../assets/pp/Sarah_Johnson.jpg";
import Clint_Goodwin from "../../assets/pp/Clint_Goodwin.png";
import Gene_Elwood from "../../assets/pp/Gene_Elwood.png";
import Deniz_Kayadelen from "../../assets/pp/Deniz_Kayadelen.jpeg";
import StarRating from "../../components/StarRating";
import FontIcon from "../../components/FontIcon";
import SubHeading from "../../components/SubHeading";

const testimonials = [
  {
    quote:
      "I loved working with Blue Bridge because they had everything organized and easy to follow. They helped me making my dreams come true. Excellent designers and support!",
    name: "Candicee Childs",
    role: "Lemons, Lemonade",
    image: Candicee_Childs,
    rating: 5,
  },
  {
    quote:
      "Communication was excellent. There were no surprises. I was updated every step of the way. Very responsive. Seamless experience throughout.",
    name: "Howard S. Bush MD",
    role: "Doctor-Patient Skills",
    image: Howard_Bush,
    rating: 4,
  },
  {
    quote:
      "Blue Bridge supported me in editing, structuring, design and marketing. Can't believe that my book is number #1! So happy to made this choice.",
    name: "Deniz Kayadelen",
    role: "Out Of Comfort Zone",
    image: Deniz_Kayadelen,
    rating: 5,
  },
  {
    quote:
      "The editorial team transformed my manuscript into a masterpiece. Their attention to detail and creative insight exceeded all my expectations.",
    name: "Sarah Johnson",
    role: "Midnight Whispers",
    image: Sarah_Johnson,
    rating: 3.5,
  },
  {
    quote:
      "I want you to know my first experience with your company was outstanding. Your company produced positive results in a reasonable a mount of time to market.",
    name: "Clint Goodwin",
    role: "Leather to Steel",
    image: Clint_Goodwin,
    rating: 5,
  },
  {
    quote: "I received fantastic and wonderful assistance. I greatly appreciate Blue Bridge",
    name: "Gene Elwood",
    role: "Syncopated Love Dreams",
    image: Gene_Elwood,
    rating: 5,
  },
];

const Testimonies = () => {
  return (
    <>
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] ol-red">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900  ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        </div>
      </div>

      <div className="mt-10">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-main text-center mb-10">
          Testimonials
        </p>
        <SubHeading className="grow mb-10" color="white">
          Success <span className="text-gradient">Stories</span>
        </SubHeading>

        <Swiper
          // slidesPerView={3}
          // spaceBetween={15}
          breakpoints={{
            // When window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          navigation={{
            enabled: true,
            prevEl: "#prev-testimony",
            nextEl: "#next-testimony",
          }}
          mousewheel={true}
          keyboard={true}
          cssMode={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="h-[450px] bg-transp"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="relative isolate overflow-hidden bg-background-paper shadow-lg px-6 py-5 lg:py-10 lg:px-8 rounded-4xl">
                <StarRating rating={item?.rating} size="18px" />

                <figure className="flex flex-col justify-start itens-start mt-10">
                  <blockquote className="text-left text-xl text-foreground-body lg:text-2xl">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      stroke="oklab(100% 0 5.96046e-8 / .2)"
                      height="8rem"
                      style={{
                        position: "absolute",
                        top: "3rem",
                      }}
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      ></path>
                      <use x="86" href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"></use>
                    </svg>
                    <p className="text-xl">{item?.quote}</p>
                  </blockquote>
                  <figcaption className="flex flex-row justify-start items-center mt-20 gap-4">
                    <img
                      alt={item?.name}
                      src={item?.image}
                      className="mx-auto size-15 rounded-full aspect-square"
                    />
                    <div className="flex flex-col items-start justify-center grow-1">
                      <p className="font-semibold text-xl text-foreground-heading">{item?.name}</p>

                      <p className="text-gray-400 text-lg">
                        <span>Author: </span>
                        {item?.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          ))}
          <button
            className="absolute left-1 top-[30%] shadow-lg z-100 opacity-50 border-2 border-primary-main/80 rounded-full flex items-center justify-center transition-all active:scale-95 group hover:opacity-100 hover:bg-primary-main hover:border-primary-main"
            id="prev-testimony"
          >
            <FontIcon
              icon="arrow_left_alt"
              size="xl"
              className="text-primary-main/80 group-hover:text-white"
            />
          </button>
          <button
            className="absolute right-1 top-[30%] shadow-lg z-100 opacity-50 border-2 border-primary-main/80 rounded-full flex items-center justify-center transition-all active:scale-95 group hover:opacity-100 hover:bg-primary-main hover:border-primary-main"
            id="next-testimony"
          >
            <FontIcon
              icon="arrow_right_alt"
              size="xl"
              className="text-primary-main/80 group-hover:text-white"
            />
          </button>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonies;
