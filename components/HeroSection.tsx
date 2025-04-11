"use client";
import React from "react";
import { motion } from "framer-motion";
const HeroSection = () => {
  const textVariants = {
    hidden: { x: "0vw" },
    visible: {
      x: "-2000%",
      transition: {
        type: "tween",
        ease: "linear",
        duration: 200,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        variants={textVariants}
        initial="hidden"
        animate="visible">
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="text-[150px] text-white mx-10">
            WELCOME TO MY PORTFOLIO
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;
