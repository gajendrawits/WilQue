import React from "react";
import { Button } from "antd";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import Signin from "src/assets/svg/signin-landing";
import router from "next/router";

const SignupLanding = () => (
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
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(45rem, 1fr))",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "100%",
          margin: "90px 0 80px 0",
        }}
      >
        <div className="right">
          <Signin />
        </div>
      </Grid>
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
            height: "350px",
          }}
        >
          <Typography
            sx={{
              width: "79%",
              height: "350px",
              textAlign: "center",
              borderRadius: "24px",
              paddingTop: "35px",
            }}
          >
            <Typography
              sx={{
                fontSize: "80px",
                paddingBottom: "20px",
                fontWeight: "800",
                color: "rgb(0, 0, 0)",
              }}
            >
              Get in touch
            </Typography>
            <Typography
              sx={{
                fontSize: "27px",
                paddingBottom: "20px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Lets Start & Bug Free Life.
            </Typography>
            <Button
              onClick={() => {
                router.push({
                  pathname: "/pages/login",
                });
              }}
              type="primary"
              style={{
                height: "90px",
                width: "230px",
                fontSize: "50px",
                borderRadius: "24px",
                backgroundColor: "#aaa5a561",
                color: "rgba(0, 0, 0, 0.87)",
                boxShadow: "0 8px 15px #171718ec",
              }}
            >
              Sign In
            </Button>
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default SignupLanding;
