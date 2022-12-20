import React from "react";
import Image from "next/image";
import {
  KeyFeatContainer,
  ImgWrapper,
  SubHeadingText,
} from "src/Styles/views/Landing/KeyFeature";

// import Myfeat from "src/assets/images/qustion.png";
import Left from "src/assets/svg/first-left";

import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Secnd from "src/assets/svg/secnd-right";

const KeyFeat = () => (
  <Grid
    sx={{
      width: "100%",
      display: "flex",
      //   msFlexDirection: "row",
      animationName: "yawer",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#8080804d",
      height: "900px",
      borderRadius: "0 0 183px 183px",
    }}
  >
    <Grid
      sx={{
        width: "40%",
        maxWidth: "780px",
        height: "630px",
        margin: "30px 0 0 20px",
      }}
    >
      <div className="left">
        <Left />
      </div>
    </Grid>
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "80px",
          fontWeight: "800",
          padding: "10px 0",
          width: "39%",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        WillQue
      </Typography>
      <Typography
        sx={{
          fontSize: "45px",
          fontWeight: "700",
          padding: "10px 0",
          width: "89%",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        The most efficient way to share knowledge within your team or
        organization
      </Typography>
    </Container>
    <Grid
      sx={{
        width: "40%",
        maxWidth: "780px",
        height: "620px",
      }}
    >
      <Grid
        sx={{
          width: "40%",
          maxWidth: "780px",
          height: "561px",
          //   transform: "translate(-50%, -50%)",
        }}
      >
        <div className="right">
          <Secnd />
        </div>
      </Grid>
    </Grid>
  </Grid>
);

export default KeyFeat;
