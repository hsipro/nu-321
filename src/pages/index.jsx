import SEO from "../common/seo";
import Home from "../components/home";
import Wrapper from "../layout/wrapper";


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'321 DataPRO'} />
      <Home />
    </Wrapper>
  );
};

export default index;