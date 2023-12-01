import React from "react";
import Heading from "../components/HeadingComp/Heading";

import Routers from "../routes/routers";
import Footer from "../components/FooterComp/FooterCont";

const Layout = () => {
  return (
    <>
      <Heading />
      <main>
        <Routers />
      </main>
      <Footer/>
      
    
    </>
  );
};

export default Layout;
