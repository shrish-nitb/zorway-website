import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ScrollPlates({rest, action, bg, icon, title, subtitle }) {
  return (
    <motion.div
      transition={{ type: "spring", damping: 9, duration: 2 }}
      initial={{y: 200, opacity: 0}}
      animate={action}
      className="plate-horizontal"
    >
      <img className="plate-icon" src={icon} alt="" />
      <div className="plate-item">
        <div className="plate-text-title">
          {title}
          <svg
            className="plate-left-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
          >
            <path
              d="M7.54834 4.74207L13.3566 10.5503L7.54834 16.3585"
              stroke="#C253FE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3566 10.5497L1 10.5497"
              stroke="#C253FE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="plate-text-subtitle">{subtitle}</div>
      </div>
    </motion.div>
  );
}
