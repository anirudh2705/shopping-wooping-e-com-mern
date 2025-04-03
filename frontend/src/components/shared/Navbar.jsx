import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import CartDrawer from "../layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import MobileNavDrawer from "../layout/MobileNavDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileNavDrawerOpen, setMobileNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setMobileNavDrawerOpen(!mobileNavDrawerOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="conatiner mx-auto flex justify-between items-center px-6 py-4">
        <div>
          <Link to="/" className="text-2xl font-medium font-pacifico">
            {" "}
            shopping-wooping{" "}
          </Link>
        </div>
        <div className="space-x-6 hidden md:flex ">
          <Link
            to="collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            men
          </Link>
          <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            women
          </Link>
          <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            top wear
          </Link>
          <Link className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            bottom wear
          </Link>
        </div>
        <div className="flex item-center justify-center align-middle space-x-4 ">
          <SearchBar />
          <Link to={"/"} className="hover:text-black">
            <FaRegUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleDrawer}
            to={"/"}
            className=" relative hover:text-black"
          >
            <FaCartShopping className="h-6 w-6 text-gray-700" />
            <span className="absolute bg-red-700 -top-3 text-xs text-white h-5 w-5 rounded-full px-2 py-0.5">
              3
            </span>
          </button>
          <button
            onClick={toggleNavDrawer}
            className="md:hidden hover:text-black"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          mobileNavDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4 ">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4 flex flex-col  ">
            <Link
              onClick={toggleNavDrawer}
              className="text-black hover:text-black text-sm font-medium uppercase"
            >
              men
            </Link>
            <Link
              onClick={toggleNavDrawer}
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              women
            </Link>
            <Link
              onClick={toggleNavDrawer}
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              top wear
            </Link>
            <Link
              onClick={toggleNavDrawer}
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              bottom wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
