import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="bg-red-700 text-white font-garamond  ">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="hidden md:flex items-center space-x-4">
          <a className="hover:text-gray-300">
            <FaMeta className="h-5 w-5" />
          </a>
          <a className="hover:text-gray-300">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a className="hover:text-gray-300">
            <FaXTwitter className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow ">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className=" hidden md:block text-sm">
          <a className="hover:text-gray-300" href="tel:8658239084">
            {" "}
            +91-8658239084
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
