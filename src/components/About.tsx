// import { Statistics } from "./Statistics";
import { useInView } from "../hooks/useInView.ts";
import Lottie from "lottie-react";
import openingLaptopAnimation from "../assets/laptopNoBg.json";

export const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="about"
      className={`container max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32 transition-all duration-1000 ${
        isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
      }`}
    >
      <div className="bg-muted/50 border rounded-lg py-8 sm:py-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-8">
          {/* Laptop Animation */}
          <div className="w-full md:w-1/2 lg:w-[45%] flex justify-center">
            <Lottie
              animationData={openingLaptopAnimation}
              loop={true}
              className="rounded-lg w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:w-[55%]">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text animate-gradient">
                  About
                </span>{" "}
                <span className="inline bg-gradient-to-r from-[#A2D9F5] to-[#247ACF] text-transparent bg-clip-text animate-gradient">
                  RYZEN TECH
                </span>
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed">
                At RYZEN TECH, we specialize in delivering cutting-edge solutions
                for Customer Relationship Management (CRMs), mobile and web
                applications, and RFID-powered hardware technologies. Our mission
                is to empower businesses with innovative technology tailored to
                their unique needs.
              </p>
            </div>
            <div className="mt-8">
              {/* <Statistics /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
