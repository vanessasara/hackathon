import React from "react";
import BackgroundImage from '@/app/asssests/bgres.png'
import { CiPlay1 } from "react-icons/ci";

function RestaurantActive() {
  return (
    <section className="relative bg-black  ">
      <div className="relative py-10 sm:py-16 lg:py-20 bg-cover bg-center"
    style={{
      backgroundImage: `url(${BackgroundImage.src})`}}>
        <div className="z-10 flex flex-col justify-center items-center w-[100%] h-[100%] text-white">
          <h1 className="text-secondary md:text-[32px] text-[20px] font-bold md:text-right text-center">Restaurant Active Process</h1>
          <h1 className="text-[25px] md:text-[48px] font-bold md:w-[60%] text-center mt-[20px] md:mt-0 md:text-right"><span className="text-secondary">We</span> Document Every Food Bean Process untile it is saved</h1>
          <h3 className="w-[60%] text-base  mt-[20px] md:mt-0"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna,
          </h3>
          <div className="flex md:flex-row flex-col justify-center items-center gap-[24px] mt-[33px]">
            <button className="border border-secondary w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[30px]">Read More</button>
            <div className="w-[60px] h-[60px] rounded-full bg-secondary flex justify-center items-center">
              <CiPlay1 className="h-[24px] w-[24px]" />
            </div>
            <h2 className="font-semibold text-base">Play Video</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantActive;