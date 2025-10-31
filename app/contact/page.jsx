"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "01201820186",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "khawasrehab@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Cairo, Egypt",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="p-6 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col xl:flex-row gap-[100px] w-full max-w-6xl">
          {/* Contact Form */}
          <div className="order-2 xl:order-none flex-1">
            <form className="flex flex-col gap-6 p-10  rounded-2xl shadow-lg border border-[#2a2a2f]">
              <h3 className="text-4xl font-semibold text-accent mb-2">
                Let's work together
              </h3>
              <p className="text-white/60 mb-4">
                Got a project or idea in mind? Send me a message and let’s make
                it happen!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="First name"
                  className="bg-[#644a5c] text-white placeholder:text-white/50 border border-transparent focus:border-accent focus:ring-0 transition"
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  className="bg-[#644a5c] text-white placeholder:text-white/50 border border-transparent focus:border-accent focus:ring-0 transition"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-[#644a5c] text-white placeholder:text-white/50 border border-transparent focus:border-accent focus:ring-0 transition"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-[#644a5c] text-white placeholder:text-white/50 border border-transparent focus:border-accent focus:ring-0 transition"
                /> 
              </div>

              <Textarea
                placeholder="Type your message here..."
                className="h-[200px] bg-[#644a5c] text-white placeholder:text-white/50 border border-transparent focus:border-accent focus:ring-0 transition"
              />

              <Button
                size="lg"
                className="w-fit px-8 py-5 bg-accent hover:bg-[#673458] text-white text-lg font-medium rounded-xl hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-md"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 w-full">
              {info.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center gap-6 p-5 rounded-xl border border-[#2a2a2f] hover:border-accent shadow-md transition"
                >
                  <div className="w-[60px] h-[60px] xl:w-[72px] xl:h-[72px]  text-accent rounded-md flex items-center justify-center hover:text-white transition">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h3 className="text-lg font-medium text-white">
                      {item.description}
                    </h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
