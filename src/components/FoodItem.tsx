import React from 'react';
import Image from 'next/image';
import FoodItem1 from '@/app/asssests/FoodItem1.png'
import FoodItem2 from '@/app/asssests/FoodItem2.png'
import FoodItem3 from '@/app/asssests/FoodItem3.png'
import FoodItem4 from '@/app/asssests/FoodItem4.png'

const FoodItem: React.FC = () => {
  const items = [
    { id: 1, Image: FoodItem1, label: "Save 50% on Fast Food" },
    { id: 2, Image: FoodItem2, label: "Delicious Burgers" },
    { id: 3, Image: FoodItem3, label: "Healthy Salads" },
    { id: 4, Image: FoodItem4, label: "Desserts" },
  ];
    return (
      <section className="bg-black text-white py-16 px-20">
      <div className="container mx-auto text-center">
        {/* Food category text placed on top */}
        <p className='top-heading text-center'>
          Food Category
        </p>
    
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Ch</span>oose Food Item
        </h2>
    
        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <div
                className="relative w-full max-w-full h-auto"
                style={{
                  borderRadius: '6px 0px 0px 0px',
                  overflow: 'hidden', // Prevents overflow of images
                  opacity: 1, // Ensures visibility
                }}
              >
                <Image
                  src={item.Image} // Correct path to images
                  alt={item.label}
                  className="object-cover rounded-lg"
                  layout="responsive"  // Ensures it maintains aspect ratio
                  width={500} // Adjust width for responsiveness
                  height={300} // Adjust height for responsiveness
                />
              </div>
    
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    
  );
};

export default FoodItem;
