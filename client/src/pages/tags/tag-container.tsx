import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { QuestionContext } from "src/@core/context/QuestionContext";
import router from "next/router";

const TagContainer = (props: any) => {
  const { setQuestionValue } = useContext(QuestionContext);

  const handleClicked = (tag: any) => {
    const tagvalue = { tagvalue: tag };
    setQuestionValue(tagvalue);
    router.push({
      pathname: "/questionbytag",
      query: tag,
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
                flexDirection: "column",
                gap: 2,
                p: 1,
                boxShadow: "px 2px grey",
              }}
              onClick={() => handleClicked(tag._id)}
            >
              <Typography sx={{ width: "100px" }}>#{tag._id}</Typography>
              <Typography sx={{ width: "100px" }}>{tag.description}</Typography>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};
export default TagContainer;
