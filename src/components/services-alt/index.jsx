import React from "react";
import ServicesIntroAlt from "./intro-services2";
import PageHeader from "@/src/common/page-header";

const ServicesAlt = () => {
  const pageHeaderData = {
    title: "Unleash Excellence with",
    sub_title: "321DataPro Services",
    bg_img: "/assets/img/breadcrumb/hdr-services.png",
  };

  return (
    <>
      <PageHeader {...pageHeaderData} />
      < ServicesIntroAlt />      

    </>
  );
};

export default ServicesAlt;