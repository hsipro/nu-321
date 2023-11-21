import React from "react";
import SEO from "../common/seo";
import  Opportunities  from "../components/opportunities";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Opportunities"} />
      <Opportunities />
    </Wrapper>
  );
};

export default index;