import { Typography } from "@mui/material";
import React from "react";
import Editor from "src/pages/editor";
import { InputWrapper } from "src/styles/askquestionstyle/textAskQuestionInputStyle";

const TextAskQuestionInput = () => {
  const handleAnswerValue = (val: any) => {
    const obj = { val };
  };

  return (
    <InputWrapper>
      <Typography variant="h6">
        What are the details of your problem?
      </Typography>
      <Editor handleAnswerValue={handleAnswerValue} />
      <strong>Please enter more than 10 characters</strong>
    </InputWrapper>
  );
};
export default TextAskQuestionInput;
