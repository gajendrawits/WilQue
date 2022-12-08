import React from "react";
import Typography from "@mui/material/Typography";

interface titleInputProps {
  label: string;
  type: string;
  heading?: string;
}

const titleInput = (props: titleInputProps) => {
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
        type={props.type}
      />
    </Typography>
  );
};

export default titleInput;
