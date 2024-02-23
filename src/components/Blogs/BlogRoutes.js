import React from "react";
import { Route, Routes,  useLocation, } from "react-router-dom";
import ReadPage from "./ReadPage";
import BlogPage from "./BlogPage";

export default function BlogRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<BlogPage />} />
      <Route path="/blog" element={<ReadPage />} />
    </Routes>
  );
}
