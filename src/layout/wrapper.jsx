import { animationCreate } from "@/utils/utils";
import React, {useEffect} from "react";
import BackToTop from "../lib/BackToTop";
import Footer from "./footer";
import Header from "./header";

const Wrapper = ({ children }) => {
  
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])

  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
};

export default Wrapper;
