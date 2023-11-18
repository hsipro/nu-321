import React from "react";
import SEO from "../common/seo";
import Register from "../components/register";
import WrapperFour from "../layout/wrapper";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Register"} />
      <Register />
    </WrapperFour>
  );
};

export default index;
