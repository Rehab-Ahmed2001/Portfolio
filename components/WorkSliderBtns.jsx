"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderBtns() {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-accent text-white text-xl w-10 h-10 flex justify-center items-center rounded-md transition-all duration-200 hover:bg-[#a5478c] active:scale-95 shadow-md"
      >
        <PiCaretLeftBold />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-accent text-white text-xl w-10 h-10 flex justify-center items-center rounded-md transition-all duration-200 hover:bg-[#a5478c] active:scale-95 shadow-md"
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}
