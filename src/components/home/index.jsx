import React from "react";
import About from "./about";
import JoinUs from "@/src/common/join-us";
import ServiceNow from "./servicenow";
import ServicesBlock from "../../common/services";
import HeroBanner from "./hero-banner";
import BrandArea from "@/src/common/brand-area";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <ServicesBlock />
      <JoinUs />
      <ServiceNow />     
    </>
  );
};

export default Home;