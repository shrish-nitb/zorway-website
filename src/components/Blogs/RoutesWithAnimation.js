import React from "react";
import { BrowserRouter, Route, Routes,  useLocation, } from "react-router-dom";
import ReadPage from "./ReadPage";
import BlogPage from "./BlogPage";

export default function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<BlogPage />} />
      <Route path="/blog" element={<ReadPage />} />
    </Routes>
  );
}
