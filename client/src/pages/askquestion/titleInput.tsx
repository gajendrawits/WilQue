import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";

import { QuestionContext } from "src/@core/context/QuestionContext";

interface titleInputProps {
  label: string;
  type: string;
  heading?: string;
}

const titleInput = (props: titleInputProps) => {
  const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);
  const [inputError, setInputError] = useState(false);

  const handleInput = (value: string) => {
    const obj = { title: value };
    const atLeastOneLetterAndSpace = (str: string) => {
      return /^\S/.test(str);
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
          padding: 6,
          height: "2rem",
          borderRadius: "8px",
          border: "none",
        }}
        type={props.type}
        onChange={(e) => handleInput(e.target.value)}
      />
      {inputError && (
        <p style={{ color: "red" }}>First Character Space Not Allowed</p>
      )}
    </Typography>
  );
};

export default titleInput;
