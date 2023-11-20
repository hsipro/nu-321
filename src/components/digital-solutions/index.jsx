import React from "react";
import DigitalServices from "./digitalServices";
import PageHeader from "@/src/common/page-header";
import Breadcrumb from "../../common/breadcrumb";

const DigitalSolutions = () => {
  const pageHeaderData = {
    title: "Unleash Excellence with",
    sub_title: "321DataPro Services 67",
    bg_img: "/assets/img/breadcrumb/hdr-services.png",
  };

  return (
    <>
      <PageHeader {...pageHeaderData} />
      <DigitalServices />      

    </>
  );
};

export default DigitalSolutions;