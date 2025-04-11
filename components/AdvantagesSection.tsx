"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type Advantage = {
  id: string;
  title: string;
  image?: string; // if needed
};

const AdvantagesSection = () => {
  const [advantages, setAdvantages] = useState<Advantage[]>([]);

  useEffect(() => {
    fetch("/api/advantage")
      .then((res) => res.json())
      .then((data) => setAdvantages(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

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
  }, [advantages]);

  return (
    <div className="w-full min-h-[2000px] flex flex-col relative outside">
      <div className="ml-[250px] mt-[200px]">
        <h1 className="text-white text-[130px] main-title">My Advantages</h1>
      </div>

      {advantages.map((adv, index) => (
        <div
          key={adv.id}
          className="advantage w-full h-[500px] flex flex-row items-end gap-[400px] absolute pl-[250px]"
          style={{ top: `${500 + index * 400}px` }}>
          <Image
            src={adv?.image || "/default-image.png"}
            alt=""
            width={350}
            height={500} // adjust this based on your layout
            className="w-[350px] h-full drop-shadow-2xl box"
          />

          <h1 className="text-white text-[95px] text-slide">
            [{String(index + 1).padStart(2, "0")}] {adv.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default AdvantagesSection;
