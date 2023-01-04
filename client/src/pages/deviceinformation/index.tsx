import { Card, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          gap: "40px",
          backgroundColor: "transparent",
        }}
      >
        <Card
          sx={{
            width: "60%",
            height: "600px",
            display: "grid",
            backgroundColor: "#FFF",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            gap: "20px",
            padding: "10px 10px 10px 10px",
          }}
        >
          <Card
            className="card"
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            <Typography 
            sx={{
              
            }}
            >

            </Typography>
            Screen size
          </Card>
          <Card
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            Orientation
          </Card>
          <Card
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            gdjdfds
          </Card>
          <Card
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            gdjdfds
          </Card>
          <Card
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            gdjdfds
          </Card>
          <Card
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            gdjdfds
          </Card>
        </Card>
        <Card
          sx={{
            width: "40%",
            height: "600px",
            display: "grid",
            backgroundColor: "#FFF",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            gap: "20px",
            padding: "10px 10px 10px 10px",
          }}
        >
          <Card
            className="card"
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            dghksghkdjhgkjdghkjshgkjhdsjkghjdshkjhkjdhg
          </Card>
          <Card
            className="card"
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            gdjdfdsdsdskjdhskjhdsjkhgkjdhskgjhkdh
          </Card>
          <Card
            className="card"
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            gdjdfdsgndgdsg,dsjhdgkjshkjdglkhgdgh
          </Card>
          <Card
            className="card"
            sx={{
              display: "grid",
              backgroundColor: "#2c2b2b34",
            }}
          >
            gdjdfds
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default index;
