import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
