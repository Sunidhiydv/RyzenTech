import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CalendarIcon, UserIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export default function Tech() {
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
    <Navbar/>

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
          Blogs
        </span>
      </h2>
      <p className="text-lg md:text-2xl text-gray-300">
        Empowering innovation through technology and collaboration.
      </p>
    </div>
  </div>
</section >
    
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Blog Content Section */}
      <main className="container mx-auto py-12 px-6 lg:px-12">
        {/* Metadata */}
        <div className="flex items-center text-md text-muted-foreground gap-4 mb-6">
          <Badge variant="secondary" className="bg-blue-700 text-white">
            Tech Insights
          </Badge>
          <div className="flex items-center gap-2">
            <CalendarIcon size={22} />
            <span>Dec 19, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <UserIcon size={22} />
            <span>Ryen Tech Blog</span>
          </div>
        </div>

        {/* Blog Title */}
        <h2 className="text-4xl font-bold text-primary mb-6">
          "The Power of Quantum Computing: Redefining the Tech Landscape"
        </h2>

        {/* Blog Content */}
        <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
          <p>
            In a world where speed and efficiency are paramount, quantum computing
            has emerged as the next frontier of technological advancement. Unlike
            classical computers, which process information in binary (0s and 1s),
            quantum computers utilize qubits that can exist in multiple states
            simultaneously. This breakthrough has the potential to solve complex
            problems in minutes, which would otherwise take traditional computers
            millions of years.
          </p>

          <p>
            Industries such as healthcare, finance, and artificial intelligence
            stand to gain immensely from this revolution. For instance, quantum
            computing can accelerate drug discovery by simulating molecular
            structures with unprecedented accuracy. Financial institutions can
            optimize portfolios and risk analysis at speeds previously
            unimaginable. In AI, quantum algorithms can enhance machine learning
            models, making them more robust and efficient.
          </p>

          <p>
            However, quantum computing is not without its challenges. The
            technology requires highly specialized environments, including
            near-absolute zero temperatures, to maintain quantum coherence. Despite
            these hurdles, significant strides are being made by tech giants and
            research institutions worldwide.
          </p>

          <p>
            As we stand on the cusp of this transformative era, it is essential for
            businesses and developers to understand and adapt to the quantum
            paradigm. The future of computing is here, and it is quantum.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/blogs"
            className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition duration-300"
          >
            Explore More Blogs
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-800 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">&copy; 2024 Ryen Tech Blog. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    <Footer/>

    </>
  );
};


