import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="padding-x py-8 sticky top-0 bg-white z-10 w-full ">
      <nav
        className="flex justify-between items-center max-container"
        aria-label="Main navigation"
      >
        <a href="/" className="logo">
          <img
            src={headerLogo}
            alt="Company logo"
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul
          className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"
          aria-label="Primary navigation links"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24"
          aria-label="User actions"
        >
          <a
            href="/"
            className="hover:text-coral-red transition-colors"
          >
            Sign in
          </a>
          <span>/</span>
          <a
            href="/"
            className="hover:text-coral-red transition-colors"
          >
            Explore now
          </a>
        </div>

        <button
          className="hidden max-lg:block"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleMenu}
        >
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            className={`transition-transform ${isMenuOpen && "rotate-90"}`}
          />
        </button>

        {isMenuOpen && (
  <>
    {/* Background overlay */}
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-30"
      onClick={toggleMenu}
    ></div>

    {/* Dropdown menu */}
    <div
      className="fixed top-0 left-0 w-full bg-black p-6 flex flex-col gap-4 z-40 max-h-screen overflow-y-auto"
      aria-label="Mobile navigation menu"
    >
      {navLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="font-montserrat text-lg text-white hover:text-coral-red transition-colors block"
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}
        >
          {item.label}
        </a>
      ))}

      <hr className="my-4 border-gray-300" />

      <div className="flex flex-col gap-4">
        <a
          href="/"
          className="text-lg text-white font-medium font-montserrat hover:text-coral-red transition-colors block"
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}
        >
          Sign in
        </a>
        <a
          href="/"
          className="text-lg text-white font-medium font-montserrat hover:text-coral-red transition-colors block"
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}
        >
          Explore now
        </a>
      </div>

      <div className="mt-6">
        <a
          href="/summer-collections"
          className="font-montserrat text-lg text-coral-red hover:underline transition-colors block"
        >
          Our Summer Collections
        </a>
      </div>
    </div>
  </>
)}




      </nav>
    </header>
  );
};

export default Nav;
