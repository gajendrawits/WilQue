import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import { Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ColorPicker = () => {
  const [toolTipOpen, setToolTipOpen] = useState<boolean>(false);

  const FeelingRed = [
    { id: 1, color: "#FF6263" },
    { id: 2, color: "#ad1a0c" },
    { id: 3, color: "#d4420c" },
    { id: 4, color: "#f81702" },
    { id: 5, color: "#e90a0a" },
    { id: 6, color: "#DE4839" },
    { id: 7, color: "#ef3929" },
    { id: 8, color: "#e9877f" },
    { id: 9, color: "#f81702" },
    { id: 10, color: "#ec4141" },
    { id: 11, color: "#871106" },
    { id: 12, color: "#fa1601" },
  ];
  const FeelingBlue = [
    { id: 1, color: "#0465f6ef" },
    { id: 2, color: "#2c37d0" },
    { id: 3, color: "#0526f7" },
    { id: 4, color: "#477bf5" },
    { id: 5, color: "#2f37c5" },
    { id: 6, color: "#5b8bf3" },
    { id: 7, color: "#1803f7" },
    { id: 8, color: "#0c3491" },
    { id: 9, color: "#04213e" },
    { id: 10, color: "#091969b9" },
    { id: 11, color: "#3f8ee8" },
    { id: 12, color: "#8abaf5" },
  ];
  const FeelingGreen = [
    { id: 1, color: "#0c712a" },
    { id: 2, color: "#15c148" },
    { id: 3, color: "#052e07" },
    { id: 4, color: "#0f8434" },
    { id: 5, color: "#027517" },
    { id: 6, color: "#aaec93" },
    { id: 7, color: "#137411" },
    { id: 8, color: "#14b206" },
    { id: 9, color: "#041a02" },
    { id: 10, color: "#0a8860" },
    { id: 11, color: "#09f175" },
    { id: 12, color: "#08672e" },
  ];
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
    <Grid>
      <Grid item xs={12}>
        <Typography variant="h5">
          <Link>Color Picker</Link>
        </Typography>
        <Typography variant="body2">
          One of the most important factors you must consider is the usage of
          colors to ensure that the picture or design is eye catching. Your
          choice of color combinations may make the difference between a
          perfectly content and one that is merely good. Even after viewing
          several videos and reading a large number of articles, selecting the
          perfect color combination might be difficult. As a result, you may
          choose colors from Color
        </Typography>
      </Grid>
      <Typography
        sx={{
          width: "100%",
        }}
      >
        {toolTipOpen ? (
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
          >
            <ContentCopyIcon
              sx={{
                position: "relative",
                cursor: "pointer",
                left: "95%",
                top: "10px",
                color: "black",
              }}
            />
          </Tooltip>
        ) : null}
        <Typography sx={{ color: "red", fontSize: 32, padding: 4 }}>
          Feeling Red
        </Typography>
        <Card
          sx={{
            width: "100%",
            display: "grid",
            gap: "20px",
            textAlign: "center",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            paddingTop: "25px",
            paddingBottom: "25px",
            pl: "25px",
            pr: "25px",
          }}
        >
          {FeelingRed.map((red) => {
            return (
              <Card sx={{ pb: 2 }}>
                <Typography
                  sx={{
                    width: "100%",
                    paddingTop: "175px",
                    paddingBottom: "125px",
                    mb: "20px",
                    background: red.color,

                    borderRadius: "8px",
                  }}
                ></Typography>
                <Typography
                  sx={{ cursor: "pointer" }}
                  onClick={() => updateClipboard(red.color)}
                >
                  {red.color}
                </Typography>
              </Card>
            );
          })}
        </Card>
      </Typography>
      <Typography
        sx={{
          width: "100%",
        }}
      >
        <Typography sx={{ color: "blue", fontSize: 32, padding: 4 }}>
          Feeling Blue
        </Typography>
        <Card
          sx={{
            width: "100%",
            display: "grid",
            gap: "20px",
            textAlign: "center",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            paddingTop: "25px",
            paddingBottom: "25px",
            pl: "25px",
            pr: "25px",
          }}
        >
          {FeelingBlue.map((red) => {
            return (
              <Card sx={{ pb: 2 }}>
                <Typography
                  sx={{
                    width: "100%",
                    paddingTop: "175px",
                    paddingBottom: "125px",
                    mb: "20px",
                    background: red.color,
                    borderRadius: "8px",
                  }}
                ></Typography>
                <Typography
                  sx={{ cursor: "pointer" }}
                  onClick={() => updateClipboard(red.color)}
                >
                  {red.color}
                </Typography>
              </Card>
            );
          })}
        </Card>
      </Typography>
      <Typography
        sx={{
          width: "100%",
        }}
      >
        <Typography sx={{ color: "green", fontSize: 32, padding: 4 }}>
          Feeling Green
        </Typography>
        <Card
          sx={{
            width: "100%",
            display: "grid",
            gap: "20px",
            textAlign: "center",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            paddingTop: "25px",
            paddingBottom: "25px",
            pl: "25px",
            pr: "25px",
          }}
        >
          {FeelingGreen.map((red) => {
            return (
              <Card sx={{ pb: 2 }}>
                <Typography
                  sx={{
                    width: "100%",
                    paddingTop: "175px",
                    paddingBottom: "125px",
                    mb: "20px",
                    background: red.color,
                    borderRadius: "8px",
                  }}
                ></Typography>
                <Typography
                  sx={{ cursor: "pointer" }}
                  onClick={() => updateClipboard(red.color)}
                >
                  {red.color}
                </Typography>
              </Card>
            );
          })}
        </Card>
      </Typography>
    </Grid>
  );
};
export default ColorPicker;
