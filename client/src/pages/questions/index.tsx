import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

const Questions = () => {
  return (
    <Grid
      sx={{
        width: "100%",
      }}
    >
      <Grid sx={{ pb: 6 }}>
        <Typography variant="h4" sx={{ pb: 6 }}>
          <Link>Questions</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Questions;
