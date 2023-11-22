import React from "react";
import SEO from "../common/seo";
import ServicesInfo from "../components/services";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Services "} />
      <ServicesInfo />
    </Wrapper>
  );
};

export default index;