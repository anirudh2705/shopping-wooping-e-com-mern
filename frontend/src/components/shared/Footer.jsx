import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t py-12 mx-10 ">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 mx-auto  ml-12">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h3>
          <p className=" text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className=" font-semibold text-sm text-gray-600 mb-6">
            Sign up and get 10% off your first order.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600 font-semibold">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600 font-semibold">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-4">
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
          <h3 className="text-lg font-bold text-gray-800 ">Call Us</h3>
          <p>
            <MdOutlinePhoneInTalk className="inline-block mr-2" />
            +91-8658239084
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          {" "}
          © 2025, Anirudh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
