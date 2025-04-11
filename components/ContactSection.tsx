"use client";
import React, { useEffect, useRef } from "react";
import GitHub from "../public/GitHub.png";
import Facebook from "../public/Facebook.png";
import Gmail from "../public/Gmail.png";
import Image from "next/image";
import gsap from "gsap";

const ContactSection = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (contactRef.current) {
  //     gsap.to(contactRef.current, {
  //       y: -5,
  //       x: 5,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "power1.inOut",
  //       duration: 0.15,
  //     });
  //   }
  // }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-end pb-[150px]">
      <div ref={contactRef} className="flex flex-col relative">
        <div className="flex flex-row gap-[10px] absolute top-[50px] right-0">
          <a href="">
            <Image src={GitHub} alt="GitHub" width={35} height={35} />
          </a>
          <a href="">
            <Image src={Gmail} alt="Gmail" width={35} height={35} />
          </a>
          <a href="">
            <Image src={Facebook} alt="Facebook" width={35} height={35} />
          </a>
        </div>
        <h1 className="text-white text-[250px] w-fit">CONTACT</h1>
      </div>
    </div>
  );
};

export default ContactSection;
