import React, { ReactNode } from "react";
import BlankLayout from "src/@core/layouts/BlankLayout";
import LandingPage from "./landingpage";

const Home = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};
Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
export default Home;
