import React from "react";
import SEO from "../common/seo";
import AIPage   from "../components/ai-solutions";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"AI-Driven Solutions"} />
      <AIPage />
    </Wrapper>
  );
};

export default index;
