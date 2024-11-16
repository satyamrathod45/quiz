import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:text-blue-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#events" className="hover:text-blue-300">Events</a></li>
              <li><a href="#join" className="hover:text-blue-300">Join Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>animeycce@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>+91 999 999 9999</span>
              </li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} YCCE Anime Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
