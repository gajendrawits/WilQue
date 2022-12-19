import React, { useState } from "react";
import { QuestionContext } from "src/@core/context/QuestionContext";
import AskQuestion from "src/pages/askQuestion/askQuestion";

const askQuestion = () => {
  return (
    <>
      <AskQuestion questionType="public" />
    </>
  );
};
export default askQuestion;
