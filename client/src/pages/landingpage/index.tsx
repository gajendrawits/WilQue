import React, { ReactNode } from "react";
import KeyFeature from "src/views/LandingPage/KeyFeatures";
import SecondFeat from "src/views/LandingPage/KeyFeatures/LoginSection";
import BlankLayout from "src/@core/layouts/BlankLayout";
import DetailSection from "src/views/LandingPage/DetailsFeatures";
import FooterSection from "src/views/LandingPage/Footer";
import SignupLanding from "src/views/LandingPage/LandingSignin";
import { Grid } from "@mui/material";

const LandingPage = () => {
  return (
    <>
      <Grid sx={{}}>
        <KeyFeature />
        <SecondFeat />
        <SignupLanding />
        <DetailSection />
        <FooterSection />
      </Grid>
    </>
  );
};

LandingPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default LandingPage;
