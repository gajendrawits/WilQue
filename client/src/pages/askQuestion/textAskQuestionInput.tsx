import { Typography } from "@mui/material";
import React from "react";
import Editor from "src/pages/editor";

const TextAskQuestionInput = () => {
  return (
    <Typography sx={{ p: 3, border: "1px solid grey" }}>
      <Editor />
    </Typography>
  );
};
export default TextAskQuestionInput;
