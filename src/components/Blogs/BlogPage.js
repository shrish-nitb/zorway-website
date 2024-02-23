import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
      <motion.div
        initial={{y:"100vh"}}
        animate={{y:"0vh"}}
        exit={{y:"100vh"}}
        className="thumb-parent"
      >
        <img src="./blogthumb.png" alt="" />
        <div>
          <div className="title-white ">
            <Link to="/blog">
              Publishing Mobile Apps:
              <br />A How To Guide
            </Link>
          </div>
          <div className="subtitle">
            Steps and Materials to Publishing on the Mobile App Store
          </div>
        </div>
      </motion.div>
  );
}
