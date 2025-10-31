"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    description:
      "I build responsive, fast, and modern web interfaces using React.js, Next.js, and Tailwind CSS.",
    icon: <Code className="w-10 h-10 text-accent" />,
  },
  {
    num: "02",
    title: "Technical SEO Improvements",
    description:
      "I enhance website SEO from the front-end side — optimizing performance, structure, and accessibility for better visibility.",
    icon: <Rocket className="w-10 h-10 text-accent" />,
  },
];

export default function Services() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center  py-16 px-6 xl:px-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="group relative flex flex-col gap-6 p-10 rounded-3xl border border-white/10  hover: shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(100,255,218,0.15)] transition-all duration-500"
            >
              <div className="absolute -top-5 -left-5 bg-accent/10 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center border border-accent/40">
                <span className="text-2xl font-bold text-accent">
                  {service.num}
                </span>
              </div>

              <div className="mt-4">{service.icon}</div>

              <h2 className="text-[30px] xl:text-[34px] font-bold text-white group-hover:text-accent transition-all duration-300 leading-tight">
                {service.title}
              </h2>

              <p className="text-white/70 leading-relaxed text-[17px]">
                {service.description}
              </p>

              <div className="border-b border-white/10 group-hover:border-accent/60 transition-all duration-500 mt-3"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
