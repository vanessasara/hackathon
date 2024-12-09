import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import AboutUs from '@/components/AboutUs';
import FoodItem from '@/components/FoodItem';
import MeetShef from '@/components/MeetShef'
import MenuItem from '@/components/MenuItem'
import RestaurantActive from '@/components/ResturantActive'
import Blog from '@/components/Blog'
import Testimonials from '@/components/Testomonials';
import Experience from '@/components/Experience';
import WhyChooseUs from '@/components/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <FoodItem />
      <WhyChooseUs/>
      <Experience/>
      <MenuItem />
      <MeetShef />
      <Testimonials />
      <RestaurantActive />
      <Blog />
    </>
  );
};

export default Home;
