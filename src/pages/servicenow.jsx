import React from "react";
import SEO from "../common/seo";
import ServiceNow from "../components/servicenow";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ServiceNow"} />
      <ServiceNow />
    </Wrapper>
  );
};

export default index;