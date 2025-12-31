import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext.jsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const { cartItems } = useCart();
  console.log("Navbar cartItems:", cartItems);
  const links = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/cart", label: "Cart" },
  ];
  useEffect(() => {
    if (cartItems.length > 0) {
      setFlash(true);

      const timer = setTimeout(() => {
        setFlash(false);
      }, 500); // 0.5 sec flash

      return () => clearTimeout(timer);
    }
  }, [cartItems.length]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`
    sticky top-0 z-50
    backdrop-blur-md bg-[#C5A992]/30
    text-black
    border-b border-white/30
    transition-all duration-300
    ${flash ? "translate-y-1" : "translate-y-0"}
    ${scrolled ? "shadow-lg shadow-black/10" : ""}
  `}
    >
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-5xl font-bogle">BookStore</div>

        <div className="hidden md:flex items-center text-xl font-raleway text-[#777]">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `mx-5 relative transition-colors duration-200 ${
                  isActive ? "text-[#daa556]" : "hover:text-[#daa556]"
                }`
              }
            >
              {label}

              {label === "Cart" && cartItems.length > 0 && (
                <span
                  className={`absolute -top-2 -right-4 text-white text-xs
    w-5 h-5 flex items-center justify-center rounded-full
    bg-[#daa556]
    transition-all duration-300
    ${flash ? "scale-125 shadow-lg shadow-[#daa556]/60" : "scale-100"}
  `}
                >
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

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
                `relative transition-colors duration-200 ${
                  isActive ? "text-[#daa556]" : "hover:text-[#daa556]"
                }`
              }
            >
              {label}

              {label === "Cart" && cartItems.length > 0 && (
                <span className="ml-2 bg-[#daa556] text-white text-xs px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
