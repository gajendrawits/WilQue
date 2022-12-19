import React from "react";
import { Button } from "antd";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Myfeat from "src/assets/images/login.jpg";
import Slider1 from "src/assets/images/slider1.jpg";
import Slider2 from "src/assets/images/slider2.jpg";
import Slider3 from "src/assets/images/slider3.jpg";

import Dashboard from "src/assets/images/dashboard-top.png";
import { Grid, Typography } from "@mui/material";
import { typography } from "@mui/system";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SecondFeat = () => (
  <Grid
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Grid
      sx={{
        width: "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "10px 10px  #b3b0b0",
      }}
    >
      <Image src={Dashboard} />
    </Grid>
    <Typography
      sx={{
        display: "flex",
        fontSize: "80px",
        padding: "20px 20px",
        fontWeight: "800",
      }}
    >
      Get in touch
    </Typography>
    <Grid
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#28243D",
      }}
    >
      <Grid
        sx={{
          width: "50%",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px 20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "28px",
            borderRadius: "24px",
            width: "100%",
            height: "350px",
          }}
        >
          <Typography
            sx={{
              width: "79%",
              height: "350px",
              textAlign: "center",
              borderRadius: "24px",
              backgroundColor: "#28243D",
              paddingTop: "35px",
            }}
          >
            <Typography
              sx={{
                fontSize: "47px",
                paddingBottom: "20px",
                color: "rgba(231, 227, 252, 0.87)",
              }}
            >
              Unlocking knowledge at the speed of thought.
            </Typography>

            <Button
              type="primary"
              style={{
                height: "90px",
                width: "230px",
                fontSize: "50px",
                borderRadius: "24px",
                backgroundColor: "#c6a0f7",
                color: "rgba(231, 227, 252, 0.87)",
              }}
            >
              Sign In
            </Button>
          </Typography>
        </Typography>
      </Grid>
      <Grid
        sx={{
          width: "50%",
        }}
      >
        <Typography
          sx={{
            margin: "54px 42px 0 0",
          }}
        >
          <Carousel responsive={responsive}>
            <Image src={Slider1} />
            <Image src={Slider2} />
            <Image src={Slider3} />
          </Carousel>
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default SecondFeat;
