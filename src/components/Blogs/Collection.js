import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThumbGrid from "./ThumbGrid";


export default function BlogPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="tools tools-header"
      >
        <div>
          <div className="button-tools">Back to Blogs</div>
        </div>
      </motion.div>
      <Link to="read">
        <motion.div
          exit={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
          className="thumb-parent"
        >
          <div class="image-container">
            <div class="image-overlay"></div>
            <motion.img
              exit={{ maxHeight: "607px", maxWidth: "1700px" }}
              transition={{ type: "spring", damping: 9, duration: 2 }}
              src="https://s3-alpha-sig.figma.com/img/7cd3/8fa5/a4bae463af518f8105d9a332943b929f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vgcj9KTTbEWLou--g6NBt949iAGTgPEwPhJXA5qiKuXWilOSGCLIWPcsVG1sHT1bNVVnwTluU9k8a6wbPabqlowhJyo5owxxxSsXUnhC-1sIs8oC--hmqM9XH3fbQFfYNApPh1mt4NZrF1h4lmvWPcaa6zqLjOi8tnPYywHSKaNgUs1s8j6XniAvzylIyrtJ4QhMEwVGY4kMHXn0TWL00o8jgXP9bkpUp8wCXGKIJ83uRbK35g0yQDGGPscQhNm0gCcJUpKSOTnUACOY83fUNN8mmDIAs--4Q3tOlugsKcY6xNLYGC4LZxePc99~Hp-0xvxiTRPXDkn05AyNf7suNQ__"
              alt=""
            />
          </div>
          <motion.div
            exit={{
              position: "absolute",
              right: "10vw",
              width: "calc((80vw - 49px) / 2.8)",
              y: "30vh",
              opacity: 0,
            }}
            transition={{ type: "spring", duration: 1 }}
          >
            <div className="title-white ">
              Publishing Mobile Apps:
              <br />A How To Guide
            </div>
            <div className="subtitle">
              Steps and Materials to Publishing on the Mobile App Store
            </div>
          </motion.div>
        </motion.div>
      </Link>
      <motion.div
        exit={{ y: "-755px", opacity: 1 }}
        transition={{ ease: "linear", duration: 1 }}
        className="tools"
      >
        <div>
          <motion.div
          
          className="button-tools">All</motion.div>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 1 }}
            className="button-tools"
          >
            Report
          </motion.div>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 1 }}
            className="button-tools"
          >
            Blogs
          </motion.div>
        </div>
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ ease: "linear", duration: 1 }}
          className="search"
        ></motion.div>
      </motion.div>
      <ThumbGrid />
     <div className="footer"></div>
    </>
  );
}
