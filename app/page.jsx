import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Social from "@/components/Social";
export default function Home() {
  return (
    <section className="h-full mt-10 sm:mt-0 px-5">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Frontend Developer | React.js - Next.js
            </span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="text-[#D966B8]">Rehab Ahmed</span>
            </h1>
            <p className="max-w-[550px] mb-6">
              I’m Rehab Ahmed, a Front-End Developer specialized in building
              modern, SEO-optimized web applications using HTML5, CSS3,
              Bootstrap, TypeScript, JavaScript, jQuery, Tailwind CSS, React,
              and Next.js. Skilled in building SEO-optimized, responsive, and
              visually engaging web applications.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-accent rounded-[20px]  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-lg" />
              </Button>
              <div className="flex mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
