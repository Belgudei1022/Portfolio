"use client";

import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificateSection from "@/components/CertificateSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);

  // useEffect(() => {
  //   let isMounted = true;

  //   const initScroll = async () => {
  //     if (!scrollRef.current || !isMounted) return;

  //     const scroll = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //       multiplier: 1,
  //       lerp: 0.06,
  //       smartphone: { smooth: true },
  //       tablet: { smooth: true, breakpoint: 1024 },
  //     });

  //     locoScrollRef.current = scroll;

  //     // Cleanup function
  //     return () => {
  //       if (locoScrollRef.current) {
  //         locoScrollRef.current.destroy();
  //         locoScrollRef.current = null;
  //       }
  //     };
  //   };

  //   initScroll();

  //   // Cleanup on unmount
  //   return () => {
  //     isMounted = false;
  //     if (locoScrollRef.current) {
  //       locoScrollRef.current.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div className="w-full min-h-screen h-fit bg-[#101010] relative">
      <div
        ref={scrollRef}
        data-scroll-container
        className="w-full h-full bg-[repeating-linear-gradient(to_right,_#202020_0px,_#202020_1px,_#101010_1px,_#101010_250px)] mx-auto flex flex-col gap-[50px]">
        <HeroSection />
        <AboutSection />
        <div className="w-full min-h-screen"></div>
        <CertificateSection />
        <AdvantagesSection />
        <ContactSection />
      </div>
    </div>
  );
}
