import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative mt-16 md:mt-20"> 
      {/* Navbar ke neeche jagah dene ke liye mt add kiya */}

      {/* Banner Images */}
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block object-cover"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-4 md:pl-16 lg:pl-24 text-center md:text-left">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[90%] md:max-w-[380px] lg:max-w-[480px] leading-tight lg:leading-snug text-gray-900 drop-shadow-md">
          Freshness you can Trust, Savings you will Love!
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6 font-medium">
          {/* Shop Now Button */}
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-6 sm:px-8 md:px-9 py-2.5 sm:py-3 bg-[#4fbf8b] hover:bg-[#44ae7c] transition rounded text-white cursor-pointer text-sm sm:text-base"
          >
            Shop now
            <img
              className="md:hidden transition group-hover:translate-x-1 w-4 h-4"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          {/* Explore Deals Button */}
          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-8 md:px-9 py-3 cursor-pointer text-gray-800 text-base"
          >
            Explore deals
            <img
              className="transition group-hover:translate-x-1 w-4 h-4"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
