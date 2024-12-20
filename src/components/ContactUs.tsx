import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Contact from "./Contact";

export function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Whether animation should happen only once
    });
  }, []);

  return (

    <>
    <Navbar/>
    <section className="container mx-auto py-20 px-6 scroll-smooth">
      {/* Hero Section */}
      <div
        className="relative backdrop-brightness-50 bg-cover bg-center bg-[url('Contact.jpg')] h-80 flex flex-col justify-end"
        data-aos="fade-up"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Content */}
        <div className="relative px-3 pb-8 h-full flex flex-col justify-center">
  <h2 className="text-6xl font-bold mb-2 brightness-100">
    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
      Contact Us
    </span>
  </h2>
  <p className="text-2xl text-white brightness-100">
    <span>We'd love to hear from you. Let's connect and</span><br></br> build something amazing together.
  </p>
  </div>
</div>


      {/* Form Section */}
      {/* <div
        className="flex justify-center items-center h-screen w-full"
        data-aos="zoomIn"
      >
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Get in Touch
          </h3>
          <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="6dc44209-01de-45c1-bb88-b8035311579b"/>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-2 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="mt-2 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your Message"
                className="mt-2 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <input type="checkbox" name="botcheck" className="hidden" />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-blue-500 text-white py-3 rounded-md hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div> */}

      <Contact/>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row justify-between mt-12 gap-10">
        <div className="space-y-8 mx-auto my-auto" data-aos="slide-up">
          <ContactInfo title="Phone" content="+91 98677 88995" />
          <ContactInfo title="Email" content="Info@ryzentech.in" />
          <ContactInfo title="Address" content="Mumbai" />
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2 animate-zoomIn" data-aos="fade-left">
          <iframe
            title="Contact Location"
            className="w-full h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0128677588336!2d72.83625941490237!3d19.162973287043557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b758f0fba2fb%3A0xf6b0b17a5ec63c99!2sGoregaon%2C%20Mumbai%2C%20Maharashtra%20400062%2C%20India!5e0!3m2!1sen!2sin!4v1632452124731!5m2!1sen!2sin" 
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

type ContactInfoProps = {
  title: string; // Expect 'title' to be a string
  content: string; // Expect 'content' to be a string
};

const ContactInfo: React.FC<ContactInfoProps> = ({ title, content }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-primary/20 p-4 rounded-full shadow-md">
      <span className="text-primary font-semibold">{title}</span>
    </div>
    <div>
      <p className="text-lg text-white">{content}</p>
    </div>
  </div>
);

export default ContactInfo;

