
"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSitrox } from "react-icons/fa6";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 text-md font-sans bg-sky-100 bg-opacity-70 text-white shadow-xl sticky top-0 z-50 max-w-full overflow-x-hidden">
      
      {/* Website Name / Logo */}
      <div className="text-black text-xl font-extrabold border-b-2 border-transparent  px-6 py-2 transition duration-300 ease-in-out  flex items-center">
        <Link href="/" ><FaSitrox  size={32} /></Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-white text-xl">
          {isOpen ? "" : <FaBars />}
        </button>
      </div>

     
      <div className="hidden md:flex space-x-4 items-center">
      <Link
          href="/"
          className="text-md font-bold text-[#270d0d]/100 hover:text-slate-500 border-b-2 border-transparent px-6 py-2 transition duration-300 ease-in-out"
        >
        Home
        </Link>
        

        <Link
          href="/blogs/about"
          className="text-md font-bold text-[#270d0d]/100 hover:text-slate-500 border-b-2 border-transparent  px-4 py-2 transition duration-300 ease-in-out"
        >
          About
        </Link>

        <Link
          href="/blogs/contact"
          className="text-md font-bold text-[#270d0d]/100 hover:text-slate-500 border-b-2 border-transparent  px-4 py-2 transition duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu (Hidden on Larger Screens) */}
      <div
        className={`fixed inset-0 text-black bg-slate-300 bg-opacity-90 z-50 p-4 flex flex-col space-y-4 md:hidden h-80 items-center  justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-black text-3xl self-end mt-1 "
        >
          <FaTimes />
        </button>
        <Link
          href="/"
          className="text-black hover:text-slate-500 px-4 py-2 hover:underline  transition duration-300 ease-in-out border-b-2 border-transparent "
          onClick={toggleMenu}
        >
         Home
        </Link>
       

        <Link
          href="/blogs/about"
          className="text-black hover:text-slate-500 px-4 py-2 hover:underline  transition duration-300 ease-in-out border-b-2 border-transparent "
          onClick={toggleMenu}
        >
         
          About
        </Link>

        <Link
          href="/blogs/contact"
          className="text-black hover:text-slate-500 px-4 py-2  hover:underline transition duration-300 ease-in-out border-b-2 border-transparent "
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

