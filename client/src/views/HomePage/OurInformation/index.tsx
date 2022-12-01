import React from "react";
import KeyFeature from "assets/images/information-dev.png";

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
} from "styles/Views/Homepage/OurInformation";

export const OurInformation: React.FC = () => (
  <Container>
    <Wrapper>
      <Head>
        <HeadingSection>
          <MainHading> Welcome to the WILQUE</MainHading>
          <HeadText>
            WilQue will be free knowledge sharing and collaboration platform.
            WilQue will help users/developers to ask questions, learn and share
            technical knowledge. Users can easily connect to other users by
            signing up or logging in using their email addresses. The main
            objective is to provide help to all the developers and senior
            developers by creating a website that allows the users/developers to
            ask questions to get solutions for the problem/errors they are
            facing.
          </HeadText>
          <ButtonContainer>
            <GetStarted label="Explor" variant="contained" />
          </ButtonContainer>
        </HeadingSection>
      </Head>
      <Body>
        <ImageSection>
          <Dashboardpic src={KeyFeature} />
        </ImageSection>
      </Body>
    </Wrapper>
  </Container>
);
export default OurInformation;
