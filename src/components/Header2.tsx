
'use client';
import { useState } from 'react'
import Link from "next/link"
import HandBag from '@/app/asssests/Handbag.svg'
import Image from "next/image"
import User from '@/app/asssests/User.svg'
import { Menu, X } from 'lucide-react'
import { FiSearch } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Header2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname();
    const menuItems = [
        { name: "Home", href: "/", active: true },
        { name: "Menu", href: "/menu" },
        { name: "Blog", href: "/blog" },
        { name: "Pages", href: "/pages" },
        { name: "About", href: "/about" },
        { name: "Shop", href: "/shop" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="w-full bg-[#0D0D0D] fixed top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7 z-20">
            <nav className="flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
                >
                    Food<span className="text-[#FF9F0D]">tuck</span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white z-10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`
                        fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
                        lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
                        transition-all duration-300 ease-in-out
                        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
                    `}
                >
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`
                                    text-[16px] leading-6 font-inter transition-colors 
                                    ${pathname === item.href 
                                        ? "text-[#FF9F0D] font-bold" 
                                        : "text-white hover:text-[#FF9F0D]"}
                                `}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/" >
                        <FiSearch className="text-white hover:text-[#FF9F0D] transition-colors" size={20} />
                    </Link>
                    <Link href="/">
                        <Image src={User} alt="user" width={24} height={24} />
                    </Link>
                    <Link href="/" >
                        <Image src={HandBag} height={24} width={24} alt="" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}