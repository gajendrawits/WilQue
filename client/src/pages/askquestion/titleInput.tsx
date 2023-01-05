import React, { useContext } from "react";
import Typography from "@mui/material/Typography";

import { QuestionContext } from "src/@core/context/QuestionContext";

interface titleInputProps {
  label: string;
  type: string;
  heading?: string;
}

const titleInput = (props: titleInputProps) => {
  const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);

  const handleInput = (value: any) => {
    const obj = { title: value };
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
          padding: 6,
          height: "2rem",
          borderRadius: "8px",
          border: "none",
        }}
        type={props.type}
        onChange={(e: any) => handleInput(e.target.value)}
      />
    </Typography>
  );
};

export default titleInput;
