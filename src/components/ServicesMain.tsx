import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function ServicesMain() {
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
      {/* Hero Section */}
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
                Services
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-300">
              At Ryzen Tech, we empower your business with cutting-edge technology, providing tailored solutions that meet your unique needs and ensure long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="container mx-auto py-16 px-6 space-y-20">
        {/* Service 1: CRMs */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          {/* Left Side */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <img
              src="crmMain.jpg"
              alt="CRM Services"
              className="rounded-lg shadow-lg h-64 mx-auto"
            />
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 md:pl-10">
            <h3 className="text-3xl font-semibold text-green-500 mb-4">CRM Solutions</h3>
            <p className="text-gray-300 leading-relaxed">
              Streamline your customer relationships with customized CRM solutions tailored to your business needs. Our systems not only ensure better management but also enhance efficiency, improve communication, and foster long-term growth by providing valuable insights into customer behavior and interactions.
            </p>
          </div>
        </div>

        {/* Service 2: Websites */}
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-left">
          {/* Left Side */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <img
              src="websiteMain.jpg"
              alt="Website Services"
              className="rounded-lg shadow-lg h-64 mx-auto"
            />
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 md:pr-10">
            <h3 className="text-3xl font-semibold text-green-500 mb-4">Website Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Build a strong online presence with modern, responsive, and SEO-friendly websites designed to engage your audience and drive conversions. Our team ensures that your website not only looks stunning but is also functional, intuitive, and optimized for search engines, helping you stay ahead in the competitive digital landscape.
            </p>
          </div>
        </div>

        {/* Service 3: Apps */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          {/* Left Side */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <img
              src="appMain.jpg"
              alt="App Development"
              className="rounded-lg shadow-lg h-64 mx-auto"
            />
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 md:pl-10">
            <h3 className="text-3xl font-semibold text-green-500 mb-4">App Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Leverage our expertise to create mobile applications that deliver seamless user experiences, integrating powerful features to meet user demands. Whether you're looking for native or cross-platform apps, we ensure smooth functionality, performance, and security, providing your users with a top-notch experience.
            </p>
          </div>
        </div>

        {/* Service 4: RFID Solutions */}
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-left">
          {/* Left Side */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <img
              src="rfidMain.jpg"
              alt="RFID Solutions"
              className="rounded-lg shadow-lg h-64 mx-auto"
            />
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 md:pr-10">
            <h3 className="text-3xl font-semibold text-green-500 mb-4">RFID Solutions</h3>
            <p className="text-gray-300 leading-relaxed">
              Enhance operational efficiency and inventory management with our RFID-based tracking and automation solutions. Our RFID services streamline your business processes by enabling real-time tracking of assets, reducing human error, and improving inventory accuracy, leading to better decision-making and cost savings.
            </p>
          </div>
        </div>

        {/* Service 5: Automation */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          {/* Left Side */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <img
              src="automationMain.jpg"
              alt="Automation"
              className="rounded-lg shadow-lg h-64 mx-auto"
            />
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 md:pl-10">
            <h3 className="text-3xl font-semibold text-green-500 mb-4">Automation</h3>
            <p className="text-gray-300 leading-relaxed">
              Optimize workflows, reduce manual tasks, and achieve higher productivity through our cutting-edge automation services. By implementing the latest in AI and machine learning technologies, we help your business operate more efficiently, enabling your team to focus on strategic initiatives while we handle the repetitive tasks.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
