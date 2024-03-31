import React from 'react'
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './General/Navbar';
import Home from "./Home/Home";
import Collection from "./Blogs/Collection";
import About from "./About/About";
import Testimonials from "./Testimonial/Testimonial";
import Service from "./Service/service";
import View from "./Testimonial/View";
import Reader from "./Blogs/Reader";
import Footer from './General/Footer';
import { useRef } from "react";
import ScrollContainer from './General/ScrollContainer';


export default function App() {
    let location = useLocation()

    return (
        <>

            <Navbar />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="blogs/*" element={<Collection />} />
                    <Route path="read/*" element={<Reader />} />
                    <Route path="testimonial/*" element={<Testimonials />} />
                    <Route path="story/*" element={<View />} />
                    <Route path="service/*" element={<Service />} />
                </Routes>
            </AnimatePresence>
            <Footer />

        </>
    )
}
