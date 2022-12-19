import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Grid, Typography } from "@mui/material";

const DetailSection = () => (
  <Grid
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "10px",
    }}
  >
    <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "80px",
        padding: "20px 20px",
        fontWeight: "800",
      }}
    >
      Features
    </Typography>
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
          width: "100%",
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
          }}
        >
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              borderRadius: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "47px",
                paddingBottom: "20px",
                color: "#28243D",
                width: "100%",
              }}
            >
              These are the standard features in the free version of WilQue.
            </Typography>
          </Typography>
        </Typography>
      </Grid>
      <Grid
        sx={{
          width: "90%",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "47px",
            paddingBottom: "20px",
            color: "rgba(220, 218, 228, 0.87)",
            width: "32%",
            height: "272px",
            backgroundColor: "#28243D",
            textAlign: "center",
            paddingTop: "90px",
            borderRadius: "24px",
            cursor: "pointer",
            boxShadow: "0 8px 15px #72a1ee96",
            "&:hover": {
              backgroundColor: "rgb(193, 151, 247)",
            },
          }}
        >
          Random Group for all the users.
        </Typography>
        <Typography
          sx={{
            fontSize: "47px",
            paddingBottom: "20px",
            color: "rgba(220, 218, 228, 0.87)",
            width: "32%",
            height: "272px",
            backgroundColor: "#28243D",
            textAlign: "center",
            paddingTop: "90px",
            borderRadius: "24px",
            cursor: "pointer",
            boxShadow: "0 8px 15px #72a1ee96",
            "&:hover": {
              backgroundColor: "rgb(198, 160, 247)",
            },
          }}
        >
          Senior Developer Group.
        </Typography>
        <Typography
          sx={{
            fontSize: "47px",
            paddingBottom: "20px",
            color: "rgba(220, 218, 228, 0.87)",
            width: "32%",
            height: "272px",
            backgroundColor: "#28243D",
            textAlign: "center",
            paddingTop: "90px",
            borderRadius: "24px",
            cursor: "pointer",
            boxShadow: "0 8px 15px #72a1ee96",
            "&:hover": {
              backgroundColor: "rgb(198, 160, 247)",
            },
          }}
        >
          Star Points.
        </Typography>
        <Typography
          sx={{
            fontSize: "47px",
            paddingBottom: "20px",
            color: "rgba(220, 218, 228, 0.87)",
            width: "32%",
            height: "272px",
            backgroundColor: "#28243D",
            textAlign: "center",
            paddingTop: "90px",
            borderRadius: "24px",
            cursor: "pointer",
            boxShadow: "0 8px 15px #72a1ee96",
            "&:hover": {
              backgroundColor: "rgb(198, 160, 247)",
            },
          }}
        >
          Integration with Google Chat.
        </Typography>
        <Typography
          sx={{
            fontSize: "47px",
            paddingBottom: "20px",
            color: "rgba(220, 218, 228, 0.87)",
            width: "32%",
            height: "272px",
            backgroundColor: "#28243D",
            textAlign: "center",
            paddingTop: "90px",
            borderRadius: "24px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgb(198, 160, 247)",
            },
          }}
        >
          Team Group's.
        </Typography>
        <Typography
          sx={{
            fontSize: "47px",
            paddingBottom: "20px",
            color: "rgba(220, 218, 228, 0.87)",
            width: "32%",
            height: "272px",
            backgroundColor: "#28243D",
            textAlign: "center",
            paddingTop: "90px",
            borderRadius: "24px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgb(198, 160, 247)",
            },
          }}
        >
          Tag Feature.
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default DetailSection;
