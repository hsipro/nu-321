import React from "react";
import ServicenowIntro from "./introServices";
import PageHeader from "@/src/common/page-header";
import Breadcrumb from "@/src/common/breadcrumb";

const ServiceNow = () => {
  const pageHeaderData = {
    title: "Unleash Excellence with",
    sub_title: "321DataPro Services 67",
    bg_img: "/assets/img/breadcrumb/hdr-services.png",
  };

  return (
    <>
      <Breadcrumb  title="ServiceNow Solutions" subtitle="Servicenow" />
      <ServicenowIntro />      
      <PageHeader {...pageHeaderData} />

    </>
  );
};

export default ServiceNow;