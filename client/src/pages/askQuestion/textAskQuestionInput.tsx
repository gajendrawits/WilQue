import { Typography } from "@mui/material";
import React from "react";
import Editor from "src/pages/editor";

const TextAskQuestionInput = () => {
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
      <Typography variant="h6">
        What are the details of your problem?
      </Typography>
      <Editor />
      <strong>Please enter more than 10 characters</strong>
    </Typography>
  );
};
export default TextAskQuestionInput;
