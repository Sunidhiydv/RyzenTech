import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useInView } from "../hooks/useInView.ts";
import WebIcon from "@mui/icons-material/Language";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CodeIcon from "@mui/icons-material/Code";
import HardwareIcon from "@mui/icons-material/Hardware";

// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: React.ReactNode;
  description: React.ReactNode;
}

const features: FeatureProps[] = [
  {
    icon: <WebIcon style={{ fontSize: 40 }} />,
    title: (
      <span className="inline bg-gradient-to-r from-[#A2D9F5] to-[#247ACF] text-transparent bg-clip-text animate-gradient">
        Websites and Apps
      </span>
    ),
    description: (
      <span className="md:w-3/4 mx-auto mt-4 mb-8 text-md text-gray-300 animate-slideUp">
        We design and develop dynamic websites and mobile applications tailored
        to your business needs, ensuring a seamless user experience.
      </span>
    ),
  },
  {
    icon: <DashboardIcon style={{ fontSize: 40 }} />,
    title: (
      <span className="inline bg-gradient-to-r from-[#A2D9F5] to-[#247ACF] text-transparent bg-clip-text animate-gradient">
        CRM
      </span>
    ),
    description: (
      <span className="md:w-3/4 mx-auto mt-4 mb-8 text-md text-gray-300 animate-slideUp">
        Our CRM solutions help businesses manage and analyze customer
        interactions and data to improve relationships and drive growth.{" "}
      </span>
    ),
  },
  {
    icon: <CodeIcon style={{ fontSize: 40 }} />,
    title: (
      <span className="inline bg-gradient-to-r from-[#A2D9F5] to-[#247ACF] text-transparent bg-clip-text animate-gradient">
        Software
      </span>
    ),
    description: (
      <span className="md:w-3/4 mx-auto mt-4 mb-8 text-md text-gray-300 animate-slideUp">
        We create custom software solutions that streamline processes and
        enhance productivity, from desktop applications to enterprise systems.
      </span>
    ),
  },
  {
    icon: <HardwareIcon style={{ fontSize: 40 }} />,
    title: (
      <span className="inline bg-gradient-to-r from-[#A2D9F5] to-[#247ACF] text-transparent bg-clip-text animate-gradient">
        RFID Hardware
      </span>
    ),
    description: (
      <span className="md:w-3/4 mx-auto mt-4 mb-8 text-md text-gray-300 animate-slideUp">
        Our RFID hardware solutions provide efficient tracking and
        identification systems for inventory management, asset tracking, and
        more.
      </span>
    ),
  },
];

export const Services = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="services"
      className={`container text-center py-24 sm:py-32 ${
        isInView ? "opacity-100 animate-zoomIn" : "opacity-0"
      }`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          isInView ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
      >
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Services
        </span>
      </h2>
      <p
        className={`md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground ${
          isInView ? "opacity-100 animate-slideUp" : "opacity-0"
        }`}
      >
        Discover how our tailored services can empower your business to thrive.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps, index) => (
          <Card key={index} className="bg-muted/50 hover:shadow-md hover:shadow-green-500/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>      
    
  );
};

