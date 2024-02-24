import React from "react";

export default function ScrollPlates({ bg, icon, title, subtitle }) {
  return (
    <div className="plate-horizontal">
      <div>
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
      </div>
      <div className="fading-plates">
        <img src="plate-1.png" alt="" />
        <img src="plate-2.png" alt="" />
        <img src="plate-3.png" alt="" />
      </div>
    </div>
  );
}
