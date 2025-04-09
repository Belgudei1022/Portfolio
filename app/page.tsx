"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

// Define Locomotive Scroll type (simplified, adjust based on actual library)
interface LocomotiveScrollInstance {
  el: HTMLElement;
  smooth: boolean;
  destroy: () => void;
  update: () => void;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { duration?: number; disableLerp?: boolean }
  ) => void;
  on?: (event: string, callback: () => void) => void;
  scroll: {
    instance: {
      scroll: {
        y: number;
      };
    };
  };
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScrollInstance | null>(null);

  // Initialize Locomotive Scroll
  useEffect(() => {
    let mounted = true;

    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scrollContainer = containerRef.current;
      if (scrollContainer && mounted) {
        locomotiveScrollRef.current = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        }) as unknown as LocomotiveScrollInstance;

        // Sync with GSAP ScrollTrigger after initialization
        ScrollTrigger.scrollerProxy(scrollContainer, {
          scrollTop(value) {
            return arguments.length
              ? locomotiveScrollRef.current?.scrollTo(value as number, {
                  duration: 0,
                  disableLerp: true,
                })
              : locomotiveScrollRef.current?.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollContainer.style.transform ? "transform" : "fixed",
        });

        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.on?.("scroll", ScrollTrigger.update);
          ScrollTrigger.refresh();
        }
        ScrollTrigger.refresh();
      } else {
        console.error("Scroll container not found or component unmounted!");
      }
    };

    initializeLocomotiveScroll();

    return () => {
      mounted = false;
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  // GSAP Animation with ScrollTrigger
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const trigger = ScrollTrigger.create({
        trigger: boxRef.current, 
        scroller: containerRef.current,
        start: "top top", 
        end: "+=1000px", 
        pin: true,
        markers: process.env.NODE_ENV === "development", 
      });

      return () => {
        trigger.kill(); // Cleanup ScrollTrigger
      };
    },
    { scope: containerRef } // Scope animations to the container
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen h-fit bg-[#101010] relative"
      data-scroll-container>
      <div className="w-full h-full bg-[repeating-linear-gradient(to_right,_#202020_0px,_#202020_1px,_#101010_1px,_#101010_250px)] mx-auto flex flex-col gap-[50px]">
        <HeroSection />
        <div ref={boxRef} className="box-c">
          <AboutSection />
        </div>
        <div className="w-full min-h-screen" /> {/* Spacer */}
      </div>
    </div>
  );
}
