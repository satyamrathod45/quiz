import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faCalendarAlt, faUsers, faSignInAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="bg-blue-500 text-white py-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center max-w-full px-4">
        
        <h1 className="text-2xl font-bold">YCCE ANIME COMMUNITY</h1>

        
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-3xl"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        
        <ul className="hidden lg:flex space-x-6">
          <li>
            <a href="#hero" className="flex items-center hover:text-blue-300">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
          </li>
          <li>
            <a href="#aboutUs" className="flex items-center hover:text-blue-300">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              About
            </a>
          </li>
          <li>
            <a href="#events" className="flex items-center hover:text-blue-300">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Events
            </a>
          </li>
          <li>
            <a href="#team" className="flex items-center hover:text-blue-300">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Team
            </a>
          </li>
          <li>
            <a href="#join" className="flex items-center hover:text-blue-300">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Join
            </a>
          </li>
        </ul>
      </nav>

      
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-500 text-white py-4">
          <ul className="space-y-4 px-6">
            <li>
              <a href="#home" className="flex items-center hover:text-blue-300">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center hover:text-blue-300">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About
              </a>
            </li>
            <li>
              <a href="#events" className="flex items-center hover:text-blue-300">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                Events
              </a>
            </li>
            <li>
              <a href="#team" className="flex items-center hover:text-blue-300">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Team
              </a>
            </li>
            <li>
              <a href="#join" className="flex items-center hover:text-blue-300">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Join
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
