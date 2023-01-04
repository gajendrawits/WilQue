import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { QuestionContext } from "src/@core/context/QuestionContext";
import { InputWrapper, Input } from "src/styles/askquestionstyle/tagInputStyle";

interface tagInputProps {
  label: string;
  heading?: string;
}

const tagInput = (props: tagInputProps) => {
  const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);

  const handleInput = (value: string) => {
    const arr = value.toLowerCase().split(",");
    const obj = { tags: arr };
    const newobj = { ...getQuestionValue, ...obj };
    setQuestionValue(newobj);
  };

  return (
    <InputWrapper>
      <Typography variant="h6">{props.label}</Typography>
      {props.heading}
      <Input type="text" onChange={(e: any) => handleInput(e.target.value)} />
    </InputWrapper>
  );
};

export default tagInput;
