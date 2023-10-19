"use client";
import React, { useRef } from "react";
import Typed from "react-typed";
import { CustomButton } from "./Index";
import Image from "next/image";
import carImg from "@/Assets/hero.png"

const Hero = () => {
  const myRef = useRef(null);
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover, Reserve, and Rent a Car with Speed and Ease!
        </h1>
        <div className="h-16 hero__subtitle">
          <Typed
            className="italic lowercase hero__subtitle"
            strings={["...Streamlined Solutions for Your Car Rental Needs"]}
            typeSpeed={40}
            backSpeed={50}
            showCursor={false}
            fadeOut
            shuffle={true}
            loop
          />
        </div>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll} btnType={"button"} />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={carImg} alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
