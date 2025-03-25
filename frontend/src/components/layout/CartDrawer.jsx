import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      {/* cart items  */}
      <div>
        <h2 className="text-xl font-semibold mb-4 p-4">Your Cart</h2>
        {/* cart components  */}
        <CartContents />
      </div>
      {/* checkout button  */}
      <div className="p-4 bg-white sticky bottom-0 mt-auto">
        {" "}
        <button className="w-full bg-black rounded-lg text-white py-3 hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes and discount codes calculated at checkout.{" "}
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
