import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const TagContainer = (props: any) => {
  return (
    <Grid
      sx={{
        width: "100%",
        display: "grid",
        gap: "20px",
        textAlign: "left",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        paddingTop: "25px",
      }}
    >
      {props?.tags?.map((tag: any) => {
        return (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 1,
              border: "1px solid #9155FD",
            }}
          >
            <Typography sx={{ width: "100px" }}>#{tag._id}</Typography>
            <Typography sx={{ width: "100px" }}>{tag.description}</Typography>
          </Card>
        );
      })}
    </Grid>
  );
};
export default TagContainer;
