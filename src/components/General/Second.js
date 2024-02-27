import { motion, useScroll } from "framer-motion";
import React from "react";


export default function Second({ purple, white, subtitle, left, right, padding }) {
  const {scrollYProgress} = useScroll();

  return (
    <section className="home-second">
      <div className="gapper" style={{ textAlign: "center" }}>
        <div  className="title-white purple-head">{purple}</div>
        <div className="title-white">{white}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="second-grid" style={{paddingBlock: padding || "8.83vh"}}>
          {left}
          {right}
        </div>
      </div>
    </section>
  );
}
