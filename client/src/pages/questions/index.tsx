import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Questions = () => {
  return (
    <Grid
      sx={{
        width: "100%",
      }}
    >
      <Grid sx={{ pb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            pb: 6,
          }}
        >
          <Link>Questions</Link>
          <Button variant="contained">Ask Questions</Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Questions;
