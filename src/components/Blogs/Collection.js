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
        <img src="https://s3-alpha-sig.figma.com/img/7cd3/8fa5/a4bae463af518f8105d9a332943b929f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vgcj9KTTbEWLou--g6NBt949iAGTgPEwPhJXA5qiKuXWilOSGCLIWPcsVG1sHT1bNVVnwTluU9k8a6wbPabqlowhJyo5owxxxSsXUnhC-1sIs8oC--hmqM9XH3fbQFfYNApPh1mt4NZrF1h4lmvWPcaa6zqLjOi8tnPYywHSKaNgUs1s8j6XniAvzylIyrtJ4QhMEwVGY4kMHXn0TWL00o8jgXP9bkpUp8wCXGKIJ83uRbK35g0yQDGGPscQhNm0gCcJUpKSOTnUACOY83fUNN8mmDIAs--4Q3tOlugsKcY6xNLYGC4LZxePc99~Hp-0xvxiTRPXDkn05AyNf7suNQ__" alt="" />
        <div>
          <div className="title-white ">
            <Link to="read">
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
