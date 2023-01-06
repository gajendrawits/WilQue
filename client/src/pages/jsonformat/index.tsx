import { Box, Grid, Link, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const JsonFormat = () => {
  const [rawData, setRawData] = useState<string | undefined>();
  const [isError, setIsError] = useState<boolean>(false);
  const [toolTipOpen, setToolTipOpen] = useState<boolean>(false);

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
    setToolTipOpen(true);
    setTimeout(() => {
      setToolTipOpen(false);
    }, 1000);
    navigator.clipboard.writeText(newClip).then(
      () => {},
      () => {}
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        item
        xs={12}
        sx={{
          mb: "22px",
        }}
      >
        <Typography variant="h5">
          <Link>JSON Fromatter</Link>
        </Typography>
        <Typography variant="body2">
          Prettify your JSON string to a human friendly readable format.
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
        }}
      >
        <Grid xs={6}>
          <Typography sx={{ textAlign: "center", fontWeight: "800" }}>
            Your raw json
          </Typography>
          <TextareaAutosize
            minRows={30}
            maxRows={50}
            style={{
              width: "500px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "6px",
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
            maxRows={50}
            style={{
              minWidth: "500px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              position: "absolute",
            }}
            value={rawData}
            readOnly={true}
          />
          <Tooltip
            title="Copied !"
            placement="top"
            PopperProps={{
              disablePortal: true,
            }}
            open={toolTipOpen}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            onClose={updateClipboard}
          >
            <ContentCopyIcon
              sx={{
                position: "relative",
                cursor: "pointer",
                left: "455px",
                top: "10px",
                color: "black",
              }}
              onClick={() => updateClipboard(rawData)}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JsonFormat;
