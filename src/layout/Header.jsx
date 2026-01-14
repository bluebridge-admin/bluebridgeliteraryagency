import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import AppLogo from "../assets/logo.svg";
import routes from "../routes";

const NavLinks = ({ onClick, isMobile = false }) => {
  const contactClass =
    "bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-slate-900/20 hover:shadow-primary-main/30 ";
  const commonClass =
    "text-xs text-center text-foreground-body m-0 px-6 font-black uppercase tracking-[0.2em] transition-colors hover:text-foreground-heading";
  const mobileClass =
    "text-4xl text-foreground-body font-black uppercase tracking-tighter transition-colors hover:text-foreground-heading";
  return (
    <>
      {routes
        .filter((item) => item?.isNav)
        .map((item) => (
          <NavLink
            key={item.route}
            to={item.route}
            onClick={onClick}
            className={`nav-link relative active:scale-95 transform ${
              isMobile ? mobileClass : item?.id === "contact" ? contactClass : commonClass
            }`}
          >
            {item.name}
          </NavLink>
        ))}
    </>
  );
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
    <header className="fixed top-0 w-full z-[60] glass-nav py-1 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center   ">
        <NavLink to="/" className="flex items-center gap-3 group cursor-pointer z-50">
          <div className="w-16 h-16 rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300">
            <img src="/favicon.svg" alt="blue bridge literary agency logo" />
          </div>
          {/* <p className="leading-none">
            <span className="text-xl font-black tracking-tighter leading-none block text-slate-900">
              BLUE BRIDGE
            </span>
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary-main">
              Literary Agency
            </span>
          </p> */}
        </NavLink>
        <div className="hidden lg:flex items-center space-x-12">
          <NavLinks onClick={closeMenu} />
        </div>

        <div className="lg:hidden flex ">
          <button className="text-slate-900 z-50" onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>

          <div
            className={`fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl z-[55] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <button className="absolute top-8 right-8 text-slate-900" onClick={closeMenu}>
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <NavLinks onClick={closeMenu} isMobile />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
