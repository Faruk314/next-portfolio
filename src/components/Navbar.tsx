import { Menu } from "lucide-react";
import React from "react";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="md:bg-primary h-20 md:h-28 text-white bg-gray-100 shadow-[0_25px_40px_-12px_rgba(0,0,0,0.5)] z-20">
      <div className="container flex items-center justify-between h-full">
        <div className="text-6xl"></div>

        <div className="hidden md:flex items-center space-x-6 text-3xl cursor-pointer">
          <span className="hover:text-blue-500 transition-colors duration-300">
            About
          </span>
          <span className="hover:text-green-500 transition-colors duration-300">
            Skills
          </span>
          <span className="hover:text-red-500 transition-colors duration-300">
            Projects
          </span>
          <span className="hover:text-purple-500 transition-colors duration-300">
            Contact
          </span>

          <div className="flex space-x-2">
            <button className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <Github className="text-primary" fill="#2b6faf" size={25} />
            </button>
          </div>
        </div>

        <Menu className="text-black md:hidden" size={40} />
      </div>
    </nav>
  );
}
