import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMysql, DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiMongodb,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import SkillItem from "./SkillItem";
import { CiStreamOn } from "react-icons/ci";

const frontendSkills = [
  { name: "React", icon: <SiReact /> },
  { name: "ReactNative", icon: <TbBrandReactNative /> },
  { name: "ReactQuery", icon: <SiReactquery /> },
  { name: "NextJS", icon: <TbBrandNextjs /> },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },

  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "HTML", icon: <AiFillHtml5 /> },
  { name: "CSS", icon: <DiCss3 /> },
];

const backendSkills = [
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  {
    name: "MySQL",
    icon: <DiMysql />,
  },
  {
    name: "Postgres",
    icon: <DiPostgresql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Socket.io",
    icon: <SiSocketdotio />,
  },
  { name: "Redis", icon: <SiRedis /> },
  { name: "WebRTC", icon: <SiWebrtc /> },
  { name: "Mediasoup", icon: <CiStreamOn /> },
];

export default function Skills() {
  return (
    <section className="flex items-center bg-[url('/images/background.jpg')] bg-cover">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-[5rem] leading-none">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {renderFrontendSkills()}

            {renderBackendSkills()}
          </div>
        </div>
      </div>
    </section>
  );
}

export function renderFrontendSkills() {
  return (
    <div>
      <p className="text-primary text-2xl md:text-3xl mb-2">Frontend</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={item.name}
            animationDuration={index * 100}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export function renderBackendSkills() {
  return (
    <div>
      <p className="text-primary text-2xl md:text-3xl mb-2">Backend</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={item.name}
            animationDuration={index * 100}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
