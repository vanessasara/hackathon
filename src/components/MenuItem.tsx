import React from 'react';
import Image from "next/image";
import Item1 from '@/app/asssests/Item1.png'
import Item2 from '@/app/asssests/Item2.png'
import Item3 from '@/app/asssests/Item3.png'
import Item4 from '@/app/asssests/Item4.png'
import Item5 from '@/app/asssests/Item5.png'
import Item6 from '@/app/asssests/Item6.png'
import Item7 from '@/app/asssests/Item7.png'
import Item8 from '@/app/asssests/Item8.png'
import Menu from '@/app/asssests/Ourmenu1.png'
import Menubg from '@/app/asssests/Menubg.png'

const menuItems = [
  { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: Item1 },
  { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: Item2 },
  { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: Item3 },
  { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: Item4 },
  { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: Item5 },
  { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: Item6 },
  { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: Item7 },
  { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: Item8 },
];

const MenuComponent = () => {
  return (
    <section className='bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12'>
      <div className="container mx-auto">
        <h2 className="top-heading text-center">Choose & Pick</h2>
        <h1 className="text-3xl font-bold text-center mb-8"><span className='text-secondary'>Fr</span>om Our Menu</h1>

        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
            <li className="cursor-pointer hover:text-secondary">Breakfast</li>
            <li className="cursor-pointer hover:text-secondary">Lunch</li>
            <li className="cursor-pointer hover:text-secondary">Dinner</li>
            <li className="cursor-pointer hover:text-secondary">Dessert</li>
            <li className="cursor-pointer hover:text-secondary">Drink</li>
            <li className="cursor-pointer hover:text-secondary">Snack</li>
            <li className="cursor-pointer hover:text-secondary">Soups</li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Decorative Image */}
          <div
            className="flex items-center justify-center bg-center  bg-no-repeat"
            style={{
              backgroundImage: `url(${Menubg.src})`,
              backgroundSize: 'contain', // Makes the background image smaller
              width: '50%', // Adjusts the width to match the menu image
              height: 'auto', // Ensures it scales proportionally
            }}
          >
            <div className="hidden lg:block w-[366px] h-[362px]">
              <Image src={Menu} alt="Menu Decor" layout="responsive" />
            </div>
          </div>
          {/* Right Section: Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
            {menuItems.map((item, index) => (
              <div key={index} className="flex 00 rounded-lg overflow-hidden shadow-lg">
                <div className="w-1/3 ">
                  <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <p className="text-[11px] text-gray-400 mb-2">{item.description}</p>
                  <h2 className="text-secondary font-bold">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;