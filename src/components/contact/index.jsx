import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import ContactForm from "../form/contact-form";
import ContactInfo from "./contact-info";

const Contact = () => {
  return (
    <>
      <Breadcrumb  title="Contact Us" subtitle="contact" />
      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default Contact;
