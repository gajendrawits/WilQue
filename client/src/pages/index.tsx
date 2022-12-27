import React, { ReactNode, useEffect } from "react";
import BlankLayout from "src/@core/layouts/BlankLayout";
import LandingPage from "./landingpage";

const index = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};
index.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
export default index;
