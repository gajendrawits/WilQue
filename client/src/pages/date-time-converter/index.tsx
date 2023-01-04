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
// console.log("moment.format()", moment.format("YYYY-MM-DDTHH:mm:ssZ"));
// const a =
//   moment("2023-01-04T12:49:33+05:30", "YYYY-MM-DDTHH:mm:ssZ").format(
//     "YYYY-MM-DDTHH:mm:ssZ"
//   ) === "2023-01-04T12:49:33+05:30";
// console.log("a", a);

const MUITable = () => {
  const [time, setTime] = useState(new Date());
  const [localDate, setLocaldate] = useState<any>();
  const [isoESZO, setIsoESZO] = useState("");
  const [isoDatabase, setIsoDatabase] = useState("");
  const [isoTextual, setIsoTextual] = useState("");
  const [httpTime, setHttpTime] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [dateString, setDateString] = useState("");
  const [isError, setIsError] = useState(false);
  const [textValue, setTextValue] = useState("");
  const top100Films: any = [
    { label: "JS locate Date string", value: localDate },
    { label: "ISO 8601", value: isoESZO },
    { label: "ISO 9075", value: isoDatabase },
    { label: "RFC 3339", value: isoTextual },
    { label: "RFC 7231", value: httpTime },
    { label: "Timestamp", value: timeStamp },
  ];

  const dateHandler = () => {
    if (switchChecked) {
      setLocaldate(moment(time).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoESZO(moment(time).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(time).format("yyyy-MM-DD HH:mm:ss.SS"));
      setIsoTextual(moment(time).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(time).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(time).format("YYYYMMDDhhmmss"));
    } else {
      setLocaldate("");
      setIsoESZO("");
      setIsoDatabase("");
      setIsoTextual("");
      setHttpTime("");
      setTimeStamp("");
    }
  };
  const FormatHandler = (date: any) => {
    console.log("date", date);
    setIsError(true);
    if (
      moment(date, "YYYY-MM-DDTHH:mm:ssZ").format("YYYY-MM-DDTHH:mm:ssZ") ===
        date &&
      dateString === "JS locate Date string"
    ) {
      setIsError(false);
      setLocaldate(moment(time).format("YYYY-MM-DDTHH:mm:ssZ"));  
      setIsoESZO(moment(date).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(date).format("yyyy-MM-DD HH:mm:ss.SS"));
      setIsoTextual(moment(date).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(date).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(date).format("YYYYMMDDhhmmss"));
    } else if (
      moment(date, "YYYY-MM-DDTHH:mm:ssZ").format("YYYY-MM-DDTHH:mm:ssZ") ===
        date &&
      dateString === "ISO 8601"
    ) {
      setIsError(false);
      setIsoESZO(moment(date).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(date).format("yyyy-MM-DD HH:mm:ss.SS"));
      setIsoTextual(moment(date).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(date).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(date).format("YYYYMMDDhhmmss"));
    } else if (
      moment(date, "yyyy-MM-DD HH:mm:ss.SS").format(
        "yyyy-MM-DD HH:mm:ss.SS"
      ) === date &&
      dateString === "ISO 9075"
    ) {
      setIsError(false);
      setIsoESZO(moment(date).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(date).format("yyyy-MM-DD HH:mm:ss.SS"));
      setIsoTextual(moment(date).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(date).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(date).format("YYYYMMDDhhmmss"));
    } else if (
      moment(date, "YYYY-MM-DDTHH:mm:ss").format("yyyy-MM-dd HH:mm:ss.SSS") ===
      date
    ) {
      setIsError(false);
      setIsoESZO(moment(date).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(date).format("yyyy-MM-DD HH:mm:ss.SS"));
      setIsoTextual(moment(date).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(date).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(date).format("YYYYMMDDhhmmss"));
    } else if (
      moment(date, "YYYY-MM-DDTHH:mm:ss").format("YYYY-MM-DDTHH:mm:ss") ===
        date &&
      dateString === "RFC 3339"
    ) {
      setIsError(false);
      setIsoESZO(moment(date).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(date).format("yyyy-MM-DD HH:mm:ss.SS"));
      setIsoTextual(moment(date).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(date).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(date).format("YYYYMMDDhhmmss"));
    } else if (
      moment(date, "ddd, DD MM YYYY HH:mm:ss").format(
        "ddd, DD MM YYYY HH:mm:ss"
      ) === date &&
      dateString === "RFC 7231"
    ) {
      setIsError(false);
      setIsoESZO(moment(date).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(date).format("yyyy-MM-DD HH:mm:ss.SS"));
      setIsoTextual(moment(date).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(date).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(date).format("YYYYMMDDhhmmss"));
    } else if (
      moment(date, "YYYYMMDDhhmmss").format("YYYYMMDDhhmmss") === date &&
      dateString === "Timestamp"
    ) {
      setIsError(false);
      setIsoESZO(moment(date).format("YYYY-MM-DDTHH:mm:ssZ"));
      setIsoDatabase(moment(date).format("yyyy-MM-DD HH:mm:ss.SS"));
      setIsoTextual(moment(date).format("YYYY-MM-DDTHH:mm:ss"));
      setHttpTime(moment(date).format("ddd, DD MM YYYY HH:mm:ss"));
      setTimeStamp(moment(date).format("YYYYMMDDhhmmss"));
    } else {
      // setIsisError(true);
      // console.log("please enter correct format");
    }
  };
  useEffect(() => {
    if (switchChecked) {
      const newtime = setInterval(() => {
        setTime(new Date());
        dateHandler();
      }, 1000);
      return () => {
        clearInterval(newtime);
      };
    }
  }, [time, switchChecked, isoESZO]);
  // console.log("datetringssssss", dateString);
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
              Use current date-time?
            </Typography>
            <FormControlLabel
              control={<IOSSwitch />}
              label={""}
              onChange={(e: any) => {
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
              isOptionEqualToValue={(option: any, value: any) =>
                option.label === value.label
              }
              onChange={(e: any) => {
                setTextValue("");
                setIsError(false);
                setDateString(e.target.outerText);
              }}
              disabled={switchChecked ? true : false}
              id="combo-box-demo"
              options={top100Films}
              sx={{
                width: "20%",
                height: 50,
              }}
              defaultValue={top100Films[0].label}
              renderInput={(params) => (
                <TextField {...params} label="Date String" />
              )}
            />
            <TextField
              error={isError}
              disabled={switchChecked ? true : false}
              id="outlined-basic"
              label={isError ? "Invalid Format" : dateString}
              variant="outlined"
              value={textValue}
              sx={{ width: "100%" }}
              onChange={(e: any) => {
                setTextValue(e.target.value);
                FormatHandler(e.target.value);
              }}
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
            {top100Films.map((item: any, index: any) => {
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
