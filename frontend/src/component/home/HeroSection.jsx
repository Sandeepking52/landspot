import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      <header className="relative w-full h-screen">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/29568535/12727365_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight overflow-hidden">
            Welcome to <span className="text-yellow-500">LandSpot</span>
          </h1>
          <h3 className="text-xl md:text-2xl mt-6 text-gray-300 font-medium drop-shadow-sm">
            Your Trusted Platform for Buying and Renting Properties
          </h3>
          <p className="mt-6 max-w-xl text-gray-200 text-base md:text-lg">
            Discover, list, and manage real estate properties with ease and
            security.
          </p>

      <div className="flex gap-5 overflow-hidden">

      <Link to="/home/World"  className="mt-8 inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
       Explore Flat
      </Link>

      <Link to="/PropertyDemo"  className="mt-8 inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
       Explore Property
      </Link>
        
      </div>
        
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
