import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockOrderDetails = [
        {
          _id: 789,
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: {
            productId: "1",
            name: "Jacket",
            price: 120,
            quantity: 1,
            image: "https://picsum.photos/150?random=1",
          },
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: 7789,
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: {
            productId: "1",
            name: "paket",
            price: 120,
            quantity: 1,
            image: "https://picsum.photos/150?random=2",
          },
          totalPrice: 100,
          isPaid: false,
        },
      ];
      setOrder(mockOrderDetails);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">My Orders</h2>

      <Table className="text-gray-600 border-b mb-2">
        <TableHeader className="bg-gray-100 ">
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Order Id</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Shipping Address</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <TableRow
                key={order._id}
                onClick={() => handleRowClick(order._id)}
                className="border-b hover:border-gray-50 cursor-pointer"
              >
                <TableCell className="py-2 px-2 sm:py-4 sm:px-4">
                  <img
                    src={order.orderItems?.image}
                    alt={order.orderItems?.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                  />
                </TableCell>
                <TableCell className="font-semibold text-gray-900 whitespace-nowrap">
                  #{order._id}
                </TableCell>
                <TableCell className="font-medium text-gray-900 whitespace-nowrap">
                  {new Date(order.createdAt).toLocaleDateString()}{" "}
                  {new Date(order.createdAt).toLocaleTimeString()}
                </TableCell>
                <TableCell>
                  {order.shippingAddress.city}, {order.shippingAddress.country}{" "}
                </TableCell>
                <TableCell>{order.orderItems.name}</TableCell>
                <TableCell>{order.orderItems.price}</TableCell>
                <TableCell>
                  {order.isPaid ? (
                    <Badge variant="paid">Paid</Badge>
                  ) : (
                    <Badge variant="pending">Pending</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="py-4 px-4 text-center text-gray-500"
              >
                You have no orders
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Button variant="red">shadcn</Button>
    </div>
  );
};

export default MyOrders;
