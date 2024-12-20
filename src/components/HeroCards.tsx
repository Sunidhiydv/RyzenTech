import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import TestimonialCard from "./TestimonalCard";

export const HeroCards = () => {
  return (
    <div className="flex flex-wrap gap-8 relative w-full lg:w-[700px] h-auto lg:h-[500px] justify-center lg:justify-start">
      {/* Testimonial */}
      <Card className="w-[90%] lg:w-[340px] lg:absolute -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 animate-fadeInLeft">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/ryzentech/testimonial.png"
            />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Tech Innovator</CardTitle>
            <CardDescription>@innovator</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          You are one step away from building your online presence!
        </CardContent>
      </Card>

      {/* Team */}
      {/* <Card className="w-[90%] lg:w-80 lg:absolute lg:right-[20px] lg:top-4 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 animate-fadeInUp">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="team member"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Alex Johnson</CardTitle>
          <CardDescription className="font-normal text-primary">
            Head of Hardware
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Crafting innovative hardware solutions, including RFID technology,
            for seamless integration.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/ryzentech/alex"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://linkedin.com/in/alex-johnson"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card> */}
      <TestimonialCard/>

      {/* Pricing */}
      <Card className="w-[90%] lg:w-96 lg:absolute lg:top-[150px] lg:left-[-40px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 animate-slideUp mt-4">
  <CardHeader>
    <CardTitle className="flex items-center text-xl">
      Empowering businesses with innovative technology solutions that drive growth
    </CardTitle>
  </CardHeader>

  <CardContent>
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold text-base">Enterprise Integration</h3>
        <p className="text-sm text-muted-foreground">
          Seamless integration of CRM, Custom apps, Websites and much more
        </p>
      </div>
    </div>
    
  </CardContent>

  <CardFooter className="flex flex-col space-y-4">
    <div className="space-y-3">
      {[
        "Advanced CRM Systems",
        "Custom Application Development",
        "RFID Hardware Integration"
      ].map((feature) => (
        <span key={feature} className="flex items-center">
          <Check className="text-green-500 h-5 w-5" /> 
          <h3 className="ml-2 text-sm">{feature}</h3>
        </span>
      ))}
    </div>
  </CardFooter>
</Card>
      {/* Service */}
      <Card className="w-[90%] lg:w-[350px] lg:absolute lg:-right-[10px] lg:bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 animate-zoomIn">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Custom Solutions</CardTitle>
            <CardDescription className="text-md mt-2">
              Tailored technology to fit your business needs, from software to
              hardware.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
