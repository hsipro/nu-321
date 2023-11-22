import React from "react";
import SEO from "../common/seo";
import Services from "../components/services-old";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Services"} />
      <Services />
    </Wrapper>
  );
};

export default index;
