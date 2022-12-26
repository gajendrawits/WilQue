import React from "react";

import { Card, Grid, Typography } from "@mui/material";

const DetailSection = () => {
  const features = [
    {
      id: 1,
      name: "Random Group for all the users.",
    },
    {
      id: 2,
      name: "Senior Developer Group.",
    },
    {
      id: 3,
      name: "Star Points.",
    },
    {
      id: 4,
      name: "Integration with Google Chat.",
    },
    {
      id: 5,
      name: "Team Group's.",
    },
    {
      id: 6,
      name: "Tag Feature.",
    },
  ];
  return (
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
          color: "rgb(0, 0, 0)",
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(30rem, 1fr))",
            alignItems: "center",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {features.map((feature: any) => {
            return (
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "35px",
                  // paddingBottom: "20px",
                  color: "rgba(26, 25, 26, 0.87)",
                  height: "170px",
                  backgroundColor: "rgba(220, 218, 228, 0.87)",
                  textAlign: "center",
                  // paddingTop: "50px",
                  borderRadius: "24px",
                  cursor: "pointer",
                  boxShadow: "0 8px 15px #72a1ee96",
                  "&:hover": {
                    backgroundColor: "#555557",
                  },
                }}
              >
                {feature.name}
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailSection;
