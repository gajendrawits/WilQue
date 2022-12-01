import React from "react";
import KeyFeature from "assets/images/term-conditon.png";

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
} from "styles/Views/Homepage/TermCondition";

export const TermCondition: React.FC = () => (
  <Container>
    <Wrapper>
      <Head>
        <HeadingSection>
          <MainHading> Terms & Conditon</MainHading>
          <HeadText>
            Our Vision is to create an online platform for Q & A for our company
            so that we have to search less on other sites like StackOverflow or
            Quora or Code Project and many more for our query/error/ problem
            which is also time-consuming. This will help our developers and
            technologists to share private, organization-specific knowledge with
            a coworker and will make day-to-day life easier.
            <ButtonContainer>
              <GetStarted label="View" variant="contained" />
            </ButtonContainer>
          </HeadText>
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
export default TermCondition;
