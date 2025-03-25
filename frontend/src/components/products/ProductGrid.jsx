import React from "react";
import { Link } from "react-router";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-20">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          {" "}
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                src={product.image[0].url}
                alt={product.image[0].altText}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-sm text-gray-500 tracking-tighter font-medium">
              {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
