import React from "react";
import heroImage from "./hero.jpg"; // Replace with your image path

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center bg-blue-100 py-16 px-8" id="hero">
      
      <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Anime Club!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Join our community to explore the exciting world of anime. Stay updated on events, meet other fans, and be part of something special!
        </p>
        <a
          href="#join"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Join Now
        </a>
      </div>

      {/* Right side - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={heroImage} // Replace with your image
          alt="Anime Enthusiasts"
          className="w-full h-auto rounded-lg shadow-lg object-cover lg:object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
