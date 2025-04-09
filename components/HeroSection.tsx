"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const textVariants = {
    hidden: { x: "0vw" }, // Start fully offscreen to the right (viewport width)
    visible: {
      x: "-2000%", // Move further left to account for full content width
      transition: {
        type: "tween",
        ease: "linear",
        duration: 200, // Adjust speed as needed
        repeat: Infinity, // Repeat infinitely
        repeatType: "loop" as const, // Seamless loop
      },
    },
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden ">
      <motion.div
        className="flex whitespace-nowrap"
        variants={textVariants}
        initial="hidden"
        animate="visible">
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex gap-[10px] mx-10">
              <p className="text-[150px] text-white font-">
                WELCOME TO MY PORTFOLIO
              </p>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;
