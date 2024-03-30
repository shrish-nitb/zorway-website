import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export default function Carousel({ heading }) {
  const [view, setView] = useState(0);
  const [opacity, setOpacity] = useState([1, 0.3, 0.3, 0.3, 0.3, 0.3]);
  const caroPlate = useRef(null);
  const [width, setWidth] = useState(0);

  let [carouselItems, setCarouselItems] = useState([
    {
      name: "1",
      description: "Zorway Technologies",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*",
    },
    {
      name: "2",
      description: "Zorway Technologies",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*",
    },
    {
      name: "3",
      description: "Zorway Technologies",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*",
    },
    {
      name: "4",
      description: "Zorway Technologies",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*",
    },
    {
      name: "5",
      description: "Zorway Technologies",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*",
    },
    {
      name: "6",
      description: "Zorway Technologies",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*",
    },
  ]);


  useEffect(() => {
    setWidth(Number(caroPlate.current.getBoundingClientRect().width) + 70);
    const interval = setInterval(() => {
      setOpacity((prevOpacity) => {
        let temp = [...prevOpacity];
        temp[view] = 0.3;
        setView((view + 1)%6);
        temp[(view + 1)%6] = 1;
        return temp;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [view]);

  return (
    <>
      <div class="title-white testimonial-heading" style={{ textAlign: "center" }}>
        <span class="purple-head">Our </span>Testimonials
      </div>

      <div
        className="caro-parent"
        style={{
          width: "100%",
          height: "max-content",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          className="caro-container"
          animate={
            window.innerWidth <= 1023
              ? { x: (width + 35) * view * -1 + (view - 1) * 35 + 30 }
              : { x: width * view * -1 + (width + 70) / 2 }
          }
          transition={{ duration: 1 }}
        >
          {carouselItems.map((item, index) => (
            <motion.div key={index} animate={{ opacity: opacity[index] }} className="caro-plates" ref={caroPlate}>
              <div className="caro-plate-1">
                <div className="caro-info-container">
                  <img className="caro-avatar" src={item.image} alt="" />
                  <div className="caro-plate-1-info">
                    <span className="member-name">{item.name}</span>
                    <span className="member-description">{item.description}</span>
                  </div>
                </div>
              </div>
              <div className="caro-plate-2 caro-color-main">
                <span className="caro-color-special">{item.testimonial}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "122px",
            fontSize: "2.25rem",
            gap: "4rem",
            cursor: "pointer",
          }}
        >
          <i
            class="fa-solid fa-arrow-left"
            onClick={() => {
              if (view > 0) {
                setOpacity((prevOpacity) => {
                  let temp = [...prevOpacity];
                  temp[view] = 0.3;
                  temp[(view - 1) % 6] = 1;
                  return temp;
                });
                setView((view - 1) % 6);
              }
            }}
          ></i>
          <i
            class="fa-solid fa-arrow-right"
            onClick={() => {
              if (view < carouselItems.length - 1) {
                setOpacity((prevOpacity) => {
                  let temp = [...prevOpacity];
                  temp[view] = 0.3;
                  temp[(view + 1) % 6] = 1;
                  return temp;
                });
                setView((view + 1) % 6);
              }
            }}
          ></i>
        </div>
      </div>
    </>
  );
}
