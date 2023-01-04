import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Grid, Typography } from "@mui/material";

const FooterSection = () => (
  <Grid
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginBottom: "10px",
      backgroundColor: "#8080804d",
      borderRadius: "34px 34px 0 0",
      marginTop: "30px",
    }}
  >
    {/* <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "30px",
        padding: "20px 20px",
        fontWeight: "800",
        color: "rgb(0, 0, 0)",
      }}
    >
      Email Us
    </Typography> */}
    <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "30px",
        fontWeight: "800",
        color: "rgb(0, 0, 0)",
      }}
    >
      For any query plz email us.
    </Typography>
    <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "30px",
        padding: "20px 20px",
        fontWeight: "800",
        color: " rgba(58, 53, 65, 0.87);",
      }}
    >
      wilque.help@gmail.com
    </Typography>
  </Grid>
);

export default FooterSection;
