import React from "react";
import { BrowserRouter } from "react-router-dom";
import BlogRoutes from "./BlogRoutes";
import { AnimatePresence } from "framer-motion";

export default function Blog() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <BlogRoutes />
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}
