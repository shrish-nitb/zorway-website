import React from "react";
import Second from "../General/Second";
import ScrollPlates from "./ScrollPlates";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import {
  Routes,
  Route,
  useLocation,
  unstable_HistoryRouter,
} from "react-router-dom";
import Glossy from "../General/Glossy";
import MemberThumb from "./MemberThumb";

export default function About() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.section
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="about-hero-section"
        >
          <div className="about-heading">
            <span className="about-heading-grad">About</span>
            <span> Us</span>
          </div>
          <div className="subtitle">
            Unleash the full potential of your concept, enterprise, and
            aspirations, turning them into reality.
          </div>

          <motion.div
            className="classic-1"
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.42, 0, 0.58, 1] }}
            src=""
            alt=""
          />
          <motion.img
            initial={{ x: "100px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
            className="classic-2"
            src="Group 1000001776.svg"
            alt=""
          />
          <motion.img
            initial={{ x: "538px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
            className="classic-3"
            src="Vector 34.svg"
            alt=""
          />
        </motion.section>
        <Second
          purple={<>Welcome to Zorway</>}
          white={<>Your Gateway to Digital Excellence!</>}
          right={
            <>
              <img
                src="https://www.figma.com/file/oBm9aizomCqDqNVNtDXXja/image/07fcdfd9f524115fa8e5ae54cae4f3abfde4f793"
                style={{ width: "100%" }}
                alt=""
              />
            </>
          }
          left={
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                  justifyContent: "center",
                  paddingInline: "4.45vw",
                }}
              >
                <div className="subtitle txt-left">
                  Zorway embodies a team of passionate experts united by a
                  common goal: to equip businesses with innovative solutions
                  that drive success. With extensive experience and a commitment
                  to innovation, we offer a range of services tailored to meet
                  diverse business needs.
                  <br />
                  <br />
                  At Zorway, we understand that every business is unique. That's
                  why we prioritize flexibility and customization in our
                  approach, ensuring that our solutions align perfectly with
                  your specific requirements. Whether it's leveraging emerging
                  technologies or optimizing existing processes, we're dedicated
                  to delivering results that propel your business forward.
                  <br />
                  <br />
                  With a comprehensive suite of services, Zorway is your partner
                  in navigating the complexities of the modern business
                  landscape. From software development to strategic consultancy,
                  we provide the expertise and support you need to thrive. Trust
                  Zorway to lead your business towards success with our
                  relentless pursuit of excellence and commitment to innovation.
                </div>
              </div>
            </>
          }
        ></Second>
        <section className="scroll-horizontal-section">
          <div class="title-white">
            <span class="purple-head">How We </span>Work
          </div>
          <ScrollPlates
            bg={"url(plate-1.png)"}
            icon={"plate-icon-1.svg"}
            title={"Research"}
            subtitle={"Lorem ipsum dolor sit"}
          />
        </section>
        <section className="members">
          <div className="title-white purple-head">
            Unite with Our Founding Team:
          </div>
          <div className="title-white"> Let's Make It a Happen!</div>
          <div className="palette">
            <MemberThumb
              name={"Sai Varun"}
              info={"Co-Founder & CEO"}
            ></MemberThumb>
            <MemberThumb
              name={"Neeraj Patel"}
              info={"Co-Founder & CTO"}
            ></MemberThumb>
            <MemberThumb
              name={"Pawan Raj Verma"}
              info={"Co-Founder & COO"}
            ></MemberThumb>
          </div>
        </section>
        <Glossy bg={`url("112.png")`} position={"right"}>
          <div className="career-container">
            <div className="head purple-head">Want a career with us?</div>
            <div className="subtitle">
              Are you prepared to embark on an exhilarating career journey with
              us?
            </div>
          </div>
          <div style={{ margin: "unset" }} class="outlined-btn">
            <div>Get In Touch</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M24.5138 14.0053C24.513 13.8326 24.4773 13.6618 24.4087 13.5033C24.3401 13.3448 24.2402 13.2018 24.1148 13.083L16.8173 5.78552C16.5268 5.50727 16.2276 5.38477 15.9161 5.38477C15.2056 5.38477 14.6946 5.88527 14.6946 6.56252C14.6946 6.91777 14.8381 7.21877 15.0621 7.44102L17.5593 9.97327L20.7811 12.9168L18.2051 12.761H4.74059C3.99684 12.761 3.48584 13.272 3.48584 14.0053C3.48584 14.728 3.99684 15.239 4.74059 15.239H18.2051L20.7811 15.0815L17.5611 18.0268L15.0603 20.559C14.9435 20.6734 14.8507 20.8101 14.7876 20.961C14.7245 21.1119 14.6923 21.274 14.6928 21.4375C14.6928 22.1148 15.2056 22.6153 15.9161 22.6153C16.2276 22.6153 16.5286 22.4928 16.7928 22.2373L24.1148 14.917C24.2389 14.7998 24.3382 14.6588 24.4067 14.5025C24.4753 14.3462 24.5117 14.1759 24.5138 14.0053Z"
                fill="#AA67FE"
              ></path>
            </svg>
          </div>
        </Glossy>
        <br />
      </AnimatePresence>
    </>
  );
}
