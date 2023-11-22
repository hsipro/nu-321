import React from "react";
import ServicesIntro from "./introServices";
import ServicesAll from "./allServices"
import PageHeader from "@/src/common/page-header";

const Services = () => {
  const pageHeaderData = {
    title: "Unleash Excellence with",
    sub_title: "321DataPro Services",
    bg_img: "/assets/img/breadcrumb/hdr-services.png",
  };

  return (
    <>
      <PageHeader {...pageHeaderData} />
      <ServicesIntro />      
      <ServicesAll />  
    </>
  );
};

export default Services;