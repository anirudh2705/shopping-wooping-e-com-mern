import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

const CartContents = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-800 px-2 mx-4 "
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              {" "}
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.quantity} | color: {product.name}
              </p>
              <div className="flex items-center mt-2 ">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>{product.price.toLocaleString()}</p>
            <button>
              <MdOutlineDeleteForever className="mt-9 h-6 w-6 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
