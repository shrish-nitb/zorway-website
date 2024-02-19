import Btnpill from "./btn-pill";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <section className="home-first">
        <div className="center">
          <img className="rings" src="rings.svg" />
          <img className="icons" src="icons.svg" />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M8.98513 14.1017C9.08382 14.1012 9.18138 14.0808 9.27196 14.0416C9.36253 14.0024 9.44423 13.9453 9.51213 13.8737L13.6821 9.70369C13.8411 9.53769 13.9111 9.36669 13.9111 9.18869C13.9111 8.78269 13.6251 8.49069 13.2381 8.49069C13.0351 8.49069 12.8631 8.57269 12.7361 8.70069L11.2891 10.1277L9.60713 11.9687L9.69613 10.4967V2.80269C9.69613 2.37769 9.40413 2.08569 8.98513 2.08569C8.57213 2.08569 8.28013 2.37769 8.28013 2.80269V10.4967L8.37013 11.9687L6.68713 10.1287L5.24013 8.69969C5.17475 8.63291 5.09663 8.57991 5.01041 8.54384C4.92418 8.50777 4.8316 8.48936 4.73813 8.48969C4.35113 8.48969 4.06513 8.78269 4.06513 9.18869C4.06513 9.36669 4.13513 9.53869 4.28113 9.68969L8.46413 13.8737C8.53111 13.9446 8.61166 14.0013 8.70099 14.0405C8.79032 14.0796 8.8876 14.1005 8.98513 14.1017Z"
                  fill="white"
                  fill-opacity="0.4"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="home-second">
        <div className="gapper">
          <div className="title-white">
            One Organization,
            <br />
            Infinite Possibilities.
          </div>
          <div className="subtitle">
            Enable your business to create improved processes,
            <br />
            leading to superior outcomes.
          </div>
        </div>
      </section>
      <section className="home-third">
        <div className="third-flex">
          <div className="third-flex-text">
            <div>
              <span className="third-flex-head-white">We Design,</span>
              <br />
              <span className="third-flex-head-color">
                Craft Brands & <br /> Execute Digital Projects
              </span>
            </div>
            <div className="subtitle txt-left">
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
          </div>
          <div className="features">
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
          </div>
        </div>
      </section>
      <section className="home-fourth">
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
                    solutions, <br /> shaping the future of app development with every
                    line of code we craft!
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
      </section>
    </>
  );
}

export default Home;
