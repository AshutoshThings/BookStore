import { NavLink } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/cart", label: "Cart" },
  ];

  return (
    <nav className="bg-[#C5A992]/10 text-black border-t border-b border-[#E0E0E0]">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-5xl font-bogle">BookStore</div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center text-xl font-raleway text-[#777]">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `mx-5 transition-colors duration-200 ${
                  isActive ? "text-[#daa556]" : "hover:text-[#daa556]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu (always in DOM for animation) */}
      <div
        className={`md:hidden bg-[#C5A992]/20 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-4 font-raleway text-lg text-[#777]">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? "text-[#daa556]" : "hover:text-[#daa556]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
