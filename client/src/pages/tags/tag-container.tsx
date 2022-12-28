import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { QuestionContext } from "src/@core/context/QuestionContext";
import router from "next/router";

const TagContainer = (props: any) => {
  const handleClicked = (tag: any) => {
    router.push({
      pathname: "/questionbytag",
      query: { searchTag: tag },
    });
  };

  return (
    <div>
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
              variant="outlined"
              sx={{
                display: "flex",
                gap: 2,
                p: 1,
                justifyContent: "center",
                ":hover": {
                  scale: "0.98",
                  border: "1px solid lightgrey",
                },
              }}
              onClick={() => handleClicked(tag._id)}
            >
              <Typography>#{tag?._id}</Typography>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};
export default TagContainer;
