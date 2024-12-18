import { Radar } from "lucide-react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useInView } from "../hooks/useInView.ts";



interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={28} />,
    name: "Quality Travels",
  },
  {
    icon: <Radar size={28} />,
    name: "THRM",
  },
  {
    icon: <Radar size={28} />,
    name: "World Wide Techno",
  },
  {
    icon: <Radar size={28} />,
    name: "Core Modelling India",
  },
  {
    icon: <Radar size={28} />,
    name: "Taahi Bazaar",
  },
  {
    icon: <Radar size={28} />,
    name: "Interception",
  },
  {
    icon: <Radar size={28} />,
    name: "Authentically Parenting",
  },
  {
    icon: <Radar size={28} />,
    name: "Insuretechs",
  }
];

export const Sponsors = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // For smaller devices
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const { ref, isInView } = useInView();


  return (
    <section ref={ref} id="sponsors" className={`container pt-24 sm:py-32 ${
          isInView ? "opacity-100 animate-zoomIn" : "opacity-0"
        }`}>
      <h2 className="text-center text-md lg:text-4xl font-bold mb-8 text-primary">
        Our Clients
      </h2>
      <Slider {...settings} className="text-white">
  {sponsors.map(({ icon, name }: SponsorProps) => (
    <div
      key={name}
      className="flex items-center justify-center gap-2 text-gray-300"
    >
      <h3 className="text-xl font-bold flex items-center gap-2">
        <span className="text-green-950">{icon}</span>
        {name}
      </h3>
    </div>
  ))}
</Slider>


    </section>
)};
