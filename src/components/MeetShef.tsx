import React from "react";
import chef1 from "@/app/asssests/Chef1.png";
import chef2 from "@/app/asssests/Chef2.png";
import chef3 from "@/app/asssests/Chef3.png";
import chef4 from "@/app/asssests/Chef4.png";
import Image from "next/image";

 
function MeetShef() {
  return (
    <>
      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="top-heading text-center">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-secondary">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center  items-center gap-[20px] mt-[50px]">
          <Image src={chef1} alt="" className="lg:w-[200px] md:w-[150px]  cursor-pointer"/>
          <Image src={chef2} alt="" className="lg:w-[200px] md:w-[150px] cursor-pointer" />
          <Image src={chef3} alt="" className="lg:w-[200px] md:w-[150px] cursor-pointer" />
          <Image src={chef4} alt="" className="lg:w-[200px] md:w-[150px] cursor-pointer" />
        </div>
      </section>
    </>
  );
}

export default MeetShef;