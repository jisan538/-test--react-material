import React from "react";
import { Route,Routes } from "react-router-dom";
import Check from "../Pages/Check";
import DailyLoad from "../Pages/DailyLoad";
import Dashboard from "../Pages/Dashboard";
import Product from "../Pages/Product";
import Report from "../Pages/Report";
import Salesman from "../Pages/Salesman";
import Zone from "../Pages/Zone";

export default function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/zone" element={<Zone />} />
        <Route path="/salesman" element={<Salesman />} />
        <Route path="/daily-load" element={<DailyLoad />} />
        <Route path="/report" element={<Report />} />
        <Route path="/check/check" element={<Check />} />
        <Route path="/check/product" element={<Check />} />
        <Route path="/check/all" element={<Check />} />
    </Routes>
  )
};
