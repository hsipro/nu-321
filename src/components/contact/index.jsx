import React from "react";
import Breadcrumb from "../../common/breadcrumb";
import ContactForm from "../form/contact-form";
import ContactInfo from "./contact-info";

const Contact = () => {
  return (
    <>
      <Breadcrumb  title="Contact Us" subtitle="contact" />
      <ContactInfo />
    </>
  );
};

export default Contact;
