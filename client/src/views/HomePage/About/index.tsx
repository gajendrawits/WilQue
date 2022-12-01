import React from "react";
import KeyFeature from "assets/images/about-que.png";

import {
  Wrapper,
  Container,
  Head,
  Body,
  HeadText,
  HeadingSection,
  ButtonContainer,
  GetStarted,
  ImageSection,
  Dashboardpic,
  MainHading,
} from "styles/Views/Homepage/About";

export const About: React.FC = () => (
  <Container>
    <Wrapper>
      <Body>
        <ImageSection>
          <Dashboardpic src={KeyFeature} />
        </ImageSection>
      </Body>
      <Head>
        <HeadingSection>
          <MainHading> About WILQUE</MainHading>
          <HeadText>
            WilQue will be free knowledge sharing and collaboration platform.
            WilQue will help users/developers to ask questions, learn and share
            technical knowledge. Users can easily connect to other users by
            signing up or logging in using their email addresses. The main
            objective is to provide help to all the developers and senior
            developers by creating a website that allows the users/developers to
            ask questions to get solutions for the problem/errors they are
            facing. Users can share technical knowledge on this platform. The
            questions will be visible to all the users and anyone can answer the
            questions. Here you can gain and share knowledge There will be a
            group with all the senior members in that group anyone can ask
            questions but answers can only be given by only senior members. The
            main objective is to make the life of a developer easy as sometimes
            if someone gets stuck in an error/problem then he/she can ask a
            question for that error and we want to create space for different
            voices to be heard. This project will be transparent as anyone can
            see the questions and answers and can communicate openly and 24 x 7
            .
          </HeadText>
        </HeadingSection>
      </Head>
    </Wrapper>
  </Container>
);
export default About;
