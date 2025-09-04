import React from "react";
import { BsArrowUpRightCircle, BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-full items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row  items-center justify-center">
        {/*Content part*/}
        <div className="space-y-4 text-left">
          <h1 className="text-4xl font-semibold font-sans">
            Your <span className="text-primary"> Trusted IT Manager</span> From
            Solutions to Support
          </h1>
          <p className="text-sm">
            We deliver end-to-end IT solutions, from consulting to support,
            ensuring seamless technology so you can focus on growth.
          </p>
          <div className="flex ">
            <Link to="/">
              <button
                title="login"
                type="button"
                className="flex gap-3 text-center justify-center text-white bg-primary focus:outline-none font-medium rounded-full text-sm md:px-5 md:py-3 p-2 m-auto cursor-pointer"
              >
                Get Started Now
                <BsArrowUpRightCircleFill size={20} />
              </button>
            </Link>
          </div>
        </div>

        {/*Image part */}
        <div className="flex w-2xl">
          <img
            src="../assets/hero-section.webp"
            alt="Hero Section Image"
            className="object-contain transform -scale-x-100 md:h-[503px] md:w-[436px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
