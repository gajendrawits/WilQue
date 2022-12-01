import React from "react";
import KeyFeature from "assets/images/fast-solution.png";

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
} from "styles/Views/Homepage/FastSolution";

export const FastSolution: React.FC = () => (
  <Container>
    <Wrapper>
      <Body>
        <ImageSection>
          <Dashboardpic src={KeyFeature} />
        </ImageSection>
      </Body>
      <Head>
        <HeadingSection>
          <MainHading> Fast Solution</MainHading>
          <HeadText>
            <div>. Anyone can join WillQue & signed up.</div>
            <div>
              . A public platform building the definitive collection of coding
              questions & answers.
            </div>
            <div>
              . A private collaboration & knowledge sharing SaaS platform for
              companies.
            </div>
            <div>
              . A community-based space to find and contribute answers to
              technical challenges, and one of the most popular websites in the
              world..
            </div>
          </HeadText>
          <ButtonContainer>
            <GetStarted label="Explor" variant="contained" />
          </ButtonContainer>
        </HeadingSection>
      </Head>
    </Wrapper>
  </Container>
);
export default FastSolution;
