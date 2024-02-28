import Btnpill from "./btn-pill";
import { motion } from "framer-motion";
import Second from "../General/Second";
import ThumbGrid from "../Blogs/ThumbGrid";
import Carousel from "../General/Carousel";
import Marquee from "react-fast-marquee";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  Aos.init();
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  let anim01 = useTransform(scrollYProgress, [0.07882831012733728, 0.14140019703108825], [700, 0]);
  let anim02 = useTransform(scrollYProgress, [0.07882831012733728, 0.14140019703108825], [0, 1]);
  let anim03 = useTransform(scrollYProgress, [0.07882831012733728, 0.14140019703108825], [0, 1]);
  let anim04 = useTransform(scrollYProgress, [0.18158116942853908, 0.27191166321601107], ["100%", "0%"]);
  let anim05 = useTransform(scrollYProgress, [0.18158116942853908, 0.27191166321601107], ["-100%", "0%"]);
  let anim06 = useTransform(scrollYProgress, [0.18158116942853908, 0.2929223312683316], [0, 1]);
  let anim07 = useTransform(scrollYProgress, [0.03, 0.127], [1, 0]);
  let anim08 = useTransform(scrollYProgress, [0.03, 0.127], [0, -100]);
  let anim09 = useTransform(scrollYProgress, [0.037, 0.382], ["100%", "0%"]);
  let anim10 = useTransform(scrollYProgress, [0.037, 0.382], ["-100%", "0%"]);
  let anim11 = useTransform(scrollYProgress, [0.037, 0.382], [0, 1]);

  return (
    <>
      <motion.section
        initial={{ scale: 1.5, filter: "blur(1px)", opacity: 0 }}
        animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1 }}
        className="home-first"
      >
        <motion.div style={{ opacity: anim07, y: anim08 }} className="center">
          <motion.img
            style={{ opacity: anim07, y: anim08 }}
            className="rings"
            src="rings.png"
          />
          <img className="icons" src="icons.png" />
          <div className="content">
            <Btnpill />
            <div>
              <div className="heading">Smarter</div>
              <div className="subHeading">
                <motion.div
                  animate={{
                    y: [
                      0,
                      0,
                      -123,
                      -123,
                      -123 * 2,
                      -123 * 2,
                      -123 * 3,
                      -123 * 3,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <span>Web Assists.</span>
                  <span>UI/UX development.</span>
                  <span>Digital transformation.</span>
                  <span>Web and Mobile application.</span>
                </motion.div>
              </div>
            </div>
            <div className="description">
              Unlock the full potential of your business with our comprehensive
              suite of cutting-edge digital services.
              <br />
              Be the master of your own Empire.
              <br />
              We’ll be its architects.
            </div>
            <div className="linkbtn">Get A Quote</div>
            <div className="morebtn">
              <span>Learn More</span>
              <div className="view-down">
                <i class="fa-solid fa-arrow-down"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <Second
        white={
          <>
            <motion.div style={{ y: anim01, opacity: anim02, scale: anim03 }}>
              One Organization,
              <br />
              Infinite Possibilities.
            </motion.div>
          </>
        }
        subtitle={
          <>
            <motion.div style={{ y: anim01, opacity: anim02, scale: anim03 }}>
              Enable your business to create improved processes,
              <br />
              leading to superior outcomes.
            </motion.div>
          </>
        }
        destination={"homepage"}
        left={
          <>
            <motion.img
              src="globe.png"
              style={{ x: anim05, opacity: anim06, width: "100%" }}
              alt=""
            />
          </>
        }
        right={
          <>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                justifyContent: "center",
                paddingInline: "4.45vw",
                x: anim04,
               
                opacity: anim06,
              }}
            >
              <div class="title-white">
                <span class="purple-head">Who </span>We Are
              </div>
              <div className="subtitle">
                We are a collaborative team comprised of builders, designers,
                and investors dedicated to crafting groundbreaking products
                within Web3. Our mission extends beyond creation; we actively
                empower founders throughout their journey. With a focus on
                innovation and support, we strive to make a lasting impact in
                the digital landscape.
              </div>
              <div className="outlined-btn">
                <div>Know More</div>
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
                  />
                </svg>
              </div>
            </motion.div>
          </>
        }
      />
      <section className="home-third">
        <div className="third-flex">
          <motion.div
            style={{ x: anim10, opacity: anim11 }}
            className="third-flex-text"
          >
            <div>
              <span className="third-flex-head-white">We Design,</span>
              <br />
              <span className="third-flex-head-color">
                Craft Brands & <br /> Execute Digital Projects
              </span>
            </div>
            <div className="subtitle">
              We're a Premier Digital Solution and Development Firm, Committed
              to Crafting Tailored, High-Impact Websites for Businesses of Every
              Scale, Fueling Their Online Success."
            </div>
            <div className="outlined-btn">
              <div>Get A Quote</div>
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
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            style={{ x: anim09, opacity: anim11 }}
            className="features"
          >
            <div
              data-aos="zoom-out"
              data-aos-easing="ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <circle cx="15.083" cy="14.4364" r="10.7006" fill="#AA67FE" />
                <path
                  d="M9.13818 13.6633L13.894 18.4191L21.0278 11.2857"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>Custom website development</div>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-easing="ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <circle cx="15.083" cy="14.4364" r="10.7006" fill="#AA67FE" />
                <path
                  d="M9.13818 13.6633L13.894 18.4191L21.0278 11.2857"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>Flexible Revision Policy</div>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-delay="1000"
              data-aos-easing="ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <circle cx="15.083" cy="14.4364" r="10.7006" fill="#AA67FE" />
                <path
                  d="M9.13818 13.6633L13.894 18.4191L21.0278 11.2857"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>Domain/Hosting Setup</div>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-delay="1000"
              data-aos-easing="ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <circle cx="15.083" cy="14.4364" r="10.7006" fill="#AA67FE" />
                <path
                  d="M9.13818 13.6633L13.894 18.4191L21.0278 11.2857"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>Technical Consultancy</div>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-delay="2000"
              data-aos-easing="ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <circle cx="15.083" cy="14.4364" r="10.7006" fill="#AA67FE" />
                <path
                  d="M9.13818 13.6633L13.894 18.4191L21.0278 11.2857"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>Complete UI/UX Wire-frames</div>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-delay="2000"
              data-aos-easing="ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <circle cx="15.083" cy="14.4364" r="10.7006" fill="#AA67FE" />
                <path
                  d="M9.13818 13.6633L13.894 18.4191L21.0278 11.2857"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>Plagiarism Free Content</div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <section className="home-fourth">
        <div className="panes-container">
          <div className="horizontal-panes-fourth">
            <div
              className="cool-image"
              style={{
                backgroundImage:
                  "url(https://s3-alpha-sig.figma.com/img/53a6/6956/697744e1e45002e1987f16c33d73bee5?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1l2osIqN7ND3LCkVLL3Q1szjvFoJpp5w~6cSVK-~OF1dDS0nSr02HMUBs-NwDoLiO~9Y6uGVRMK7zi5ZvjL3xrVLn~eKTK9kGYnUruWxT3PwNp8YyHBQGErEaZIQ4s0eMuHRIgjtkLzqIsitQnamUxCTUHyjsTzNFkAM5ZEkvYih84s~tenhZEPbu5SjSRWK6vMUWyeGZsqBn-e5mpXFVF0l1RZRdRs9Xo3~hjmlLqwun5nWYa4a57UJXGM2vA8eglGTVrYLFJqIBtz1BQqaeZm4dHLQXTczhmWnZLhNAKWueWoMhu5J5EMkh2zWGFnHNKG~tIJsx0YT3e0WJ0GTw__)",
              }}
            ></div>
            <div className="glass-outer glass-right">
              <div className="glass-inner">
                <div className="glass-text">
                  <div>
                    <span className="head purple-head">Web</span>
                    <span className="head white-head"> Design</span>
                  </div>
                  <div className="glass-text-concept">
                    Developing a user-friendly interface to engage more possible
                    customers.
                  </div>
                </div>
                <img
                  className="glass-image"
                  src="https://s3-alpha-sig.figma.com/img/7cd3/8fa5/a4bae463af518f8105d9a332943b929f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vgcj9KTTbEWLou--g6NBt949iAGTgPEwPhJXA5qiKuXWilOSGCLIWPcsVG1sHT1bNVVnwTluU9k8a6wbPabqlowhJyo5owxxxSsXUnhC-1sIs8oC--hmqM9XH3fbQFfYNApPh1mt4NZrF1h4lmvWPcaa6zqLjOi8tnPYywHSKaNgUs1s8j6XniAvzylIyrtJ4QhMEwVGY4kMHXn0TWL00o8jgXP9bkpUp8wCXGKIJ83uRbK35g0yQDGGPscQhNm0gCcJUpKSOTnUACOY83fUNN8mmDIAs--4Q3tOlugsKcY6xNLYGC4LZxePc99~Hp-0xvxiTRPXDkn05AyNf7suNQ__"
                ></img>
              </div>
            </div>
          </div>
          <div className="horizontal-panes-fourth horizontal-panes-fourth-reverse">
            <div
              className="cool-image"
              style={{
                backgroundImage:
                  "url(https://s3-alpha-sig.figma.com/img/5df6/8a06/f5ce4736258eb3d116a8d861dfb9f641?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4XoT8~f4NaLJmvEmR23qsHcxB7UljB1V9XYF6xHdWqU9jr3CJg5QAJfAASOAtA8RVIvH95LvoPAcIuMpXfn-b054jtMK9emuWZXWgnVhJxx50CzB6Tvj2k5IWkDCGSEZsCAdGa5ztPH5Fs5ntJllFF6hs2CkRLwWX6h8gpjHNHv6jIWZhXhoSgka4ieEjw5CbHvygIlgwW1i6X9OJwhh4j0bEGI1hTBXYVGoYIS4w3sEsHAeRun4PocoOrP1Zo2Z2qJL8hOLarV1qHNDoFNWezWQsO4RT1YA4~rmpHDFPypsVbeq7JWB~Rkn~G~YnlwejwUQ26-LqAeiOUpIEDEhg__)",
              }}
            ></div>
            <div className="glass-outer glass-left">
              <div className="glass-inner">
                <div className="glass-text">
                  <div>
                    <span className="head purple-head">UI/UX</span>
                    <span className="head white-head"> Development</span>
                  </div>
                  <div className="glass-text-concept">
                    Magically designing logos, and other media to build the
                    brand identity.
                  </div>
                </div>
                <img
                  className="glass-image"
                  src="https://s3-alpha-sig.figma.com/img/3dbd/e895/b7aa68b9cc9f04e57acf88c01e57dd26?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qGAYrZyrrjxk7M7rm2-JI35bZmvywsKfu-8SNu1AHd9nwipbahNRNatFswLr6yb~GjNOf04mqTSKWb-c7BfdCau6PKxqaa78UqfsqTqPIEe3dcpSeqoZke4jIJ--Sh~KmYjXT3dO-n-EdWt4algRxo66nvc5CZDh59-f6SiX4fCYD9mGxsbNVWmQoi-SahhTkIfuAsiiAPR~kEcrCR9bQGlkFVjGJJUiO7FVEvyzNbKGJZvej1wzkFFNtiGtU0juqszbDyyVlgPVdfXg8ATyUPKv~9UaMSz1EU8hKMXW7m51UyO2-aY-8YhVlrJCUpl4qIeqPFAzxirril7VvVLM2A__"
                ></img>
              </div>
            </div>
          </div>
          <div className="horizontal-panes-fourth">
            <div
              className="cool-image"
              style={{
                backgroundImage:
                  "url(https://s3-alpha-sig.figma.com/img/febb/8971/b0fd508555348fe731254ea3ebd338c9?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CTmNvVvCmWfYplFQldXR5XE-zLOBgx40AM3X86n8vQbKPSga5BI3U9iYLga50s3dUU3leqJkyE7zi3JxvsEB315mGKoialW3GUegchwPvffwEyWS~jXATL9wByzln92urFoRr4IKKVoGa4jgM3Q-kWGLyTM6E49yKdqUVhmnlzqH8mF-6N4RMtmntw7tuu60ajsqMJeTxo0r9i-3oeT1XoJs5Fp2ohI86iNNtrig3vOjnKi~xMSk8LiBD7Wc4E7AA3emgJgLustyQxuq5l5~ukA3JhoqyTdyFTUhNebiH6EzolCf1~KByRqH6HpPROm0dOAZBraQiG2Q439uRBuE4w__)",
              }}
            ></div>
            <div className="glass-outer glass-right">
              <div className="glass-inner">
                <div className="glass-text">
                  <div>
                    <span className="head purple-head">APP</span>
                    <span className="head white-head"> Development</span>
                  </div>
                  <div className="glass-text-concept">
                    Transforming visionary concepts into vibrant digital
                    solutions, <br /> shaping the future of app development with
                    every line of code we craft!
                  </div>
                </div>
                <img
                  className="glass-image"
                  src="https://s3-alpha-sig.figma.com/img/4021/6842/3853d6fd84d5a70b86c0a56680d29c76?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piZ8cuOLFQ0jcHaVt28AALl8Ls8z-RtydK6O4MgI6l2FOZFNt2Flu8fadN6MI195cqjBpsdtIKtSvvniirF53IdBT7KP21Gc8jMEoE7NQWf4hNo0ksXUFVjzHEUpa6rkfSkzYRlT664T-1khDk~qGqYsDPKwQKIu2oYn0EHMfTKmA1PeMu3k2GUVePh~AkUy-vC3XETEw7sLhXlZx0fHSmXfHltC~t0Sidpy2KaalhBmrXfzdkZKIUIRkykJ2iVB2fHptgQCyb4a8WTOSwUJLla4ERxiTLenqwkt51KrC~PvOsaEJAnx6-uN74maTZYqTbn7QGS6AYpIaCR9yG~oGQ__"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="home-fifth">
        <div className="title-white">
          <span className="purple-head">Reasons </span>
          Why We Are The One
        </div>
        <div className="subtitle subtitle-fifth">
          Customer satisfaction is our priority, and we ensure to deliver what
          we promise. Let us align our innovative ideas and strategies to your
          needs to generate unique and powerful results.
        </div>
        <div className="cards">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 3.5V5.5C16 5.77614 15.7761 6 15.5 6H8.5C8.22386 6 8 5.77614 8 5.5V3.5C8 3.22386 8.22386 3 8.5 3H15.5C15.7761 3 16 3.22386 16 3.5Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4H18.9669C20.0715 4 20.9669 4.89543 20.9669 6V19C20.9669 20.1046 20.0715 21 18.9669 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H8V4"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 11H15"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 15H12"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Custom website development</div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.2 21H3L3 2.80005"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.1183 5.69458L18.361 9.93722L11.2899 17.0083L7.04346 17.0045L7.04727 12.7656L14.1183 5.69458Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.3608 4.28037L19.775 5.69458C20.5561 6.47563 20.5561 7.74196 19.775 8.52301L18.3608 9.93722L14.1182 5.69458L15.5324 4.28037C16.3134 3.49932 17.5798 3.49932 18.3608 4.28037Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Complete Research</div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3L15 9.00031H21.0007L16 14L18 21L12.0003 17.5L6 21L8 14L3 9.00031H9L12 3Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Complete UI/UX Wire-frames</div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6.00008H13.4647C17.1568 5.99351 20.2501 6.38951 20.882 11.0748"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 9L3 6L6 3"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 17.9999H10.5353C6.86945 18.0064 3.79402 17.6161 3.13188 13.0246"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 15L21 18L18 21"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Fastest Delivery</div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.353 17.7009L15.3598 17.4243C15.3598 16.7432 15.5198 16.1951 15.8398 15.78C18.0798 13.8279 19.1998 11.9611 19.1998 10.1794C19.1998 6.21433 15.9763 3 11.9998 3C8.02335 3 4.7998 6.21433 4.7998 10.1794C4.7998 11.9499 5.9198 13.8168 8.1598 15.78C8.44425 16.149 8.60227 16.6231 8.63388 17.2022L8.64261 17.6028V17.6028L8.65263 17.8042V17.8042L8.67226 18.0248C8.67647 18.0629 8.68118 18.1017 8.68644 18.141L8.72501 18.383C8.93959 19.5373 9.66467 21 11.9998 21C14.3349 21 15.06 19.5373 15.2746 18.383L15.3132 18.141V18.141L15.3385 17.9124V17.9124L15.353 17.7009V17.7009Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.7002 17.0058C9.73769 17.3952 10.8376 17.5899 12 17.5899C13.1624 17.5899 14.2624 17.3952 15.3 17.0058"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Domain/Hosting Setup</div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.16 3H18.84C20.0329 3 21 3.96706 21 5.16V18.84C21 20.0329 20.0329 21 18.84 21H5.16C3.96706 21 3 20.0329 3 18.84L3 5.16C3 3.96706 3.96706 3 5.16 3Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 11.5594L11.1176 15.5L17 8.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Technical Consultancy</div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.0233 8.46469L6.5853 18.9027H1.76776L1.76465 14.082L12.2026 3.64404L17.0233 8.46469Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.2026 3.64401L14.0001 1.84653C14.7812 1.06548 16.0475 1.06548 16.8285 1.84653L18.8208 3.83875C19.6018 4.6198 19.6018 5.88613 18.8208 6.66718L17.0233 8.46466V8.46466"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Dedicated Writers</div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.1499 10.5L14.1299 17L22.1499 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 10.5L9.00115 17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0273 11.5537L17.0002 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Satisfaction </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6.00008H13.4647C17.1568 5.99351 20.2501 6.38951 20.882 11.0748"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 9L3 6L6 3"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 17.9999H10.5353C6.86945 18.0064 3.79402 17.6161 3.13188 13.0246"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 15L21 18L18 21"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Flexible Revision</div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-easing="ease-in-sine"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3L15 9.00031H21.0007L16 14L18 21L12.0003 17.5L6 21L8 14L3 9.00031H9L12 3Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>Plagiarism Free Content</div>
          </div>
        </div>
      </section>
      <Carousel></Carousel>
      <section className="home-sixth">
        <div className="container-sixth">
          <div className="title-white">
            <span className="purple-head">Endorsed </span>
            By
          </div>
          <div className="subtitle subtitle-sixth">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </div>
          <Marquee style={{ width: "80vw" }}>
            <div className="marquee-child">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83545 0.835449C11.9775 0.835449 15.3354 4.19331 15.3354 8.33545V0.835449H22.8354C26.9775 0.835449 30.3354 4.19331 30.3354 8.33545C30.3354 12.4775 26.9775 15.8354 22.8354 15.8354C26.9775 15.8354 30.3354 19.1933 30.3354 23.3354C30.3354 25.3922 29.5075 27.2556 28.1668 28.6105L28.1388 28.6388L28.1139 28.6635C26.7586 30.0062 24.8939 30.8354 22.8354 30.8354C20.791 30.8354 18.9376 30.0174 17.5847 28.6908C17.5672 28.6736 17.5496 28.6562 17.5321 28.6388C17.5157 28.6223 17.4993 28.6059 17.4831 28.5893C16.1547 27.2361 15.3354 25.3814 15.3354 23.3354C15.3354 27.4775 11.9775 30.8354 7.83545 30.8354C3.69331 30.8354 0.335449 27.4775 0.335449 23.3354V15.8354H7.83545C3.69331 15.8354 0.335449 12.4775 0.335449 8.33545C0.335449 4.19331 3.69331 0.835449 7.83545 0.835449ZM13.8354 8.33545C13.8354 11.6492 11.1492 14.3354 7.83545 14.3354V2.33545C11.1492 2.33545 13.8354 5.02174 13.8354 8.33545ZM28.8354 23.3354C28.8354 20.0217 26.1492 17.3354 22.8354 17.3354C19.5217 17.3354 16.8354 20.0217 16.8354 23.3354H28.8354ZM1.83545 17.3354V23.3354C1.83545 26.6492 4.52174 29.3354 7.83545 29.3354C11.1492 29.3354 13.8354 26.6492 13.8354 23.3354V17.3354H1.83545ZM16.8354 14.3354V2.33545H22.8354C26.1492 2.33545 28.8354 5.02174 28.8354 8.33545C28.8354 11.6492 26.1492 14.3354 22.8354 14.3354H16.8354Z"
                    fill="#E9E9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_671">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.335449 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Marquee>
        </div>
      </section>
      <ThumbGrid
        bg={"#1D1D1D"}
        purple={"Zorway"}
        white={"Blogs"}
        button={"All Blogs"}
      ></ThumbGrid>
    </>
  );
}

export default Home;