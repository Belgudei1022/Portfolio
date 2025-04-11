"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    console.log("Element:", element);

    // Create ScrollTrigger with pinning
    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top center",
      pin: true,
      scrub: true,
      scroller: document.querySelector("[data-scroll-container]"), // Use scrollerProxy
    });

    const flex = element.querySelector(".outside");
    const texts = Array.from(flex?.querySelectorAll(".text") || []);

    if (texts.length > 0) {
      texts.forEach((text) => {
        gsap.fromTo(
          text,
          {
            x: -400,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 3,
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
              scroller: document.querySelector("[data-scroll-container]"), // Use scrollerProxy
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col justify-center">
      <div className="ml-[500px] flex flex-col w-[700px] outside">
        <h1 className="text-white text-[130px] text">Hi i'm</h1>
        <h1 className="text-[#A69686] text-[130px] text">Belgudei</h1>
        <h1 className="text-white text-[130px] text">Full-Stack Developer</h1>
      </div>
    </div>
  );
};

export default AboutSection;
