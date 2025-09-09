import React from "react";
import { PrimaryBtn } from "./buttons/PrimaryBtn";

export default function Footer() {
  return (
    <section className="relative bg-[url('/images/background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0" />
      <div className="relative container mx-auto px-6 py-20 flex flex-col items-center text-center space-y-10">
        <p className="text-4xl md:text-7xl">
          Let’s make something great together
        </p>

        <PrimaryBtn className="px-10 md:px-16 py-4 text-lg md:text-2xl">
          Get in touch
        </PrimaryBtn>

        <div className="w-full h-px bg-primary my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full text-sm md:text-xl text-black/80">
          <p>© {new Date().getFullYear()} Faruk Spahic</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">
              About
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Skills
            </a>

            <a href="#" className="hover:text-gray-400 transition">
              Projects
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
