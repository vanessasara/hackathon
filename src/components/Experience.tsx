import Menu3 from '@/app/asssests/Menu3.png'
import { ExperienceItem } from '@/constant/Experience'
import React from 'react'
import Image from 'next/image'

export default function Experience() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-cover bg-center"
    style={{
      backgroundImage: `url(${Menu3.src})`}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center text-center">
          {ExperienceItem.map((item, index) => (
            <div 
              key={index} 
              className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 mb-8 sm:mb-10 lg:mb-12 flex flex-col justify-center items-center"
            >
              <Image src={item.src} alt=''/>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-4">
                {item.label}
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4 mb-4 sm:mb-5 lg:mb-6">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}