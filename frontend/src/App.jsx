import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Collections from "./pages/Collections";
import ProductDetails from "./components/products/ProductDetails";
import Checkout from "./components/cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<Collections />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
