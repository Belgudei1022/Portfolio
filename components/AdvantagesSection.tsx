"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AdvantagesSection = () => {
  useEffect(() => {
    const title = document.querySelector(".main-title");

    if (title) {
      gsap.fromTo(
        title,
        { x: 700, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    const advantages = document.querySelectorAll(".advantage");

    advantages.forEach((advantage) => {
      const box = advantage.querySelector(".box");
      const text = advantage.querySelector(".text-slide");

      if (box) {
        gsap.fromTo(
          box,
          { x: -400, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: advantage,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      }

      if (text) {
        gsap.fromTo(
          text,
          { x: 400, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: advantage,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-[2000px] flex flex-col relative outside">
      <div className="ml-[250px] mt-[200px]">
        <h1 className="text-white text-[130px] main-title">My Advantages</h1>
      </div>

      {/* Advantage 1 */}
      <div className="advantage w-full h-[500px] flex flex-row items-end gap-[400px] absolute top-[500px] pl-[250px]">
        <div className="bg-white w-[350px] h-full drop-shadow-2xl box"></div>
        <h1 className="text-white text-[95px] text-slide">[01] Team Work</h1>
      </div>

      {/* Advantage 2 */}
      <div className="advantage w-full h-[500px] flex flex-row items-end gap-[400px] absolute top-[900px] pl-[350px]">
        <div className="bg-white w-[350px] h-full drop-shadow-2xl box"></div>
        <h1 className="text-white text-[95px] text-slide">
          [02] Quick Learner
        </h1>
      </div>

      {/* Advantage 3 */}
      <div className="advantage w-full h-[500px] flex flex-row items-end gap-[400px] absolute top-[1300px] pl-[200px]">
        <div className="bg-white w-[350px] h-full drop-shadow-2xl box"></div>
        <h1 className="text-white text-[95px] text-slide">
          [03] Always On Time
        </h1>
      </div>
    </div>
  );
};

export default AdvantagesSection;
