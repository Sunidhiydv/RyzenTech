import React, { useState, useEffect } from "react";

interface TestimonialProps {
  image: string;
  name: string;
  userName: React.ReactNode;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Quality Travels",
    userName: (
      <a
        href="http://qualitytravels.in"
        target="blank"
        rel="noopener noreferrer"
      >
        qualitytravels.in
      </a>
    ),
    comment:
      "Ryzen Technologies has been a game-changer for our business. Their seamless development of our travel website has enhanced our user experience immensely. Highly recommended!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Core Modeling India",
    userName: (
      <a
        href="http://coremodelingindia.in"
        target="blank"
        rel="noopener noreferrer"
      >
        coremodelingindia.in
      </a>
    ),
    comment:
      "The expertise and professionalism exhibited by Ryzen Technologies were exceptional. Their creative solutions and robust design perfectly captured our vision.",
  },
  // Add more testimonials as needed
  {
    image: "https://github.com/shadcn.png",
    name: "TAAHI Budget Baazar",
    userName: (
      <a href="http://taahibudgetbazaar.com" target="blank" rel="noopener noreferrer">
        taahibudgetbazaar.com
      </a>
    ),
    comment:
      "Ryzen Technologies turned our vision of taahibudgetbazaar.com into reality with an e-commerce platform that’s not only functional but also aesthetically pleasing. The team's dedication to meeting deadlines and exceeding expectations is truly commendable. Thank you for your fantastic work!"
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Interception E-commerce ",
    userName: (
      <a href="http://interception.in" target="blank" rel="noopener noreferrer">
        "interception.in"
      </a>
    ),
    comment:
      "Developing interception.in was a breeze with Ryzen Technologies. They understood our requirements perfectly and delivered an intuitive, user-friendly e-commerce platform. Their innovative approach and commitment to excellence are unparalleled. We're thrilled with the results!"
  },
  
  {
    image: "https://github.com/shadcn.png",
    name: "THRM Digital Marketing",
    userName: (
      <a href="http://Thrmdigitalmarketing.in" target="blank" rel="noopener noreferrer">
        Thrmdigitalmarketing.in{" "}
      </a>
    ),
    comment:
      "Thrmdigitalmarketing.in is now the centerpiece of our online presence, thanks to Ryzen Technologies. Their ability to understand our brand identity and translate it into a functional, visually appealing website has been incredible. We couldn't have asked for a better partner!"
  },
  
  {
    image: "https://github.com/shadcn.png",
    name: "RFID Technology",
    userName: "RFID Technology Team",
    comment:
      "Ryzen Technologies' innovative hardware design and computing solutions for our RFID encoding machine plant have streamlined our operations significantly. Their expertise in FasTAG and clothing tags is unmatched. Thank you for your outstanding service!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Insuretechs CRM",
    userName: (
      <a href="http://Panurgic.insuretechs.in" target="blank" rel="noopener noreferrer">
        Panurgic.insuretechs.in{" "}
      </a>
    ),
    comment:"Panurgic.insuretechs.in is a testament to Ryzen Technologies' exceptional CRM development capabilities. Their tailored solutions, technical precision, and commitment to delivering excellence have greatly improved our efficiency. It’s been an amazing experience working with them!"
      
  },
];

const MAX_COMMENT_LENGTH = 100; // Define max visible characters for the comment
const AUTO_CHANGE_INTERVAL = 5000; // Auto-change interval in milliseconds

const TestimonialCard = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, AUTO_CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const { image, name, userName, comment } = testimonials[currentTestimonial];
  const truncatedComment =
    comment.length > MAX_COMMENT_LENGTH
      ? `${comment.slice(0, MAX_COMMENT_LENGTH)}...`
      : comment;

  return (
    <div className="w-[90%] lg:w-80 lg:absolute lg:right-[20px] lg:top-4 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 animate-fadeInUp p-4 rounded-md border border-gray-700 bg-gray-900 text-white">
      <div className="mt-8 flex justify-center items-center pb-2">
        <img
          src={image}
          alt={name}
          className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover border-4 border-gray-700"
        />
        <div className="text-center ">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="font-normal text-green-400">{userName}</p>
        </div>
      </div>

      <div className="text-center pb-2 px-4">
        <p className="text-sm text-gray-300 font-sans">{truncatedComment}</p>
      </div>

      <div className="pb-4 pt-3">
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;