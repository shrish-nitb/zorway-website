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
          <div className="third-flex-text"></div>
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
    </>
  );
}

export default Home;
