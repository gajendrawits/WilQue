import React from "react";
import Image from "next/image";
import {
  KeyFeatContainer,
  ImgWrapper,
  SubHeadingText,
} from "src/Styles/views/Landing/KeyFeature";

import Myfeat from "src/assets/images/qustion.png";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const KeyFeat = () => (
  <Grid
    sx={{
      width: "100%",
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
        width: "90%",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      The most efficient way to share knowledge within your team or organization
    </Typography>
    {/* <Grid
      sx={{
        width: "100%",
        maxWidth: "780px",
        height: "620px",
      }}
    >
      <Image src={Myfeat} />
    </Grid> */}
  </Grid>
);

export default KeyFeat;
