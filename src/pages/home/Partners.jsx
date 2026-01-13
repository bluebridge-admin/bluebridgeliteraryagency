import Animate from "../../components/Animate";

const partners = [
  { name: "Adlibris", src: "https://www.gratuityglobal.com/build/assets/adlibris-DKJqDnkr.png" },
  { name: "Agapea", src: "https://www.gratuityglobal.com/build/assets/agapea-BuQvhToa.png" },
  { name: "Amazon", src: "https://www.gratuityglobal.com/build/assets/Amazon-BRBJ-rFR.png" },
  {
    name: "Barnes and Noble",
    src: "https://www.gratuityglobal.com/build/assets/BarnesAndNoble-CCXuyrYJ.png",
  },
  { name: "Bertrams", src: "https://www.gratuityglobal.com/build/assets/bertrams-CU85AUiX.png" },
  { name: "Blackwell", src: "https://www.gratuityglobal.com/build/assets/blackwell-BMxsq-5R.png" },
  { name: "Booktopia", src: "https://www.gratuityglobal.com/build/assets/Booktopia-BfuQ3kUo.png" },
  { name: "Chapters", src: "https://www.gratuityglobal.com/build/assets/chapters-CiU2iLHx.png" },
  { name: "Ingram", src: "https://www.gratuityglobal.com/build/assets/Ingram-BuieUfvV.png" },
  { name: "Kobo", src: "https://www.gratuityglobal.com/build/assets/Kobo-D8yVJ7He.png" },
  {
    name: "Waterstones",
    src: "https://www.gratuityglobal.com/build/assets/waterstone-FliYxqyh.png",
  },
];

const Partners = () => {
  return (
    <Animate animation="slideUp">
      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-main text-center">
        Our Trusted Partners
      </p>

      <div className="relative flex items-center marquee-mask mt-15">
        <div className="animate-marquee items-center gap-20 py-1">
          {[...partners, ...partners].map((partner, index) => (
            <img
              key={`${partner.name}-${index}`}
              src={partner.src}
              className="bookstore-icons h-10 md:h-12 w-auto"
              alt={partner.name}
            />
          ))}
        </div>
      </div>
    </Animate>
  );
};

export default Partners;
