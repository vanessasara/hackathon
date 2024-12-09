import React from "react";
import Image from "next/image";
import HeroImage from '@/app/asssests/Hero.png'
import HeroBackgorund from '@/app/asssests/HeroBackground.png'
import { Button } from "./ui/button";

function Hero() {
  return (
    <section
    className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${HeroBackgorund.src})`,
    }}
  >
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-85 z-0"></div>
  
    {/* Content (Text and Image) */}
      <div className="conatiner">
    <div className="relative z-10 flex flex-col md:flex-row w-full px-6 md:px-[80px] lg:px-[135px] ">

      {/* Text Content */}
      <div className="text-white w-full md:w-[50%] md:h-[50%] flex flex-col justify-center">
        <h1 className="top-heading">Its Quick & Amusing!</h1>
        <h1 className="hero-heading">
          <span className="highlighted-text">Th</span>e Art of Speed Food Quality
        </h1>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-sans mt-4 text-center md:text-left md:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
          <Button className="bg-secondary text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
            See Menu
          </Button>
        </div>
      </div>
  
      {/* Hero Image */}
      <div className="mt-[30px] md:mt-0 md:w-[50%] md:h-[50%] flex justify-center">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="w-[877px] md:w-auto max-w-[300px] md:max-w-full shrink-0"
          />
      </div>
          </div>
    </div>
  </section>
  
  );
}

export default Hero;
