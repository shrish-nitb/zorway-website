import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home";
import Blog from "./components/Blogs/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Testimonials from "./components/Testimonial/Testimonial";
import 'animate.css';
import Glossy from "./components/General/Glossy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs/*" element={<Blog />} />
        <Route path="/testimonial/*" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
