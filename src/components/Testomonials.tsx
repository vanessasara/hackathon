import React from 'react'
import white from '@/app/asssests/whitebg.png'
import face from '@/app/asssests/face.png'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Testimonials() {
  return (
    <>
      <section className="bg-black px-5 md:px-[135px] py-[120px]">
        <div>
          <h2 className="text-secondary text-lg font-semibold mb-2">Testimonials</h2>
          <h2 className="text-white font-bold text-[25px] md:text-[48px] whitespace-nowrap md:whitespace-normal">
            What our client are saying
          </h2>
        </div>

        {/* Testimonial Section */}
        <div className="relative w-[100%] flex justify-center items-center mt-[40px]">
          {/* Background Card */}
          <Image
            src={white}
            alt="review"
            className="w-[400px] h-[300px] md:w-[800px] md:h-[500px] bg-white rounded-lg shadow-lg"
          />

          {/* Face Image */}
          <div className="absolute -top-[40px] flex justify-center">
            <Image
              src={face}
              alt="Client Face"
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Content inside the Card */}
          <div className="absolute w-[80%] text-center">
            <FaQuoteLeft className="text-secondary text-[30px] mx-auto mb-4" />
            <p className="text-gray-500 text-[10px] md:text-[14px] leading-[1.8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
           </p>
            <div className="flex justify-center mt-6">
              <AiFillStar className="text-secondary w-5 h-5" />
              <AiFillStar className="text-secondary w-5 h-5" />
              <AiFillStar className="text-secondary w-5 h-5" />
              <AiFillStar className="text-secondary w-5 h-5" />
              <AiOutlineStar className="text-secondary w-5 h-5" />
            </div>
            <h3 className="text-black font-bold text-[20px] md:text-[24px] mt-4">Alamin Hasan</h3>
            <p className="text-gray-500 text-[14px]">Food Specialist</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;