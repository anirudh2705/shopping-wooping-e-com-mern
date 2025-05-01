import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "12",
          name: "Jacket",
          price: 120,
          quantity: 2,
          image: "https://picsum.photos/150?random=1",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row justify-between md-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>

              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0 space-y-2">
              <Badge
                variant={`${orderDetails.isPaid ? "paid" : "pending"}`}
                className="border-none"
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </Badge>
              <Badge
                variant={`${orderDetails.isDelivered ? "paid" : "delivery"}`}
                className="border-none"
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending delivery"}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p>Patment method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Pending"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p>Shipping method: {orderDetails.shippingMethod}</p>
              <p>
                Address: {orderDetails.shippingAddress.city},{" "}
                {orderDetails.shippingAddress.country}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Products</h4>

            <Table className="text-gray-600 border-b mb-2">
              <TableHeader className="bg-gray-100 ">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderDetails.orderItems.map((item) => (
                  <TableRow key={item.productId}>
                    <TableCell className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/products/${item.productId}`}
                        className="hover:underline"
                      >
                        {item.name}
                      </Link>
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.price * item.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Link
            to="/my-orders"
            className="hover:underline text-blue-500 p-1.5 pt-5"
          >
            Back to My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
