import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
