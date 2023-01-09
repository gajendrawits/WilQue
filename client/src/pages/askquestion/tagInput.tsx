import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import { QuestionContext } from "src/@core/context/QuestionContext";
import { InputWrapper, Input } from "src/styles/askquestionstyle/tagInputStyle";

interface tagInputProps {
  label: string;
  heading?: string;
}

const tagInput = (props: tagInputProps) => {
  const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);
  const [inputError, setInputError] = useState(false);

  const handleInput = (value: string) => {
    const arr = value.toLowerCase().split(",");
    const obj = { tags: arr };
    const atLeastOneLetterAndSpace = (str: string) => {
      return /^[A-Za-z, ]+$/.test(str);
    };
    const checkString = atLeastOneLetterAndSpace(value);
    if (checkString) {
      const newobj = { ...getQuestionValue, ...obj };
      setQuestionValue(newobj);
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  return (
    <InputWrapper>
      <Typography variant="h6">{props.label}</Typography>
      {props.heading}
      <Input type="text" onChange={(e) => handleInput(e.target.value)} />
      {inputError && (
        <p style={{ color: "red" }}>
          Special Character's and Number are not Allowed.
        </p>
      )}
    </InputWrapper>
  );
};

export default tagInput;
