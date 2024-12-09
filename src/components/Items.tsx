import React from 'react'
import { ChefHat, SliceIcon } from 'lucide-react'
import { ForkKnife } from 'lucide-react'
import { FaBurger } from 'react-icons/fa6'
function Items() {
  return (
    <>
     <section className="relative bg-black md:px-[135px] md:py-[120px] ">
  <div 
    className="absolute inset-0" 
    style={{
      backgroundImage: "url('/item.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      // mixBlendMode: "multiply",
      opacity: 0.2 // Adjust the darkness level
    }}
  ></div>

  {/* Content */}
  <div className="relative flex md:flex-row flex-col justify-center items-center gap-5 md:gap-[161px]">
    <div className="w-[218px] h-[247px] text-white flex flex-col justify-center items-center">
      <ChefHat/>
      <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
      <h2 className="mt-[20px] md:text-[40px] font-bold">420</h2>
    </div>
    <div className="w-[218px] h-[247px] text-white flex flex-col justify-center items-center">
      <FaBurger/>
      <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
      <h2 className="mt-[20px] md:text-[40px] font-bold">420</h2>
    </div>
    <div className="w-[218px] h-[247px] text-white flex flex-col justify-center items-center">
     <ForkKnife/>
      <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
      <h2 className="mt-[20px] md:text-[40px] font-bold">420</h2>
    </div>
    <div className="w-[218px] h-[247px] text-white flex flex-col justify-center items-center">
      <SliceIcon/>
      <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
      <h2 className="mt-[20px] md:text-[40px] font-bold">420</h2>
    </div>
  </div>
</section>

    </>
  )
}

export default Items