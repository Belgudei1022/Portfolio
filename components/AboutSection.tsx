"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Lenis from "@studio-freight/lenis";

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const flex = document.querySelector(".outside");
    const texts = Array.from(flex?.querySelectorAll(".text") || []);

    texts.forEach((text, index) => {
      gsap.fromTo(
        text,
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          scrollTrigger: {
            trigger: text,
            start: "top 1080px",
            end: "top 1000px",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="ml-[500px] flex flex-col w-[700px] outside">
        <h1 className="text-white text-[130px] text">Hi i'm</h1>
        <h1 className="text-[#A69686] text-[130px] text">Belgudei</h1>
        <h1 className="text-white text-[130px] text">Full-Stack Developer</h1>
      </div>
    </div>
  );
};

export default AboutSection;
