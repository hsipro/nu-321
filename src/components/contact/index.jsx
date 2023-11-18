import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import ContactForm from "../form/contact-form";
import LocationArea from "./location-area";

const Contact = () => {
  return (
    <>
      <Breadcrumb  title="Contact Us" subtitle="contact" />
      <ContactForm />
    </>
  );
};

export default Contact;
