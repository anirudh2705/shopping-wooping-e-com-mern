import React from "react";
import { IoMdClose } from "react-icons/io";

const MobileNavDrawer = (mobileNavDrawerOpen, toggleNavDrawer) => {
  return (
    <div
      className={` top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        mobileNavDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleNavDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default MobileNavDrawer;
