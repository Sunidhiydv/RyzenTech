import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useInView } from "../hooks/useInView.ts";



interface TestimonialProps {
  image: string;
  name: string;
  userName: React.ReactNode;
  comment: React.ReactNode;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Quality Travels",
    userName: (
      <a href="http://qualitytravels.in" target="blank" rel="noopener noreferrer">
        qualitytravels.in
      </a>
    ),
    comment:<span className="text-sm text-gray-200 font-sans">
      "Ryzen Technologies has been a game-changer for our business. Their seamless development of our travel website, qualitytravels.in, has enhanced our user experience immensely. Their attention to detail and ability to create a responsive and visually appealing platform have made a significant impact on our business. Highly recommended!",</span>
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Core Modeling India",
    userName: (
      <a href="http://coremodelingindia.in" target="blank" rel="noopener noreferrer">
        coremodelingindia.in
      </a>
    ),
    comment:<span className="text-sm text-gray-200 font-sans">
      "The expertise and professionalism exhibited by Ryzen Technologies while building coremodelingindia.in were exceptional. Their creative solutions and robust design perfectly captured our vision and made our website stand out in the industry. Kudos to the entire team!"</span>
  },

  {
    image: "https://github.com/shadcn.png",
    name: "TAAHI Budget Baazar",
    userName: (
      <a href="http://taahibudgetbazaar.com" target="blank" rel="noopener noreferrer">
        taahibudgetbazaar.com
      </a>
    ),
    comment:<span className="text-sm text-gray-200 font-sans">
      "Ryzen Technologies turned our vision of taahibudgetbazaar.com into reality with an e-commerce platform that’s not only functional but also aesthetically pleasing. The team's dedication to meeting deadlines and exceeding expectations is truly commendable. Thank you for your fantastic work!"</span>
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Interception E-commerce ",
    userName: (
      <a href="http://interception.in" target="blank" rel="noopener noreferrer">
        "interception.in"
      </a>
    ),
    comment:<span className="text-sm text-gray-200 font-sans">
      "Developing interception.in was a breeze with Ryzen Technologies. They understood our requirements perfectly and delivered an intuitive, user-friendly e-commerce platform. Their innovative approach and commitment to excellence are unparalleled. We're thrilled with the results!"</span>
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Authentically Parenting (USA)",
    userName: (
      <a href="http://authenticallyparenting.com" target="blank" rel="noopener noreferrer">
        authenticallyparenting.com
      </a>
    ),
    comment:<span className="text-sm text-gray-200 font-sans">
      "Ryzen Technologies went above and beyond in creating authenticallyparenting.com. Their technical expertise and ability to design a website that resonates with our target audience have been invaluable. Working with them has been an absolute pleasure!"</span>
  },
  {
    image: "https://github.com/shadcn.png",
    name: "THRM Digital Marketing",
    userName: (
      <a href="http://Thrmdigitalmarketing.in" target="blank" rel="noopener noreferrer">
        Thrmdigitalmarketing.in{" "}
      </a>
    ),
    comment:<span className="text-sm text-gray-200 font-sans">
      "Thrmdigitalmarketing.in is now the centerpiece of our online presence, thanks to Ryzen Technologies. Their ability to understand our brand identity and translate it into a functional, visually appealing website has been incredible. We couldn't have asked for a better partner!"</span>
  },
  {
    image: "https://github.com/shadcn.png",
    name: "World Wide Techno Pvt Ltd (Hong Kong)",
    userName: (
      <a href="http://worldwidetechno.org" target="blank" rel="noopener noreferrer">
        worldwidetechno.org{" "}
      </a>
    ),
    comment:<span className="text-sm text-gray-200 font-sans">
      "We are extremely impressed with Ryzen Technologies' ability to deliver a top-notch website, worldwidetechno.org, within our timeline. Their professionalism, creativity, and technical acumen have been instrumental in expanding our online footprint. Highly recommended!"</span>
  },
  {
    image: "https://github.com/shadcn.png",
    name: "RFID Technology",
    userName: "RFID Technology Team",
    comment:<span className="text-sm text-gray-200 font-sans">
      "Ryzen Technologies' innovative hardware design and computing solutions for our RFID encoding machine plant have streamlined our operations significantly. Their expertise in FasTAG and clothing tags is unmatched. Thank you for your outstanding service!",</span>
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Insuretechs CRM",
    userName: (
      <a href="http://Panurgic.insuretechs.in" target="blank" rel="noopener noreferrer">
        Panurgic.insuretechs.in{" "}
      </a>
    ),
    comment:<span className="text-sm text-gray-200 font-sans">"Panurgic.insuretechs.in is a testament to Ryzen Technologies' exceptional CRM development capabilities. Their tailored solutions, technical precision, and commitment to delivering excellence have greatly improved our efficiency. It’s been an amazing experience working with them!"</span>
      ,
  },
];

export const Testimonials = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="testimonials"
      className="container py-24 sm:py-32 relative items-center scroll-smooth"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        our work
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Here’s what our clients have to say about our services and products.
      </p>

      {/* Fading Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none -z-10"></div>

      <Swiper
        modules={[Navigation, Autoplay]} // Add Autoplay module
        spaceBetween={20}
        slidesPerView={1} // Default 1 for small screens
        navigation
        autoplay={{
          delay: 2000, // Delay in milliseconds (3 seconds)
          disableOnInteraction: false, // Keep autoplay active after user interaction
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 }, // Two slides on medium screens
          1280: { slidesPerView: 3 }, // Three slides on larger screens
        }}
      >
        {testimonials.map(({ image, name, userName, comment }, index) => (
          <SwiperSlide key={index}>
            <Card
              className={`bg-muted/50 max-w-md mx-auto rounded-xl shadow-lg transition-transform transform hover:scale-105 m-3 hover:border-green-500 hover:text-blue-300 ${
                isInView ? "animate-slideUp" : ""
              }`}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {userName}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-200 font-sans">
                {comment}
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  );
};



