import React from "react";
import ServicenowIntro from "./introServices";
import ServicesAll from "./allServices"
import PageHeader from "@/src/common/page-header";
import Breadcrumb from "../breadcrumb/breadcrumb";

const ServiceNow = () => {
  const pageHeaderData = {
    title: "Unleash Excellence with",
    sub_title: "321DataPro Services 67",
    bg_img: "/assets/img/breadcrumb/hdr-services.png",
  };

  return (
    <>
      <PageHeader {...pageHeaderData} />
      <ServicenowIntro />      

    </>
  );
};

export default ServiceNow;