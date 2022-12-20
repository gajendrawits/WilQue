import React, { ReactNode } from "react";

import KeyFeature from "src/views/LandingPage/KeyFeatures";

import { Container } from "src/Styles/Pages/Landingpage";
import SecondFeat from "src/views/LandingPage/KeyFeatures/LoginSection";
import BlankLayout from "src/@core/layouts/BlankLayout";
import DetailSection from "src/views/LandingPage/DetailsFeatures";
import FooterSection from "src/views/LandingPage/Footer";
import SignupLanding from "src/views/LandingPage/LandingSignin";

// let lastScrollTop = 0;

const LandingPage = () => {
  return (
    <>
      <Container>
        <KeyFeature />
        <SecondFeat />
        <SignupLanding />
        <DetailSection />
        <FooterSection />
      </Container>
    </>
  );
};

LandingPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default LandingPage;
