import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import { QuestionContext } from "src/@core/context/QuestionContext";

interface tagInputProps {
  label: string;
  heading?: string;
}

const tagInput = (props: tagInputProps) => {
  const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);

  const handleInput = (value: string) => {
    const arr = value.split(",");
    const obj = { tags: arr };
    const newobj = { ...getQuestionValue, ...obj };
    setQuestionValue(newobj);
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
          padding: 2,
          height: "2rem",
          borderRadius: "8px",
          border: "none",
        }}
        type="text"
        onChange={(e: any) => handleInput(e.target.value)}
      />
    </Typography>
  );
};

export default tagInput;
