import React from "react";
import { motion, animate } from "framer-motion";
const StairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reverseIndex = (index) => {
  const totalSteps = 10;
  return totalSteps - index - 1;
};
export default function Stairs() {
  return (
    <>
      {[...Array(10)].map((_, index) => {
        return (
          <motion.dev
            key={index}
            variants={StairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-gradient-to-b from-[#B05496] to-[#F4C2D7] relative"
          />
        );
      })}
    </>
  );
}
