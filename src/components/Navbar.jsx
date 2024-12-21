import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Blackbutton from "./elements/Blackbutton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    { to: "/projects", text: "Projects" },
    { to: "/blog", text: "Blog" },
    { to: "/Resource", text: "Resource" },
    { to: "/resume", text: "Resume" },
  ];

  const renderNavLinks = (extraClasses = "") =>
    navLinks.map(({ to, text }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive, isPending }) =>
          `${isPending ? "pending" : isActive ? "font-regular text-gray-900" : "font-regular hover:text-gray-700"} ${extraClasses}`
        }
      >
        {text}
      </NavLink>
    ));

  return (
    <div className="flex justify-center">
      <div
        className={`fixed w-full mx-auto max-w-7xl transition-transform duration-300 z-40 ${
          isScrolled ? "translate-y-0" : "-translate-y-24"
        }`}
      >
        <header className="w-full  bg-white shadow-sm rounded-xl mt-4 fixed">
          <div className=" flex flex-col md:flex-row justify-between items-center mx-auto py-3 px-8">
            <div className="flex gap-12 md:gap-40 items-center">
              <Link to="/" className="text-xl font-Semibold text-gray-900"> 
                Suman &nbsp;<span className="font-normal">Sourabh</span>
              </Link>
              <button
                className="md:hidden text-gray-900 hover:bg-gray-200 p-2 rounded focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <nav className="hidden md:flex items-center gap-8">{renderNavLinks()}</nav>

            {isMenuOpen && (
              <div className="md:hidden flex flex-col items-center pt-2 pb-4 space-y-1 bg-white">
                {renderNavLinks("block")}
                <NavLink
                  to="/contact"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#e76e50] rounded shadow hover:bg-gray-700 transition-transform transform hover:scale-105"
                >
                  Contact
                </NavLink>
              </div>
            )}

            <div className="hidden md:flex">
              <Link to="/contact" className="buttonsmall">
                <Blackbutton text1="Contact" text2="pro" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;