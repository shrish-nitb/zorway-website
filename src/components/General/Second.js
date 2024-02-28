import { motion, useScroll } from "framer-motion";
import React from "react";

export default function Second({
  purple,
  white,
  subtitle,
  left,
  right,
  destination,
}) {
  const { scrollYProgress } = useScroll();

  return (
    <section className="home-second">
      <div className="gapper" style={{ textAlign: "center" }}>
        <div
          style={
            destination == "homepage" && (window.innerWidth > 639)
              ? { height: "25rem", paddingTop: "calc(38vh - 3.8125rem)" }
              : {}
          }
        >
          <div className="title-white purple-head">{purple}</div>
          <div
            style={
              destination == "homepage" && (window.innerWidth > 639)
                ? { position: "sticky", top: "38vh" }
                : {}
            }
          >
            <div className="title-white">{white}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
        <div style={{overflowX:"hidden"}}>
          <div
            className="second-grid"
            style={destination == "homepage" ? { paddingTop: "12.5rem" } : {}}
          >
            {left}
            {right}
          </div>
        </div>
      </div>
    </section>
  );
}
