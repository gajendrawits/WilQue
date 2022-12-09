import React, { useState } from "react";
import { QuestionContext } from "src/@core/context/QuestionContext";
import AskQuestion from "src/pages/askQuestion/askQuestion";

const askQuestion = () => {
  const [getQuestionValue, setQuestionValue] = useState({});

  return (
    <QuestionContext.Provider value={{ getQuestionValue, setQuestionValue }}>
      <AskQuestion questionType="public" />
    </QuestionContext.Provider>
  );
};
export default askQuestion;
