import React from "react";
import Typography from "@mui/material/Typography";

interface tagInputProps {
  label: string;
  heading?: string;
}

const tagInput = (props: tagInputProps) => {
  return (
    <Typography
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        border: "1px solid grey",
      }}
    >
      <Typography variant="h6">{props.label}</Typography>
      {props.heading}
      <input
        style={{
          padding: 2,
          height: "2rem",
          borderRadius: "8px",
          border: "none",
        }}
        type="text"
      />
    </Typography>
  );
};

export default tagInput;
