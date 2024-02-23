import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesWithAnimation from "./RoutesWithAnimation";
import { AnimatePresence } from "framer-motion";

export default function Blog() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <RoutesWithAnimation />
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}
