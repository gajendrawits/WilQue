import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Grid, Typography } from "@mui/material";

const FooterSection = () => (
  <Grid
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "10px",
      backgroundColor: "#28243D",
      borderRadius: "34px 34px 0 0",
      marginTop: "30px",
    }}
  >
    <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "80px",
        padding: "20px 20px 0 20px",
        fontWeight: "800",
        color: "rgba(220, 218, 228, 0.87)",
      }}
    >
      Email Us
    </Typography>
    <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "30px",
        fontWeight: "800",
        color: "rgba(220, 218, 228, 0.87)",
      }}
    >
      For any query plz email us.
    </Typography>
    <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "40px",
        padding: "20px 20px",
        fontWeight: "800",
        color: "rgba(252, 253, 253, 0.87)",
      }}
    >
      Thewitslab.help@gmail.com
    </Typography>
  </Grid>
);

export default FooterSection;
