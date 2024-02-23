import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Collection from "./Collection";
import Reader from "./Reader";

export default function Blog() {
  const location = useLocation();
  

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<Collection />} />
          <Route path="/*" element={<Reader />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
