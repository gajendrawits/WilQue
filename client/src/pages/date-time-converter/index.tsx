// ** MUI Imports
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
// ** Demo Components Imports

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            fontSize: "32px",
            mt: "20px",
          }}
        >
          Coming Soon...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MUITable;
