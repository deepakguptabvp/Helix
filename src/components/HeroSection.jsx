import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:p-12 xl:p-16 2xl:p-24 max-w-full items-center justify-center bg-white p-3">
      <div className="flex flex-col lg:flex-row items-center justify-center max-h-screen">
        {/* Content part */}
        <div className="mt-6 space-y-4 w-full max-w-xl lg:max-w-lg xl:max-w-2xl">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sans leading-snug">
            Your{" "}
            <strong className="text-primary">Trusted IT Manager</strong> From
            Solutions to Support
          </h1>
          <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify text-gray-700">
            We deliver end-to-end IT solutions, from consulting to support,
            ensuring seamless technology so you can focus on growth.
          </p>
          <div className="flex">
            <Link to="/">
              <button
                title="login"
                type="button"
                className="flex gap-3 text-center justify-center text-white bg-primary focus:outline-none font-medium rounded-full text-sm lg:text-base xl:text-lg 2xl:text-xl lg:px-6 lg:py-3 xl:px-8 xl:py-4 p-2 m-auto cursor-pointer"
              >
                Get Started Now
                <BsArrowUpRightCircleFill size={24} className="ml-1" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image part */}
        <div className="flex items-center mx-auto my-8 lg:w-auto">
          <img
            src="../assets/hero-section.webp"
            alt="Hero Section"
            className="object-contain transform -scale-x-100 
                       lg:h-[503px] lg:w-[436px] 
                       xl:h-[560px] xl:w-[480px] 
                       2xl:h-[640px] 2xl:w-[560px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
