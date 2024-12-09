"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLeave from '@/app/asssests/FooterLeave.png'
import footer1 from "@/app/asssests/Footer1.png";
import footer2 from "@/app/asssests/Footer2.png";
import footer3 from "@/app/asssests/Footer3.png";

import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-x-hidden overflow-y-hidden">
    <div className="overflow-x-hidden overflow-y-hidden">

      {/* Decorative Image */}
      <Image
        src={FooterLeave}
        alt="Decorative Leaves"
        className="absolute bottom-1 rotate-12 -right-20 z-10 h-80 w-80 "
      />
      
      {/* Top Section */}
      <div className="container flex flex-col md:flex-row justify-center items-center px-6 py-8">

        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-secondary">St</span>ill Need Our Support?
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Don&#39;t wait make a smart & logical quote here. It&#39;s pretty easy.
          </p>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row items-center  justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              placeholder='Enter you email'
              className="w-full sm:flex-1 p-3 bg-secondary rounded-lg sm:rounded-r-none sm:rounded-l-lg focus:outline-none"
            />
            <button className="w-full sm:w-auto px-6 py-3 text-secondary bg-white  rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:opacity-90 mt-4 sm:mt-0">
             Subscribe Now
            </button>
          </div>
      </div>

      {/* Divider */}
      <div className="container">
        <hr className="my-4 border-secondary max-w-[92%] mx-auto md:mx-0" />
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold uppercase">About Us</h2>
            <p className="mt-4 text-sm">
              Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and
              professional chauffeured car service in major cities worldwide.
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-secondary p-4 rounded-full">
                <PiClockClockwiseBold className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-base font-medium">Opening Hours</h3>
                <p className="text-sm">Mon - Sat (8:00 - 18:00)</p>
                <p className="text-sm">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-bold uppercase">Useful Links</h2>
            <ul className="mt-4 space-y-2">
              {["About", "News", "Partners", "Team", "Menu", "Contacts"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="text-xl font-bold uppercase">Help?</h2>
            <ul className="mt-4 space-y-2">
              {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((helpLink) => (
                <li key={helpLink}>
                  <Link href="#" className="hover:underline text-sm">{helpLink}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-xl font-bold uppercase">Recent Posts</h2>
            <ul className="mt-4 space-y-4">
              {[footer1, footer2, footer3].map((img, index) => (
                <li key={index} className="flex items-center">
                  <Image src={img} alt={`Recent post ${index + 1}`} className="w-16 h-16" />
                  <div className="ml-4">
                    <p className="text-sm">20 Feb 2022</p>
                    <h3 className="text-base">Keep Your Business</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-secondary py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between px-6">
          <span className="text-sm text-black">
            © 2023 Ayeman. All Rights Reserved.
          </span>
          <div className="flex items-center space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
              <div key={index} className="bg-white p-2 rounded-full">
                <Icon className="text-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer