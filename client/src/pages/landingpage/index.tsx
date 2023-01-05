import React, { ReactNode, useEffect } from "react";
import router from "next/router";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import BlankLayout from "src/@core/layouts/BlankLayout";
import { Button, Grid, styled, Typography } from "@mui/material";
import FeatureLogo1 from "src/assets/svg/featurelogo1";
import FeatureLogo2 from "src/assets/svg/featurelogo2";
import FeatureLogo3 from "src/assets/svg/featurelogo3";
import FeatureLogo4 from "src/assets/svg/featurelogo4";
import Logo from "src/assets/svg/logo";
import DashboardImage from "src/assets/images/dashboard.png";

const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const Container = styled(Typography)({
    backgroundColor: "white",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #42383a4c",
    color: "grey",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "30px",
  });

  const FeaturesWrapper = styled(Typography)({
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
  });

  const FeaturesContainer = styled(Typography)({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
  });

  const LetsStartWrapper = styled(Typography)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: " 0px 0px 10px 8px",
    gap: "15px",
  });

  const ButtonWrap = styled(Button)({
    background: "linear-gradient(65deg, #1274ED 0, #4992F0 100%)",
    color: "white",
    boxShadow: "0 8px 24px rgb(32 43 54 / 12%)",
  });

  const LogoWrapper = styled(Typography)({
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "1% 1% 1% 25%",
    span: {
      color: "#5B6F82",
      fontSize: "1.5rem",
      fontWeight: "600",
    },
  });

  const Footer = styled(Typography)({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0px",
    color: "#92A2B1",
    width: "80%",
    padding: "20px 20px 20px 25%",
    span: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
  });

  return (
    <>
      <Grid>
        <LogoWrapper>
          <Logo />
          <span>WILQUE</span>
        </LogoWrapper>
        <Container>
          <div data-aos="fade-down" data-aos-duration="3000">
            <h1>WILQUE</h1>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Typography
              sx={{
                color: "#5B6F82",
                fontSize: "1rem",
              }}
            >
              The most efficient way to share knowledge within your team or
              organization
            </Typography>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <LetsStartWrapper>
              <Typography>Lets Start A Bug Free Life.</Typography>
              <ButtonWrap onClick={() => router.push("/login")}>
                Login
              </ButtonWrap>
            </LetsStartWrapper>
          </div>

          <Typography>
            <Image src={DashboardImage} width={1000} height={450} />
            {/* <LandingImage /> */}
          </Typography>
          <Typography variant="h5">Features</Typography>
          <FeaturesContainer>
            <div data-aos="flip-left">
              <FeaturesWrapper>
                <FeatureLogo1 />
                <Typography variant="h6">Star Points.</Typography>
                <Typography>
                  Star Points are a currency that can be earned by answering to
                  questions.
                </Typography>
              </FeaturesWrapper>
            </div>
            <div data-aos="flip-right">
              <FeaturesWrapper>
                <FeatureLogo2 />
                <Typography variant="h6">
                  Integration with Google Chat.
                </Typography>
                <Typography>
                  This feature includes sending notification to users Google
                  Chat.
                </Typography>
              </FeaturesWrapper>
            </div>
            <div data-aos="flip-left">
              <FeaturesWrapper>
                <FeatureLogo3 />
                <Typography variant="h6">Tag Feature.</Typography>
                <Typography>
                  Tag feature allows a user to ask a question with a particular
                  tag name.
                </Typography>
              </FeaturesWrapper>
            </div>
            <div data-aos="flip-right">
              <FeaturesWrapper>
                <FeatureLogo4 />
                <Typography variant="h6">UpVote/DownVote</Typography>
                <Typography>
                  UpVote/ DownVote is a feature to specify is the answer is good
                  or not.
                </Typography>
              </FeaturesWrapper>
            </div>
          </FeaturesContainer>
        </Container>
        <Footer>
          <Logo />
          <span>wilque.help@gmail.com</span>
        </Footer>
      </Grid>
    </>
  );
};

LandingPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default LandingPage;
