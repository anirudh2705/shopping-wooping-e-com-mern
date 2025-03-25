import React from "react";
import { Link } from "react-router";

import mensCollectionImg from "../../assets/mens-collection.webp";
import womensCollectionImg from "../../assets/womens-collection.webp";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 ">
        <div className="flex-1 relative">
          <img
            src={womensCollectionImg}
            alt="womens collection"
            className="w-full h-[700px] object-cover rounded-lg"
          />
          <div className="absolute bottom-8 left-8 bg-gray-50/45 p-4 md:ml-9">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex-1 relative">
          <img
            src={mensCollectionImg}
            alt="mens collection"
            className="w-full h-[700px] object-cover rounded-lg"
          />
          <div className="absolute bottom-8 left-8 bg-gray-50/45 p-4 md:ml-9">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
