// ** MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Typography from "@mui/material/Typography";
// ** Demo Components Imports

const MUITable = () => {
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#9155FD" : "#9155FD",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#9155FD",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  const top100Films = [
    { label: "JS locate Date string", year: 1994 },
    { label: "ISO 8601", year: 1972 },
    { label: "ISO 9075", year: 1974 },
    { label: "RFC 3339", year: 2008 },
    { label: "RFC 7231", year: 1957 },
    { label: "Timestamp", year: 1993 },
    { label: "unix timestamp", year: 1994 },
    { label: "UTC format", year: 1994 },
    { label: "Mongo ObjectID", year: 1994 },
  ];
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography
          sx={{
            color: "#9155FD",
            fontWeight: 800,
            fontSize: "32px",
            mt: "20px",
          }}
        >
          Date-time converter
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          Convert date and time into the various different formats
        </Typography>
        <Divider variant="middle" />
        <Box
          sx={{
            minWidth: 275,
            boxShadow: 5,
            color: "common.white",
            mt: "100px",
            height: "60vh",
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Typography sx={{ marginTop: "3px" }}>
              {" "}
              Use current date-time?
            </Typography>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 0.9 }} />}
              label=""
            />
          </Box>

          <Box
            sx={{
              mx: 15,
              mt: "10px",
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{
                width: "20%",
                height: 50,
              }}
              renderInput={(params) => (
                <TextField {...params} label="Date String" />
              )}
            />
            <TextField
              id="outlined-basic"
              label="Date String"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ mx: "5%", width: "90%", mt: "30px" }}>
            <Divider variant="middle" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              mt: "30px",
            }}
          >
            <Box sx={{ mx: "4%", display: "flex", gap: 1 }}>
              <TextField
                id="outlined-read-only-input"
                defaultValue="JS locate Date string"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "20%" }}
              />
              <TextField
                id="outlined-read-only-input"
                defaultValue="456"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box sx={{ mx: "4%", display: "flex", gap: 1 }}>
              <TextField
                id="outlined-read-only-input"
                defaultValue="ISO 8601"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "20%" }}
              />
              <TextField
                id="outlined-read-only-input"
                defaultValue="456"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box sx={{ mx: "4%", display: "flex", gap: 1 }}>
              <TextField
                id="outlined-read-only-input"
                defaultValue="ISO 9075"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "20%" }}
              />
              <TextField
                id="outlined-read-only-input"
                defaultValue="456"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box sx={{ mx: "4%", display: "flex", gap: 1 }}>
              <TextField
                id="outlined-read-only-input"
                defaultValue="RFC 3339"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "20%" }}
              />
              <TextField
                id="outlined-read-only-input"
                defaultValue="456"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box sx={{ mx: "4%", display: "flex", gap: 1 }}>
              <TextField
                id="outlined-read-only-input"
                defaultValue="Timestamp"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "20%" }}
              />
              <TextField
                id="outlined-read-only-input"
                defaultValue="456"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box sx={{ mx: "4%", display: "flex", gap: 1 }}>
              <TextField
                id="outlined-read-only-input"
                defaultValue="unix timestamp"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "20%" }}
              />
              <TextField
                id="outlined-read-only-input"
                defaultValue="456"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "80%" }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MUITable;
