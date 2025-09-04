import React from "react";
import Lottie from "lottie-react";
import cardData from "../data/GrowHelixData";

const GrowWithHelix = () => {
  return (
    <div className="w-full">
      {/* Top Section with BG + Overlay */}
      <div className="relative bg-primary flex items-center min-h-[160px] md:min-h-[224px]">
        {/* Background Image */}
        <img
          src="../assets/GrowWithHelix.png"
          alt="Grow With Helix"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 text-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Heading */}
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-light leading-snug">
              Grow with Helix –{" "}
              <span className="font-semibold">Smarter IT Solutions</span>
            </h1>
          </div>

          {/* Subtext */}
          <div>
            <p className="text-xs sm:text-sm md:text-base">
              Grow your business with Helix’s advanced IT solutions and
              services. We ensure the best results.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 -mt-8 md:-mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="z-10 bg-white shadow-md rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center min-h-[260px]"
          >
            {/* Lottie animation */}
            <Lottie
              path={item.lottie}
              loop={false}
              autoplay
              className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-lg"
            />

            <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">
              {item.label}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowWithHelix;
