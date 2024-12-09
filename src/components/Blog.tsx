import React from "react";

import Image from "next/image";
import Blog1 from '@/app/asssests/Blog1.png'
import Blog2 from '@/app/asssests/Blog2.png'
import Blog3 from '@/app/asssests/Blog3.png'
import { AiOutlineLike } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";

function Blog() {
    const posts = [
        {
            id: 1,
            date:"10 February 2022 ",
            title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
            imageSrc: Blog1,
        },
        {
            id: 2,
            date:"10 February 2022 ",
            title: "Morbi Sodales Tellus Elit In Blandit Risus Suscipit A",
            imageSrc: Blog2,
        },
        {
            id: 3,
            date:"10 February 2022 ",
            title: "Curabitur rutrum velit ac congue malesuada",
            imageSrc: Blog3,
        },
    ];
    return (
        <section className="bg-black md:px-[135px]   py-[50px]">
        <div className="flex flex-col justify-center items-center">
      <h1 className="top-heading">
      Food Category
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-secondary">Ch</span>oose Food Iteam
        </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 flex-grow mt-[59px]">
  {posts.map((post) => (
    <div key={post.id} className="w-full mb-8 border border-white">
      <div className="relative w-full h-[300px]"> {/* Container for image */}
        <Image
          src={post.imageSrc}
          alt={post.title}
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image covers the box
          className="rounded-lg" // Optional: Adds rounded corners to the image
        />
      </div>
      <h2 className="text-secondary text-[16px] font-normal mt-[30px] px-[43px]">{post.date}</h2>
      <h2 className="text-white text-[24px] font-bold px-[43px] mt-[16px]">{post.title}</h2>
      <div className="text-white flex justify-between px-[43px] my-[32px]">
        <h1>Learn More</h1>
        <div className="flex gap-[8px]">
          <AiOutlineLike />
          <RiMessage2Line />
          <FiShare2 />
        </div>
      </div>
    </div>
  ))}
</div>

        </section>

    )
}

export default Blog;