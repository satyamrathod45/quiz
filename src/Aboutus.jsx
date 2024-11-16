import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center bg-blue-100 py-16 px-8" id="aboutUs">
      
      <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>

     
      <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl">
        We are a passionate community of anime enthusiasts, dedicated to bringing together fans of all ages to celebrate the world of anime. Our mission is to provide a space where people can connect, share, and learn more about their favorite shows and characters.
      </p>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-blue-50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Community</h3>
          <p className="text-gray-700">+
            We believe in fostering a strong community of fans who can share their love for anime and create lasting friendships.
          </p>
        </div>
        <div className="text-center p-6 bg-blue-50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Passion</h3>
          <p className="text-gray-700">
            Our team is passionate about anime and strives to keep up with the latest trends, shows, and conventions.
          </p>
        </div>
        <div className="text-center p-6 bg-blue-50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Inclusivity</h3>
          <p className="text-gray-700">
            We welcome anime fans from all walks of life and aim to create a supportive, inclusive environment for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
