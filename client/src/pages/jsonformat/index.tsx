import { alpha, Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const JsonFormat = () => {
  const [rawData, setRawData] = useState<any>();
  const [isError, setIsError] = useState<boolean>(false);

  const handleRawData = (e: any) => {
    try {
      const formated = JSON.stringify(JSON.parse(e.target.value), null, 4);
      setRawData(formated);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  };

  function updateClipboard(newClip: any) {
    navigator.clipboard.writeText(newClip).then(
      () => {},
      () => {}
    );
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Typography sx={{ textAlign: "center", fontWeight: "800" }}>
            Your raw json
          </Typography>
          <TextareaAutosize
            minRows={30}
            maxRows={50}
            style={{
              width: "35vw",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            onChange={handleRawData}
          />
          {isError && (
            <p style={{ color: "red", fontWeight: 600 }}>Not A Valid JSON</p>
          )}
        </Grid>
        <Grid xs={6}>
          <Typography sx={{ textAlign: "center", fontWeight: "800" }}>
            Prettify version of your json
          </Typography>
          <TextareaAutosize
            minRows={30}
            style={{
              width: "35vw",
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
            }}
            value={rawData}
            readOnly={true}
          />

          <ContentCopyIcon
            sx={{
              position: "fixed",
              cursor: "pointer",
              right: "180px",
              top: "120px",
              color: "black",
            }}
            onClick={() => updateClipboard(rawData)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JsonFormat;
