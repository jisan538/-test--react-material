import React from "react";
import { Route,Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Product from "../Pages/Product";

export default function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
    </Routes>
  )
};
