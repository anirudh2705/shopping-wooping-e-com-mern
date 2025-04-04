import React from "react";

const checkout = {
  _id: "123",
  createdAt: new Date(),
  chexkoutItems: [
    {
      id: 1,
      name: "Product 1",
      color: "black",
      size: "m",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 1,
      name: "Product 2",
      color: "black",
      size: "m",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 1,
      name: "Product 1",
      color: "black",
      size: "m",
      price: 10.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=3",
    },
  ],
  shippingAdd: {
    address: "fff-add",
    city: "cityabc",
    country: "jjkl",
  },
};

const OrderConfirmation = () => {
  const calculateEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for Your Order
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            <div>
              <h2 className="text-xl font-semibold">
                {" "}
                Order Id: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-emerald-700 text-sm">
                {" "}
                Estimated Delivery:{" "}
                {calculateEstimateDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          <div className="mb-20">
            {checkout.chexkoutItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-16 h-16 rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">{item.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">{checkout.shippingAdd.address}</p>
              <p className="text-gray-600">
                {checkout.shippingAdd.city}, {checkout.shippingAdd.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
