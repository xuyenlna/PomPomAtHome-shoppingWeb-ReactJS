import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const HomeTemplate = (WrapCompnent) => {
  return (props) => (
    <>
      <Header />
      <WrapCompnent {...props} />
      <Footer />
    </>
  );
};

export default HomeTemplate;
