"use client";

import React from "react";
import classNames from "classnames";
import "swiper/css";
import ProjectSlider from "./ProjectSlider";

export default function Projects() {
  return (
    <section className="flex items-center bg-[url('/images/background.jpg')] bg-cover py-40">
      <div className="container mx-auto">
        <div className={classNames("flex flex-col items-center", {})}>
          <h2 className="text-5xl md:text-[5rem] leading-none">My projects</h2>
          <p className="text-primary text-2xl md:text-3xl">
            Check out some of my recent work
          </p>
        </div>

        <ProjectSlider />
      </div>
    </section>
  );
}
