import React from "react";
import Second from "../General/Second";

export default function About() {
  return (
    <>
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
                Zorway embodies a team of passionate experts united by a common
                goal: to equip businesses with innovative solutions that drive
                success. With extensive experience and a commitment to
                innovation, we offer a range of services tailored to meet
                diverse business needs.
                <br />
                <br />
                At Zorway, we understand that every business is unique. That's
                why we prioritize flexibility and customization in our approach,
                ensuring that our solutions align perfectly with your specific
                requirements. Whether it's leveraging emerging technologies or
                optimizing existing processes, we're dedicated to delivering
                results that propel your business forward.
                <br />
                <br />
                With a comprehensive suite of services, Zorway is your partner
                in navigating the complexities of the modern business landscape.
                From software development to strategic consultancy, we provide
                the expertise and support you need to thrive. Trust Zorway to
                lead your business towards success with our relentless pursuit
                of excellence and commitment to innovation.
              </div>
            </div>
          </>
        }
      />
      <section className="scroll-horizontal-section">
        <div class="title-white">
          <span class="purple-head">How We </span>Work
        </div>
      </section>
    </>
  );
}
