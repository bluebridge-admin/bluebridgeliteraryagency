import { NavLink } from "react-router";
import Socials from "../components/Socials";
import CONFIG from "../config.json";

const FOOTER_LINKS = {
  services: [
    {
      id: "publishing",
      label: "Publishing",
      route: "/publishing-services",
    },
    {
      id: "marketing",
      label: "Marketing",
      route: "/marketing-services",
    },
  ],
  company: [
    {
      id: "about-us",
      label: "About Us",
      route: "/about-us",
    },
    {
      id: "contact-us",
      label: "Contact Us",
      route: "/contact-us",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16 border-t-8 border-primary-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <CompanyInfo />
          <div className="hidden lg:block lg:col-span-2"></div>
          <FooterSection title="Services" links={FOOTER_LINKS.services} />
          <FooterSection title="Company" links={FOOTER_LINKS.company} />
          {/* <SubscribeSection /> */}
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

const CompanyInfo = () => (
  <div className="lg:col-span-5">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-16 h-16  rounded-lg flex items-center justify-center text-white">
        {/* <span className="material-symbols-outlined text-3xl">radio_button_unchecked</span> */}
        <img src="favicon.svg" alt="blue bridge literary agency logo" />
      </div>
      <div>
        <span className="text-2xl font-black tracking-tighter leading-none block">BLUE BRIDGE</span>
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary-main">
          Literary Agency
        </span>
      </div>
    </div>

    <p className="text-[16px] text-slate-400 leading-relaxed mb-5">
      Our mission is to empower authors from aspiring writers <br /> to seasoned wordsmiths by
      providing a comprehensive <br /> platform for creation.
    </p>
    {/* 
    <div className="flex gap-4">
      <Socials />
    </div> */}
  </div>
);

const FooterSection = ({ title, links }) => (
  <div className="lg:col-span-2">
    <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-main mb-10">
      {title}
    </h6>
    <ul className="space-y-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
      {links.map((link) => (
        <li key={link?.id}>
          <NavLink to={link?.route} className="hover:text-white transition-colors inline-block">
            {link?.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const SubscribeSection = () => (
  <div className="lg:col-span-3">
    <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-main mb-10">
      Subscribe
    </h6>

    <div className="relative mb-8">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm font-bold text-white outline-none focus:border-primary-main transition-colors"
      />
      <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-primary-main rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>

    <p className="text-slate-500 font-bold text-xs leading-loose whitespace-pre-wrap">
      {/* 1 Tower Center Boulevard,
      <br />
      Ste 1510 East Brunswick, NJ 08816 */}
      {CONFIG?.address}
    </p>
  </div>
);

const FooterBottom = () => (
  <div className="pt-5 border-t border-white/5 flex flex-col  justify-between items-center gap-8">
    <Socials />
    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
      © 2024 Blue Bridge Literary Agency
    </p>

    {/* <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-slate-500">
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Cookie Settings</FooterLink>
    </div> */}
  </div>
);

export default Footer;
