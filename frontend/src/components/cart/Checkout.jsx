import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150? random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150? random=2",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const navigate = useNavigate();

  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
    console.log(shippingAddress);
  };

  const handlePaymentSuccess = (details) => {
    console.log("ss", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      <div className="bg-white rounded-lg p-6 ">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="text-gray-700 block">Email</label>
            <input
              type="text"
              value="@gmail.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-2">
            <div>
              <label className="text-gray-700 block">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="text-gray-700 block">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-gray-700 block">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              className="w-full p-2 border rounded"
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2">
            <div>
              <label className="text-gray-700 block">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="text-gray-700 block">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-gray-700 block">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              className="w-full p-2 border rounded"
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-700 block">Phone</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              className="w-full p-2 border rounded"
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full rounded-lg py-3 bg-black text-white"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                <PayPalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment failed. Try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div key={index} className="flex justify-between mb-4">
              <div className="flex gap-3">
                <img src={product.image} className="w-12 h-16 rounded-sm" />
                <div className="tracking-tighter">
                  <h3>{product.name}</h3>
                  <p className="text-sm">size: {product.size}</p>
                  <p className="text-sm">Color: {product.color}</p>
                </div>
              </div>
              <p>rs{product.price}</p>
            </div>
          ))}
          <div className="border-t py-4 ">
            <div className=" flex justify-between">
              <h3 className="text-lg mb-4">Subtotal</h3>
              <h3 className="text-lg mb-4">{cart.totalPrice}</h3>
            </div>
            <div className=" flex justify-between">
              <h3 className="text-lg mb-4">Shipping</h3>
              <h3 className="text-lg mb-4">Free</h3>
            </div>
          </div>

          <div className="border-t flex justify-between py-4">
            <h3 className="text-lg mb-4">Total</h3>
            <h3 className="text-lg mb-4">
              {cart.totalPrice?.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
