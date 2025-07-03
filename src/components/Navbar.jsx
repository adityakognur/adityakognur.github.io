import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-cyan-400 text-2xl font-extrabold tracking-wide hover:text-cyan-300 transition-all duration-300"
        >
          Aditya G
        </NavLink>

        {/* Hamburger icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-300 text-5xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Links - desktop */}
        <ul className="hidden lg:flex space-x-8 text-md font-medium">
          {navLinks.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative transition duration-300 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:transition-all before:duration-300 ${
                    isActive
                      ? "text-cyan-400 before:w-full"
                      : "text-gray-300 hover:text-cyan-300 before:w-0 hover:before:w-full before:bg-cyan-400"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center gap-4 mt-4 text-md font-medium bg-gray-800 bg-opacity-80 py-4 rounded-b-xl">
          {navLinks.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-400 underline"
                    : "text-gray-300 hover:text-cyan-300"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
