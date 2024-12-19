import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BlogCard } from './BlogCard';

export default function Blogs() {
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
<div  data-aos="fade-right">
      <BlogCard
        badgeText="Tech Insights"
        date="Dec 19, 2024"
        author="Ryen Tech Blog"
        title="The Power of Quantum Computing: Redefining the Tech Landscape"
        description="In a world where speed and efficiency are paramount, quantum computing has emerged as the next frontier of technological advancement. Unlike classical computers..."
        readMoreLink="/tech"
      />
      <BlogCard
        badgeText="Uncategorized"
        badgeColor="bg-red-500"
        date="Nov, Thu, 2024"
        author="World Wide Techo"
        title="The Importance of Digital Transformation in Modern Business"
        description="In today’s digital age, businesses must embrace change to stay competitive. Digital transformation has become a key factor in driving business growth, improving efficiency, and enhancing customer experiences. By leveraging..."
        readMoreLink="/tech"
      />
    </div>
    <Footer/>
    </>
  )
}
