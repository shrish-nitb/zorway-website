import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import BlogPage from "./BlogPage";
import ReadPage from "./ReadPage";

export default function Blog() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<BlogPage />} />
          <Route path="/read" element={<ReadPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
