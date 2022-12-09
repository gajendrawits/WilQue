import { createContext } from "react";

interface QuestionProp {
  getQuestionValue: any;
  setQuestionValue: React.Dispatch<React.SetStateAction<{}>>;
}

const defaultState = {
  getQuestionValue: {},
  setQuestionValue: () => null,
};

export const QuestionContext = createContext<QuestionProp>(defaultState);
