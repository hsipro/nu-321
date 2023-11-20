import Link from "next/link";
import React from "react";

// about info
const aboutInfo = {
  img1: "/assets/img/content/peopleinacircle.jpg",
  titleOne: "Empowering Success:",
  titleTwo: "Redefining Project Efficiency",
  description: (
    <>
      At the heart of our vision lies simplifying and automating your project
      processes, erasing the shadows of human error, risk, and unnecessary costs
      that often haunt data management. How do we achieve this? By introducing
      you to our elite squad of 321DataPro certified experts – a league of
      extraordinary project teams, consultants, and specialists meticulously
      tailored to your needs. But that's not all; we're here to equip individuals
      and corporations with the skills they need through cutting-edge training,
      propelling you into the fast lane of ServiceNow adaptation.
    </>
  ),
  aboutBtn: "Get to know us",
};

const { img1, titleOne, titleTwo, description, aboutBtn } = aboutInfo;

const About = () => {
  return (
    <section
      className="tp-about-area pt-120 pb-50 wow fadeInUp"
      data-wow-duration="1.5s"
      data-wow-delay=".4s"
    >
      <div className="container">
        <div className="row align-items-top">
          <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-img p-relative pb-30 ml-10">
              <img src={img1} alt="about-img" />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-content pb-30 ml-10">
              <div className="dp-section-title-alt mb-55 mt-30">
                <h2 className="text-uppercase mb-15 colour-0">
                  <span className="colour-0">{titleOne}</span>{" "}
                  <span className="colour-4">{titleTwo}</span>
                </h2>
               
              </div>
              <p>{description}</p>
              <div className="about-btn">
                <Link href="/about" className="tp-btn">
                  {aboutBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
