"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import shadow from "../public/Shadow.png";

const CertificateSection: React.FC = () => {
  const outside = useRef<HTMLDivElement>(null);
  const boxesContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const outside1 = outside.current;
    if (!outside1) return;

    // Pin the main container
    ScrollTrigger.create({
      trigger: outside1,
      start: "top top",
      // endTrigger: ".last",
      end: "+=3000 center",
      pin: true,
      scrub: true,
      // markers: true,
    });

    // Animate the title items
    const box = document.querySelector(".box");
    const items = Array.from(box?.querySelectorAll(".item") || []);
    if (items.length > 0) {
      items.forEach((item: Element) => {
        gsap.fromTo(
          item,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });
    }

    const whiteBoxes = Array.from(
      boxesContainer.current?.querySelectorAll(".white-box") || []
    );
    if (whiteBoxes.length > 0) {
      whiteBoxes.forEach((box: Element, index: number) => {
        gsap.fromTo(
          box,
          { y: 1200 },
          {
            y: index * -150,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: box,
              start: `top+=${index * 400} bottom`,
              end: `top+=${index * 400 + 200} center`,
              scrub: 1,
              toggleActions: "play complete none none",
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
      ref={outside}
      className="w-full min-h-screen h-[3500px]  flex flex-col justify-start relative">
      <div className="ml-[250px] flex flex-col relative w-[1200px]  box">
        <h1 className="text-white text-[200px] h-[200px] item">Here is what</h1>
        <h1 className="text-white text-[200px] item">I learned</h1>
        <h1 className="bg-white w-[750px] top-[500px] absolute h-[10px] item"></h1>
        <div
          className="bg-[#101010] blur-2xl rounded-[50%] w-[1200px] h-[1200px] absolute right-[-150px] top-[250px]"
          style={{ boxShadow: "0 -120px 205px rgba(16,16,)" }}></div>
      </div>
      <div
        ref={boxesContainer}
        className="w-full flex flex-col justify-center items-center absolute top-[150px]">
        <div className="w-full h-[800px] flex flex-col items-center relative">
          <Image
            src={certificate1}
            alt=""
            className=" w-[1000px] rounded-2xl h-[600px] white-box absolute z-10 shadow-2xl top-[200px]"
          />
          <Image
            src={certificate2}
            alt=""
            className=" w-[1000px] rounded-2xl h-[600px] white-box absolute z-11 shadow-2xl top-[350px]"
          />
          <Image
            src={certificate1}
            alt=""
            className="w-[1000px] rounded-2xl h-[600px] white-box absolute z-12 shadow-2xl top-[500px]"
          />
        </div>
      </div>
      {/* <div className="last h-[2500px]"></div> */}
    </div>
  );
};

export default CertificateSection;