import { useInView } from "../hooks/useInView.ts";
import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="container grid grid-cols-1 lg:grid-cols-2 place-items-center py-10 md:py-20 gap-10"
    >
      {/* Text Section */}
      <div
        className={`text-center lg:text-start space-y-6 transition-opacity duration-1000 ${
          isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
      >
        <main className="text-4xl md:text-5xl font-bold">
          <img
            src="RyzenNoBg.png"
            alt="RYZEN TECH"
            className="shadow-lg shadow-blue-500/50 w-3/4 md:w-4/5 mx-auto lg:mx-0"
          />
        </main>
        <p className="text-lg md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 animate-slideUp">
          Providing cutting-edge solutions for CRM, Apps, Websites, and
          RFID-powered hardware technology.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="w-full md:w-1/3"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Services
          </Button>
        </div>
      </div>

      {/* Hero Cards Section */}
      <div className={`z-10 w-full md:w-auto ${isInView ? "animate-zoomIn" : ""}`}>
        <HeroCards />
      </div>
    </section>
  );
};
