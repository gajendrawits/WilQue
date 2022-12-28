import React from "react";
import Left from "src/assets/svg/first-left";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const KeyFeat = () => (
  <Grid
    sx={{
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(42rem, 1fr))",
      animationName: "yawer",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#8080804d",
      borderRadius: "0 0 183px 183px",
    }}
  >
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%",
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
        minWidth: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "80px",
          fontWeight: "800",
          padding: "30px 0 30px 0",
          width: "39%",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        WilQue
      </Typography>
      <Typography
        sx={{
          fontSize: "45px",
          fontWeight: "700",
          padding: "10px 0",
          width: "100%",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        The most efficient way to share knowledge within your team or
        organization
      </Typography>
    </Container>
  </Grid>
);

export default KeyFeat;
