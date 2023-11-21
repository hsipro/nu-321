import React from "react";
import JobInfo from "./jobs";
import PageHeader from "@/src/common/page-header";
import Breadcrumb from "../../common/breadcrumb";

const Opportunities = () => {
  const pageHeaderData = {
    title: "BECOME A TRAILBLAZER",
    sub_title: "Join Our Team",
    bg_img: "/assets/img/breadcrumb/hdr-services.png",
  };

  return (
    <>
      <PageHeader {...pageHeaderData} />
      <JobInfo />      

    </>
  );
};

export default Opportunities;