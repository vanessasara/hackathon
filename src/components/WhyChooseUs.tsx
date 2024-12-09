import Image from 'next/image';
import Choose1 from '@/app/asssests/Choose1.png'
import Choose2 from '@/app/asssests/Choose2.png'
import Choose3 from '@/app/asssests/Choose3.png'
import Choose4 from '@/app/asssests/Choose4.png'
import Choose5 from '@/app/asssests/Choose5.png'
import Choose6 from '@/app/asssests/Choose6.png'

const images = [
    { id: 1, src: Choose1, alt: 'Tacos' },
    { id: 2, src: Choose2, alt: 'Burger' },
    { id: 3, src: Choose3, alt: 'Chicken' },
    { id: 4, src: Choose4, alt: 'Cheeseburger' },
    { id: 5, src: Choose5, alt: 'Salad' },
    { id: 6, src: Choose6, alt: 'Pasta' },
];

const WhyChooseUs = () => {
    return (
        <div className="bg-black text-white py-16 px-6">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12">
                {/* Left Section (Image Grid) */}
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={
                                index === 0
                                    ? 'col-span-2 row-span-2' // Make the first image span 2 rows and 2 columns
                                    : 'col-span-1 row-span-1'
                            }
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={400}
                                height={300}
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Section (Text and Icons) */}
                <div className="flex flex-col justify-center">
                    <h2 className="top-heading">Why Choose Us</h2>
                    <h1 className="text-4xl font-bold mb-6 ">
                        <span className='text-secondary'>Ex</span>
                        tra Ordinary Taste <br />
                        And Experienced
                    </h1>
                    <p className="text-gray-300 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                        bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
                        pretium donec id elementum.
                    </p>

                    {/* Icons Section */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-secondary p-4 rounded-full mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 18.364A5.992 5.992 0 0112 21a5.992 5.992 0 01-4.5-2.636M12 12.75v.008h.008v-.008H12zM20.25 9.75a8.25 8.25 0 10-16.5 0 8.25 8.25 0 0016.5 0z"
                                    />
                                </svg>
                            </div>
                            <p className="text-center">Fast Food</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-secondary p-4 rounded-full mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 12.75h-15m15 0l-2.775-2.775m2.775 2.775L16.725 15.5m-7.05-8.25h3.65a1.125 1.125 0 01.806 1.927l-1.625 1.45 1.625 1.448a1.125 1.125 0 01-.806 1.928h-3.65a1.125 1.125 0 01-.805-1.927L9.8 11.05 8.175 9.602A1.125 1.125 0 019.805 7.5z"
                                    />
                                </svg>
                            </div>
                            <p className="text-center">Lunch</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-secondary p-4 rounded-full mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 18.364A5.992 5.992 0 0112 21a5.992 5.992 0 01-4.5-2.636M12 12.75v.008h.008v-.008H12zM20.25 9.75a8.25 8.25 0 10-16.5 0 8.25 8.25 0 0016.5 0z"
                                    />
                                </svg>
                            </div>
                            <p className="text-center">Dinner</p>
                        </div>
                    </div>

                    {/* Badge Section */}
                    <div className="flex items-center">
                        <div className="bg-secondary text-black px-6 py-4 rounded-lg text-2xl font-bold mr-4">
                            30+
                        </div>
                        <p className="text-xl">Years of Experienced</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;