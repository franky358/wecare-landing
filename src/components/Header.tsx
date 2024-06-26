"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMessageCircle, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../../public/images/logo.png";

interface HeaderProps {
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-8 px-6 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Wecare Logo"
            width={150}
            height={30}
            className="relative z-20"
          />
        </Link>
        <div className="flex items-center lg:hidden">
          <Link
            href="#"
            className="inline-flex items-center text-sm poppins-semibold font-bold px-2 py-2 bg-[#DBF3BF] text-[#02045C] rounded-lg mr-4"
          >
            <FiMessageCircle className="" color="#02045C" size="1.5em" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white relative z-50 focus:outline-none"
          >
            {!isMenuOpen && (
              <FiMenu
                className="w-6 h-6"
                color={isHome ? "white" : "#02045c"}
                size="1.5em"
              />
            )}
          </button>
        </div>
        <nav className="hidden lg:flex space-x-10 items-center z-40">
          <Link
            href="/"
            className={`poppins-semibold text-sm ${isHome && "text-white"}`}
          >
            <span>Asistente Inteligente</span>
          </Link>
          <Link
            href="#"
            className={`poppins-semibold text-sm ${isHome && "text-white"}`}
          >
            <span>Conocenos</span>
          </Link>
          <Link
            href="/salauno"
            className={`poppins-semibold text-sm ${isHome && "text-white"}`}
          >
            <span>Salauno</span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center text-sm poppins-semibold font-bold px-4 py-2 bg-[#DBF3BF] text-[#02045C] rounded-lg"
          >
            <FiMessageCircle className="mr-2" color="#02045C" size="1.5em" />
            Contactanos
          </Link>
        </nav>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-r from-violet-50 to-violet-100 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }  z-50`}
      >
        <button
          onClick={toggleMenu}
          className="text-white absolute top-4 right-4 focus:outline-none z-50"
        >
          <FiX className="w-6 h-6" color="#02045c" size="1.5em" />
        </button>
        <nav className="flex flex-col items-center space-y-8 mt-24">
          <Link
            href="/home"
            className="poppins-semibold text-sm text-[#02045c]"
          >
            <span>Asistente Inteligente</span>
          </Link>
          <Link
            href="/about-us"
            className="poppins-semibold text-sm text-[#02045c]"
          >
            <span>Conocenos</span>
          </Link>
          <Link
            href="/salauno"
            className="poppins-semibold text-sm text-[#02045c]"
          >
            <span>Salauno</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
