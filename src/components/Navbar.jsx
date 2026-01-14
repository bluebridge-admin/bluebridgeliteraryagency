import React, { useState } from "react";

const Navbar = () => {
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
    <>
      <nav
        className="fixed top-0 w-full z-[60] glass-nav py-6 transition-all duration-300"
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group cursor-pointer z-50">
            <div className="w-10 h-10 bg-primary-main rounded-lg flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300">
              <span className="material-symbols-outlined text-2xl">radio_button_unchecked</span>
            </div>
            <div>
              <span className="text-xl font-black tracking-tighter leading-none block text-slate-900">
                BLUE BRIDGE
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary-main">
                Literary Agency
              </span>
            </div>
          </a>

          <div className="sm:hidden md:hidden lg:flex items-center space-x-12">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <a
              href="#contact"
              className="bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-primary-main transition-all shadow-xl shadow-slate-900/20 hover:shadow-blue-500/30 active:scale-95 transform"
            >
              Contact Us
            </a>
          </div>

          <button
            className="lg:hidden text-slate-900 z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[55] flex flex-col justify-center items-center gap-8 transition-transform duration-500 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-8 right-8 text-slate-900" onClick={closeMenu}>
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>
        <MobileNavLink href="#home" onClick={closeMenu}>
          Home
        </MobileNavLink>
        <MobileNavLink href="#services" onClick={closeMenu}>
          Services
        </MobileNavLink>
        <MobileNavLink href="#about" onClick={closeMenu}>
          About
        </MobileNavLink>
        <MobileNavLink href="#contact" onClick={closeMenu}>
          Contact
        </MobileNavLink>
      </div>
    </>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-xs font-black uppercase tracking-[0.2em] hover:text-primary-main transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-main after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-5xl font-black uppercase tracking-tighter hover:text-primary-main transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
