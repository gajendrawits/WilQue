import React from "react";
import OurInformation from "views/HomePage/OurInformation";
import TermCondition from "views/HomePage/TermCondition/indx";
import FastSolution from "views/HomePage/Fastsolution";
import { MainContainer, Container } from "styles/pages/homepage";
import { About } from "views/HomePage/About";

const HomePage = () => {
  return (
    <MainContainer>
      <Container>
        <OurInformation />
        <TermCondition />
        <FastSolution />
      </Container>
      <About />
    </MainContainer>
  );
};

export default HomePage;
