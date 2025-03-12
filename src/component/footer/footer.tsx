import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0233] text-white py-8 mt-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Layout dengan jarak di antara brand dan social media */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold italic text-blue-200">
              MovieApp
            </h2>
            <p className="mt-2 text-gray-300 max-w-sm">
              Discover the best movies and TV shows anytime, anywhere.
            </p>
          </div>

          {/* Spacer untuk memberikan jarak */}
          <div className="hidden md:block flex-1"></div>

          {/* Social Media */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-xl font-semibold text-center md:text-left">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="#" className="hover:text-gray-300 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MovieApp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
