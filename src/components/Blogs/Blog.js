import React from "react";
import LocationProvider from "../LocationProvider";
import { BrowserRouter, } from "react-router-dom";
import RoutesWithAnimation from "./RoutesWithAnimation";

export default function Blog() {
  return (
    <>
      <BrowserRouter>
        <LocationProvider>
         <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </>
  );
}
