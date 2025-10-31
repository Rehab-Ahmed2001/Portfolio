"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Front-End",
    title: "E-Commerce App",
    description:
      "A responsive e-commerce web app with product browsing, cart, wishlist, and secure APIs.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
    image: "/assets/ecommerce.png",
    live: "",
    github: "https://github.com/Rehab-Ahmed2001/E-Commerce-app",
  },
  {
    num: "02",
    category: "Front-End",
    title: "Weather App",
    description:
      "Displays live weather data with a clean and minimal design using JavaScript.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/Weather App.png",
    live: "https://rehab-ahmed2001.github.io/Weather/",
    github: "https://github.com/Rehab-Ahmed2001/Weather",
  },
  {
    num: "03",
    category: "Front-End",
    title: "Bookmark",
    description:
      "A responsive web app for saving and managing favorite websites.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/Bookmark.png",
    live: "https://rehab-ahmed2001.github.io/Bookmark/",
    github: "https://github.com/Rehab-Ahmed2001/Bookmark",
  },
  {
    num: "04",
    category: "Front-End",
    title: "Smart Login",
    description:
      "A secure login and registration system with validation and local storage.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/Smart Login.png",
    live: "https://rehab-ahmed2001.github.io/smart_login/",
    github: "https://github.com/Rehab-Ahmed2001/smart_login",
  },

  {
    num: "05",
    category: "Front-End",
    title: "Gerold",
    description:
      "A modern personal portfolio template showcasing projects, resume, and skills.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/Gerold.png",
    live: "https://rehab-ahmed2001.github.io/Gerold/",
    github: "https://github.com/Rehab-Ahmed2001/Gerold",
  },
  {
    num: "06",
    category: "Front-End",
    title: "DevFolio",
    description:
      "A professional portfolio template for developers with smooth UI and clean design.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/DevFolio.png",
    live: "https://rehab-ahmed2001.github.io/DevFolio/",
    github: "https://github.com/Rehab-Ahmed2001/DevFolio",
  },

  {
    num: "07",
    category: "Front-End",
    title: "Grid Masterclass",
    description:
      "A design-focused website teaching advanced CSS grid and Flexbox layouts.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/Grid Masterclass.png",
    live: "https://rehab-ahmed2001.github.io/Grid-masterclass/",
    github: "https://github.com/Rehab-Ahmed2001/Grid-masterclass",
  },
  {
    num: "08",
    category: "Front-End",
    title: "Mealify",
    description:
      "Mealify is a modern and responsive restaurant website template built with HTML, CSS.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/mealify.png",
    live: "https://rehab-ahmed2001.github.io/Mealify/",
    github: "https://github.com/Rehab-Ahmed2001/Mealify",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row xl:gap-10">
          <div className="w-full xl:w-[50%] flex flex-col justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6">
              <div className="text-7xl font-extrabold text-accent/90">
                {project.num}
              </div>
              <h2 className="text-[38px] font-bold text-white leading-tight">
                {project.title}
              </h2>
              <p className="text-white/70 leading-relaxed text-[17px]">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 text-accent font-medium">
                {project.stack.map((item, i) => (
                  <li key={i}>{item.name}</li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] bg-white/5 flex justify-center items-center rounded-full">
                        <BsArrowUpRight className="text-white text-2xl hover:text-accent transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] bg-white/5 flex justify-center items-center rounded-full">
                        <BsGithub className="text-white text-2xl hover:text-accent transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={25}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[500px]"
            >
              {projects.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-[420px] flex justify-center items-center bg-black/10 rounded-xl overflow-hidden p-3">
                    <div className="relative w-full h-full flex justify-center items-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-fill rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex justify-center xl:justify-end mt-6">
                <WorkSliderBtns />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
