import React from "react";
import ContactForm from "../form/contact-form";
import ContactInfo from "./contact-info";
import PageHeader from "@/src/common/page-header";

const Contact = () => {
  const pageHeaderData = {
    title: "Contact",
    sub_title: "Our Team",
    bg_img: "/assets/img/breadcrumb/hdr-services.png",
  };

  return (
    <>
      <PageHeader {...pageHeaderData} />
      <ContactInfo />
    </>
  );
};

export default Contact;
