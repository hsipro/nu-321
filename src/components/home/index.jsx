import React from "react";
import About from "./about";
import JoinUs from "@/src/common/join-us";
import ServiceNow from "./servicenow";
import Services from "@/src/common/services_block";
import HeroBanner from "./hero-banner";
import BrandArea from "@/src/common/brand-area";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <BrandArea />
      <About />
      <Services />
      <JoinUs />
      <ServiceNow />     
    </>
  );
};

export default Home;