import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
  } = useAppContext();

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery, navigate]);

  return (
    <div className="w-full">
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all z-50">
        {/* Logo */}
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-8 sm:h-9" src={assets.logo} alt="logo" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6 md:gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">All Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {/* Search Box */}
          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <img src={assets.search_icon} alt="search" className="w-4 h-4" />
          </div>

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="w-6 opacity-80"
            />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-[#4fbf8b] w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </button>
          </div>

          {/* Login / Logout */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="cursor-pointer px-6 md:px-8 py-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-white rounded-full text-sm md:text-base"
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <img src={assets.profile_icon} alt="" className="w-9 md:w-10" />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 min-w-[120px] rounded-md text-sm z-40">
                <li
                  onClick={() => navigate("/my-orders")}
                  className="p-1.5 pl-3 hover:bg-[#44ae7c]/10 cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="p-1.5 pl-3 hover:bg-[#44ae7c]/10 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="flex items-center gap-4 sm:hidden">
          {/* Cart on Mobile */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="w-6 opacity-80"
            />
            <button className="absolute -top-2 -right-3 text-[10px] text-white bg-[#4fbf8b] w-[16px] h-[16px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            <img src={assets.menu_icon} alt="menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-3 px-5 text-sm md:hidden z-40">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)}>
              All Products
            </NavLink>
            {user && (
              <NavLink to="/my-orders" onClick={() => setOpen(false)}>
                My Orders
              </NavLink>
            )}
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>

            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  setShowUserLogin(true);
                }}
                className="cursor-pointer px-6 py-2 mt-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-white rounded-full text-sm"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="cursor-pointer px-6 py-2 mt-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-white rounded-full text-sm"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
