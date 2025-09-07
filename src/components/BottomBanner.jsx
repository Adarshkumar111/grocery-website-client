import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      {/* Desktop Banner */}
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block"
      />
      {/* Mobile Banner */}
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      {/* Content Overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center text-center 
                      md:items-end md:text-right md:justify-center pt-12 md:pt-0 md:pr-24"
      >
        <div className="bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4fbf8b]">
            Why We Are the Best?
          </h1>

          {/* Features */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mt-3 max-w-xs md:max-w-sm"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 sm:w-9 md:w-11"
              />
              <div className="text-left md:text-right">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-500/70 text-xs sm:text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
