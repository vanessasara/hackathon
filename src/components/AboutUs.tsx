import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import About3 from "@/app/asssests/About3.png"
import About2 from "@/app/asssests/About2.png"
import About4 from "@/app/asssests/About4.png"

function AboutUs() {
  return (
    
    <section className="bg-black px-3 md:px-[40px] lg:px-[100px] py-[50px]">
      <div className="container">
      {/* Heading and Images Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-evenly">

        {/* Text Section */}
        <div className="text-white w-full lg:w-[50%] mb-8 lg:mb-0">
          <h1 className="top-heading">
            About us
          </h1>
          <h1 className="hero-heading">
            <span className="highlighted-text">We</span> Create the best foody product
          </h1>
          <p className="text-[16px] md:text-[16px] lg:text-[18px] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <ul className="mt-6">
            <li className="icon">
              <FaCheck className="mr-2" /> Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="icon">
              <FaCheck className="mr-2" /> Quisque diam pellentesque bibendum non dui volutpat.
            </li>
            <li className="icon">
              <FaCheck className="mr-2" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <button className="bg-secondary text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
              See More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col  lg:w-[50%] justify-center items-center">
          {/* First Image (Responsive) */}
          <div className="relative w-[320px] sm:w-[320px] md:w-[450px] lg:w-[450px]  h-[200px] mb-4 lg:mb-0">
            <Image
              src={About3}
              alt="About Image 1"
              className="object-cover w-[320px] h-auto rounded-[6px_0px_0px_0px] opacity-100"
              layout="responsive"
              
              />
          </div>

          {/* Two Images in Row */}
          <div className="flex flex-col md:flex-row gap-5 lg:flex-row mt-[16px] lg:mt-[45px] w-full justify-between">
            <div className="relative w-full sm:w-[300px] md:w-[322px] lg:w-[322px] xl:w-[350px] h-[auto] mb-4 md:mb-0">
              <Image
                src={About2}
                alt="About Image 2"
                className="object-cover rounded-[6px_0px_0px_0px] opacity-100"
                layout="responsive"
                width={322}
                height={194}
              />
            </div>
            <div className="relative w-full sm:w-[300px] md:w-[322px] lg:w-[322px] xl:w-[350px] h-[auto]">
              <Image
                src={About4}
                alt="About Image 3"
                className="object-cover rounded-[6px_0px_0px_0px] opacity-100"
                layout="responsive"
                width={322}
                height={194}
                />
            </div>
          </div>
        </div>
      </div>
                </div>
    </section>
  );
}

export default AboutUs;