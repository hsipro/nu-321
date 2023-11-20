import React from "react";
import PageHeader from "@/src/common/page-header";
import Breadcrumb from "@/src/common/breadcrumb";

const AIPage = () => {
  const pageHeaderData = {
    title: "Unleash Excellence with",
    sub_title: "321DataPro Services 67",
    bg_img: "/assets/img/breadcrumb/hdr-services.png",
  };

  return (
    <>
      <Breadcrumb  title="AI-Driven Solutions" subtitle="AI-Driven Solutions" />
   
      <PageHeader {...pageHeaderData} />

    </>
  );
};

export default AIPage;