import React from "react";
import { MainContainer } from "styles/pages/homepage";
import Navbar from "components/navbar";
import Group from "views/Group";
import Question from "views/Question";

const HomePage = () => {
  return (
    <MainContainer>
      <Navbar />
      <Group />
      <Question />
    </MainContainer>
  );
};

export default HomePage;
