"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-[35px] container mx-auto w-full flex items-start justify-between relative">
      {/* Logo */}
      <div className="absolute left-1/2 top-[35px] -translate-x-1/2 md:static md:translate-x-0 z-20">
        <Image src="/logo.png" alt="Fametonic Logo" width={170} height={72} className="w-[108px] h-[46px] md:w-[170px] md:h-[72px]" />
      </div>

      {/* Hamburger Icon */}
      <div className="flex-1 flex justify-end md:hidden z-120">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? (
            <HiOutlineX className="w-7 h-7 text-white" />
          ) : (
            <HiOutlineMenu className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* Nav links (Desktop) */}
      <div className="hidden md:flex items-center font-sans font-semibold text-[18px] text-[#A9A9A9] gap-[40px] ml-auto">
        <Link href="">About Us</Link>
        <Link href="">Contact</Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-0 w-full right-0 py-20 bg-black text-[#A9A9A9] font-semibold text-[18px] flex flex-col items-center gap-4 py-6 z-100 md:hidden shadow-lg">
          <Link href="" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
