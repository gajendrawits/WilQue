import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import router from "next/router";
import { tagProps } from "src/sharedtypes/tagstypes";

const TagContainer = (props: any) => {
  const handleClicked = (tag: string) => {
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
        {props?.tags?.map((tag: tagProps) => {
          return (
            <Card
              variant="outlined"
              className="effectHover"
              sx={{
                display: "flex",
                gap: 2,
                p: 1,
                justifyContent: "center",
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
