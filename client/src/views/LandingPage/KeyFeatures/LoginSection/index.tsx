import React from "react";
import { Button } from "antd";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import Work from "src/assets/svg/howwork";

const SecondFeat = () => (
  <Grid
    sx={{
      padding: "80px 0",
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
      {/* <Image src={Dashboard} /> */}
    </Grid>
    {/* <Typography
      sx={{
        display: "flex",
        fontSize: "80px",
        padding: "20px 20px",
        fontWeight: "800",
      }}
    >
      Get in touch
    </Typography> */}
    <Grid
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(35rem, 1fr))",
        alignItems: "center",
        // backgroundColor: "#28243D",
      }}
    >
      <Grid
        sx={
          {
            // width: "50%",
          }
        }
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px 20px 80px 20px",
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
              // backgroundColor: "#28243D",
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
              How we work?
            </Typography>
            <Typography
              sx={{
                fontSize: "27px",
                paddingBottom: "20px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Unlocking knowledge at the speed of thought.
            </Typography>
            <Typography
              sx={{
                fontSize: "27px",
                paddingBottom: "20px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Full featured Q&A platform.
            </Typography>
            <Typography
              sx={{
                fontSize: "27px",
                paddingBottom: "20px",
                color: "rgb(0, 0, 0)",
              }}
            >
              24*7 support.
            </Typography>
            <Typography
              sx={{
                fontSize: "27px",
                paddingBottom: "20px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Email digest.
            </Typography>

            {/* <Button
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
            </Button> */}
          </Typography>
        </Typography>
      </Grid>
      <Grid
        sx={{
          width: "100vw",
          maxWidth: "100%",
          marginTop: "20px",
        }}
      >
        {/* <Carousel responsive={responsive}>
            <Image src={Slider1} />
            <Image src={Slider2} />
            <Image src={Slider3} />
          </Carousel> */}
        <div className="sec" style={{ width: "50vw" }}>
          <Work />
        </div>
      </Grid>
    </Grid>
  </Grid>
);

export default SecondFeat;
