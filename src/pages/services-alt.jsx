import React from "react";
import SEO from "../common/seo";
import ServicesAlt from "../components/services-alt";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Services Alt "} />
      <ServicesAlt />
    </Wrapper>
  );
};

export default index;