import React from "react";
import AboutSection from "./about-section";
import PageHeader from "../../common/page-header";
import JoinUs from "@/src/common/join-us";
import Services from "@/src/common/services";


const About = () => {
  const pageHeaderData = {
    title: "Empowering Success:",
    sub_title: "Redefining Project Efficiency",
    bg_img: "/assets/img/breadcrumb/hdr-about.png",
  };

  return (
    <>
      <PageHeader {...pageHeaderData} />
      <AboutSection />
      <Services />
      <JoinUs />
  
    </>
  );
};

export default About;
