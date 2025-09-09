"use client";

import classNames from "classnames";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  name: string;
  icon: ReactNode;
  animationDuration?: number;
}

export default function SkillItem({ name, icon, animationDuration }: Props) {
  const { ref: itemRef, inView: itemElementVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      style={{
        transitionDelay: `${animationDuration}ms`,
      }}
      ref={itemRef}
      className={classNames(
        "flex flex-col items-center justify-center gap-2 bg-primary text-white rounded-lg transition-transform hover:scale-105 hover:shadow-lg py-6 md:py-8 opacity-0",
        {
          "item-fade-in": itemElementVisible,
        }
      )}
    >
      <div className="text-5xl md:text-6xl">{icon}</div>
      <p className="text-lg md:text-2xl font-medium text-center">{name}</p>
    </div>
  );
}
