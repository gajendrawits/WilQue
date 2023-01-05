// ** MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { IOSSwitch } from "src/component/iosswitch";
import moment from "moment";

import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
// ** Demo Components Imports

const MUITable = () => {
  const [time, setTime] = useState(new Date());
  const [localDate, setLocaldate] = useState({});
  const [isoESZO, setIsoESZO] = useState("");
  const [isoDatabase, setIsoDatabase] = useState("");
  const [isoTextual, setIsoTextual] = useState("");
  const [httpTime, setHttpTime] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [switchChecked, setSwitchChecked] = useState(false);
  const top100Films = [
    { label: "JS locate Date string", value: localDate },
    { label: "ISO 8601", value: isoESZO },
    { label: "ISO 9075", value: isoDatabase },
    { label: "RFC 3339", value: isoTextual },
    { label: "RFC 7231", value: httpTime },
    { label: "Timestamp", value: timeStamp },
  ];
  const dateHandler = (e: boolean, time: Date) => {
    // console.log("switchchecked", switchChecked);
    // console.log('first', first)
    if (e) {
      // useEffect(() => {
      // console.log("e,time", e, time);
      setLocaldate(time);
      setIsoESZO(moment(time).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(time).format("yyyy-MM-dd HH:mm:ss.SSS"));
      setIsoTextual(moment(time).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(time).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(time).format("YYYYMMDDhhmmss"));
      // }, [date]);

      // console.log(moment(date).format("YYYY-MM-DDTHH:mm:ssZ"));
    } else {
      setSwitchChecked(true);
      setLocaldate("");
      setIsoESZO("");
      setIsoDatabase("");
      setIsoTextual("");
      setHttpTime("");
      setTimeStamp("");
    }
  };
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
      // dateHandler(switchChecked, time);
    }, 1000);
  }, []);

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
            mt: "82px",
            borderRadius: 1,
            padding: 10,
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
              control={<IOSSwitch />}
              label=""
              onChange={(e: any) => {
                console.log("e.target.checked", e.target.checked);
                dateHandler(e.target.checked, new Date());
                setSwitchChecked(e.target.checked);
              }}
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
              disabled={switchChecked ? true : false}
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
              disabled={switchChecked ? true : false}
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
            {top100Films.map((item, index) => {
              return (
                <Box sx={{ mx: "4%", display: "flex", gap: 1 }} key={index}>
                  <TextField
                    id="outlined-read-only-input"
                    defaultValue={item.label}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ width: "20%" }}
                  />
                  <TextField
                    id="outlined-read-only-input"
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ width: "80%" }}
                    value={item.value}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MUITable;
