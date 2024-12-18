import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Sponsors } from "./Sponsors";


export default function AboutMain() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      offset: 50, // Offset (in pixels) for triggering the animation
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <section className="container mx-auto py-20 px-6 scroll-smooth">
  <div
    className="relative backdrop-brightness-50 bg-cover bg-[url('AboutUss.jpg')] flex flex-col justify-end h-80"
    data-aos="fade-up"
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

    {/* Content */}
    <div
      className="relative p-6 md:p-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-lg text-right"
      data-aos="zoom-in"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          About Us
        </span>
      </h2>
      <p className="text-lg md:text-2xl text-gray-300">
        Empowering innovation through technology and collaboration.
      </p>
    </div>
  </div>
</section >

<section className="container mx-auto py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 items-start">
    <div data-aos="fade-right">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
        About Us
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        We are a dynamic team of innovators and technology enthusiasts
        committed to delivering cutting-edge solutions that empower businesses
        and individuals. With a passion for innovation, we strive to build
        meaningful connections and drive progress through technology.
      </p>
    </div>

    <div className="space-y-10">
      <div className="flex items-start space-x-4 group" data-aos="fade-left">
        <div className="text-primary flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10s2-2 5-2 5 2 5 2 2-2 5-2 5 2 5 2m-3 4s-2 2-5 2-5-2-5-2-2 2-5 2-5-2-5-2m0-6v6m18-6v6"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white group-hover:underline group-hover:underline-offset-4 group-hover:text-green-500 transition-all " >
            Vision
          </h3>
          <p className="text-gray-400 mt-2">
            To redefine technological boundaries and enable a seamless digital
            future for all.
          </p>
        </div>
      </div>
      {/* Add similar data-aos attributes for Mission and Idea */}
      {/* Mission */}
      <div className="flex items-start space-x-4 group " data-aos="fade-left">
              <div className="text-primary flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 0c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 6c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white group-hover:underline group-hover:underline-offset-4 group-hover:text-green-500 transition-all " >
                  Mission
                </h3>
                <p className="text-gray-400 mt-2">
                  To craft innovative, sustainable solutions that address
                  real-world challenges while fostering collaboration and
                  growth.
                </p>
              </div>
            </div>

            {/* Idea */}
            <div className="flex items-start space-x-4 group " data-aos="fade-left" >
              <div className="text-primary flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0a7.5 7.5 0 005.671 5.671c.921.3.921 1.603 0 1.902a7.5 7.5 0 00-5.671 5.671c-.3.921-1.603.921-1.902 0a7.5 7.5 0 00-5.671-5.671c-.921-.3-.921-1.603 0-1.902a7.5 7.5 0 005.671-5.671z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white group-hover:underline group-hover:underline-offset-4 group-hover:text-green-500 transition-all " >
                  Idea
                </h3>
                <p className="text-gray-400 mt-2">
                  To explore bold and transformative concepts that revolutionize
                  industries and create lasting impact.
                </p>
              </div>
    </div>
  </div>
  </div>
</section>

      <Sponsors />

      <Footer />
    </>
  );
}
