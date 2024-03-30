import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';


const marks = [
  {
    value: 20,
    label: '20k',
  },
  {
    value: 40,
    label: '40k',
  },
  {
    value: 80,
    label: '80k',
  }, {
    value: 100,
    label: '100k+',
  }
];



export default function Service() {

  const [budgetDecided, setBudgetDecided] = useState(false);
  const [sliderValue, setSliderValue] = useState(20);

  const handleCheckboxChange = (event) => {
    setBudgetDecided(event.target.checked);
    if (event.target.checked) {
      setSliderValue(20);
    }
  };


  const b = useScroll();
  const darkTheme = createTheme({
    palette: {
      mode: "dark", // Use light mode
    },

  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <motion.section
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 8, duration: 0.5 }}
          className="about-hero-section contact"
          style={{ justifyContent: "flex-start", paddingTop: "9rem" }}
        >
          <motion.div
            style={{
              position: "relative",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div className="about-heading" style={{ justifyContent: "center" }}>
              <span className="about-heading-grad">Request a</span>
              <span> Service</span>
            </div>
            <div className="subtitle maxw-sub">
              Unleash the full potential of your concept, enterprise, and
              aspirations, turning them into reality.
            </div>
          </motion.div>

          <motion.div
            className="classic-1 glows-bg"
            initial={{ y: "-100px", opacity: 0 }}
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
        </motion.section>
        <div className="contact-info">
          <div className="contact-grid">
            <div>
              <img src="location.png" alt="" />
              <div>
                Maulana Azad National Institute of Technology (MANIT), Bhopal,
                M.P. India
              </div>
            </div>
            <div>
              <img src="mail.png" alt="" />
              <div>contact@zorway.in</div>
            </div>
            <div>
              <img src="phone.png" alt="" />
              <div>
                +91 9874561231 <br /> +91 8523697412
              </div>
            </div>
          </div>
        </div>
        <div className="service-heading" style={{ paddingBlock: "11rem 5rem" }}>
          <div
            className="title-white service-heading"
            style={{ textAlign: "center" }}
          >
            <span className="purple-head">Let's Scale </span>Together
          </div>
        </div>
        <div className="grid-container-parent">
          <div
            className="gcp-child"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "100%",
            }}
          >
            <div
              className="childofgcp"
              style={{
                borderRadius: "30px",
                border: "1px solid rgba(168, 168, 168, 0.47)",
                marginInline: "1.5rem",
                backgroundImage: "url(Glow-3.png)",
                backgroundColor: "#1A191B",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="grid-container">
                <div>
                  <div className="grid-item">
                    <input type="text" name="" id="" placeholder="Firstname*" />
                  </div>
                  <div className="grid-item">
                    <input type="text" name="" id="" placeholder="Lastname*" />
                  </div>
                </div>
                <div className="grid-item">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Company/Project Name*"
                  />
                </div>
                <div>
                  <div className="grid-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Work Email*"
                    />
                  </div>
                  <div className="grid-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="grid-item">
                  <div className="project">
                    <span>Project Budget</span>
                    <div style={{ display: "flex", flexDirection:"column", gap:"10px"}}>
                      <Box sx={{
                        width: 300, marginLeft: "5px"
                      }}>
                        <Slider
                          aria-label="budget"
                          defaultValue={20}
                          valueLabelDisplay="auto"
                          marks={marks}
                          min={20}
                          max={100}
                          disabled={budgetDecided}
                          value={sliderValue}
                          onChange={(event, newValue) => setSliderValue(newValue)}
                        />
                      </Box>
                      <div class="checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="notdecidedbox"
                          class="checkbox-input"
                          checked={budgetDecided}
                          onChange={handleCheckboxChange}
                        />
                        <label for="notdecidedbox" class="checkbox"></label>
                        <label for="notdecidedbox" class="checkbox-label">
                          Not Yet Decided
                        </label>
                      </div>
                    </div>

                    {/* <div className="radio-container">
                      <div className="radio-option">
                        <input
                          type="radio"
                          id="option1"
                          className="radio-input"
                          name="radioGroup"
                        />
                        <label for="option1" className="radio-circle"></label>
                        <label for="option1" className="radio-label">
                          &lt; 10k ₹
                        </label>
                      </div>

                      <div className="radio-option">
                        <input
                          type="radio"
                          id="option2"
                          className="radio-input"
                          name="radioGroup"
                        />
                        <label for="option2" className="radio-circle"></label>
                        <label for="option2" className="radio-label">
                          10k - 20k ₹
                        </label>
                      </div>

                      <div className="radio-option">
                        <input
                          type="radio"
                          id="option3"
                          className="radio-input"
                          name="radioGroup"
                        />
                        <label for="option3" className="radio-circle"></label>
                        <label for="option3" className="radio-label">
                          20k - 40k ₹
                        </label>
                      </div>

                      <div className="radio-option">
                        <input
                          type="radio"
                          id="option4"
                          className="radio-input"
                          name="radioGroup"
                        />
                        <label for="option4" className="radio-circle"></label>
                        <label for="option4" className="radio-label">
                          40k - 80k ₹
                        </label>
                      </div>

                      <div className="radio-option">
                        <input
                          type="radio"
                          id="option5"
                          className="radio-input"
                          name="radioGroup"
                        />
                        <label for="option5" className="radio-circle"></label>
                        <label for="option5" className="radio-label">
                          &gt; 80k ₹
                        </label>
                      </div>
                    </div> */}
                  </div>
                  <div className="small-size-date-picker">
                    {/* <span>Schedule a Meet</span> */}
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar />
                    </LocalizationProvider> */}
                  </div>
                </div>
                <div className="grid-item">
                  What can we help you with?
                  <div className="checkbox-container">
                    <div class="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        class="checkbox-input"
                      />
                      <label for="checkbox1" class="checkbox"></label>
                      <label for="checkbox1" class="checkbox-label">
                      Create an amazing new product 🚀
                      </label>
                    </div>

                    <div class="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="checkbox2"
                        class="checkbox-input"
                      />
                      <label for="checkbox2" class="checkbox"></label>
                      <label for="checkbox2" class="checkbox-label">
                      Improve our existing product and process
                      </label>
                    </div>

                    <div class="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="checkbox3"
                        class="checkbox-input"
                      />
                      <label for="checkbox3" class="checkbox"></label>
                      <label for="checkbox3" class="checkbox-label">
                      Help with DevOps, Cloud, CI/CD
                      </label>
                    </div>

                    <div class="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="checkbox4"
                        class="checkbox-input"
                      />
                      <label for="checkbox4" class="checkbox"></label>
                      <label for="checkbox4" class="checkbox-label">
                      Recruit and hire new team members 👥
                      </label>
                    </div>

                    <div class="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="checkbox5"
                        class="checkbox-input"
                      />
                      <label for="checkbox5" class="checkbox"></label>
                      <label for="checkbox5" class="checkbox-label">
                      Something else
                      </label>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  How did you hear about Zorway?
                  <div className="checkbox-container">
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="event"
                        className="checkbox-input"
                      />
                      <label htmlFor="event" className="checkbox"></label>
                      <label htmlFor="event" className="checkbox-label">
                        Event
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="friendColleague"
                        className="checkbox-input"
                      />
                      <label htmlFor="friendColleague" className="checkbox"></label>
                      <label htmlFor="friendColleague" className="checkbox-label">
                        Friend/colleague
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="pastClient"
                        className="checkbox-input"
                      />
                      <label htmlFor="pastClient" className="checkbox"></label>
                      <label htmlFor="pastClient" className="checkbox-label">
                        Past client
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="podcast"
                        className="checkbox-input"
                      />
                      <label htmlFor="podcast" className="checkbox"></label>
                      <label htmlFor="podcast" className="checkbox-label">
                        Podcast
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="searchEngine"
                        className="checkbox-input"
                      />
                      <label htmlFor="searchEngine" className="checkbox"></label>
                      <label htmlFor="searchEngine" className="checkbox-label">
                        Search engine
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="chatGPT"
                        className="checkbox-input"
                      />
                      <label htmlFor="chatGPT" className="checkbox"></label>
                      <label htmlFor="chatGPT" className="checkbox-label">
                        ChatGPT/AI tool
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="socialMedia"
                        className="checkbox-input"
                      />
                      <label htmlFor="socialMedia" className="checkbox"></label>
                      <label htmlFor="socialMedia" className="checkbox-label">
                        Social media post
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="zorwayBlog"
                        className="checkbox-input"
                      />
                      <label htmlFor="zorwayBlog" className="checkbox"></label>
                      <label htmlFor="zorwayBlog" className="checkbox-label">
                        Zorway blog
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="zorwayIncubator"
                        className="checkbox-input"
                      />
                      <label htmlFor="zorwayIncubator" className="checkbox"></label>
                      <label htmlFor="zorwayIncubator" className="checkbox-label">
                        Zorway incubator
                      </label>
                    </div>

                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="other"
                        className="checkbox-input"
                      />
                      <label htmlFor="other" className="checkbox"></label>
                      <label htmlFor="other" className="checkbox-label">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div class="grid-item">
                  <div className="textarea">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="description-area"
                      placeholder="Describe about project"
                    ></textarea>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="submit-btn">Submit</div>
                </div>
              </div>
            </div>
            {/* <div className="large-size-date-picker">
              <span className="date-picker-text">Schedule a Meet</span>
              <div
                style={{
                  borderRadius: "9px",
                  color: "white",
                  background: "#232323",
                  width: "max-content",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </div>
            </div> */}
          </div>
        </div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.237550403466!2d77.3996967789681!3d23.213616207704654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e43fe40941%3A0x10377d4af64ac6e9!2sMaulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1659611970585!5m2!1sen!2sus"
          style={{ border: 0, width: "100%", height: "40vh" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </ThemeProvider>
    </>
  );
}
