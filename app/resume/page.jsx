"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiSass, SiShadcnui, SiTailwindcss, SiMui } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const experience = {
  title: "My Experience",
  description:
    "I have 1+ years of experience in web development as a Freelance Front-End Developer, Front-End Instructor, and Founder of Code Way.",
  items: [{ company: "Freelance", position: "Front-End Developer" }],
};

const education = {
  title: "My Education",
  description:
    "Beni-Suef University — Bachelor's Degree in Navigation Science and Space Technology.",
  items: [
    { institution: "NTI", degree: "Web Designer Track", duration: "Oct 2024 - Dec 2024" },
    { institution: "Route", degree: "Frontend Development Internship", duration: "Mar 2025 - Sep 2025" },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Front-End Developer | Building fast, modern websites with Next.js, TypeScript, and Tailwind CSS.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <RiNextjsLine />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiMui />, name: "Material UI" },
    { icon: <SiShadcnui />, name: "Shadcn UI" },
    { icon: <SiSass />, name: "SASS" },
    { icon: <TbBrandRedux />, name: "Redux Toolkit" },
  ],
};

const about = {
  title: "About Me",
  description:
    "I’m a passionate Front-End Developer dedicated to crafting modern, responsive, and optimized websites using cutting-edge web technologies.",
  info: [
    { fieldName: "Name", fieldValue: "Rehab Khawas" },
    { fieldName: "Phone", fieldValue: "+201201820186 / +201026670294" },
    { fieldName: "Experience", fieldValue: "1+ years" },
    { fieldName: "Nationality", fieldValue: "Egypt" },
    { fieldName: "Email", fieldValue: "khawasrehab@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ],
};

export default function Resume() {
  const [activeTab, setActiveTab] = React.useState("experience");

  const fadeVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <motion.div key="experience" {...fadeVariant}>
            <h3 className="text-3xl font-bold mb-4 text-accent">{experience.title}</h3>
            <p className="text-white/70 mb-8">{experience.description}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experience.items.map((item, i) => (
                <li key={i} className="rounded-xl p-6 border border-white/10 bg-white/5">
                  <h4 className="text-xl font-semibold text-white">{item.position}</h4>
                  <p className="text-accent mt-1">{item.company}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      case "education":
        return (
          <motion.div key="education" {...fadeVariant}>
            <h3 className="text-3xl font-bold mb-4 text-accent">{education.title}</h3>
            <p className="text-white/70 mb-8">{education.description}</p>
            <ScrollArea className="h-[400px] pr-2">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {education.items.map((item, i) => (
                  <li key={i} className="rounded-xl p-6 border border-white/10 bg-white/5">
                    <span className="text-accent font-semibold">{item.duration}</span>
                    <h4 className="text-lg text-white font-semibold mt-2">{item.degree}</h4>
                    <p className="text-white/60">{item.institution}</p>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </motion.div>
        );
      case "skills":
        return (
          <motion.div key="skills" {...fadeVariant}>
            <h3 className="text-3xl font-bold mb-4 text-accent">{skills.title}</h3>
            <p className="text-white/70 mb-8">{skills.description}</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.skillList.map((item, i) => (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger className="rounded-xl p-8 flex justify-center items-center border border-white/10 bg-white/5 transition-all">
                      <div className="text-5xl text-accent">{item.icon}</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize text-white">{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </ul>
          </motion.div>
        );
      case "about":
        return (
          <motion.div key="about" {...fadeVariant}>
            <h3 className="text-3xl font-bold mb-4 text-accent">{about.title}</h3>
            <p className="text-white/70 mb-8">{about.description}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.info.map((item, i) => (
                <li key={i} className="flex flex-col p-4 rounded-xl border border-white/10 bg-white/5">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-lg text-accent font-medium">{item.fieldValue}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
    }
  };

  return (
    <section className="relative h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 py-16 ">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-row justify-center items-center gap-6 mb-10 lg:mb-0 lg:flex-col lg:fixed lg:left-10 lg:top-1/2 lg:-translate-y-1/2"
      >
        {["experience", "education", "skills", "about"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "text-accent scale-110"
                : "text-white/60 hover:text-accent"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="max-w-4xl w-full backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_25px_rgba(255,255,255,0.05)] bg-[#1a1a22]/60"
      >
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </motion.div>
    </section>
  );
}
