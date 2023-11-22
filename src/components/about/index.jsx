import React from "react";
import AboutSection from "./about-section";
import BrandArea from "@/src/common/brand-area";
import PageHeader from "../../common/page-header";
import JoinUs from "@/src/common/join-us";
import ServicesHome from "@/src/common/services_block";


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
      <JoinUs />
      <ServicesHome />
    </>
  );
};

export default About;
