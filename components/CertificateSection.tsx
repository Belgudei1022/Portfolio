"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const CertificateSection: React.FC = () => {
  const outside = useRef<HTMLDivElement>(null);
  const boxesContainer = useRef<HTMLDivElement>(null);
  const [certificates, setCertificates] = useState<
    { id: string; title: string; image: string; link: string }[]
  >([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      const res = await fetch("/api/certificate");
      const data = await res.json();
      setCertificates(data);
    };
    fetchCertificates();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const outside1 = outside.current;
    if (!outside1) return;

    ScrollTrigger.create({
      trigger: outside1,
      start: "top top",
      end: "+=3000 center",
      pin: true,
      scrub: true,
    });

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
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [certificates]);

  return (
    <div
      ref={outside}
      className="w-full min-h-screen h-[3500px] flex flex-col justify-start relative">
      <div className="ml-[250px] flex flex-col relative w-[1200px] box">
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
        <div className="w-full flex flex-col items-center relative">
          {certificates.map((cert, index) => (
            <img
              key={cert.id}
              src={cert.image}
              alt={cert.title}
              className="w-[1000px] rounded-2xl h-[600px] white-box absolute shadow-2xl"
              style={{ top: `${200 + index * 150}px`, zIndex: 10 + index }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
