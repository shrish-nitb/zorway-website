import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home";
import Blog from "./components/Blogs/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Testimonials from "./components/Testimonial/Testimonial";
import 'animate.css';
import Service from "./components/Service/service";
import View from "./components/Testimonial/View";
import Reader from "./components/Blogs/Reader";
import Navbar from "./components/General/Navbar"; 
import "../src/hamburgers.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs/*" element={<Blog />} />
        <Route path="/read/*" element={<Reader />} />
        <Route path="/testimonial/*" element={<Testimonials />} />
        <Route path="/story/*" element={<View />} />
        <Route path="/service/*" element={<Service />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
