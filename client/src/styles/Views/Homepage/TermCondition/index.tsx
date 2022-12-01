import styled from "styled-components";
import Button from "components/Button";
import { theme } from "theme";

export const Container = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    display: grid;
  }
`;
export const MainHading = styled.div`
  font-family: "OutfitRegular";
  max-width: 750px;
  width: 100%;
  font-size: 46px;
  line-height: 29px;
  padding-top: 37px;

  @media (max-width: 1280px) {
    font-size: 20px;
    line-height: 27px;
  }

  @media (max-width: 767px) {
    width: 76.8vw;
    font-family: "OutfitMedium";
    font-weight: 400;
    font-size: 4.267vw;
    line-height: 6.933vw;
    text-align: left;
    color: #ffffff;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 39px;
  padding-top: 80px;
  justify-content: center;

  @media (max-width: 1350px) {
    justify-content: space-evenly;
    margin: 66px auto 0 auto;
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    display: grid;
    padding: 2.667vw;
    gap: 3.733vw;
    margin: 8.667vw auto 0 auto;
  }
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
export const HeadText = styled.div`
  font-family: "OutfitMedium";
  max-width: 524px;
  width: 100%;
  font-size: 20px;
  line-height: 29px;
  padding-top: 37px;
  text-align: justify;

  @media (max-width: 1280px) {
    font-size: 20px;
    line-height: 27px;
  }

  @media (max-width: 767px) {
    width: 76.8vw;
    font-family: "OutfitMedium";
    font-weight: 400;
    font-size: 4.267vw;
    line-height: 6.933vw;
    text-align: left;
    color: #ffffff;
  }
`;

export const Body = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  @media (max-width: 1366px) {
    width: 100%;
    max-width: 584px;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 174.133vw;
    order: 1;
    grid-row-end: none;
    margin-top: 11.733vw;
  }
`;

export const Dashboardpic = styled.img`
  width: 100%;
  max-width: 681px;
  height: auto;
  @media only screen and (max-width: 900px) {
    width: 439px;
    height: 421px;
    margin-top: 72px;
  }
  @media (max-width: 1280px) {
    margin-top: 53px;
  }
  @media (max-width: 1350px) {
    margin-top: 55px;
  }

  @media (max-width: 767px) {
    width: 89.333vw;
    height: 75.467vw;
    margin-top: 0;
    display: none;
  }
`;
export const MobileDashboardpic = styled.img`
  display: none;
  @media (max-width: 767px) {
    width: 89.333vw;
    margin-top: 0;
    display: block;
  }
`;

export const LeftHeadImage = styled.img``;

export const Planfuture = styled.div`
  font-family: "OutfitSemiBold";
  font-size: 68px;
  line-height: 80px;
  color: ${theme.info.light};
  @media only screen and (max-width: 1200px) {
    font-size: 40px !important;
    line-height: 49px;
  }

  @media (max-width: 1440px) {
    font-size: 67px;
  }
  @media (max-width: 1300px) {
    font-size: 53px;
  }
  @media (max-width: 1350px) {
    font-size: 53px;
    line-height: 60px;
  }
  @media (max-width: 767px) {
    width: 77.333vw;
    font-family: "OutfitSemiBold";
    font-weight: 600;
    font-size: 8.267vw !important;
    line-height: 9.933vw;
    color: #ffffff;
  }
`;

export const RightHeadImage = styled.img`
  position: relative;
  left: 75px;
`;
export const HeadingSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 571px;
  @media (max-width: 1350px) {
    max-width: 480px;
    margin: 90px 0px 0px 0px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 77.333vw;
    margin: 1.333vw 0 0 0;
  }
`;

export const LeftHeadImageSection = styled.div`
  display: flex;
  align-items: center;
`;

export const RightHeadImageSection = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const LeftSectionBody = styled.img`
  position: absolute;
  z-index: 1;
  left: 375px;
  top: 150px;
`;
export const RightSectionBody = styled.img``;
export const LeftSectionbottam = styled.img`
  height: 200px;
  width: 200px;
  position: relative;
  margin-left: 300px;
  @media (max-width: 1350px) {
    height: 150px;
    width: 150px;
  }
`;
export const SectionImages = styled.div``;
export const HeaderCoinSection = styled.img`
  height: 118.17px;
  width: 118.17px;
  margin-left: 177px;
`;
export const ButtonSection = styled.div``;
export const ButtonContainer = styled.div`
  max-width: 312px;
  width: 100%;
  margin-top: 6px;
  display: flex;
  justify-content: end;
  @media (max-width: 767px) {
    margin-left: 8.8vw;
  }
`;

export const GetStarted = styled(Button)`
  max-width: 236px;
  font-size: 18px;
  height: 53px;
  background: #0e65f3;
  :hover {
    opacity: 0.5;
  }
`;

export const EthContainer = styled.div`
  @media (max-width: 1350px) {
    display: flex;
    align-self: center;
  }
`;
export const ImageSection = styled.div``;
