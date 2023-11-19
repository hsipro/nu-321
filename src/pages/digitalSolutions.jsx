import React from "react";
import SEO from "../common/seo";
import DigitalSolutions from "../components/digital-solutions";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ServiceNow"} />
      <DigitalSolutions />
    </Wrapper>
  );
};

export default index;