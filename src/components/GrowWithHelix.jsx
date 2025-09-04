import React from "react";
import Lottie from "lottie-react";
import cardData from "../data/GrowHelixData";

const GrowWithHelix = () => {
  return (
    <div className="w-full">
      {/* Top Section with BG + Overlay */}
      <div className="relative bg-primary h-auto md:h-56 flex items-center">
        {/* Background Image */}
        <img
          src="../assets/GrowWithHelix.png"
          alt="Grow With Helix"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 md:px-16 py-8 text-white grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Heading */}
          <div>
            <h1 className="text-xl md:text-2xl font-light leading-snug">
              Grow with Helix –{" "}
              <span className="font-semibold">Smarter IT Solutions</span>
            </h1>
          </div>

          {/* Subtext */}
          <div>
            <p className="text-sm md:text-base">
              Grow your business with Helix’s advanced IT solutions and
              services. We ensure the best results.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className=" container mx-auto px-4 md:px-16 -mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="z-10 bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
          >

            {/* Lottie animation */}
            <Lottie
              path={item.lottie} 
              loop
              autoplay
              className="w-20 h-20 mb-4 rounded-lg"
            />

            <h3 className="font-semibold text-lg mb-2 text-primary">
              {item.label}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowWithHelix;
