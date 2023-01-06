import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { tagProps } from "src/sharedtypes/tagstypes";

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
      {props?.tags?.map((tag: tagProps) => {
        return (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 2,
              border: "1px solid #9155FD",
            }}
          >
            <Typography sx={{ widh: "200px" }}>#{tag._id}</Typography>
          </Card>
        );
      })}
    </Grid>
  );
};
export default TagContainer;
