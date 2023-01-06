import React from "react";
import { InputWrapper } from "src/styles/askquestionstyle/textAskQuestionInputStyle";
import { Typography } from "@mui/material";
import Editor from "src/pages/editor";

interface TextProps {
  text: string;
  value: string;
}

const TextAskQuestionInput = () => {
  const handleAnswerValue = (val: TextProps) => {
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
