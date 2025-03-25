import React from "react";
import { HiShoppingBag, HiOutlineCreditCard } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="bg-white px-4 py-16 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl " />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">
            free international shipping
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            {" "}
            On all orders above ₹999
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl " />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">45 days return</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            {" "}
            Money back gurantee
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-xl " />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">secure checkout</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            {" "}
            100% secure checkout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
