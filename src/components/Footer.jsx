import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16 border-t-8 border-primary-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <CompanyInfo />
          <FooterSection
            title="Services"
            links={["Publishing", "Marketing", "Business Solutions"]}
          />
          <FooterSection title="Company" links={["About Us", "Testimonies", "Contact Us"]} />
          <SubscribeSection />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

const CompanyInfo = () => (
  <div className="lg:col-span-5">
    <div className="flex items-center gap-3 mb-10">
      <div className="w-12 h-12 bg-primary-main rounded-lg flex items-center justify-center text-white">
        <span className="material-symbols-outlined text-3xl">radio_button_unchecked</span>
      </div>
      <div>
        <span className="text-2xl font-black tracking-tighter leading-none block">BLUE BRIDGE</span>
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary-main">
          Literary Agency
        </span>
      </div>
    </div>

    <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
      Our mission is to empower authors from aspiring writers to seasoned wordsmiths by providing a
      comprehensive platform for creation.
    </p>

    <div className="flex gap-4">
      <SocialIcon icon="radio_button_unchecked" />
      <SocialIcon icon="alternate_email" />
      <SocialIcon icon="share" />
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary-main hover:text-white text-slate-400 transition-all hover:scale-110"
  >
    <span className="material-symbols-outlined">{icon}</span>
  </a>
);

const FooterSection = ({ title, links }) => (
  <div className="lg:col-span-2">
    <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-main mb-10">
      {title}
    </h6>
    <ul className="space-y-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
            className="hover:text-white transition-colors hover:translate-x-2 inline-block"
          >
            {link}
          </a>
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

    <p className="text-slate-500 font-bold text-xs leading-loose">
      1 Tower Center Boulevard,
      <br />
      Ste 1510 East Brunswick, NJ 08816
    </p>
  </div>
);

const FooterBottom = () => (
  <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
      © 2024 Blue Bridge Literary Agency. NJ Licensed.
    </p>

    <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-slate-500">
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Cookie Settings</FooterLink>
    </div>
  </div>
);

const FooterLink = ({ href, children }) => (
  <a href={href} className="hover:text-white transition-colors">
    {children}
  </a>
);

export default Footer;
