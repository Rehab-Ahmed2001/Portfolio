"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "years of experience",
  },
  {
    num: 14,
    text: "Projects completed",
  },
  {
    num: 2,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl-pb-0">
      <div className="container mx-auto">
        {/* responsive layout: 2 per row on mobile, 4 per row on tablet & desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col sm:flex-row gap-4 items-center justify-center xl:justify-start text-center sm:text-left"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
