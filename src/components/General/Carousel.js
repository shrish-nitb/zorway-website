import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const [view, setView] = useState(0);
  const [opacity, setOpacity] = useState([1, 0.3, 0.3, 0.3, 0.3, 0.3]);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prevOpacity) => {
        let temp = [...prevOpacity];
        temp[view] = 0.3;
        temp[(view + 1) % 6] = 1;
        return temp;
      });
      setView((view + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, [view]);
  return (
    <>
      <div class="title-white" style={{ textAlign: "center" }}>
        <span class="purple-head">Our </span>Testimonials
      </div>
      <div style={{ width: "100vw" }}>
        <motion.div className="caro-container" animate={{ x: -816 * view }}
        transition={{duration: 1}}
        >
          <motion.div animate={{ opacity: opacity[0] }} className="caro-plates">
            <div className="caro-plate-1">
              <div className="caro-info-container">
                <img
                  className="caro-avatar"
                  src="https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*"
                  alt=""
                />
                <div className="caro-plate-1-info">
                  <span className="member-name">Pawan Raj Verma</span>
                  <span className="member-description">
                    Zorway Technologies
                  </span>
                </div>
              </div>
            </div>
            <div className="caro-plate-2 caro-color-main">
              “{" "}
              <span className="caro-color-special">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </span>{" "}
              labLorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labLorem ipsum dolor sit amt,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lab “ Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt molestiae iure omnis quibusdam ea maxime placeat
              voluptatibus, tempora rerum doloribus obcaecati, doloremque
              provident dolorum nesciunt officia consectetur possimus eos illo?
            </div>
          </motion.div>
          <motion.div animate={{ opacity: opacity[1] }} className="caro-plates">
            <div className="caro-plate-1">
              <div className="caro-info-container">
                <img
                  className="caro-avatar"
                  src="https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*"
                  alt=""
                />
                <div className="caro-plate-1-info">
                  <span className="member-name">Sai Varun</span>
                  <span className="member-description">
                    Zorway Technologies
                  </span>
                </div>
              </div>
            </div>
            <div className="caro-plate-2 caro-color-main">
              “{" "}
              <span className="caro-color-special">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </span>{" "}
              labLorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labLorem ipsum dolor sit amt,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lab “
            </div>
          </motion.div>
          <motion.div animate={{ opacity: opacity[2] }} className="caro-plates">
            <div className="caro-plate-1">
              <div className="caro-info-container">
                <img
                  className="caro-avatar"
                  src="https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*"
                  alt=""
                />
                <div className="caro-plate-1-info">
                  <span className="member-name">Neeraj Patel</span>
                  <span className="member-description">
                    Zorway Technologies
                  </span>
                </div>
              </div>
            </div>
            <div className="caro-plate-2 caro-color-main">
              “{" "}
              <span className="caro-color-special">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </span>{" "}
              labLorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labLorem ipsum dolor sit amt,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lab “ Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Itaque, accusantium rerum. Esse expedita officia ullam!
            </div>
          </motion.div>
          <motion.div animate={{ opacity: opacity[3] }} className="caro-plates">
            <div className="caro-plate-1">
              <div className="caro-info-container">
                <img
                  className="caro-avatar"
                  src="https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*"
                  alt=""
                />
                <div className="caro-plate-1-info">
                  <span className="member-name">Sai Varun</span>
                  <span className="member-description">
                    Zorway Technologies
                  </span>
                </div>
              </div>
            </div>
            <div className="caro-plate-2 caro-color-main">
              “{" "}
              <span className="caro-color-special">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </span>{" "}
              labLorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labLorem ipsum dolor sit amt,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lab “
            </div>
          </motion.div>
          <motion.div animate={{ opacity: opacity[4] }} className="caro-plates">
            <div className="caro-plate-1">
              <div className="caro-info-container">
                <img
                  className="caro-avatar"
                  src="https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*"
                  alt=""
                />
                <div className="caro-plate-1-info">
                  <span className="member-name">Neeraj Patel</span>
                  <span className="member-description">
                    Zorway Technologies
                  </span>
                </div>
              </div>
            </div>
            <div className="caro-plate-2 caro-color-main">
              “{" "}
              <span className="caro-color-special">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </span>{" "}
              labLorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labLorem ipsum dolor sit amt,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lab “ Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Itaque, accusantium rerum. Esse expedita officia ullam!
            </div>
          </motion.div>
          <motion.div animate={{ opacity: opacity[5] }} className="caro-plates">
            <div className="caro-plate-1">
              <div className="caro-info-container">
                <img
                  className="caro-avatar"
                  src="https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*"
                  alt=""
                />
                <div className="caro-plate-1-info">
                  <span className="member-name">Pawan Raj Verma</span>
                  <span className="member-description">
                    Zorway Technologies
                  </span>
                </div>
              </div>
            </div>
            <div className="caro-plate-2 caro-color-main">
              “{" "}
              <span className="caro-color-special">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </span>{" "}
              labLorem ipsum dolor sit amt, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labLorem ipsum dolor sit amt,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lab “ Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt molestiae iure omnis quibusdam ea maxime placeat
              voluptatibus, tempora rerum doloribus obcaecati, doloremque
              provident dolorum nesciunt officia consectetur possimus eos illo?
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
