import React from "react";
import { PrimaryBtn } from "./buttons/PrimaryBtn";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex items-center bg-[url('/images/background.jpg')] bg-cover bg-center min-h-screen pb-28">
      <div className="container flex flex-col md:flex-row items-center space-x-14 mb-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-10">
          <Image
            src="/images/me.png"
            alt="Logo"
            width={200}
            height={200}
            className="md:hidden"
          />

          <div className="flex flex-col space-y-2">
            <h2 className="text-5xl md:text-[5.5rem] leading-none">
              Full stack web developer
            </h2>
            <p className="text-primary text-2xl md:text-4xl">
              specializing in creating dynamic web applications that solve
              real-world problems!
            </p>
          </div>

          <PrimaryBtn className="px-20 text-2xl md:text-3xl">
            Contact
          </PrimaryBtn>
        </div>

        <Image
          src="/images/me.png"
          alt="Logo"
          width={370}
          height={370}
          className="hidden md:block"
        />
      </div>
    </section>
  );
};

export default About;
