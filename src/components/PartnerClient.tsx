import Partner1 from '@/app/asssests/Partner1.png'
import Partner2 from '@/app/asssests/Partner2.png'
import Partner3 from '@/app/asssests/Partner3.png'
import Partner4 from '@/app/asssests/Partner4.png'
import Partner5 from '@/app/asssests/Partner5.png'
import Partner6 from '@/app/asssests/Partner6.png'
import Image from 'next/image'
import React from 'react'

const partners = [
  { name: 'Restaurant', logo: Partner1 },
  { name: 'Bakery', logo: Partner2 },
  { name: 'Fork & Spoon', logo: Partner3 },
  { name: 'Wolf Coffee', logo: Partner4 },
  { name: 'Bistro', logo: Partner5 },
  { name: 'Bakery', logo: Partner6 },
]

export default function PartnersAndClients() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-lg sm:text-xl text-gray-700 mb-2">Partners & Clients</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          We work with the best people
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="max-h-24 sm:max-h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}